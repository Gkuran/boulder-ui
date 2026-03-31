import {
  Children,
  cloneElement,
  createContext,
  forwardRef,
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
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuRootProps,
  DropdownMenuSeparatorProps,
  DropdownMenuTriggerProps,
} from "./DropdownMenu.types";
import styles from "./DropdownMenu.module.css";
import { cx } from "@/utils";

// ─── Context ──────────────────────────────────────────────────────────────────

interface DropdownMenuContextValue {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  triggerId: string;
  contentId: string;
}

const DropdownMenuContext = createContext<DropdownMenuContextValue | null>(null);

const useDropdownMenu = () => {
  const ctx = useContext(DropdownMenuContext);
  if (!ctx) {
    throw new Error(
      "DropdownMenu compound components must be used inside <DropdownMenu.Root>",
    );
  }
  return ctx;
};

// ─── Root ─────────────────────────────────────────────────────────────────────

export const DropdownMenuRoot = ({
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  children,
}: DropdownMenuRootProps) => {
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

  // Close on outside click
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
    <DropdownMenuContext.Provider
      value={{ isOpen, toggle, close, triggerId, contentId }}
    >
      <div ref={rootRef} className={styles.root}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
};
DropdownMenuRoot.displayName = "DropdownMenuRoot";

// ─── Trigger ────────────────────────────────────────────────────────────────
//
// Uses the "asChild" pattern: instead of wrapping children in a new interactive
// element (which would create nested interactive controls), we clone the single
// child element and inject the required ARIA attributes and event handlers
// directly onto it. This keeps a single focusable element in the DOM and
// satisfies the WCAG "nested-interactive" rule.

export const DropdownMenuTrigger = ({ children }: DropdownMenuTriggerProps) => {
  const { isOpen, toggle, triggerId, contentId } = useDropdownMenu();

  const child = Children.only(children) as ReactElement<
    React.HTMLAttributes<HTMLElement>
  >;

  if (!isValidElement(child)) {
    throw new Error(
      "<DropdownMenu.Trigger> requires a single valid React element as its child.",
    );
  }

  return cloneElement(child, {
    id: triggerId,
    "aria-expanded": isOpen,
    "aria-controls": contentId,
    "aria-haspopup": "menu",
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
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

// ─── Content ──────────────────────────────────────────────────────────────────

export const DropdownMenuContent = ({
  children,
  className,
  ...props
}: DropdownMenuContentProps) => {
  const { isOpen, triggerId, contentId } = useDropdownMenu();

  return (
    <div
      id={contentId}
      role="menu"
      aria-labelledby={triggerId}
      className={cx(styles.content, isOpen && styles.open, className)}
      {...props}
    >
      {children}
    </div>
  );
};
DropdownMenuContent.displayName = "DropdownMenuContent";

// ─── Item ─────────────────────────────────────────────────────────────────────

export const DropdownMenuItem = forwardRef<HTMLButtonElement, DropdownMenuItemProps>(
  ({ destructive = false, children, className, onClick, ...props }, ref) => {
    const { close } = useDropdownMenu();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      close();
    };

    return (
      <button
        ref={ref}
        role="menuitem"
        type="button"
        className={cx(styles.item, destructive && styles.destructive, className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  },
);
DropdownMenuItem.displayName = "DropdownMenuItem";

// ─── Separator ────────────────────────────────────────────────────────────────

export const DropdownMenuSeparator = forwardRef<HTMLHRElement, DropdownMenuSeparatorProps>(
  ({ className, ...props }, ref) => (
    <hr ref={ref} className={cx(styles.separator, className)} {...props} />
  ),
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

// ─── Namespace export ─────────────────────────────────────────────────────────

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Separator: DropdownMenuSeparator,
};
