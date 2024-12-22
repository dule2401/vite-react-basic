// internal deps
import { Select, SelectProps } from '@/shared/components/Select';
import { useLocales } from '@/shared/hooks/useLocales';
import { FormItem } from './common';
// types
import type { FormItemProps } from './common';

export type AFSelectProps = Required<Pick<FormItemProps, 'name'>> &
  FormItemProps & {
    selectProps?: Omit<SelectProps, 'name' | 'children' | 'status'>;
    children: FormItemProps['children'];
  };

export function AFSelect({ selectProps, children, ...others }: AFSelectProps) {
  const { translate: t } = useLocales();
  const selectStatus = others.validateStatus !== 'error' ? undefined : 'error';
  const sz = selectProps?.sz || 'xsmall';
  const notFoundContent = selectProps?.notFoundContent || t('common.no_result_found');
  return (
    <FormItem {...others}>
      <Select {...selectProps} status={selectStatus} sz={sz} notFoundContent={notFoundContent}>
        {children}
      </Select>
    </FormItem>
  );
}
