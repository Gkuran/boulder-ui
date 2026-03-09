import type { HTMLAttributes } from "react";

export interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  id?: string;
  children: React.ReactNode;
}
