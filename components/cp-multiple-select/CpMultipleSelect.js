import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Typography } from "@mui/material";

const ITEM_HEIGHT = 36;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 180,
    },
  },
};

// renamed so we can accept "names" as a prop safely
const defaultNames = [
  "all",
  "laptop",
  "mobile",
  "tablet",
  "desktop",
  "accessories accessories",
];

// accept props properly; fallback to defaultNames
export default function MultipleSelectCheckmarks({ names = defaultNames } = {}) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 180, maxWidth: 180 }} size="small">
        <Select
          id="demo-multiple-checkbox"
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={
            <OutlinedInput
              sx={{
                margin: 0,
                padding: 0,
                borderRadius: 2,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#CECED6",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#CECED6 !important",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "5px", // Adjust padding for no-label input
                },
              }}
            />
          }
          sx={{
            "& .MuiSelect-icon": {
              color: "black",
            },
            height: "36px",
            borderRadius: "8px",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#CECED6",
              borderWidth: "1px",
            },
            "& .MuiMenuItem-root": {
              padding: 0,
              fontSize: "13px",
              "&:hover": {
                backgroundColor: "#F5F6F5",
              },
              "&.Mui-selected": {
                backgroundColor: "#E8ECEF",
                "&:hover": {
                  backgroundColor: "#E8ECEF",
                },
              },
              "& .MuiListItemText-primary": {
                fontSize: "13px",
                color: "#022B59",
              },
            },
          }}
          // renderValue={(selected) => selected.join(", ")}
          renderValue={(selected) => (
            <Typography sx={{ fontSize: "12px" }}>
              <span style={{ color: "#60607B" }}>Sort by:</span>{" "}
              <span style={{ fontWeight: 500, color: "#0D0D11" }}>
                {Array.isArray(selected) ? selected.join(", ") : selected}
              </span>
            </Typography>
          )}
          MenuProps={MenuProps}
          IconComponent={ExpandMoreRoundedIcon}
        >
          {Array.isArray(names) &&
            names.map((name) => (
              <MenuItem
                sx={{
                  padding: "0 3px 0 0",
                  "&.Mui-checked": {
                    color: "#E6F0FB",
                  },
                }}
                key={name}
                value={name}
              >
                {/* <Checkbox
                checked={personName.includes(name)}
                sx={{
                  color: "#0D0D11",
                  "&.Mui-checked": {
                    color: "#0D0D11"
                  },
                  "& .MuiSvgIcon-root": {
                    borderRadius: 6,
                    padding: 0,
                    fontSize: 28,
                    whiteSpace: "break-spaces",
                  },
                }}
              /> */}
                <ListItemText
                  primary={name}
                  className="p-4 text-xs font-medium text-sprk-dark-2"
                />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
