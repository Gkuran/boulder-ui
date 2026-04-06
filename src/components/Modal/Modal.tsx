import {
  forwardRef,
  useEffect,
  useRef,
  useCallback,
  createElement,
} from "react";
import { createPortal } from "react-dom";
import type {
  ModalProps,
  ModalHeaderProps,
  ModalTitleProps,
  ModalContentProps,
  ModalFooterProps,
} from "./Modal.types";
import styles from "./Modal.module.css";
import { cx } from "@/utils";

// ─── Close Icon ───────────────────────────────────────────────────────────────

const CloseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ─── Modal (Root) ─────────────────────────────────────────────────────────────

export const Modal = ({
  isOpen,
  onClose,
  children,
  size = "md",
  variant = "default",
  closeOnOverlayClick = true,
  hideCloseButton = false,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // ── Scroll lock ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ── Escape key ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // ── Focus trap ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;

    const dialog = dialogRef.current;
    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(", ");

    const focusableElements = Array.from(
      dialog.querySelectorAll<HTMLElement>(focusableSelectors),
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Move focus into the dialog on open
    firstElement?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    dialog.addEventListener("keydown", handleTab);
    return () => dialog.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  // ── Overlay click ─────────────────────────────────────────────────────────
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose();
      }
    },
    [closeOnOverlayClick, onClose],
  );

  if (!isOpen) return null;

  return createPortal(
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={dialogRef}
        className={cx(styles.dialog, styles[variant], styles[`size-${size}`])}
      >
        {!hideCloseButton && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body,
  );
};

Modal.displayName = "Modal";

// ─── ModalHeader ──────────────────────────────────────────────────────────────

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cx(styles.header, className)} {...props}>
      {children}
    </div>
  ),
);

ModalHeader.displayName = "ModalHeader";

// ─── ModalTitle ───────────────────────────────────────────────────────────────

export const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ as = "h2", children, className, ...props }, ref) =>
    createElement(as, { ref, className: cx(styles.title, className), ...props }, children),
);

ModalTitle.displayName = "ModalTitle";

// ─── ModalContent ─────────────────────────────────────────────────────────────

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, padding = "md", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(styles.content, styles[`padding-${padding}`], className)}
      {...props}
    >
      {children}
    </div>
  ),
);

ModalContent.displayName = "ModalContent";

// ─── ModalFooter ──────────────────────────────────────────────────────────────

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cx(styles.footer, className)} {...props}>
      {children}
    </div>
  ),
);

ModalFooter.displayName = "ModalFooter";
