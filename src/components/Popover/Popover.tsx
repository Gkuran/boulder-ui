import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import type { ReactElement } from "react";
import type {
  PopoverContentProps,
  PopoverRootProps,
  PopoverTriggerProps,
} from "./Popover.types";
import styles from "./Popover.module.css";
import { cx } from "@/utils";

// ─── Context ──────────────────────────────────────────────────────────────────

interface PopoverContextValue {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  triggerId: string;
  contentId: string;
}

const PopoverContext = createContext<PopoverContextValue | null>(null);

const usePopover = () => {
  const ctx = useContext(PopoverContext);
  if (!ctx) {
    throw new Error(
      "Popover compound components must be used inside <Popover.Root>",
    );
  }
  return ctx;
};

// ─── PopoverRoot ──────────────────────────────────────────────────────────────

export const PopoverRoot = ({
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  children,
}: PopoverRootProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerId = useId();
  const contentId = useId();

  const toggle = useCallback(() => {
    const next = !isOpen;
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  }, [isOpen, isControlled, onOpenChange]);

  const close = useCallback(() => {
    if (!isControlled) setInternalOpen(false);
    onOpenChange?.(false);
  }, [isControlled, onOpenChange]);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handleMouseDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [isOpen, close]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  return (
    <PopoverContext.Provider
      value={{ isOpen, toggle, close, triggerId, contentId }}
    >
      <div ref={rootRef} className={styles.root}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};
PopoverRoot.displayName = "PopoverRoot";

// ─── PopoverTrigger ───────────────────────────────────────────────────────────
//
// Uses the "asChild" pattern: instead of wrapping children in a new interactive
// element (which would create nested interactive controls), we clone the single
// child element and inject the required ARIA attributes and event handlers
// directly onto it. This keeps a single focusable element in the DOM and
// satisfies the WCAG "nested-interactive" rule.

export const PopoverTrigger = ({ children }: PopoverTriggerProps) => {
  const { isOpen, toggle, triggerId, contentId } = usePopover();

  const child = Children.only(children) as ReactElement<
    React.HTMLAttributes<HTMLElement>
  >;

  if (!isValidElement(child)) {
    throw new Error(
      "<Popover.Trigger> requires a single valid React element as its child.",
    );
  }

  return cloneElement(child, {
    id: triggerId,
    "aria-expanded": isOpen,
    "aria-controls": contentId,
    "aria-haspopup": "dialog",
    className: cx(
      styles.trigger,
      (child.props as React.HTMLAttributes<HTMLElement>).className,
    ),
    onClick: (e: React.MouseEvent<HTMLElement>) => {
      (child.props as React.HTMLAttributes<HTMLElement>).onClick?.(
        e as React.MouseEvent<HTMLElement>,
      );
      toggle();
    },
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
      (child.props as React.HTMLAttributes<HTMLElement>).onKeyDown?.(
        e as React.KeyboardEvent<HTMLElement>,
      );
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    },
  } as React.HTMLAttributes<HTMLElement>);
};
PopoverTrigger.displayName = "PopoverTrigger";

// ─── PopoverContent ───────────────────────────────────────────────────────────

export const PopoverContent = ({
  position = "bottom",
  variant = "default",
  children,
  className,
  ...props
}: PopoverContentProps) => {
  const { isOpen, triggerId, contentId } = usePopover();

  return (
    <div
      id={contentId}
      role="dialog"
      aria-labelledby={triggerId}
      className={cx(
        styles.content,
        styles[variant],
        styles[position],
        isOpen && styles.open,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
PopoverContent.displayName = "PopoverContent";

// ─── Namespace export ─────────────────────────────────────────────────────────

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
};
