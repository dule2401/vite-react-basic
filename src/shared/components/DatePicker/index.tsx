// import { memo } from 'react';
// import DateFnsUtils from '@date-io/date-fns';
// import vi from 'date-fns/locale/vi';
// //
// import { MuiPickersUtilsProvider, KeyboardDatePickerProps } from '@material-ui/pickers';
// import Icon from '@ant-design/icons';
// import { styled } from '@/shared/styles';
// import { useLocales } from '@/shared/hooks/useLocales';
// import { Calendar } from '@/shared/assets/icons/Calendar';
// import { StyledKeyboardDatePicker } from '@/shared/theme/overrides/DatePicker';
// //

// const StyledDatePicker = styled(StyledKeyboardDatePicker, {
//   variants: {
//     size: {
//       small: {
//         '.MuiInputBase-root': {
//           height: '36px',
//           padding: '$space$2 $space$3',
//           '& .MuiButtonBase-root': {
//             padding: '$space$2',
//             '& svg': {
//               width: '$space$4',
//               height: '$space$4',
//             },
//           },
//         },
//       },
//       medium: {
//         '.MuiInputBase-root': {
//           height: '56px',
//           padding: '$space$4',
//           '& .MuiButtonBase-root': {
//             padding: '$space$3',
//             '& svg': {
//               width: '$space$5',
//               height: '$space$5',
//             },
//           },
//         },
//       },
//     },
//     bgColor: {
//       white: {
//         '.MuiInputBase-root': {
//           background: '$colors$white',
//         },
//       },
//     },
//   },
//   defaultVariants: {
//     size: 'small',
//   },
// });

// export type DatePickerProps = {
//   keyboardDatePickerProps: Omit<KeyboardDatePickerProps, 'size'>;
// } & {
//   size?: 'small' | 'medium';
//   bgColor?: 'white';
// };

// export const DatePicker = memo<DatePickerProps>(
//   ({ keyboardDatePickerProps: _keyboardDatePickerProps, size }) => {
//     const { translate: t } = useLocales();

//     const keyboardDatePickerProps = {
//       cancelLabel: t('common.cancel'),
//       okLabel: t('common.ok'),
//       ..._keyboardDatePickerProps,
//     };

//     return (
//       <MuiPickersUtilsProvider utils={DateFnsUtils} locale={vi}>
//         <StyledDatePicker
//           {...keyboardDatePickerProps}
//           keyboardIcon={<Icon component={Calendar} style={{ fontSize: 20 }} />}
//           size={size}
//         />
//       </MuiPickersUtilsProvider>
//     );
//   },
// );
