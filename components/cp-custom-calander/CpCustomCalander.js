"use client";

import * as React from "react";
import { Stack, TextField, IconButton, InputAdornment, Box } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

function BasicDateRangeCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangeCalendar"]}>
        <DateRangeCalendar />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default function CalendarWithTrigger() {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Stack direction="row" spacing={2} mb={2}>
      {/* TextField with Calendar icon */}
      <TextField
        placeholder="Select date range"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleToggle}>
                <CalendarTodayIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Conditionally render calendar */}
      {open && (
        <Box sx={{ position: "absolute", mt: 6, zIndex: 10 }}>
          <BasicDateRangeCalendar />
        </Box>
      )}
    </Stack>
  );
}
