import { Modal as AntdModal, ModalProps as AntdModalProps } from 'antd';
import Icon from '@ant-design/icons';
//
import { Close } from '@/shared/assets/icons';
import { styled } from '@/shared/styles';
import { Button } from '../Button';

const StyledButton = styled(Button, {
  py: '14px !important',
  width: '144px',
});

export type ModalProps = AntdModalProps;
const Footer = (props: Pick<ModalProps, 'onCancel' | 'onOk' | 'confirmLoading'>) => {
  return (
    <>
      <StyledButton color="blueInvert" onClick={props.onCancel}>
        Hủy
      </StyledButton>
      <StyledButton color="blue" onClick={props.onOk} loading={props.confirmLoading}>
        Hoàn tất
      </StyledButton>
    </>
  );
};
export const Modal = (props: ModalProps) => (
  <AntdModal
    {...props}
    footer={props.footer || <Footer {...props} />}
    closeIcon={<Icon style={{ fontSize: '24px' }} component={Close} />}
  />
);
Modal.confirm = AntdModal.confirm;
