import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

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

const names = [
  "all",
  "laptop",
  "mobile",
  "tablet",
  "desktop",
  "accessories accessories",
];

export default function MultipleSelectCheckmarks() {
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
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          IconComponent={ExpandMoreRoundedIcon}
        >
          {names.map((name) => (
            <MenuItem
              sx={{
                padding: "0 3px 0 0",
                "&.Mui-checked": {
                  color: "#022B59",
                },
              }}
              key={name}
              value={name}
            >
              <Checkbox
                checked={personName.includes(name)}
                sx={{
                  color: "#022B59",
                  "&.Mui-checked": {
                    color: "#022B59",
                  },
                  "& .MuiSvgIcon-root": {
                    borderRadius: 6,
                    padding: 0,
                    fontSize: 28,
                    whiteSpace: "break-spaces",
                  },
                }}
              />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
