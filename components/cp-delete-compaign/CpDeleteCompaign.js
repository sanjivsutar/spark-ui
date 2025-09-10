"use client";

import React from "react";
import Image from "next/image";

export default function CpModal(params) {
  const {
    icon,
    title,
    description,
    cancelText,
    confirmText,
    onCancel,
    onConfirm,
    onClose,
  } = params;

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-show")) {
      onClose?.();
    }
  };

  return (
    <section
      className="modal-show fixed inset-0 flex items-center justify-center bg-black/40 z-50"
      onClick={handleBackdropClick}
    >
      <div className="popup-box relative bg-white rounded-2xl p-6 shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <Image
            src="/assets/images/close.png"
            alt="Close"
            width={20}
            height={20}
          />
        </button>

        {/* Icon */}
        <div className="rounded-full flex justify-center items-center">
          {icon}
        </div>

        {/* Title */}
        <h1 className="sec-title mt-2 text-center">{title}</h1>

        {/* Description */}
        <p className="text-center text-gray-600">{description}</p>

        {/* Action buttons */}
        <div className="flex gap-4 mt-8 justify-center">
          <button className="btn-outline w-24" onClick={onCancel}>
            {cancelText || "Cancel"}
          </button>
          <button className="btn-dark rounded-md w-24" onClick={onConfirm}>
            {confirmText || "Confirm"}
          </button>
        </div>
      </div>
    </section>
  );
}
