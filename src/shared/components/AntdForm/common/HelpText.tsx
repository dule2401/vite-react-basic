import { styled } from '@/shared/styles';

export const HelpText = styled('span', {
  display: 'inline-block',
  fontSize: '14px',
  variants: {
    color: {
      error: {
        color: '$error1',
      },
      default: {
        color: '$gray3',
      },
    },
  },
  defaultVariants: { color: 'default' },
});
