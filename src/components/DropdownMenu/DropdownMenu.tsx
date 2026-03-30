import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import type {
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuRootProps,
  DropdownMenuSeparatorProps,
  DropdownMenuTriggerProps,
} from "./DropdownMenu.types";
import styles from "./DropdownMenu.module.css";
import { cx } from "@/utils";

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
DropdownMenuRoot.displayName = "DropdownMenuRoot";

// ─── Trigger ──────────────────────────────────────────────────────────────────
export const DropdownMenuTrigger = ({
  children,
  _open,
  _onToggle,
  _triggerId,
  _contentId,
}: DropdownMenuTriggerProps) => {
  if (!isValidElement(children)) return <>{children}</>;
  return cloneElement(children as React.ReactElement<Record<string, unknown>>, {
    id: _triggerId,
    "aria-expanded": _open,
    "aria-controls": _contentId,
    "aria-haspopup": "menu",
    onClick: _onToggle,
  });
};
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

// ─── Content ──────────────────────────────────────────────────────────────────
export const DropdownMenuContent = ({
  children,
  className,
  _open,
  _triggerId,
  _contentId,
  ...props
}: DropdownMenuContentProps) => (
  <div
    id={_contentId}
    role="menu"
    aria-labelledby={_triggerId}
    className={cx(styles.content, _open && styles.open, className)}
    {...props}
  >
    {children}
  </div>
);
DropdownMenuContent.displayName = "DropdownMenuContent";

// ─── Item ─────────────────────────────────────────────────────────────────────
export const DropdownMenuItem = forwardRef<HTMLButtonElement, DropdownMenuItemProps>(
  ({ destructive = false, children, className, ...props }, ref) => (
    <button
      ref={ref}
      role="menuitem"
      type="button"
      className={cx(styles.item, destructive && styles.destructive, className)}
      {...props}
    >
      {children}
    </button>
  ),
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
