import type { ReactElement } from "react";

export interface FormFieldProps {
  label?: string;
  description?: string;
  error?: string;
  /** ID do campo — gerado automaticamente via useId() se omitido */
  id?: string;
  children: ReactElement;
}
