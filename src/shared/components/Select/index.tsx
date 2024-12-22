// import { Select as AntdSelect } from 'antd';
// import Icon from '@ant-design/icons';
// //
// import { StyledAntdSelect } from '@/shared/theme/overrides/Select';
// import { ChevronDown } from '@/shared/assets/icons/ChevronDown';
// import { useTheme } from '@/shared/hooks/useTheme';
// //
// import type { StyledAntdSelectProps } from '@/shared/theme/overrides/Select';

// const { Option } = AntdSelect;

// export type SelectProps = StyledAntdSelectProps;

// function Select({ sz, status, ...others }: SelectProps) {
//   const { theme } = useTheme();
//   const size = sz && sz !== 'xsmall' ? sz : 'middle';
//   return (
//     <StyledAntdSelect
//       {...others}
//       suffixIcon={
//         others.suffixIcon ?? (
//           <Icon
//             component={() => (
//               <ChevronDown
//                 fillColor={
//                   others?.disabled ? theme.colors.gray76.value : theme.colors.black111.value
//                 }
//               />
//             )}
//           />
//         )
//       }
//       size={size}
//       sz={sz}
//       status={status}
//     />
//   );
// }

// Select.Option = Option;

// export { Select };
