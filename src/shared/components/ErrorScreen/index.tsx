import { Space } from 'antd';
//
import { APP_ORIGIN } from '@/config';
import { styled, css } from '@/shared/styles';
import { Button } from '../Button';
import { useTheme } from '@/shared/hooks/useTheme';

const unionSvg = new URL('/icons/union.svg', APP_ORIGIN).href;

const StyledSpace = styled(Space, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100vw',
  maxWidth: '100%',
});

type ErrorScreenProps = {
  statusCode: number | undefined;
  errorMessage: string | undefined;
  primaryAction?: {
    title: string;
    onClick: VoidFunction;
  };
};

export const ErrorScreen = ({ statusCode, errorMessage, primaryAction }: ErrorScreenProps) => {
  const { theme } = useTheme();
  return (
    <StyledSpace direction="vertical" align="center">
      <img src={unionSvg} alt="not found illustration" />
      <div style={{ marginTop: theme.space[4].value }}>
        <Space align="center" direction="vertical">
          <h1 style={{ fontSize: '50px', fontWeight: 'bold' }}>{statusCode}</h1>
          <h5 style={{ fontSize: '18px' }}>{errorMessage}</h5>
          {primaryAction && (
            <div className="actions">
              <Button
                color="blueInvert"
                variant="text"
                onClick={primaryAction.onClick}
                className={css({
                  px: '$8 !important',
                })()}
              >
                {primaryAction.title}
              </Button>
            </div>
          )}
        </Space>
      </div>
    </StyledSpace>
  );
};
