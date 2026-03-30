import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
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

// ─── Trigger ──────────────────────────────────────────────────────────────────

export const DropdownMenuTrigger = ({ children }: DropdownMenuTriggerProps) => {
  const { isOpen, toggle, triggerId, contentId } = useDropdownMenu();

  return (
    <div
      id={triggerId}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-controls={contentId}
      aria-haspopup="menu"
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
