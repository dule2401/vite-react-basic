import { useLocales } from '@/shared/hooks/useLocales';
import { StyledAntdRadio, StyledAntdRadioProps } from '@/shared/theme/overrides/Radio';
import { Radio as AntdRadio } from 'antd';

export type RadioProps = StyledAntdRadioProps;

function Radio({ children, ...props }: RadioProps) {
  const { translate: t } = useLocales();
  return (
    <StyledAntdRadio {...props}>
      {typeof children === 'string' ? t(children) : children}
    </StyledAntdRadio>
  );
}

Radio.Group = AntdRadio.Group;
Radio.Button = AntdRadio.Button;

export { Radio };
