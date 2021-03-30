import * as React from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

import './CustomDatePicker.scss';

interface IDatePickerProps extends ReactDatePickerProps {
  date?: Date;
  customChange?: Function;
}

const DatePicker2: React.FC<IDatePickerProps> = React.memo(
  ({ date, customChange, onChange, ...props }) => {
    const [startDate, setStartDate] = React.useState<Date | null>(date || null);
    const [endDate, setEndDate] = React.useState<Date | null>(null);

    React.useEffect(() => {
      date && setStartDate(date);
    }, [date]);

    const handleChange = (
      dateArgs: Date | [Date, Date] | null,
      event?: React.SyntheticEvent<any, Event>
    ): void => {
      if (dateArgs) {
        if (props.selectsRange) {
          const [start, end] = dateArgs as Date[];
          setStartDate(start);
          setEndDate(end);
        } else {
          setStartDate(dateArgs as Date);
          !!customChange && customChange(dateArgs, event);
        }
      } else {
        setStartDate(null);
        setEndDate(null);
      }
    };

    return (
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        {...props}
      />
    );
  }
);

export default DatePicker2;
