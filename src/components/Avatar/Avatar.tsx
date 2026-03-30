import { forwardRef, useState } from "react";
import type { AvatarProps } from "./Avatar.types";
import styles from "./Avatar.module.css";
import { cx } from "@/utils";

// ─── Fallback user icon ───────────────────────────────────────────────────────

const UserIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const iconSizeMap: Record<string, number> = {
  sm: 14,
  md: 20,
  lg: 28,
};

// ─── Avatar ───────────────────────────────────────────────────────────────────

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, size = "md", className, ...props }, ref) => {
    const [imgError, setImgError] = useState(false);

    const showImage = src && !imgError;
    const initials = alt ? getInitials(alt) : "";

    return (
      <span
        ref={ref}
        role="img"
        aria-label={alt ?? "avatar"}
        className={cx(styles.avatar, styles[size], className)}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt ?? ""}
            className={styles.image}
            onError={() => setImgError(true)}
          />
        ) : initials ? (
          <span aria-hidden="true">{initials}</span>
        ) : (
          <span className={styles.fallbackIcon} aria-hidden="true">
            <UserIcon size={iconSizeMap[size]} />
          </span>
        )}
      </span>
    );
  },
);
Avatar.displayName = "Avatar";
