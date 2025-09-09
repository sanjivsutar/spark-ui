"use client";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ageOptions = ["All Age", "< 18", "18 - 24", "25 - 34", "35 - 44", "> 44"];
const platformOptions = ["All Platform", "Youtube", "Instagram"];
const categoryOptions = [
  "All Category",
  "Entertainment",
  "Technology",
  "Lifestyle",
];
const countryOptions = ["All Country", "India", "Australia", "Canada"];
const followerOptions = [
  "All Followers",
  "Nano (1K - 10K)",
  "Micro (10K - 100K)",
  "Macro (100K - 1M)",
  "Mega (1M+)",
];

export default function CustomFilterPanel() {
  const [age, setAge] = React.useState([]);
  const [platform, setPlatform] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [country, setCountry] = React.useState([]);
  const [followers, setFollowers] = React.useState([]);
  const [expanded, setExpanded] = React.useState({
    age: false,
    platform: false,
    category: false,
    country: false,
    followers: false,
  });
  const [accordionVisible, setAccordionVisible] = React.useState(true);

  const handleToggle = (panel) => (event) => {
    setExpanded((prev) => ({ ...prev, [panel]: !prev[panel] }));
  };

  const handleChange = (setState, value) => (event) => {
    setState((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  const getSelectedSummary = () => {
    const selected = [
      ...age.filter((a) => a !== "All Age"),
      ...platform.filter((p) => p !== "All Platform"),
      ...category.filter((c) => c !== "All Category"),
      ...country.filter((c) => c !== "All Country"),
      ...followers.filter((f) => f !== "All Followers"),
    ];
    return selected.length > 0 ? selected.join(", ") : "No filters selected";
  };

  const handleSummaryClick = () => {
    setAccordionVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      <Box
        sx={{
          mb: 0,
          p: "5px 20px 5px 10px",
          border: "1px solid #CECED6",
          borderRadius: 2,
          fontSize: "13px",
          height: "36px"
        }}
        onClick={handleSummaryClick}
      >
        <Typography
          sx={{
            fontSize: "13px",
          }}
           variant="h6"
        >
          Filters: {getSelectedSummary()}
        </Typography>
      </Box>

      <div
        className="custom-accordion"
        style={{
          width: '100%',
          position: "absolute",
          bottom: "auto",
          left: "0",
          display: accordionVisible ? "block" : "none",
        }}
      >
        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={handleToggle("age")}
            style={{
              cursor: "pointer",
              padding: "8px",
              backgroundColor: expanded.age ? "#E8ECEF" : "#F5F6F5",
              border: "1px solid #CECED6",
              borderRadius: "4px",
            }}
          >
            Age
          </div>
          <div
            className="accordion-content"
            style={{
              display: expanded.age ? "block" : "none",
              padding: "4px 0",
              border: "1px solid #CECED6",
              borderTop: "none",
              borderRadius: "0 0 4px 4px",
            }}
          >
            {ageOptions.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={age.includes(option)}
                    onChange={handleChange(setAge, option)}
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
                }
                label={option}
                sx={{ margin: 0, padding: "2px 0", width:'100%' }}
              />
            ))}
          </div>
        </div>

        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={handleToggle("platform")}
            style={{
              cursor: "pointer",
              padding: "10px",
              backgroundColor: expanded.platform ? "#E8ECEF" : "#F5F6F5",
              border: "1px solid #CECED6",
              borderRadius: "4px",
            }}
          >
            Platform
          </div>
          <div
            className="accordion-content"
            style={{
              display: expanded.platform ? "block" : "none",
              padding: "10px",
              border: "1px solid #CECED6",
              borderTop: "none",
              borderRadius: "0 0 4px 4px",
            }}
          >
            {platformOptions.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={platform.includes(option)}
                    onChange={handleChange(setPlatform, option)}
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
                }
                label={option}
                sx={{ margin: 0, padding: "2px 0" }}
              />
            ))}
          </div>
        </div>

        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={handleToggle("category")}
            style={{
              cursor: "pointer",
              padding: "10px",
              backgroundColor: expanded.category ? "#E8ECEF" : "#F5F6F5",
              border: "1px solid #CECED6",
              borderRadius: "4px",
            }}
          >
            Category
          </div>
          <div
            className="accordion-content"
            style={{
              display: expanded.category ? "block" : "none",
              padding: "10px",
              border: "1px solid #CECED6",
              borderTop: "none",
              borderRadius: "0 0 4px 4px",
            }}
          >
            {categoryOptions.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={category.includes(option)}
                    onChange={handleChange(setCategory, option)}
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
                }
                label={option}
                sx={{ margin: 0, padding: "2px 0" }}
              />
            ))}
          </div>
        </div>

        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={handleToggle("country")}
            style={{
              cursor: "pointer",
              padding: "10px",
              backgroundColor: expanded.country ? "#E8ECEF" : "#F5F6F5",
              border: "1px solid #CECED6",
              borderRadius: "4px",
            }}
          >
            Country
          </div>
          <div
            className="accordion-content"
            style={{
              display: expanded.country ? "block" : "none",
              padding: "10px",
              border: "1px solid #CECED6",
              borderTop: "none",
              borderRadius: "0 0 4px 4px",
            }}
          >
            {countryOptions.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={country.includes(option)}
                    onChange={handleChange(setCountry, option)}
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
                }
                label={option}
                sx={{ margin: 0, padding: "2px 0" }}
              />
            ))}
          </div>
        </div>

        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={handleToggle("followers")}
            style={{
              cursor: "pointer",
              padding: "10px",
              backgroundColor: expanded.followers ? "#E8ECEF" : "#F5F6F5",
              border: "1px solid #CECED6",
              borderRadius: "4px",
            }}
          >
            Followers
          </div>
          <div
            className="accordion-content"
            style={{
              display: expanded.followers ? "block" : "none",
              padding: "10px",
              border: "1px solid #CECED6",
              borderTop: "none",
              borderRadius: "0 0 4px 4px",
            }}
          >
            {followerOptions.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={followers.includes(option)}
                    onChange={handleChange(setFollowers, option)}
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
                }
                label={option}
                sx={{ margin: 0, padding: "2px 0" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
