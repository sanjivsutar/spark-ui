// components/CustomTextField.js
import * as React from "react";
import TextField from "@mui/material/TextField";

export default function CustomTextField({
  label = "",
  placeholder = "",
  value,
  onChange,
  fullWidth = true,
  ...props
}) {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      {...props}
    />
  );
}
