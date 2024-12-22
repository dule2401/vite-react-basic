import { Plus } from '@/shared/assets/icons';
import { styled } from '@/shared/styles';
import { Button, ButtonProps } from '../Button';

const StyledButton = styled(Button, {
  width: '100%',
  display: 'flex !important',
  alignItems: 'center',
  justifyContent: 'center',
  py: '$space$3 !important',
  gap: '$space$1',
  marginTop: '$space$2',
});
type Props = ButtonProps & {
  text?: string;
};
export const AddButton = ({ text = 'Thêm', ...props }: Props) => {
  return (
    <StyledButton color="blueInvert" {...props}>
      <Plus /> {text}
    </StyledButton>
  );
};
