export type SelectOption<T extends string | number = string> = {
  label: string;
  value: T;
  disabled?: boolean;
};

export type Size = "sm" | "md" | "lg";

export interface SelectProps<T extends string | number = string>
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "size"> {
  label?: string;
  options: Array<SelectOption<T>>;
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
  placeholder?: string;
  helperText?: string;
  error?: string | boolean;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  ref?: React.Ref<HTMLSelectElement>
}