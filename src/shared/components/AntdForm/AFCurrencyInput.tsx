// import { InputNumber, InputNumberProps } from '@/shared/components/InputNumber';
// import { currencyFormatter } from '@/shared/utils/currency';
// import { FormItem } from './common';
// //
// import type { FormItemEssentialProps } from './type';

// export type AFCurrencyInputProps = Required<Pick<FormItemEssentialProps, 'name'>> &
//   Omit<FormItemEssentialProps, 'name'> & {
//     inputProps?: InputNumberProps;
//   };

// const calcMaxlength = (length: number) => {
//   /* 
//     Eg: 1.234.567=> 2 dots
//     Eg: 1.234.567.890 => 3 dots
//   */
//   const numberOfDot = Math.ceil(length / 3) - 1;
//   return length + numberOfDot;
// };

// export function AFCurrencyInput({ inputProps, name, ...others }: AFCurrencyInputProps) {
//   return (
//     <FormItem name={name} {...others}>
//       <InputNumber
//         formatter={(value) => currencyFormatter(value)}
//         parser={(v) => String(v)?.replace(/\./g, '')}
//         addonAfter={inputProps?.addonAfter || 'VNĐ'}
//         {...inputProps}
//         maxLength={inputProps?.maxLength && calcMaxlength(inputProps.maxLength)}
//       />
//     </FormItem>
//   );
// }
