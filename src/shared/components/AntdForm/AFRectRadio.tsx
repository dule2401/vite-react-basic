import { Fragment } from 'react';
import { css } from '@/shared/styles';
import { AFRadio, AFRadioProps } from '@/shared/components/AntdForm/AFRadio';
import { Radio, RadioProps } from '../Radio';

export type AFRectRadioProps = Omit<AFRadioProps, 'children'> & {
  options: Array<Omit<RadioProps, 'value'> & { value: string | number }>;
};
export const AFRectRadio = ({ options, ...others }: AFRectRadioProps) => {
  return (
    <AFRadio
      {...others}
      radioProps={{
        style: { width: '100%' },
        ...others.radioProps,
      }}
    >
      <div className={css({ width: '100%', display: 'flex' })()}>
        {options.map((e) => (
          <Fragment key={`${e.value}`}>
            <Radio variant="rect" {...e} />
          </Fragment>
        ))}
      </div>
    </AFRadio>
  );
};
