"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import CustomTextField from "../cp-custom-textfield/CpCustomTextField";


export default function HelpModal({
  open = true,
  title = "Got a question? We’re here to help.",
  description = "Ask us anything about our services or platform. Our team will get back to you shortly.",
  cancelText = "Cancel",
  confirmText = "Confirm",
  onCancel,
  onConfirm,
}) {

  const [formData, setFormData] = useState({
    description: "",
  });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  if (!open) return null;
  return (
    <section>
      <div className="modal-show">
        <div className="flex flex-col relative bg-white rounded-2xl shadow-lg border border-gray-200 justify-center gap-4 p-6">
          <div className="flex flex-col align-left justify-center gap-2">
          <Image src="/assets/images/close.png" alt="Close Icon" width={20} height={20} />
          <div className="sec-title flex flex-row">{title}</div>
          <p className="sec-desc">{description}</p>
          <CustomTextField
                      fullWidth
                      multiline
                      minRows={3}
                      placeholder="Description here"
                      value={formData.description}
                      onChange={handleChange("description")}
          />
          </div>
         <div className="flex gap-4 mt-4 align-right justify-end">
            <button
              className="btn-outline w-24"
              onClick={onCancel}
            >
              {cancelText}
            </button>
            <button
              className="btn-dark btn-default w-24"
              onClick={onConfirm}
            >
              {confirmText}
            </button>
        </div>
        </div>
      </div>
    </section>
  );
}
