import * as React from 'react';
import { Autocomplete, TextField, FormControl, Chip, Avatar } from '@mui/material';

export default function Options({ value, onChange }) {
  const airlines = [
    { code: 'EK', name: 'Emirates', logo: 'https://i.ibb.co/tLZpPy3/Emirates-logo-svg.png' },
    { code: 'EY', name: 'Etihad Airways', logo: 'https://i.ibb.co/wsx10bq/Etihad-Airways-Logo-2003-1.jpg' },
    { code: 'QR', name: 'Qatar Airways', logo: 'https://i.ibb.co/r3HNgKN/Qatar-Airways-Logo.png' },
    { code: 'SQ', name: 'Singapore', logo: 'https://i.ibb.co/RTj4bQj/img-1536839001-811-1729-p-45-F8-A2-F7-D648-5621-F17-F2-C67965-FB643-2544003-a-Wxvdm-Vr-ZWxse-Qo-Crop.jpg' },
    { code: 'CX', name: 'Cathay Pacific', logo: 'https://i.ibb.co/WgJb6cm/cathay.png' },
    { code: 'TK', name: 'Turkish Airlines', logo: 'https://i.ibb.co/5RMnq5G/Turkish-Airlines-Logo.png' },
    { code: 'BR', name: 'EVA Air', logo: 'https://i.ibb.co.com/d6v2Ncp/EVA-Air-Logo.jpg' },
    { code: 'AF', name: 'Air France', logo: 'https://i.ibb.co/027vbyZ/Air-France-Logo-1976-1990.jpg' },
    { code: 'LX', name: 'SWISS Airlines', logo: 'https://i.ibb.co/sQ8Sp0w/Swiss-Airline-Logo.png' },
    { code: 'JL', name: 'Japan Airlines', logo: 'https://i.ibb.co/4SXGzW7/Japan-Airlines-Logo.png' },
    // Add more options here if needed
  ];

  const filterOptions = (options, { inputValue }) => {
    return options.filter(option =>
      option.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const onCarrierChange = (event, selectedOption) => {
    onChange(selectedOption); // Call the onChange prop to update the parent state
  };

  return (
    <div>
      <FormControl sx={{ width: '100%', maxWidth: 400 }}>
        <Autocomplete
          options={airlines}
          getOptionLabel={(option) => option.name}
          filterOptions={filterOptions}
          onChange={onCarrierChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Airlines"
              variant="outlined"
              sx={{
                minWidth: 260,
                width: '100%',
                maxWidth: 400,
                '& .MuiOutlinedInput-root': {
                  height: 52, // Adjust the height here
                  display: 'flex',
                  alignItems: 'center', // Center align the input and placeholder text
                }
              }}
            />
          )}
          renderOption={(props, option) => (
            <li
              {...props}
              key={option.code}
              className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-200 transition-colors duration-200 ease-in-out"
            >
              <div className="flex items-center">
                <Avatar alt={option.name} src={option.logo} sx={{ width: 24, height: 24, marginRight: 2 }} />
                {option.name}
              </div>
              <Chip label={option.code} color="primary" size="small" />
            </li>
          )}
        />
      </FormControl>
    </div>
  );
}
