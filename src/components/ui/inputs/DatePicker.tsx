import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({ label }: { label: string }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        slotProps={{
          textField: {
            fullWidth: true,
            sx: {
              width: '100%',
              input: {
                color: '#fff',
              },
              label: {
                color: '#fff',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff',
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
