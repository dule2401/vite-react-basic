import { forwardRef, PropsWithChildren } from 'react';
import { ComponentProps } from '@stitches/react';
//
import { styled } from '@/shared/styles';
import { Container } from '../Container';

export const Z_INDEX = 900

const Wrapper = styled('div', {
  width: '100%',
  position: 'fixed',
  left: 0,
  bottom: 0,
  backgroundColor: '$colors$white',
  zIndex: Z_INDEX ,
  borderTop: '1px solid $stroke1',
});

const StyledContainer = styled(Container, {
  py: '$space$2',
  px: '$space$4',
  maxWidth: 'unset',
});

type PageFooterActionsProps = {
  wrapperProps?: ComponentProps<typeof Wrapper>;
  containerProps?: Omit<ComponentProps<typeof StyledContainer>, 'children'>;
};

export const PageFooterActions = forwardRef<
  HTMLDivElement,
  PropsWithChildren<PageFooterActionsProps>
>(({ children, wrapperProps, containerProps }, wrapperRef) => {
  return (
    <Wrapper {...wrapperProps} ref={wrapperRef}>
      <StyledContainer {...containerProps}>{children}</StyledContainer>
    </Wrapper>
  );
});
