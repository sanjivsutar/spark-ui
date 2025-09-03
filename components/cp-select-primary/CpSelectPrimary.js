"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import OutlinedInput from "@mui/material/OutlinedInput";
import { red } from "@mui/material/colors";

export default function SelectPrimary({
  label = "",
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
        {/* Render label only if no value is selected */}
        {!value && <div className="absolute top-3 left-3 text-sm font-medium text-[#60607B]">{label}</div>}

        <Select
          displayEmpty
          value={value}
          onChange={onChange}
          IconComponent={showIcon ? ExpandMoreRoundedIcon : undefined}
          input={
            <OutlinedInput
              sx={{
                borderRadius: "8px",
                height: "44px",
                color: "#022B59",
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
              color: "black",
            },
             height: "44px", 
             borderRadius: "8px", 
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CECED6",
            borderWidth: "1px",
          },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                borderRadius: 2,
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
