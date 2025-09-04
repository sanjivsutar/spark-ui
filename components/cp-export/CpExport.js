"use client";

import * as React from 'react';
import Image from 'next/image';
import { Menu, MenuItem } from "@mui/material";
import { useState } from 'react';

export default function ExportFile(){
    const [exportFormat, setExportFormat] = useState(null);
    return(
        <div>
              <button
                className="font-semibold text-[13px] text-[#022B59] h-[36px] rounded-lg bg-white flex items-center gap-2 border border-[#022B59] py-2 px-4"
                onClick={(e) => setExportFormat(e.currentTarget)}
              >
                <Image
                  src="/assets/icons/Export.svg"
                  alt="Export icon"
                  width={12}
                  height={12}
                />
                Export
              </button>
              <Menu
                anchorEl={exportFormat}
                open={Boolean(exportFormat)}
                PaperProps={{
                  sx: {
                    width: exportFormat ? exportFormat.offsetWidth : "auto",
                  },
                }}
                onClose={() => setExportFormat(null)}
              >
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    justifyContent: "center",
                    padding: "8px 16px",
                    color: "#0D0D11",
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                  onClick={() => setExportFormat(null)}
                >
                  JPEG
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    justifyContent: "center",
                    padding: "8px 16px",
                    color: "#0D0D11",
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                  onClick={() => setExportFormat(null)}
                >
                  PNG
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    justifyContent: "center",
                    padding: "8px 16px",
                    color: "#0D0D11",
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                  onClick={() => setExportFormat(null)}
                >
                  PDF
                </MenuItem>
              </Menu>
            </div>
    )
}