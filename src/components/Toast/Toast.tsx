import { forwardRef, useEffect } from "react";
import type { ToastProps } from "./Toast.types";
import styles from "./Toast.module.css";
import { cx } from "@/utils";

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      title,
      description,
      variant = "default",
      position = "bottom-right",
      icon,
      duration = 5000,
      persistent = false,
      showProgress = true,
      onClose,
      className,
      ...props
    },
    ref,
  ) => {
    useEffect(() => {
      if (persistent || !onClose) return;

      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }, [persistent, duration, onClose]);

    return (
      <div
        ref={ref}
        className={cx(
          styles.root,
          styles[position],
          styles[`variant-${variant}`],
          className,
        )}
        role={variant === "danger" ? "alert" : "status"}
        aria-live={variant === "danger" ? "assertive" : "polite"}
        {...props}
      >
        <div className={styles.contentWrapper}>
          {icon && <div className={styles.icon}>{icon}</div>}

          <div className={styles.textContainer}>
            <p className={styles.title}>{title}</p>
            {description && <p className={styles.description}>{description}</p>}
          </div>

          {onClose && (
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close notification"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {!persistent && showProgress && (
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ animationDuration: `${duration}ms` }}
            />
          </div>
        )}
      </div>
    );
  },
);

Toast.displayName = "Toast";
