"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";

// Reusable UploadBox Component
function UploadBox({ type = "drag", supportedTypes = "JPEG, PNG & MP4" }) {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  if (type === "browse") {
    return (
      <div
        className={`border-2 border-dashed rounded-lg h-[300px] flex flex-col items-center justify-center text-gray-600 transition-all duration-150 border-gray-300 mb-8`}
      >
        <div className="flex flex-row items-center justify-center gap-2 mb-4">
          <Image
            src="/assets/icons/Folder-open.svg"
            alt="Folder-open icon"
            width={20}
            height={20}
          />
          <p className="text-xs text-sprk-grey font-medium pt-2">
            Browse files to upload
          </p>
        </div>

        <label className="btn-default btn-primary cursor-pointer">
          Browse
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>

        {file ? (
          <p className="mt-4 text-xs text-gray-700 font-medium">
            Uploaded: {file.name}
          </p>
        ) : (
          <p className="mt-4 text-xs text-gray-400 font-medium">
            Supported file type: {supportedTypes}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`border-2 border-dashed rounded-lg h-[300px] flex flex-col items-center justify-center text-gray-600 transition-all duration-150 mb-8 ${
        dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"
      }`}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <Image
          src="/assets/icons/Folder-open.svg"
          alt="Folder-open icon"
          width={20}
          height={20}
        />
        <p className="text-xs text-sprk-grey font-medium pt-2">
          Drag &amp; Drop your files
        </p>
      </div>

      <div className="flex items-center my-4 w-[100px]">
        <div className="flex-1 border-t border-[#CECED6]" />
        <span className="text-sprk-light-grey text-xs font-medium px-3">OR</span>
        <div className="flex-1 border-t border-[#CECED6]" />
      </div>

      <label className="btn-default btn-primary cursor-pointer">
        Browse
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>

      {file ? (
        <p className="mt-4 text-xs text-gray-700 font-medium">
          Uploaded: {file.name}
        </p>
      ) : (
        <p className="mt-4 text-xs text-gray-400 font-medium">
          Supported file type: {supportedTypes}
        </p>
      )}
    </div>
  );
}

export default function CpClientCreatives() {
  return (
    <section className="p-8">
      {/* Row 1 */}
      <div className="flex w-full flex-row gap-8">
        <div className="w-1/2">
          <div className="flex flex-row items-center justify-between mb-3">
            <div className="text-base font-bold">Dashboard</div>
            <button className="flex flex-row items-center gap-2 my-4">
              <Image
                src="/assets/icons/download.svg"
                alt="download icon"
                width={12}
                height={12}
              />
              <span className="btn-link blue text-xs">Sample File</span>
            </button>
          </div>

          <UploadBox type="drag" supportedTypes="JPEG, PNG & MP4" />
        </div>

        <div className="w-1/2">
          <div className="flex flex-row items-center justify-between mb-3">
            <div className="text-base font-bold">Dashboard</div>
            <button className="flex flex-row items-center gap-2 my-4">
              <Image
                src="/assets/icons/download.svg"
                alt="download icon"
                width={12}
                height={12}
              />
              <span className="btn-link blue text-xs">Sample File</span>
            </button>
          </div>

          <UploadBox type="browse" supportedTypes="CSV or Excel" />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex w-full flex-row gap-8">
        <div className="w-1/2">
          <div className="flex flex-row items-center justify-between mb-3">
            <div className="text-base font-bold">Dashboard</div>
            <button className="flex flex-row items-center gap-2 my-4">
              <Image
                src="/assets/icons/download.svg"
                alt="download icon"
                width={12}
                height={12}
              />
              <span className="btn-link blue text-xs">Sample File</span>
            </button>
          </div>

          <UploadBox type="browse" supportedTypes="CSV or Excel" />
        </div>

        <div className="w-1/2">
          <div className="flex flex-row items-center justify-between mb-3">
            <div className="text-base font-bold">Dashboard</div>
            <button className="flex flex-row items-center gap-2 my-4">
              <Image
                src="/assets/icons/download.svg"
                alt="download icon"
                width={12}
                height={12}
              />
              <span className="btn-link blue text-xs">Sample File</span>
            </button>
          </div>

          <UploadBox type="browse" supportedTypes="CSV or Excel" />
        </div>
      </div>
    </section>
  );
}
