import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const other = {
  autoHeight: true,
  showCellVerticalBorder: true,
  showColumnVerticalBorder: true,
};

const columns = [
  { field: 'firstName', headerName: 'First name', width: 130,disableColumnMenu: true},
  { field: 'lastName', headerName: 'Last name', width: 130,disableColumnMenu: true},
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
  { id: 4, lastName: 'Stark', firstName: 'Arya' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
];

export default function ValueGetterGrid() {
  return (
    <Box sx={{ height: 400, width: '100%',padding:2,borderRadius:'8px' }}>
      <DataGrid disableColumnResize rows={rows} columns={columns} {...other} />
    </Box>
  );
}
