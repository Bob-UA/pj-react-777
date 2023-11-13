import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { CustomDatePickerInput } from '../DaySwitch/DaySwitch.styled';

export const CustomDatePick = ({ selected, onChange }) => {

  const endYear = new Date().getFullYear();

  const range = (firstYear, currentYear) => {
    let years = [];
    for (let i = currentYear; firstYear < i; i--) {
      years.push(i);
    }
    return years;
  };

  const years = range(1900, endYear);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <DatePicker
      selected={selected}
      dateFormat={'dd.MM.yyyy'}
      customInput={<CustomDatePickerInput />}
      onChange={onChange}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {'<'}
            </button>
            <select
              value={date.getFullYear()}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[date.getMonth()]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {'>'}
            </button>
          </div>
        )
      )}
    />
  );
};
