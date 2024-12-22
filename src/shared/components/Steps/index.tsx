import { StyledAntdSteps, StyledStepsProps } from '@/shared/theme/overrides/Steps';
import { Steps as AntdSteps } from 'antd';

function Steps(props: StyledStepsProps) {
  return <StyledAntdSteps {...props} />;
}

Steps.Step = AntdSteps.Step;

export { Steps }
