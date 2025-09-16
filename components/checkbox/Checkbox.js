import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels({ label,labelSize, defaultChecked }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked={defaultChecked}
            sx={{
              '&.Mui-checked': { color: '#022B59' },
              '& .MuiSvgIcon-root': {
                borderRadius: 6,
                backgroundColor: '#fff',
                fontSize: 24,
              },
            }}
          />
        }
        label={label}
        sx={{
          '& .MuiFormControlLabel-label': {
            fontSize: labelSize || '14px', // use prop
          },
        }}
      />
    </FormGroup>
  );
}
