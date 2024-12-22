// import { EGender, formatGender } from '@/core/domain/insurant/InsurantModel';
// import { FeMale, Male } from '@/shared/assets/icons';
// import { AFRectRadio, AFRectRadioProps } from '@/shared/components/AntdForm';
// import { styled } from '@/shared/styles';

// const FlexSB = styled('div', {
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   width: '100%',
//   flex: 1,
// });

// export type AFGenderRadioProps = Omit<AFRectRadioProps, 'options'>;
// export const AFGenderRadio = (props: AFGenderRadioProps) => {
//   return (
//     <AFRectRadio
//       {...props}
//       radioProps={{
//         style: { width: '100%' },
//         ...props.radioProps,
//       }}
//       options={[
//         {
//           value: EGender.MALE,
//           children: (
//             <FlexSB>
//               {formatGender(EGender.MALE)} <Male />
//             </FlexSB>
//           ),
//         },
//         {
//           value: EGender.FEMALE,
//           children: (
//             <FlexSB>
//               {formatGender(EGender.FEMALE)} <FeMale />
//             </FlexSB>
//           ),
//         },
//       ]}
//     />
//   );
// };
