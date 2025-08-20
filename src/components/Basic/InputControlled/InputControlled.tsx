import type { FocusEvent } from "react"
import { useController, type FieldValues, type UseControllerProps } from "react-hook-form";
import { Input } from "../Input/Input";
import type { TInputElementProps } from "../Input/types";

export const InputControlled = <T extends FieldValues>(props: UseControllerProps<T> & TInputElementProps) => {
  const { name, control, rules, defaultValue, onBlur, ...restProps } = props;

    const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const { ref, value, onBlur: onFieldBlur, ...restField } = field;
  const { error } = fieldState;

  const handleBlur = (e?: FocusEvent<HTMLInputElement>) => {
    onFieldBlur();

    if (onBlur && e) onBlur(e);
  };

  return (
    <Input
      inputRef={ref}
      value={value ?? ''}
      fieldError={error}
      onBlur={handleBlur}
      {...restField}
      {...restProps}
      />
  )
}