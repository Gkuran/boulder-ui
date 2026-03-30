import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
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

export const PopoverTrigger = ({ children }: PopoverTriggerProps) => {
  const { isOpen, toggle, triggerId, contentId } = usePopover();

  return (
    <div
      id={triggerId}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-controls={contentId}
      aria-haspopup="dialog"
      className={styles.trigger}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      {children}
    </div>
  );
};
PopoverTrigger.displayName = "PopoverTrigger";

// ─── PopoverContent ───────────────────────────────────────────────────────────

export const PopoverContent = ({
  position = "bottom",
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
