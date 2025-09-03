"use-client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, MenuItem } from "@mui/material";

export default function CpTimelineDropdown() {
    const [dateRangeInfo, setDateRangeInfo] = useState(null);
    return(
        <div>
            <button
                className="font-semibold text-[13px] text-[#022B59] rounded-lg bg-white flex items-center gap-2 border border-[#022B59] py-2 px-4"
                onClick={(e) => setDateRangeInfo(e.currentTarget)}
              >
                Last 30 days
                <Image
                  src="/assets/icons/Chevron-down.svg"
                  alt="Export icon"
                  width={12}
                  height={12}
                />
              </button>

              <Menu
                anchorEl={dateRangeInfo}
                open={Boolean(dateRangeInfo)}
                onClose={() => setDateRangeInfo(null)}
                PaperProps={{
                  sx: {
                    width: dateRangeInfo ? dateRangeInfo.offsetWidth : "auto", // Match button width
                  },
                }}
              >
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    padding: "8px 16px",
                    color: "#0D0D11",
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                  onClick={() => setDateRangeInfo(null)}
                >
                  Last 30 days
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    padding: "8px 16px",
                    color: "#0D0D11", // gray-700
                    "&:hover": {
                      backgroundColor: "#F3F4F6", // gray-100
                    },
                  }}
                  onClick={() => setDateRangeInfo(null)}
                >
                  Last 7 days
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    padding: "8px 16px",
                    color: "#0D0D11", // gray-700
                    "&:hover": {
                      backgroundColor: "#F3F4F6", // gray-100
                    },
                  }}
                  onClick={() => setDateRangeInfo(null)}
                >
                  Last year
                </MenuItem>
              </Menu>
            </div>
    )
}