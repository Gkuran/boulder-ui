import { ButtonHTMLAttributes } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import { LabelHTMLAttributes } from 'react';
import { ReactElement } from 'react';
import { RefAttributes } from 'react';
import { TextareaHTMLAttributes } from 'react';

export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export declare const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<HTMLInputElement>>;

export declare interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export declare const ErrorMessage: ForwardRefExoticComponent<ErrorMessageProps & RefAttributes<HTMLParagraphElement>>;

export declare interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
    id?: string;
    children: React.ReactNode;
}

export declare function FormField({ label, description, error, id, children, }: FormFieldProps): JSX.Element;

export declare interface FormFieldProps {
    label?: string;
    description?: string;
    error?: string;
    /** ID do campo — gerado automaticamente via useId() se omitido */
    id?: string;
    children: ReactElement;
}

export declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;

export declare interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    error?: string;
    variant?: InputVariant;
    /** Tamanho visual do input. Substitui o atributo nativo `size` (number). */
    size?: InputSize;
}

export declare type InputSize = "sm" | "md" | "lg";

export declare type InputVariant = "outline" | "filled";

export declare const Label: ForwardRefExoticComponent<LabelProps & RefAttributes<HTMLLabelElement>>;

export declare interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
}

export declare const Switch: ForwardRefExoticComponent<SwitchProps & RefAttributes<HTMLInputElement>>;

export declare interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    id: string;
    label?: string;
    size?: SwitchSize;
}

export declare type SwitchSize = "sm" | "md" | "lg";

export declare const Textarea: ForwardRefExoticComponent<TextareaProps & RefAttributes<HTMLTextAreaElement>>;

export declare interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: TextareaVariant;
    size?: TextareaSize;
}

export declare type TextareaSize = "sm" | "md" | "lg";

export declare type TextareaVariant = "outline" | "filled";

export { }
