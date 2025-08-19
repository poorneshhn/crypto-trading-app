
export type SelectOption<T extends string | number = string> = {
  label: string;
  value: T;
  disabled?: boolean;
};

export type Size = "sm" | "md";

export type option = Record<string, string | number | boolean>;
export interface ISelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "size"> {
  label?: string;
  options: option[];
  reduce: (val: option) => option,
  value?: string | number;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  ref?: React.Ref<HTMLSelectElement>
}