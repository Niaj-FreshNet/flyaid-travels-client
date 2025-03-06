import React from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DatePickerComponent = ({ value, onChangeDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={onChangeDate}
        label="Flight Date"
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            fullWidth
            className="h-10" // Adjust the height using Tailwind CSS
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
