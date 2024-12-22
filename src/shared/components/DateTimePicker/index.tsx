import { useLocales } from '@/shared/hooks/useLocales';
import { KeyboardDateTimePickerProps, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { memo } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import vi from 'date-fns/locale/vi';
import Icon from '@ant-design/icons';
import { Calendar } from '@/shared/assets/icons';
import { StyledDateTimePicker } from '@/shared/theme/overrides/DateTimePicker';

export type DateTimePickerProps = {
  keyboardDateTimePickerProps: Omit<KeyboardDateTimePickerProps, 'size'>;
} & {
  size?: 'small' | 'medium';
  bgColor?: 'white';
};

export const DateTimePicker = memo<DateTimePickerProps>(
  ({ keyboardDateTimePickerProps: _keyboardDateTimePickerProps, size }) => {
    const { translate: t } = useLocales();

    const keyboardDateTimePickerProps = {
      cancelLabel: t('common.cancel'),
      okLabel: t('common.ok'),
      ..._keyboardDateTimePickerProps,
    };

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={vi}>
        <StyledDateTimePicker
          {...keyboardDateTimePickerProps}
          keyboardIcon={<Icon component={Calendar} style={{ fontSize: 20 }} />}
          size={size}
        />
      </MuiPickersUtilsProvider>
    );
  },
);
