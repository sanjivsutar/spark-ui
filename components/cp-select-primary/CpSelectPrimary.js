"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function SelectPrimary({
  label = "Age",
  value,
  onChange,
  items = [],
  minWidth = 135,
  maxWidth = 135,
  showIcon = true,
  MenuPropsOverride,
}) {
  return (
    <Box sx={{ minWidth, maxWidth }}>
      <FormControl fullWidth>
        <InputLabel id="sp-label">{label}</InputLabel>

        <Select
          labelId="sp-label"
          id="sp"
          displayEmpty
          value={value}
          label={label}
          onChange={onChange}
          IconComponent={showIcon ? ExpandMoreRoundedIcon : undefined}
          input={
            <OutlinedInput
              sx={{
                color: "#022B59",
                borderRadius: 2, // 8px
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#022B59",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#022B59",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#022B59",
                },
              }}
            />
          }
          sx={{
            "& .MuiSelect-icon": {
              color: "black", // icon color
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                borderRadius: 2, // rounded dropdown menu
              },
            },
            ...MenuPropsOverride,
          }}
        >
          {items.map((it) => (
            <MenuItem key={String(it.value)} value={it.value} disabled={it.disabled}>
              {it.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
