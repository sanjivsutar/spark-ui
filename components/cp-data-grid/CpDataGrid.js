"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Chip, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ArchiveIcon from "@mui/icons-material/Archive";
import { red } from "@mui/material/colors";

const columns = [
  { field: "name", headerName: "Name", width: 200, renderCell: (params) => (
      <a href="#" className="text-blue-600 underline">{params.value}</a>
    )
  },
  { field: "subBrand", headerName: "Sub Brand", width: 180 },
  { field: "product", headerName: "Product", width: 150 },
  { field: "type", headerName: "Type", width: 160 },
  { field: "period", headerName: "Period", width: 200 },
  { field: "lastUpdated", headerName: "Last Updated", width: 180 },
  {
    field: "status",
    headerName: "Status",
    width: 180,
    renderCell: (params) => {
      switch (params.value) {
        case "Ongoing":
          return (
            <Chip
              icon={<ScheduleIcon sx={{ fontSize: 16 }} />}
              label="Ongoing"
              color="warning"
              variant="outlined"
              sx={{ borderRadius: "12px", fontSize:"12px",fontWeight: 500,color: "#995D25",backgroundColor:"#FFF0E2",border:"0",padding:"4px 8px", maxHeight:"24px" }}
            />
          );
        case "Completed":
          return (
            <Chip
              icon={<CheckCircleIcon sx={{ fontSize: 16 }} />}
              label="Completed"
              color="success"
              variant="outlined"
              sx={{ borderRadius: "12px", fontSize:"12px",fontWeight: 500,color: "#257F4E",backgroundColor:"#E2F8EC",border:"0",padding:"4px 8px", maxHeight:"24px" }}
            />
          );
        case "Archived":
          return (
            <Chip
              icon={<ArchiveIcon sx={{ fontSize: 16 }} />}
              label="Archived"
              color="info"
              variant="outlined"
              sx={{ borderRadius: "12px", fontSize:"12px",fontWeight: 500,color: "#044085",backgroundColor:"#F2F7FD",border:"0",padding:"4px 8px", maxHeight:"24px" }}
            />
          );
        default:
          return params.value;
      }
    },
  },
  {
    field: "actions",
    headerName: "",
    sortable: false,
    width: 80,
    renderCell: () => (
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    ),
  },
];

const rows = [
  { id: 1, name: "Test campaign", subBrand: "NEC Japan", product: "Laptop", type: "Sustenance", period: "July 2025 - Aug 2025", lastUpdated: "12th July, 2025", status: "Ongoing" },
  { id: 2, name: "Test campaign", subBrand: "NEC Japan", product: "Laptop", type: "Sustenance", period: "July 2025 - Aug 2025", lastUpdated: "12th July, 2025", status: "Completed" },
  { id: 3, name: "Test campaign", subBrand: "NEC Japan", product: "Laptop", type: "Sustenance", period: "July 2025 - Aug 2025", lastUpdated: "12th July, 2025", status: "Archived" },
  { id: 4, name: "Test campaign", subBrand: "NEC Japan", product: "Laptop", type: "Sustenance", period: "July 2025 - Aug 2025", lastUpdated: "12th July, 2025", status: "Completed" },
];

export default function ValueGetterGrid() {
  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableColumnMenu
        sx={{
          borderRadius: 3,
          "& .MuiDataGrid-cell--textLeft": {
            fontSize: "14px",
            color: "#0D0D11", 
            justifyContent: "center",
            alignItems: "center",
          },
          "& .MuiDataGrid-columnHeader": {
            background: "linear-gradient(180deg,rgba(2, 43, 89, 1) 0%,rgba(4, 64, 133, 1) 100%)",
            color: "white",
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 500,
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #EEEEF1",
            borderRight: "1px solid #EEEEF1",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#F9FAFB",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "white",
          },
          "& .MuiDataGrid-columnSeparator--sideRight": {
          backgroundColor: "#EEEEF1",
          maxWidth: "1px",
          color:"transparent",
          right: "0",
        },
        }}
      />
    </Box>
  );
}

