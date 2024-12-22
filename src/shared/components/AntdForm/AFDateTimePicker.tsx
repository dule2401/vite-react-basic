// import { useAntdFormInstance, useAntdFormWatch } from '@/core/adapters/hooks';
// import { useLocales } from '@/shared/hooks/useLocales';
// import { DateTimeString, Maybe } from '@/shared/types';
// import { dateTimeFormatValidator } from '@/shared/utils/validator';
// import { KeyboardDateTimePickerProps } from '@material-ui/pickers';
// import DisabledContext from 'antd/es/config-provider/DisabledContext';
// import { NamePath } from 'antd/es/form/interface';
// import { useContext, useState } from 'react';
// import { DateTimePicker } from '../DateTimePicker';
// import { FormItem, FormItemProps } from './common';

// type DateTimePickerForFormProps = {
//   disabled?: boolean;
//   value?: DateTimeString;
//   onChange?: (newValue: DateTimeString | null, value: string | null | undefined) => void;
// } & Omit<KeyboardDateTimePickerProps, 'value' | 'onChange'>;

// const isValidDate = (value: Maybe<DateTimeString>) =>
//   !value || new Date(value).toString() !== 'Invalid Date';

// const DateTimePickerForForm = (props: DateTimePickerForFormProps) => {
//   return (
//     <DateTimePicker
//       keyboardDateTimePickerProps={{
//         disabled: props.disabled,
//         style: { width: '100%' },
//         format: 'dd/MM/yyyy  HH:mm',
//         value: props.value || null,
//         helperText: '',
//         ...props,
//         onChange: (dateTimevalue, value) => {
//           props.onChange?.(dateTimevalue || null, value);
//         },
//       }}
//     />
//   );
// };

// export type AFDateTimePickerProps = Required<Pick<FormItemProps, 'name'>> &
//   Omit<FormItemProps, 'children' | 'name'> & {
//     disabled?: boolean;
//     keyboardDateTimePickerProps?: DateTimePickerForFormProps;
//     revertIfInvalid?: boolean;
//   };

// const useRevertIfInvalid = ({ name, disabled = true }: { name: NamePath; disabled: boolean }) => {
//   const form = useAntdFormInstance();
//   const value = useAntdFormWatch(name, form) as DateTimeString;
//   //
//   const [isError, setIsError] = useState(false);
//   //
//   const [oldValidValue, setOldValidValue] = useState<DateTimeString | null>(null);

//   const onFocus: DateTimePickerForFormProps['onFocus'] = (e) => {
//     if (disabled) return;
//     if (isValidDate(value)) setOldValidValue(value || null);
//   };
//   const onBlur: DateTimePickerForFormProps['onBlur'] = (e) => {
//     if (disabled) return;
//     if (isError) {
//       form.setFields([{ name: name, value: oldValidValue, errors: [] }]);
//       form.validateFields([name]);
//     }
//   };
//   const onError: DateTimePickerForFormProps['onError'] = (e) => {
//     if (disabled) return;
//     const isValid = e?.toString().length === 0;
//     setIsError(!isValid);
//   };

//   return { onFocus, onBlur, onError };
// };

// export function AFDateTimePicker({
//   disabled,
//   keyboardDateTimePickerProps,
//   revertIfInvalid,
//   ...others
// }: AFDateTimePickerProps) {
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
//     <FormItem
//       {...others}
//       rules={[{ validator: dateTimeFormatValidator(t) }, ...(others.rules || [])]}
//     >
//       <DateTimePickerForForm
//         {...keyboardDateTimePickerProps}
//         disabled={mergedDisabled}
//         onFocus={(e) => {
//           onFocus(e);
//           keyboardDateTimePickerProps?.onFocus?.(e);
//         }}
//         onBlur={(e) => {
//           onBlur(e);
//           keyboardDateTimePickerProps?.onBlur?.(e);
//         }}
//         onError={(e, v) => {
//           onError(e, v);
//           keyboardDateTimePickerProps?.onError?.(e, v);
//         }}
//       />
//     </FormItem>
//   );
// }
