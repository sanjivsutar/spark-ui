"use client";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

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
  const [hoveredItem, setHoveredItem] = React.useState(null);

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
          p: "16px",
          borderBottom: "1px solid #EEEEF1",
          borderRadius: 2,
          fontSize: "14px",
          fontWeight: 500,
          color: '#0D0D11',
          // height: "36px"
          width: '245px',
          display: 'flex',
          justifyContent: 'space-between'
        }}
        onClick={handleSummaryClick}
      >
        <Typography
          sx={{
            fontSize: "13px",
          }}
           variant="h6"
        >
          {/* Filters: {getSelectedSummary()} */}
          Filters
        </Typography>
        <button 
          className="btn-link" 
          onClick={(e) => {
            e.stopPropagation();
          }}>
          reset
        </button>
      </Box>

      <div
        className="custom-accordion"
        style={{
          width: '100%',
          position: "absolute",
          bottom: "auto",
          left: "0",
          display: accordionVisible ? "block" : "none",
          maxHeight: "414px",
          maxWidth: "260px",
          overflowY: "auto",
        }}
      >
        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={handleToggle("age")}
            style={{
              cursor: "pointer",
              padding: "16px",
              // backgroundColor: expanded.age ? "#E8ECEF" : "#F5F6F5",
              backgroundColor: hoveredItem === "age" ? "#E6F0FB" : "#fff",
              borderBottom: "1px solid #EEEEF1",
              // borderRadius: "4px",
              textTransform: 'uppercase',
              color: '#60607B',
              fontSize: '12px',
              fontWeight: 500,
              display: 'flex',
              justifyContent: 'space-between'
            }}
            onMouseEnter={() => setHoveredItem("age")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Age
            <div className="flex gap-2">
              {
                age.length > 0 && <p className="rounded-xl bg-[#E6F0FB] py-[1px] px-2 text-sm font-medium  text-[#022B59]">{age.length}/{ageOptions.length}</p> 
              }
              {expanded.age ? 
                <Image src="/assets/icons/Chevron-up.svg" alt="Chevron up icon" width={14} height={14} /> 
                : <Image src="/assets/icons/Chevron-down.svg" alt="Chevron down icon" width={14} height={14} />  
              }
            </div>
          </div>
          <div
            className="accordion-content"
            style={{
              display: expanded.age ? "block" : "none",
              padding: "10px",
              // border: "1px solid #CECED6",
              // borderTop: "none",
              // borderRadius: "0 0 4px 4px",
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
                      color: "#0D0D11",
                      "&.Mui-checked": {
                        color: "#0D0D11",
                      },
                      "& .MuiSvgIcon-root": {
                        borderRadius: "12px",
                        borderColor: '#7F7F97',
                        padding: 0,
                        fontSize: 18,
                        whiteSpace: "break-spaces",
                      },
                    }}
                  />
                }
                label={option}
                sx={{ 
                  margin: 0, 
                  padding: "2px 0", 
                  width:'100%', 
                  "& .MuiFormControlLabel-label": {
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#0D0D11",
                  },
                }}
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
              padding: "16px",
              // backgroundColor: expanded.age ? "#E8ECEF" : "#F5F6F5",
             backgroundColor: hoveredItem === "platform" ? "#E6F0FB" : "#fff",
              borderBottom: "1px solid #EEEEF1",
              // borderRadius: "4px",
              textTransform: 'uppercase',
              color: '#60607B',
              fontSize: '12px',
              fontWeight: 500,
              display: 'flex',
              justifyContent: 'space-between'
            }}
            onMouseEnter={() => setHoveredItem("platform")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Platform
            <div className="flex gap-2">
              {
                platform.length > 0 && <p className="rounded-xl bg-[#E6F0FB] py-[1px] px-2 text-sm font-medium  text-[#022B59]">{platform.length}/{platformOptions.length}</p> 
              }
              {expanded.platform ? 
                <Image src="/assets/icons/Chevron-up.svg" alt="Chevron up icon" width={14} height={14} /> 
                : <Image src="/assets/icons/Chevron-down.svg" alt="Chevron down icon" width={14} height={14} />  
              }
            </div>
          </div>
          <div
            className="accordion-content"
            style={{
              display: expanded.platform ? "block" : "none",
              padding: "10px",
              // border: "1px solid #CECED6",
              // borderTop: "none",
              // borderRadius: "0 0 4px 4px",
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
                      color: "#0D0D11",
                      "&.Mui-checked": {
                        color: "#0D0D11",
                      },
                      "& .MuiSvgIcon-root": {
                        borderRadius: "12px",
                        borderColor: '#7F7F97',
                        padding: 0,
                        fontSize: 18,
                        whiteSpace: "break-spaces",
                      },
                    }}
                  />
                }
                label={option}
                sx={{ 
                  margin: 0, 
                  padding: "2px 0", 
                  width:'100%', 
                  "& .MuiFormControlLabel-label": {
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#0D0D11",
                  },
                }}
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
              padding: "16px",
              // backgroundColor: expanded.age ? "#E8ECEF" : "#F5F6F5",
              backgroundColor: hoveredItem === "category" ? "#E6F0FB" : "#fff",
              borderBottom: "1px solid #EEEEF1",
              // borderRadius: "4px",
              textTransform: 'uppercase',
              color: '#60607B',
              fontSize: '12px',
              fontWeight: 500,
              display: 'flex',
              justifyContent: 'space-between'
            }}
            onMouseEnter={() => setHoveredItem("category")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Category
            <div className="flex gap-2">
              {
                category.length > 0 && <p className="rounded-xl bg-[#E6F0FB] py-[1px] px-2 text-sm font-medium  text-[#022B59]">{category.length}/{categoryOptions.length}</p> 
              }
              {expanded.category ? 
                <Image src="/assets/icons/Chevron-up.svg" alt="Chevron up icon" width={14} height={14} /> 
                : <Image src="/assets/icons/Chevron-down.svg" alt="Chevron down icon" width={14} height={14} />  
              }
            </div>
          </div>
          <div
            className="accordion-content"
            style={{
              display: expanded.category ? "block" : "none",
              padding: "10px",
              // border: "1px solid #CECED6",
              // borderTop: "none",
              // borderRadius: "0 0 4px 4px",
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
                      color: "#0D0D11",
                      "&.Mui-checked": {
                        color: "#0D0D11",
                      },
                      "& .MuiSvgIcon-root": {
                        borderRadius: "12px",
                        borderColor: '#7F7F97',
                        padding: 0,
                        fontSize: 18,
                        whiteSpace: "break-spaces",
                      },
                    }}
                  />
                }
                label={option}
                sx={{ 
                  margin: 0, 
                  padding: "2px 0", 
                  width:'100%', 
                  "& .MuiFormControlLabel-label": {
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#0D0D11",
                  },
                }}
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
              padding: "16px",
              // backgroundColor: expanded.age ? "#E8ECEF" : "#F5F6F5",
              backgroundColor: hoveredItem === 'country' ? "#E6F0FB" : "#fff",
              borderBottom: "1px solid #EEEEF1",
              // borderRadius: "4px",
              textTransform: 'uppercase',
              color: '#60607B',
              fontSize: '12px',
              fontWeight: 500,
              display: 'flex',
              justifyContent: 'space-between'
            }}
            onMouseEnter={() => setHoveredItem("country")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Country
            <div className="flex gap-2">
              {
                country.length > 0 && <p className="rounded-xl bg-[#E6F0FB] py-[1px] px-2 text-sm font-medium  text-[#022B59]">{country.length}/{countryOptions.length}</p> 
              }
              {expanded.country ? 
                <Image src="/assets/icons/Chevron-up.svg" alt="Chevron up icon" width={14} height={14} /> 
                : <Image src="/assets/icons/Chevron-down.svg" alt="Chevron down icon" width={14} height={14} />  
              }
            </div>
          </div>
          <div
            className="accordion-content"
            style={{
              display: expanded.country ? "block" : "none",
              padding: "10px",
              // border: "1px solid #CECED6",
              // borderTop: "none",
              // borderRadius: "0 0 4px 4px",
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
                      color: "#0D0D11",
                      "&.Mui-checked": {
                        color: "#0D0D11",
                      },
                      "& .MuiSvgIcon-root": {
                        borderRadius: "12px",
                        borderColor: '#7F7F97',
                        padding: 0,
                        fontSize: 18,
                        whiteSpace: "break-spaces",
                      },
                    }}
                  />
                }
                label={option}
                sx={{ 
                  margin: 0, 
                  padding: "2px 0", 
                  width:'100%', 
                  "& .MuiFormControlLabel-label": {
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#0D0D11",
                  },
                }}
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
              padding: "16px",
              // backgroundColor: expanded.age ? "#E8ECEF" : "#F5F6F5",
             backgroundColor: hoveredItem === 'followers' ? "#E6F0FB" : "#fff",
              borderBottom: "1px solid #EEEEF1",
              // borderRadius: "4px",
              textTransform: 'uppercase',
              color: '#60607B',
              fontSize: '12px',
              fontWeight: 500,
              display: 'flex',
              justifyContent: 'space-between'
            }}
            onMouseEnter={() => setHoveredItem("followers")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Followers
            <div className="flex gap-2">
              {
                followers.length > 0 && <p className="rounded-xl bg-[#E6F0FB] py-[1px] px-2 text-sm font-medium  text-[#022B59]">{followers.length}/{followerOptions.length}</p> 
              }
              {expanded.followers ? 
                <Image src="/assets/icons/Chevron-up.svg" alt="Chevron up icon" width={14} height={14} /> 
                : <Image src="/assets/icons/Chevron-down.svg" alt="Chevron down icon" width={14} height={14} />  
              }
            </div>
          </div>
          <div
            className="accordion-content"
            style={{
              display: expanded.followers ? "block" : "none",
              padding: "10px",
              // border: "1px solid #CECED6",
              // borderTop: "none",
              // borderRadius: "0 0 4px 4px",
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
                      color: "#0D0D11",
                      "&.Mui-checked": {
                        color: "#0D0D11",
                      },
                      "& .MuiSvgIcon-root": {
                        borderRadius: "12px",
                        borderColor: '#7F7F97',
                        padding: 0,
                        fontSize: 18,
                        whiteSpace: "break-spaces",
                      },
                    }}
                  />
                }
                label={option}
                sx={{ 
                  margin: 0, 
                  padding: "2px 0", 
                  width:'100%', 
                  "& .MuiFormControlLabel-label": {
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#0D0D11",
                  },
                }}
              />
            ))}
          </div>
        </div>

        {/* sticky button */}
         <Box
          sx={{
            position: "sticky",
            bottom: 0,
            backgroundColor: "#fff",
            borderTop: "1px solid #EEEEF1",
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            padding: '24px 51px 24px 43px',
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
            opacity: 2
          }}
        >
          <button className="btn-default btn-primary">
            cancel
          </button>
          <button className={`${age.length !== 0 || country.length !== 0 || category.length !== 0 || platform.length !== 0 || followers.length !== 0 ? 'btn-default btn-primary' : 'bg-[#D6D6DD] text-xs font-semibold text-[#05051E66] py-[10px] px-[20px] rounded-xl'}`}>
            Apply
          </button>
        </Box>
      </div>
    </div>
  );
}
