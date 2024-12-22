import { css } from '@/shared/styles';

type StatusProps = {
  color: string;
  title: string;
};
export const Status = ({ color, title }: StatusProps) => {
  return (
    <div
      className={css({
        color,
        display: 'flex',
        alignItems: 'center',
      })()}
    >
      <div
        className={css({
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          marginRight: '$space$2',
          backgroundColor: 'CurrentColor',
          display: 'inline-block',
        })()}
      />
      <span
        className={css({
          color: 'CurrentColor',
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: '16px',
        })()}
      >
        {title}
      </span>
    </div>
  );
};
