// import { useAntdFormInstance } from '@/core/adapters/hooks';
// import { Input, InputProps } from '@/shared/components/Input';
// import { useState } from 'react';
// import { FormItem } from './common';
// //
// import type { FormItemEssentialProps } from './type';

// export type AFInputProps = Required<Pick<FormItemEssentialProps, 'name'>> &
//   Omit<FormItemEssentialProps, 'name'> & {
//     inputProps?: InputProps;
//     trimAfterBlur?: boolean;
//     pattern?: RegExp;
//   };

// export function AFInput({ inputProps, name, trimAfterBlur, pattern, ...others }: AFInputProps) {
//   const [oldValue, setOldValue] = useState('');
//   const form = useAntdFormInstance();
//   return (
//     <FormItem name={name} {...others}>
//       <Input
//         {...inputProps}
//         onBlur={(e) => {
//           let { value } = e.target;
//           if (form && trimAfterBlur) {
//             value = e.target.value?.trim();
//             form.setFields([{ name: name, value }]);
//           }
//           if (form && pattern && !pattern.test(value)) {
//             value = oldValue;
//             form.setFields([{ name: name, value }]);
//           }
//           setOldValue(value);
//           inputProps?.onBlur?.({ ...e, target: { ...e.target, value } });
//         }}
//         onKeyDown={(e) => {
//           if (pattern && !pattern.test(e.key) && e.key.length === 1 && !e.ctrlKey) {
//             e.stopPropagation();
//             e.preventDefault();
//             return;
//           }
//           inputProps?.onKeyDown?.(e);
//         }}
//       />
//     </FormItem>
//   );
// }
