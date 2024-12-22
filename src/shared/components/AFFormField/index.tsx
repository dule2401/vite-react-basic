// import { RowProps, ColProps, Row, Space, SpaceProps, Col, Form } from "antd";
// import { NamePath } from "antd/es/form/interface";
// import { Fragment, ReactNode } from "react";
// //
// import {
//   AFInputProps,
//   AFCurrencyInputProps,
//   AFSelectProps,
//   AFRadioProps,
//   AFDatePickerProps,
//   AFCheckboxGroupProps,
//   AFInput,
//   AFCurrencyInput,
//   AFSelect,
//   AFRadio,
//   AFDatePicker,
//   AFCheckboxGroup,
//   AFInputNumber,
//   AFInputNumberProps,
//   AFCheckboxProps,
//   AFCheckbox,
//   FormItem,
// } from "../AntdForm";
// import { FormItemEssentialProps } from "../AntdForm/type";
// import { FieldLabel } from "../FieldLabel";
// import { FieldText } from "../FieldText";
// //
// // import { useAntdFormInstance } from '@/core/adapters/hooks';
// import { useLocales } from "@/shared/hooks/useLocales";
// import { css } from "@/shared/styles";
// import {
//   AFDateTimePicker,
//   AFDateTimePickerProps,
// } from "../AntdForm/AFDateTimePicker";
// //

// type OptionalField<T, Field extends keyof T> = Omit<T, Field> &
//   Partial<Pick<T, Field>>;

// type TFieldValue = string | number | Array<any> | ReactNode;
// type ReadOnlyFieldProps = {
//   label: ReactNode;
//   value: TFieldValue;
//   renderValue?(rawValue: TFieldValue): ReactNode;
//   bordered?: boolean;
// } & Pick<SpaceProps, "direction">;

// export function useAntdFormInstance<T>() {
//   return Form.useFormInstance<T>();
// }

// const ReadOnlyField = ({
//   label,
//   value,
//   renderValue,
//   direction = "vertical",
//   bordered,
// }: ReadOnlyFieldProps) => {
//   const { translate: t } = useLocales();

//   const _renderValue = () => {
//     if (renderValue) {
//       return renderValue(value);
//     }
//     return typeof value === "string" ? t(value) : value;
//   };

//   return (
//     <Space
//       className={css({
//         display: "flex !important",
//         marginBottom: "$3",
//         "& :first-child": { flex: 1 },
//       })()}
//       direction={direction}
//     >
//       {label && <FieldLabel>{label}</FieldLabel>}
//       <FieldText bordered={bordered}>{_renderValue()}</FieldText>
//     </Space>
//   );
// };

// export type AFFormFieldProps = {
//   name: NamePath;
//   hidden?: boolean;
//   invisible?: boolean;
//   placeholder?: string;
//   readOnly?: boolean;
//   readOnlyProps?: Partial<
//     Pick<ReadOnlyFieldProps, "direction" | "value" | "renderValue" | "bordered">
//   >;
//   content?: JSX.Element;
//   className?: string;
// } & Pick<FormItemEssentialProps, "rules" | "noMargin"> &
//   Partial<{
//     afInputProps: OptionalField<AFInputProps, "name">;
//     afInputNumberProps: OptionalField<AFInputNumberProps, "name">;
//     afCurrencyInputProps: OptionalField<AFCurrencyInputProps, "name">;
//     afSelectProps: OptionalField<AFSelectProps, "name">;
//     afRadioProps: OptionalField<AFRadioProps, "name">;
//     afDatePickerProps: OptionalField<AFDatePickerProps, "name">;
//     afDateTimePickerProps: OptionalField<AFDateTimePickerProps, "name">;
//     afCheckboxGroupProps: OptionalField<AFCheckboxGroupProps, "name">;
//     afCheckboxProps: OptionalField<AFCheckboxProps, "name">;
//   }>;

// export const AFFormField = ({
//   hidden,
//   invisible,
//   readOnly,
//   readOnlyProps,
//   ...props
// }: AFFormFieldProps) => {
//   const form = useAntdFormInstance<any>();

//   const generalProps = {
//     noMargin: props.noMargin,
//     rules: props.rules,
//     className: props.className,
//     name:
//       props.afInputProps?.name ||
//       props.afInputNumberProps?.name ||
//       props.afCurrencyInputProps?.name ||
//       props.afSelectProps?.name ||
//       props.afRadioProps?.name ||
//       props.afDatePickerProps?.name ||
//       props.afDateTimePickerProps?.name ||
//       props.afCheckboxGroupProps?.name ||
//       props.afCheckboxProps?.name ||
//       props.name,
//     label:
//       props.afInputProps?.label ||
//       props.afInputNumberProps?.label ||
//       props.afCurrencyInputProps?.label ||
//       props.afSelectProps?.label ||
//       props.afRadioProps?.label ||
//       props.afDatePickerProps?.label ||
//       props.afDateTimePickerProps?.label ||
//       props.afCheckboxGroupProps?.label ||
//       props.afCheckboxProps?.label ||
//       "",
//     hidden: invisible,
//   };

