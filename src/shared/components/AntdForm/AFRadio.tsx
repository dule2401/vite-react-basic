// 3rd deps
// internal deps
import { Radio } from '@/shared/components/Radio';
import { FormItem } from './common';
// types
import type { FormItemProps } from './common';
import type { RadioProps } from '@/shared/components/Radio';

export type AFRadioProps = Required<Pick<FormItemProps, 'name'>> &
  FormItemProps & {
    radioProps?: Omit<RadioProps, 'name' | 'children' | 'disabled'>;
    children: FormItemProps['children'];
    disabled?: boolean;
  };

export function AFRadio({ radioProps, children, disabled, ...others }: AFRadioProps) {
  return (
    <FormItem {...others}>
      <Radio.Group name={others.name as string} disabled={disabled} {...radioProps}>
        {children}
      </Radio.Group>
    </FormItem>
  );
}
