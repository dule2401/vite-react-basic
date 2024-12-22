import { ComponentProps, forwardRef, ReactNode, useImperativeHandle, useState } from 'react';
import { Modal, ModalProps } from 'antd';
import Icon from '@ant-design/icons';
//
import { Close } from '@/shared/assets/icons';
import { useTheme } from '@/shared/hooks/useTheme';
import { css } from '@/shared/styles';
//
import {
  wrapClassName,
  StyledCloseButton,
  StyledTitle,
  StyledParagraph,
  StyledActionButton,
  StyledButtonsGroup,
  StyleCloseButtonWrapper,
} from './styles';

const modalCfg = {
  width: 780,
  wrapClassName,
  maskClosable: true,
  icon: null,
  okButtonProps: {
    style: {
      display: 'none',
    },
  },
  cancelButtonProps: {
    style: {
      display: 'none',
    },
  },
  title: '',
  footer: null,
  closable: false,
};

type ModalContentProps = {
  shouldShowCloseButton?: boolean;
  content: ReactNode;
  onCancel?: VoidFunction;
} & Pick<ModalProps, 'width'>;

const ModalContent = ({ shouldShowCloseButton, content, onCancel }: ModalContentProps) => {
  const handleCancel = () => {
    onCancel && onCancel();
  };

  return (
    <>
      {shouldShowCloseButton && (
        <StyleCloseButtonWrapper>
          <CloseBtn onClick={handleCancel} />
        </StyleCloseButtonWrapper>
      )}
      {content}
    </>
  );
};

//======= 1. Using Hook
type UseConfirmModalParams = ModalContentProps;
export function useConfirmationModal(props: UseConfirmModalParams) {
  const confirm = () =>
    Modal.confirm({
      // Wrapper
      ...modalCfg,
      maskClosable: false,
      // Content
      content: <ModalContent {...props} />,
    });

  return {
    confirm,
  };
}

//======= 2. Using Component
//? In parent Component, use ref to call modalRef.current.show/hide() to toggle displaying
const CloseBtn = (props: ComponentProps<typeof StyledCloseButton>) => {
  return (
    <StyledCloseButton {...props}>
      <Icon
        component={Close}
        style={{
          fontSize: `${(24 * 18) / 14}px`, //? because Close-Icon have ratio: fontsize/width = 24/14
        }}
      />
    </StyledCloseButton>
  );
};

export type ConfirmModalExposeFunc = {
  show: VoidFunction;
  hide: VoidFunction;
};
type TConfirmationModalCompProps = ModalContentProps &
  Pick<ModalProps, 'centered'> & {
    triggerCancel?: VoidFunction;
  };
const ConfirmationModal = forwardRef<ConfirmModalExposeFunc, TConfirmationModalCompProps>(
  ({ onCancel, shouldShowCloseButton, content, triggerCancel, ...others }, ref) => {
    const [isVisible, setVisible] = useState(false);

    const handleCancel = () => {
      setVisible(false);
      onCancel && onCancel();
    };

    useImperativeHandle(
      ref,
      (): ConfirmModalExposeFunc => ({
        show: () => setVisible(true),
        hide: () => handleCancel(),
      }),
    );

    return (
      <Modal {...modalCfg} visible={isVisible} destroyOnClose onCancel={triggerCancel} {...others}>
        <ModalContent
          shouldShowCloseButton={shouldShowCloseButton}
          onCancel={handleCancel}
          content={content}
        />
      </Modal>
    );
  },
);

//===== Utils Components
const CModalTitle = (props: ComponentProps<typeof StyledTitle>) => <StyledTitle {...props} />;
const CModalParagraph = (props: ComponentProps<typeof StyledParagraph>) => (
  <StyledParagraph {...props} />
);

const CModalPrimaryButton = (props: ComponentProps<typeof StyledActionButton>) => (
  <StyledActionButton {...props} size="large" color="blue" variant="filled" />
);

const CModalPinkPrimaryButton = (props: ComponentProps<typeof StyledActionButton>) => {
  const { theme } = useTheme();
  return (
    <StyledActionButton
      {...props}
      size="large"
      color="pink"
      variant="filled"
      className={css({
        background: `${theme.colors.pinkMB.value} !important`,
        span: {
          color: '$white',
        },
      })()}
    />
  );
};

const CModalSecondaryButton = (props: ComponentProps<typeof StyledActionButton>) => (
  <StyledActionButton {...props} size="large" variant="ghost" />
);

const CModalBlueSecondaryButton = (props: ComponentProps<typeof StyledActionButton>) => (
  <StyledActionButton {...props} size="large" color="blueInvert" />
);

const CModalButtonsGroup = (props: ComponentProps<typeof StyledButtonsGroup>) => (
  <StyledButtonsGroup {...props} />
);
//===== Utils Components

const ConfirmationModalNamespace = Object.assign(ConfirmationModal, {
  Title: CModalTitle,
  Paragraph: CModalParagraph,
  PrimaryButton: CModalPrimaryButton,
  PinkPrimaryButton: CModalPinkPrimaryButton,
  SecondaryButton: CModalSecondaryButton,
  BlueSecondaryButton: CModalBlueSecondaryButton,
  CloseButton: CloseBtn,
  ButtonsGroup: CModalButtonsGroup,
});

export { ConfirmationModalNamespace as ConfirmationModal };
