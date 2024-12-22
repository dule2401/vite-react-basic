import { InputNumber, InputNumberProps } from '../InputNumber';
import { FormItem } from './common';
//
import type { FormItemEssentialProps } from './type';

export type AFInputNumberProps = Required<Pick<FormItemEssentialProps, 'name'>> &
  FormItemEssentialProps & {
    inputProps?: InputNumberProps;
  };

export function AFInputNumber({ inputProps, name, ...others }: AFInputNumberProps) {
  return (
    <FormItem name={name} {...others}>
      <InputNumber {...inputProps} />
    </FormItem>
  );
}
