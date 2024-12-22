import { ReactNode } from 'react';
//
import { styled } from '@/shared/styles';
import { Container } from '../Container';

const Wrapper = styled('div', {
  width: '100%',
  position: 'sticky',
  left: 0,
  top: 0,
  zIndex: 100,
});

const StyledContainer = styled(Container, {
  maxWidth: 'unset',
});

export const PageHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <StyledContainer>{children}</StyledContainer>
    </Wrapper>
  );
};
