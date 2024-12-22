import { styled } from '@/shared/styles';

export const FullScreenOverlay = styled('div', {
  position: 'fixed',
  display: 'block',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'transparent',
  zIndex: 999,
});
