import { Fragment } from 'react';
import { OptionProps } from 'antd/es/select';
//
import { AFFormFieldProps, Select } from '@/shared/components';
import { FormItemEssentialProps } from '@/shared/components/AntdForm/type';
import { renderRadioOptions } from '@/shared/utils/renderRadioOptions';
import { useLocales } from '@/shared/hooks/useLocales';
import { NamePath } from 'antd/es/form/interface';

const renderOptions = (options: Array<OptionProps & { key: string | number }>) => (
  <>
    {options.map(({ key, ...e }) => (
      <Fragment key={key}>
        <Select.Option {...e} />
      </Fragment>
    ))}
  </>
);

export const AF_FORM_FIELD_KEY_MAP = Object.freeze({
  input: 'afInputProps' as const,
  radio: 'afRadioProps' as const,
  select: 'afSelectProps' as const,
  inputNumber: 'afInputNumberProps' as const,
  date: 'afDatePickerProps' as const,
  checkboxGroup: 'afCheckboxGroupProps' as const,
  checkbox: 'afCheckboxProps' as const,
});

export type EAppQuestion<T> = {
  content: string;
  name: keyof T;
  type: 'radio' | 'input' | 'select' | 'inputNumber' | 'date' | 'checkbox';
  //
} & Partial<{
  placeholder: string;
  radioOptions: Parameters<typeof renderRadioOptions>;
  selectOptions: Parameters<typeof renderOptions>;
  rules: Partial<{
    required: boolean;
    maxLength: number;
  }>;
  group: number | string;
  subIdxChar: string;
}>;

export type TExtraFieldProps<T> = Partial<
  Record<
    keyof T,
    Pick<
      AFFormFieldProps,
      | 'afInputProps'
      | 'afInputNumberProps'
      | 'afCurrencyInputProps'
      | 'afSelectProps'
      | 'afRadioProps'
      | 'afDatePickerProps'
      | 'afCheckboxGroupProps'
      | 'afCheckboxProps'
    >
  >
>;

export const useGenerateAntdFields = () => {
  const { translate: t } = useLocales();

  function generateFields<T>({
    names,
    hidden,
    layout,
    extraFieldProps,
  }: {
    names: Record<keyof T, NamePath>;
    hidden?: Partial<Record<keyof T, boolean>>;
    layout?: Partial<Record<keyof T, Pick<FormItemEssentialProps, 'labelCol' | 'wrapperCol'>>>;
    extraFieldProps?: TExtraFieldProps<T>;
  }) {
    return (questions: EAppQuestion<T>[]): Record<keyof T, AFFormFieldProps> => {
      return questions.reduce((acc, cur) => {
        const afFormFieldKey = AF_FORM_FIELD_KEY_MAP[cur.type];

        return {
          ...acc,
          [cur.name]: {
            hidden: hidden?.[cur.name],
            name: names[cur.name],
            placeholder: t(cur.placeholder || ''),
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            [afFormFieldKey]: {
              ...layout?.[cur.name],
              ...extraFieldProps?.[cur.name]?.[afFormFieldKey],
              ...(afFormFieldKey === 'afInputProps' ? { trimAfterBlur: true } : {}),
              label: cur.content,
              children:
                afFormFieldKey === 'afRadioProps'
                  ? renderRadioOptions(cur.radioOptions?.[0] || [])
                  : afFormFieldKey === 'afSelectProps'
                  ? renderOptions(cur.selectOptions?.[0] || [])
                  : null,
            },
          } as AFFormFieldProps,
        };
      }, {} as Record<keyof T, AFFormFieldProps>);
    };
  }
  return { generateFields };
};

export function bindMaxlengthToInput<T>(questions: EAppQuestion<T>[]) {
  return questions
    .filter((e) => e.rules?.maxLength && (e.type === 'input' || e.type === 'inputNumber'))
    .reduce((acc, cur) => {
      return {
        ...acc,
        [cur.name]: {
          [AF_FORM_FIELD_KEY_MAP[cur.type]]: {
            inputProps: {
              maxLength: cur.rules?.maxLength,
            },
          },
        },
      };
    }, {});
}
