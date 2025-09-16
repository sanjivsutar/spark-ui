"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  Modal,
  Stack,
} from "@mui/material";
import SelectPrimary from "../cp-select-primary/CpSelectPrimary";
import CustomTextField from "../cp-custom-textfield/CpCustomTextField";
import BasicDatePicker from "../cp-custom-calander/CpCustomCalander";
import CheckboxLabels from "../checkbox/Checkbox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 850,
  bgcolor: "background.paper",
  borderRadius: 2,
  BorderColor: "none",
  boxShadow: 24,
  p: 4,
  maxHeight: "90vh",
  overflowY: "auto",
};

export default function AddNewClient({ open, handleClose }) {
  const [formData, setFormData] = useState({
    clientName: "",
    subBrand: "",
    useCount: "",
    startDate: null,
    endDate: null,
    currency: "",
    keyKpi: "",
    description: "",
  });

  const dropdownOptions = {
    subBrands: [
      { value: "brand1", label: "Brand 1" },
      { value: "brand2", label: "Brand 2" },
    ],
    useCounts: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
    ],
    keyKpis: [
      { value: "kpi 1", label: "Kpi 1" },
      { value: "kpi 2", label: "Kpi 2" },
    ],
    currency: [
      { value: "rupee", label: "Rupee" },
      { value: "dollar", label: "Dollar" },
    ],
  };

  const handleChange = (field) => (event) => {
    const value = event?.target?.value ?? event;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitting client:", formData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div className="flex items-center justify-between mb-6">
            <div className="sec-title">Add New Client</div>
            <button onClick={handleClose}>
              <Image src="/assets/images/close.png" alt="Icon" width={20} height={20}/>
            </button>
        </div>
        <Stack direction="row" spacing={2} mb={2}>
          <div className="felx flex-col">
            <div className="mb-2">Client Name <span className="text-red-500">*</span></div>
            <CustomTextField
            placeholder="Enter client name"
            value={formData.clientName}
            onChange={handleChange("clientName")}
             sx={{ minWidth: 380 }}
            />
          </div>
          <div className="felx flex-col">
          <div className="mb-2">Brand/Sub Brand <span className="text-red-500">*</span></div>
          <SelectPrimary
            placeholder="Sub Brand"
            label="Sub Brand"
            value={formData.subBrand}
            onChange={handleChange("subBrand")}
            items={dropdownOptions.subBrands}
            minWidth={380}  
            maxWidth={400}
          />
          </div>
        </Stack>

        <Stack direction="row" spacing={2} mb={2}>
          <div className="felx flex-col">
          <div className="mb-2">Modules Enrolled <span className="text-red-500">*</span></div>
          <div className="flex gap-2 flex-row">
          <CheckboxLabels
          label="Marketing Strategy"
          labelSize={12}/>
          <CheckboxLabels
          label="Creatives"
          labelSize={12}/>
          <CheckboxLabels
          label="Influencers"
          labelSize={12}/></div>
          </div>
          <div className="felx flex-col">
          <div className="mb-2">User Count <span className="text-red-500">*</span></div>
          <SelectPrimary
            fullWidth
            label="1"
            value={formData.useCount}
            onChange={handleChange("useCount")}
            items={dropdownOptions.useCounts}
            minWidth={380}  
            maxWidth={400}
          />
          </div>
        </Stack>

        <Stack direction="row" spacing={2} mb={2}>
          <div className="felx flex-col">
          <div className="mb-2">Start Date</div>
          <BasicDatePicker/>
          </div>
          <div className="felx flex-col">
          <div className="mb-2">End Date</div>
          <BasicDatePicker/>
          </div>
        </Stack>

        <Stack direction="row" spacing={2} mb={2}>
        <div className="felx flex-col">
          <div className="mb-2">Currency <span className="text-red-500">*</span></div>
          <SelectPrimary
            label="Select Currency"
            value={formData.currency}
            onChange={handleChange("currency")}
            items={dropdownOptions.currency}
            minWidth={380}  
            maxWidth={400}
          />
        </div>
        <div className="felx flex-col">
          <div className="mb-2">Key KPI <span className="text-red-500">*</span></div>
          <SelectPrimary
            fullWidth
            label="Client Type"
            value={formData.keyKpi}
            onChange={handleChange("keyKpi")}
            items={dropdownOptions.keyKpis}
            minWidth={380}  
            maxWidth={400}
          />
          </div>
        </Stack>
        <div className="mb-2">Add Description</div>
        <CustomTextField
            fullWidth
            multiline
            minRows={3}
            placeholder="Text input"
            value={formData.description}
            onChange={handleChange("description")}
            InputProps={{
              sx: { borderRadius: "8px" }, 
            }}
        />

        <Stack direction="row" justifyContent="flex-end" spacing={2} mt={4}>
          <button className="btn-outline" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn-dark rounded-xl py-3 px-4" onClick={handleSubmit}>
            Add Client
          </button>
        </Stack>
      </Box>
    </Modal>
  );
}
