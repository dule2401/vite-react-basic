import { Space } from 'antd';
import { styled, css } from '@/shared/styles';
import { Button } from '@/shared/components';
import { prefixAntdCls } from '@/shared/theme/config';

export const StyledTitle = styled('h5', {
  margin: 0,
  fontSize: '28px',
  fontWeight: 600,
  lineHeight: '34px',
  color: '$black111',

  textAlign: 'center',
});

export const StyledParagraph = styled('p', {
  margin: 0,

  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '30px',
  color: '$gray76',

  textAlign: 'center',
});

export const StyledCloseButton = styled('button', {
  width: '56px',
  height: '56px',
  margin: 0,

  border: 'none',
  borderRadius: '50%',
  outline: 'none',

  backgroundColor: '$bg2E8',
  color: '$blueMB',

  centerBlockContent: '',

  cursor: 'pointer',
});

export const StyleCloseButtonWrapper = styled('div', {
  position: 'absolute',
  top: '$space$5',
  right: '$space$5',
});

// @ts-ignore-start
export const StyledContentWrapper = styled(Space, {
  width: '100%',
  gap: '$space$9 !important',
  backgroundColor: '$white',

  '.illustration': {
    flexShrink: 0,
    maxWidth: '160px',
    maxHeight: '132px',
  },

  '.content': {
    'h5.title': {
      marginBottom: '$space$3',
      fontSize: '28px',
      fontWeight: 600,
      lineHeight: '34px',
      color: '$black111',

      textAlign: 'center',
    },

    'p.desc': {
      margin: 0,

      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '26px',
      color: '$gray76',

      textAlign: 'center',
    },
  },

  '.actions': {
    centerBlockContent: '',
    gap: '$space$5',

    '@sm': {
      flexDirection: 'column',
    },
  },

  [`.${prefixAntdCls}-modal-confirm-btns`]: {
    display: 'none',
  },
});

export const StyledActionButton = styled(Button, {
  minWidth: '240px',
  lineHeight: '24px !important',

  // span: {
  //   color: '$white',
  // },
});

export const StyledButtonsGroup = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$space$5',
});

// @ts-ignore-start
export const wrapClassName = css({
  // position: 'relative',
  [`.${prefixAntdCls}-modal-confirm-body .${prefixAntdCls}-modal-confirm-content`]: {
    margin: '0 !important',
  },

  [`.${prefixAntdCls}-modal-content`]: {
    borderRadius: '$space$4',

    [`.${prefixAntdCls}-modal-body`]: {
      py: 'calc($space$12 + $space$2)',
      '@sm': {
        py: '$space$6',
      },
    },
  },

  [`.${prefixAntdCls}-modal-confirm .${prefixAntdCls}-modal-confirm-btns`]: {
    display: 'none',
  },
})();
