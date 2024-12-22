import React, { PropsWithChildren } from 'react';
import { Space } from 'antd';
//
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
//
import { styled } from '@/shared/styles';

const StyledTitle = styled('h3', {
  fontWeight: 600,
  fontSize: '17px',
  lineHeight: '22px',
  alignSelf: 'center',
  margin: 0,
});
type TitleProps = PropsWithChildren<{
  icon?:
    | React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>>
    | React.ForwardRefExoticComponent<CustomIconComponentProps>;
}>;
export const Title = ({ icon, ...props }: TitleProps) => {
  return (
    <Space>
      {icon && (
        <Icon component={icon} style={{ fontSize: '28px', marginRight: '8px !important' }} />
      )}
      <StyledTitle {...props} />
    </Space>
  );
};
