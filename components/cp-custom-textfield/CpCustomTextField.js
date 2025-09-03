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
      InputProps={{
        sx : { borderRadius: 2, height: 44}
      }}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      {...props}
    />
  );
}
