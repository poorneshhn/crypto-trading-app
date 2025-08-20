import { type FieldValues, useController, type UseControllerProps } from 'react-hook-form';

import { Select } from '../Select/Select';
import { type ISelectProps } from '../Select/types';

export const SelectComponentControl = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  ...restProps
}: UseControllerProps<T> & ISelectProps) => {
  const { field } = useController({
    name,
    control,
    defaultValue,
  });

  const { ref, value, ...restField } = field;

  return <Select ref={ref} value={value ?? ''} {...restField} {...restProps} />;
};
