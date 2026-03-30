import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
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

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        if (!isControlled) setInternalOpen(false);
        onOpenChange?.(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, isControlled, onOpenChange]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (!isControlled) setInternalOpen(false);
        onOpenChange?.(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, isControlled, onOpenChange]);

  return (
    <div ref={rootRef} className={styles.root}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child as React.ReactElement<Record<string, unknown>>, {
          _open: isOpen,
          _onToggle: toggle,
          _triggerId: triggerId,
          _contentId: contentId,
        });
      })}
    </div>
  );
};
PopoverRoot.displayName = "PopoverRoot";

// ─── PopoverTrigger ───────────────────────────────────────────────────────────
export const PopoverTrigger = ({
  children,
  _open,
  _onToggle,
  _triggerId,
  _contentId,
}: PopoverTriggerProps) => {
  if (!isValidElement(children)) return <>{children}</>;
  return cloneElement(children as React.ReactElement<Record<string, unknown>>, {
    id: _triggerId,
    "aria-expanded": _open,
    "aria-controls": _contentId,
    "aria-haspopup": "true",
    onClick: _onToggle,
  });
};
PopoverTrigger.displayName = "PopoverTrigger";

// ─── PopoverContent ───────────────────────────────────────────────────────────
export const PopoverContent = ({
  position = "bottom",
  children,
  className,
  _open,
  _triggerId,
  _contentId,
  ...props
}: PopoverContentProps) => (
  <div
    id={_contentId}
    role="dialog"
    aria-labelledby={_triggerId}
    className={cx(
      styles.content,
      styles[position],
      _open && styles.open,
      className,
    )}
    {...props}
  >
    {children}
  </div>
);
PopoverContent.displayName = "PopoverContent";

// ─── Namespace export ─────────────────────────────────────────────────────────
export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
};
