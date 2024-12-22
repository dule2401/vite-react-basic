// import { PropsWithChildren, ReactNode, ComponentProps } from 'react';

// //
// import { styled } from '@/shared/styles';
// import { Title } from '../Title';
// import clsx from 'clsx';
// import { prefixAntdCls } from '@/shared/theme/config';

// const CardWrapper = styled('div', {
//   backgroundColor: '$white',
//   borderRadius: '$space$1',
//   maxWidth: '100%',
// });

// const CardHeader = styled('div', {
//   py: '10px',
//   px: '$space$6',
//   borderBottom: '1px solid $stroke1',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',

//   '.actions, .title': {
//     display: 'flex',
//   },

//   '.title': {
//     '.icon': {
//       marginRight: '$space$2',
//     },
//   },

//   '.actions': {
//     '.action-item': {
//       display: 'flex',
//       alignItems: 'center',
//       gap: 'calc($space$2 * 3/4)',
//       cursor: 'pointer',

//       '.action-item__icon': {
//         flexShrink: 0,
//       },
//       '.action-item__title': {
//         color: '$blueMB',
//       },
//     },
//   },
// });

// export const CardMain = styled('div', {
//   paddingTop: '$space$4',
// });

// type CardProps = {
//   headerProps?: {
//     title: ReactNode;
//     icon?: ReactNode;
//     actions?: { title: string; icon?: ReactNode; action: VoidFunction; className?: string }[];
//   };
// };

// export const Card = ({
//   headerProps,
//   children,
//   ...others
// }: PropsWithChildren<Omit<ComponentProps<typeof CardWrapper>, 'title'> & CardProps>) => {
//   const hasHeader = !!headerProps;
//   return (
//     <CardWrapper
//       {...others}
//       className={clsx(
//         `${prefixAntdCls}-card-wrapper`,
//         others.className && { [others.className]: true },
//       )}
//     >
//       {hasHeader && (
//         <CardHeader className={`${prefixAntdCls}-card-header`}>
//           <div className="title">
//             {!!headerProps.icon && <span className="icon">{headerProps.icon}</span>}
//             <Title>{headerProps.title}</Title>
//           </div>
//           {headerProps.actions && (
//             <div className="actions">
//               {headerProps.actions.map(({ title, className, icon, action }, idx) => (
//                 <div
//                   // eslint-disable-next-line react/no-array-index-key
//                   key={`${title}-${idx}`}
//                   className={clsx('action-item', className)}
//                   onClick={action}
//                 >
//                   {icon && <span className="action-item__icon">{icon}</span>}
//                   <span className="action-item__title">{title}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </CardHeader>
//       )}
//       <CardMain className={`${prefixAntdCls}-card-main`}>{children}</CardMain>
//     </CardWrapper>
//   );
// };

// Card.toString = () => `.${prefixAntdCls}-customized-card`;
