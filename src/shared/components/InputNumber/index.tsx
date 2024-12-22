// import React from 'react';
// import {
//   StyledAntdInputNumber,
//   StyledAntdInputNumberProps,
// } from '@/shared/theme/overrides/InputNumber';

// // True if a number or [ctrl, altKey]
// const isNumbOrFnKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
//   if (e.ctrlKey || e.altKey || typeof e.key !== 'string' || e.key.length !== 1) {
//     return true;
//   }
//   const digitPeriodRegExp = new RegExp('\\d');
//   return digitPeriodRegExp.test(e.key);
// };

// export type InputNumberProps = StyledAntdInputNumberProps & {
//   blockChar?: boolean;
//   onBlurWithOldValue?(e: React.FocusEvent<HTMLInputElement>, oldValue: string): void;
// };

// export function InputNumber({
//   size = 'small',
//   blockChar,
//   controls = false,
//   onBlurWithOldValue,
//   ...props
// }: InputNumberProps) {
//   const [oldValue, setOldValue] = React.useState<string>('');

//   return (
//     <StyledAntdInputNumber
//       controls={controls}
//       size={size}
//       {...props}
//       onKeyDown={(e) => {
//         if (blockChar && !isNumbOrFnKey(e)) {
//           e.preventDefault();
//           return;
//         }
//         props?.onKeyDown && props?.onKeyDown(e);
//       }}
//       onFocus={(e) => {
//         if (!!onBlurWithOldValue) {
//           setOldValue(e.target.value);
//         }
//         props.onFocus?.(e);
//       }}
//       onBlur={(e) => {
//         onBlurWithOldValue?.(e, oldValue);
//         props.onBlur?.(e);
//       }}
//     />
//   );
// }
