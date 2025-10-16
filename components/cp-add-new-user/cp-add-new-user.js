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
            <Image src="/assets/images/close.png" alt="Icon" width={20} height={20} />
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

        <div className="border border-[#B0251C] rounded-[4px] mt-3">
          <div className="px-5 py-6 bg-[#F9E0DE] m-1">
            <div className="flex flex-row items-start justify-start">
              <div className="mr-1 mt-[6px]">
                <Image src="/assets/icons/error.svg" alt='Upload-Failed icon' width={16} height={16} />
              </div>
              <div className="flex flex-col items-start p-1 justify-center">
                <div className="text-[#0D0D11] text-sm font-bold">User does not exists</div>
                <div className="sec-desc">Please check with the team</div>
              </div>
            </div>
          </div>
        </div>

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
