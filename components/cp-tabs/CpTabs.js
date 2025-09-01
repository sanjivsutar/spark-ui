"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

// Removed TypeScript type alias for JavaScript compatibility

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={(_, v) => setValue(v)}
        textColor="primary"
        aria-label="custom tabs with gradient indicator"
        slotProps={{
          indicator: {
            sx: {
              background: "linear-gradient(90deg, #EC3128, #F56233, #FF9B3F)",
              height: 4,
              borderRadius: 2,
            },
          },
        }}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tab
          value="one"
          label="Item One"
          sx={{
            fontWeight: 500,
            color: 'black',
            textTransform: 'none',
            '&.Mui-selected': { color: 'black' , fontWeight: 700},
          }}
        />
        <Tab
          value="two"
          label="Item Two"
          sx={{
            fontWeight: 500,
            color: 'black',
            textTransform: 'none',
            '&.Mui-selected': { color: 'black' , fontWeight: 700},
          }}
        />
        <Tab
          value="three"
          label="Item Three"
          sx={{
            fontWeight: 500,
            color: 'black',
            textTransform: 'none',
            '&.Mui-selected': { color: 'black' , fontWeight: 700},
          }}
        />
      </Tabs>
    </Box>
  );
}
