// import { Fragment, useMemo, useState } from 'react';
// import { Badge, BadgeProps, Collapse } from 'antd';
// import groupBy from 'lodash/groupBy';
// //
// import { styled, css } from '@/shared/styles';
// import { useTheme } from '@/shared/hooks/useTheme';
// import { useLocales } from '@/shared/hooks/useLocales';
// import { Divider } from '../Divider';

// const PopUpIconWrapper = styled('div', {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '40px',
//   height: '40px',
//   borderRadius: '50%',
//   cursor: 'pointer',
//   //
//   float: 'right',
//   //
//   backgroundColor: '$error',
//   color: '$white',

//   '&.state-open': {
//     backgroundColor: '$white',
//     color: '$black111',
//   },

//   '& .icon': {
//     fontSize: '20px',
//     lineHeight: '20px',
//   },
// });

// // @ts-ignore-start
// const StyledBadge = styled(Badge, {
//   color: '$white',
//   width: '100%',
//   // [`& .${prefixAntdCls}-badge-count`]: {
//   //   fontSize: '10px',
//   // },
// });

// const ContentHeader = styled('div', {
//   background: '$white',
//   display: 'flex',
//   gap: '$3',
//   alignItems: 'center',
//   padding: '$4',
// });

// const ContentIconWrapper = styled('div', {
//   color: 'white',
//   background: '$error',
//   display: 'inline-flex',
//   borderRadius: '999px',
//   padding: '$1 $2',
// });

// const ContentIcon = styled('span', {
//   display: 'inline-flex',
//   fontSize: '15px',
//   alignItems: 'center',
//   justifyContent: 'center',

//   '& .count': {
//     fontSize: '0.85em',
//   },
// });

// const ContentMain = styled('div', {
//   background: 'white',
//   maxHeight: '350px',
//   overflow: 'auto',
// });

// const ErrorItem = styled('div', {
//   display: 'flex',
//   alignItems: 'start',
//   gap: '$4',
//   padding: '10px $3',
//   wordBreak: 'break-word',
//   '&:hover': {
//     background: '$redMBShade',
//     cursor: 'pointer',
//   },
//   '& .icon': {
//     color: '$error',
//     minWidth: '1em',
//     marginTop: '$1',
//   },
//   '& .title': {
//     color: '$gray76',
//   },
// });

// const GroupText = styled('div', {
//   background: '#fcfcfc',
//   padding: '$2 $4',
// });

// type IErrorItem = {
//   title?: string;
//   text?: string;
//   group: string;
//   children?: IErrorItem[];
//   groupTitle?: string;
// };

// const { Panel } = Collapse;
// const StyledPanel = styled(Panel, {
//   [`.${prefixAntdCls}-collapse-content-box`]: {
//     padding: '0px !important',
//   },
// });

// type ErrorGroupsProps = {
//   errors: IErrorItem[];
// };

// const CollapsingErrorGroups = ({ errors }: ErrorGroupsProps) => {
//   const { translate: t } = useLocales();
//   const groupedErrors = useMemo(() => Object.entries(groupBy(errors, (x) => x.group)), [errors]);

//   return (
//     <Collapse
//       bordered={false}
//       className={css({
//         [`& .${prefixAntdCls}-collapse-header .${prefixAntdCls}-collapse-expand-icon *`]: {
//           minWidth: '1em',
//         },
//       })()}
//     >
//       {groupedErrors.map(([group, errors]) => (
//         <StyledPanel header={errors[0].groupTitle || group} key={group}>
//           {errors.map(({ text, children }, idx) => {
//             return (
//               // eslint-disable-next-line react/no-array-index-key
//               <div key={idx} className={css({ background: '$redMBShade' })()}>
//                 {!!text && (
//                   <ErrorItem>
//                     <span className="icon">
//                       <ExclamationCircle />
//                     </span>
//                     <span>{t(text)}</span>
//                   </ErrorItem>
//                 )}
//                 {children && (
//                   <>
//                     <Divider noSpace style={{ borderColor: '#d9d9d9' }} />
//                     <CollapsingErrorGroups errors={children} />
//                   </>
//                 )}
//               </div>
//             );
//           })}
//         </StyledPanel>
//       ))}
//     </Collapse>
//   );
// };

// const StretchedErrorGroups = ({ errors }: ErrorGroupsProps) => {
//   const { translate: t } = useLocales();
//   const groupedErrors = useMemo(() => Object.entries(groupBy(errors, (x) => x.group)), [errors]);

//   return (
//     <>
//       {groupedErrors.map(([group, arr], idx) => (
//         // eslint-disable-next-line react/no-array-index-key
//         <Fragment key={idx}>
//           <GroupText>{t(arr[0].groupTitle || group)}</GroupText>
//           {arr.map(({ text, title }, iidx) => (
//             // eslint-disable-next-line react/no-array-index-key
//             <ErrorItem key={iidx}>
//               <span className="icon">
//                 <ExclamationCircle />
//               </span>
//               <div>
//                 {title && <p className="title">{t(title)}</p>}
//                 {text && <p>{t(text)}</p>}
//               </div>
//             </ErrorItem>
//           ))}
//         </Fragment>
//       ))}
//     </>
//   );
// };

// type ContentProps = Pick<BadgeProps, 'count'> & {
//   errors: Array<IErrorItem>;
//   collapseGroup?: boolean;
// };

// const Content = ({ count, errors, collapseGroup }: ContentProps) => {
//   return (
//     <>
//       <ContentHeader>
//         <ContentIconWrapper>
//           <ContentIcon>
//             <Exclamation />
//             {count && <span className="count">{count}</span>}
//           </ContentIcon>
//         </ContentIconWrapper>
//         <span style={{ flex: 1 }}>Vui lòng chỉnh sửa các trường thông tin không hợp lệ</span>
//       </ContentHeader>
//       <ContentMain>
//         {collapseGroup ? (
//           <CollapsingErrorGroups errors={errors} />
//         ) : (
//           <StretchedErrorGroups errors={errors} />
//         )}
//       </ContentMain>
//     </>
//   );
// };

// export const PopUpError = ({
//   errors,
//   badgeProps,
//   onClose,
//   contentProps,
// }: {
//   errors: Array<IErrorItem>;
//   badgeProps?: BadgeProps;
//   onClose?: VoidFunction;
//   contentProps?: Pick<ContentProps, 'collapseGroup'>;
// }) => {
//   const [open, setOpen] = useState<boolean>(false);
//   const { theme } = useTheme();

//   const togglePopup = () => {
//     setOpen((prev) => {
//       const newOpenState = !prev;

//       if (newOpenState === false) {
//         onClose && onClose();
//       }

//       return newOpenState;
//     });
//   };

//   return (
//     <>
//       {open && (
//         <div
//           className={css({
//             maxWidth: '300px',
//             borderRadius: '$space$1',
//             marginBottom: '$2',
//             border: '1px solid $colors$stroke1',
//           })()}
//         >
//           <Content {...contentProps} count={badgeProps?.count} errors={errors} />
//         </div>
//       )}
//       <StyledBadge
//         {...badgeProps}
//         color={theme.colors.error.value}
//         count={!open ? badgeProps?.count : 0}
//       >
//         <PopUpIconWrapper onClick={togglePopup} className={open ? 'state-open' : ''}>
//           <span className="icon">{open ? <Close /> : <Exclamation />}</span>
//         </PopUpIconWrapper>
//       </StyledBadge>
//     </>
//   );
// };
