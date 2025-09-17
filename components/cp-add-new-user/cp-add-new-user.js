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

export default function AddNewUser({ open, handleClose }) {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
  });

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
            <div className="sec-title">Add New User</div>
            <button onClick={handleClose}>
              <Image src="/assets/images/close.png" alt="Icon" width={20} height={20}/>
            </button>
        </div>
        <Stack direction="row" spacing={2} mb={2}>
          <div className="felx flex-col">
            <div className="mb-2">User Name <span className="text-red-500">*</span></div>
            <CustomTextField
            placeholder="Add user name"
            value={formData.userName}
            onChange={handleChange("userName")}
             sx={{ minWidth: 784 }}
            />
          </div>
        </Stack>

        <Stack direction="row" spacing={2} mb={2}>
          <div className="felx flex-col">
            <div className="mb-2">Add User Email <span className="text-red-500">*</span></div>
            <CustomTextField
            placeholder="Add email"
            value={formData.email}
            onChange={handleChange("email")}
             sx={{ minWidth: 784 }}
            />
          </div>
        </Stack>

        <Stack direction="row" justifyContent="flex-end" spacing={2} mt={4}>
          <button className="btn-outline" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn-dark rounded-xl py-3 px-4" onClick={handleSubmit}>
            Add User
          </button>
        </Stack>
      </Box>
    </Modal>
  );
}