//   const placeholder = (props.afInputProps?.inputProps?.placeholder ||
//     props.afInputNumberProps?.inputProps?.placeholder ||
//     props.afCurrencyInputProps?.inputProps?.placeholder ||
//     props.afSelectProps?.selectProps?.placeholder ||
//     props.afDatePickerProps?.keyboardDatePickerProps?.placeholder ||
//     props.afDateTimePickerProps?.keyboardDateTimePickerProps?.placeholder ||
//     props.placeholder) as string;

//   if (hidden) return null;
//   if (readOnly && !invisible) {
//     return (
//       <>
//         <ReadOnlyField
//           {...readOnlyProps}
//           label={generalProps.label}
//           value={
//             readOnlyProps?.value ||
//             ((form?.getFieldValue(generalProps.name) || "") as string)
//           }
//         />
//         {/* Store field value but hide on the screen */}
//         <AFInput name={generalProps.name} hidden />
//       </>
//     );
//   }

//   if (props.afInputProps) {
//     return (
//       <AFInput
//         {...props.afInputProps}
//         {...generalProps}
//         inputProps={{ ...props.afInputProps.inputProps, placeholder }}
//       />
//     );
//   }
//   if (props.afInputNumberProps) {
//     return (
//       <AFInputNumber
//         {...props.afInputNumberProps}
//         {...generalProps}
//         inputProps={{ ...props.afInputNumberProps.inputProps, placeholder }}
//       />
//     );
//   } else if (props.afCurrencyInputProps) {
//     return (
//       <AFCurrencyInput
//         {...props.afCurrencyInputProps}
//         {...generalProps}
//         inputProps={{ ...props.afCurrencyInputProps.inputProps, placeholder }}
//       />
//     );
//   } else if (props.afSelectProps) {
//     return (
//       <AFSelect
//         {...props.afSelectProps}
//         {...generalProps}
//         selectProps={{ ...props.afSelectProps.selectProps, placeholder }}
//         children={props.afSelectProps?.children || <></>}
//       />
//     );
//   } else if (props.afRadioProps) {
//     return (
//       <AFRadio
//         {...props.afRadioProps}
//         {...generalProps}
//         children={props.afRadioProps?.children || <></>}
//       />
//     );
//   } else if (props.afDatePickerProps) {
//     return (
//       <AFDatePicker
//         {...props.afDatePickerProps}
//         {...generalProps}
//         keyboardDatePickerProps={{
//           ...props.afDatePickerProps.keyboardDatePickerProps,
//           placeholder,
//         }}
//       />
//     );
//   } else if (props.afDateTimePickerProps) {
//     return (
//       <AFDateTimePicker
//         {...props.afDateTimePickerProps}
//         {...generalProps}
//         keyboardDateTimePickerProps={{
//           ...props.afDateTimePickerProps.keyboardDateTimePickerProps,
//           placeholder,
//         }}
//       />
//     );
//   } else if (props.afCheckboxGroupProps) {
//     return (
//       <AFCheckboxGroup {...props.afCheckboxGroupProps} {...generalProps} />
//     );
//   } else if (props.afCheckboxProps) {
//     return <AFCheckbox {...props.afCheckboxProps} {...generalProps} />;
//   }

//   return <FormItem {...generalProps}>{props.content}</FormItem>;
// };

// export type AFFormFieldGroupProps = {
//   rowProps?: RowProps;
//   cols: Array<{
//     colProps: ColProps;
//     fieldProps: AFFormFieldProps;
//   }>;
// };
// export const AFFormFieldGroup = ({ rowProps, cols }: AFFormFieldGroupProps) => {
//   return (
//     <Row {...rowProps} gutter={rowProps?.gutter || 20}>
//       {cols.map((e) => {
//         const key =
//           typeof e.fieldProps.name === "string" ||
//           typeof e.fieldProps.name === "number"
//             ? e.fieldProps.name
//             : e.fieldProps.name[e.fieldProps.name.length - 1];
//         return (
//           <Fragment key={key}>
//             <Col {...e.colProps}>
//               <AFFormField {...e.fieldProps} />
//             </Col>
//           </Fragment>
//         );
//       })}
//     </Row>
//   );
// };
