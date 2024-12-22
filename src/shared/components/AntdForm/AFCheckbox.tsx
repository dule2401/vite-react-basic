import { CheckboxGroupProps, CheckboxProps } from 'antd/es/checkbox';
// internal deps
import { Checkbox } from '@/shared/components/Checkbox';
import { FormItem } from './common';
// types
import type { FormItemProps } from './common';

export type AFCheckboxGroupProps = Required<Pick<FormItemProps, 'name'>> &
  FormItemProps & {
    checkboxGroupProps?: Omit<CheckboxGroupProps, 'name' | 'children' | 'disabled'>;
    children: FormItemProps['children'];
    disabled?: boolean;
  };

export function AFCheckboxGroup({
  checkboxGroupProps,
  children,
  disabled,
  ...others
}: AFCheckboxGroupProps) {
  return (
    <FormItem {...others}>
      <Checkbox.Group {...checkboxGroupProps} disabled={disabled}>
        {children}
      </Checkbox.Group>
    </FormItem>
  );
}

export type AFCheckboxProps = Required<Pick<FormItemProps, 'name'>> &
  FormItemProps & {
    checkboxProps?: Omit<CheckboxProps, 'name' | 'children' | 'disabled'>;
    children: FormItemProps['children'];
    disabled?: boolean;
  };

export function AFCheckbox({ checkboxProps, children, disabled, ...others }: AFCheckboxProps) {
  return (
    <FormItem {...others}>
      <Checkbox {...checkboxProps} disabled={disabled}>
        {children}
      </Checkbox>
    </FormItem>
  );
}
