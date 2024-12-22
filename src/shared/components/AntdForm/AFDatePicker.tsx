// import DisabledContext from 'antd/es/config-provider/DisabledContext';
// import { useContext, useState } from 'react';
// import { KeyboardDatePickerProps } from '@material-ui/pickers';
// //
// import { UI_DATE_FORMAT } from '@/config';
// //
// import { DatePicker } from '../DatePicker';
// import { FormItem, FormItemProps } from './common';
// //
// import { useLocales } from '@/shared/hooks/useLocales';
// import { dateFormatValidator } from '@/shared/utils/validator';
// import { DateTimeString, Maybe } from '@/shared/types';
// import { useAntdFormInstance, useAntdFormWatch } from '@/core/adapters/hooks';
// import { NamePath } from 'antd/es/form/interface';

// type DatePickerForFormProps = {
//   disabled?: boolean;
//   value?: DateTimeString;
//   onChange?: (newValue: DateTimeString | null, value: string | null | undefined) => void;
//   bgColor?: 'white';
// } & Omit<KeyboardDatePickerProps, 'value' | 'onChange'>;

// const isValidDate = (value: Maybe<DateTimeString>) =>
//   !value || new Date(value).toString() !== 'Invalid Date';

// const DatePickerForForm = (props: DatePickerForFormProps) => {
//   return (
//     <DatePicker
//       keyboardDatePickerProps={{
//         disabled: props.disabled,
//         style: { width: '100%' },
//         placeholder: 'DD/MM/YYYY',
//         format: UI_DATE_FORMAT,
//         value: props.value || null,
//         helperText: '',
//         ...props,
//         onChange: (dateValue, value) => {
//           props.onChange?.(dateValue || null, value);
//         },
//       }}
//     />
//   );
// };

// export type AFDatePickerProps = Required<Pick<FormItemProps, 'name'>> &
//   Omit<FormItemProps, 'children' | 'name'> & {
//     disabled?: boolean;
//     keyboardDatePickerProps?: DatePickerForFormProps;
//     revertIfInvalid?: boolean;
//   };

// const useRevertIfInvalid = ({ name, disabled = true }: { name: NamePath; disabled: boolean }) => {
//   const form = useAntdFormInstance();
//   const value = useAntdFormWatch(name, form) as DateTimeString;
//   //
//   const [isError, setIsError] = useState(false);
//   //
//   const [oldValidValue, setOldValidValue] = useState<DateTimeString | null>(null);
//   //
//   const onFocus: DatePickerForFormProps['onFocus'] = (e) => {
//     if (disabled) return;
//     if (isValidDate(value)) setOldValidValue(value || null);
//   };
//   const onBlur: DatePickerForFormProps['onBlur'] = (e) => {
//     if (disabled) return;
//     if (isError) {
//       form.setFields([{ name: name, value: oldValidValue, errors: [] }]);
//       form.validateFields([name]);
//     }
//   };
//   const onError: DatePickerForFormProps['onError'] = (e) => {
//     if (disabled) return;
//     const isValid = e?.toString().length === 0;
//     setIsError(!isValid);
//   };

//   return { onFocus, onBlur, onError };
// };

// export function AFDatePicker({
//   disabled,
//   keyboardDatePickerProps,
//   revertIfInvalid,
//   ...others
// }: AFDatePickerProps) {
//   //
//   const { translate: t } = useLocales();
//   //
//   const ctxDisabled = useContext(DisabledContext);
//   const mergedDisabled = ctxDisabled || disabled;
//   //
//   const { onFocus, onBlur, onError } = useRevertIfInvalid({
//     name: others.name,
//     disabled: !revertIfInvalid,
//   });

//   return (
//     <FormItem {...others} rules={[{ validator: dateFormatValidator(t) }, ...(others.rules || [])]}>
//       <DatePickerForForm
//         {...keyboardDatePickerProps}
//         disabled={mergedDisabled}
//         onFocus={(e) => {
//           onFocus(e);
//           keyboardDatePickerProps?.onFocus?.(e);
//         }}
//         onBlur={(e) => {
//           onBlur(e);
//           keyboardDatePickerProps?.onBlur?.(e);
//         }}
//         onError={(e, v) => {
//           onError(e, v);
//           keyboardDatePickerProps?.onError?.(e, v);
//         }}
//       />
//     </FormItem>
//   );
// }
