"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  Modal,
  Stack,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import SelectPrimary from "../cp-select-primary/CpSelectPrimary";
import CustomTextField from "../cp-custom-textfield/CpCustomTextField";
import { BorderColor } from "@mui/icons-material";
import BasicDatePicker from "../cp-custom-calander/CpCustomCalander";

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
};

export default function AddNewCampaign({ open, handleClose }) {
  const [formData, setFormData] = useState({
    campaignName: "",
    subBrand: "",
    product: "",
    campaignType: "",
    startDate: null,
    endDate: null,
    status: "",
    description: "",
  });

  const dropdownOptions = {
    subBrands: [
      { value: "brand1", label: "Brand 1" },
      { value: "brand2", label: "Brand 2" },
    ],
    products: [
      { value: "product1", label: "Product 1" },
      { value: "product2", label: "Product 2" },
    ],
    campaignTypes: [
      { value: "type1", label: "Type 1" },
      { value: "type2", label: "Type 2" },
    ],
    statusList: [
      { value: "ongoing", label: "Ongoing" },
      { value: "completed", label: "Completed" },
      { value: "archived", label: "Archived" },
    ],
  };

  const handleChange = (field) => (event) => {
    const value = event?.target?.value ?? event;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitting Campaign:", formData);
    handleClose(); // close modal
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div className="flex items-center justify-between mb-6">
            <div className="sec-title">Edit Campaign</div>
            <Image src="/assets/images/close.png" alt="Icon" width={20} height={20}/>
        </div>
        <Stack direction="row" spacing={2} mb={2}>
          <div className="felx flex-col">
            <div className="mb-2">Campaign Name</div>
            <CustomTextField
            placeholder="Enter campaign name"
            value={formData.campaignName}
            onChange={handleChange("campaignName")}
             sx={{ minWidth: 380 }}
            />
          </div>
          <div className="felx flex-col">
          <div className="mb-2">Sub Brand</div>
          <SelectPrimary
            placeholder="Sub Brand"
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
          <div className="mb-2">Product</div>
          <SelectPrimary
            fullWidth
            label="Product"
            value={formData.product}
            onChange={handleChange("product")}
            items={dropdownOptions.products}
            minWidth={380}  
            maxWidth={400}
          />
          </div>
          <div className="felx flex-col">
          <div className="mb-2">Campaign Type</div>
          <SelectPrimary
            fullWidth
            label="Campaign Type"
            value={formData.campaignType}
            onChange={handleChange("campaignType")}
            items={dropdownOptions.campaignTypes}
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
          <div className="mb-2">Status</div>
          <SelectPrimary
            label="Status"
            value={formData.status}
            onChange={handleChange("status")}
            items={dropdownOptions.statusList}
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
        />

        <Stack direction="row" justifyContent="flex-end" spacing={2} mt={4}>
          <button className="btn-outline" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn-dark btn-default" onClick={handleSubmit}>
            Save Changes
          </button>
        </Stack>
      </Box>
    </Modal>
  );
}
