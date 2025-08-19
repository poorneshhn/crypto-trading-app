import type { InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

export interface TInputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldError?: Partial<FieldError>;
  fieldClassName?: string;
  maxLength?: number;
  adornmentType?: "dollar" | "percentage" | "pcs";
  status?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string;
  theme?: "dark" | "light";
};
