"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";

export default function CpClientMarketingStrategy() {
    const [fileLeft, setFileLeft] = useState(null);
    const [fileRight, setFileRight] = useState(null);
    const [dragActive, setDragActive] = useState(false);

    const handleFileChange = (e, setFile) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleDrop = (e, setFile) => {
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

    const renderUploadBox = (file, setFile) => (
        <div
            onDrop={(e) => handleDrop(e, setFile)}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-lg h-[300px] flex flex-col justify-center text-gray-600 transition-all duration-150 ${dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"
                }`}
        >
            {!file ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <Image src="/assets/icons/Folder-open.svg" alt="Folder-open icon" width={20} height={20} />
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
                        <input type="file" className="hidden" onChange={(e) => handleFileChange(e, setFile)} />
                    </label>

                    <p className="mt-4 text-xs text-gray-400 font-medium">
                        Supported file type: CSV or Excel
                    </p>
                </div>
            ) : (
                <div className="flex flex-col w-[600px] rounded-lg p-6">
                    {/* File Section */}
                    <div className="mb-2 py-2">
                        <div className="text-[14px] font-medium text-[#0D0D11] mb-2">
                            File Selected to Upload
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/assets/icons/xlsx-extension.svg" alt="file icon" width={20} height={20} />
                            <span className="text-sm text-[#60607B] font-medium">{file.name}</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-[#E5E7EB] my-4" />

                    {/* Radio Preference */}
                    <div className="mb-4">
                        <div className="text-[14px] font-medium text-[#0D0D11] mb-2">
                            Select Preference <span className="text-red-500">*</span>
                        </div>

                        <div className="flex items-center gap-8">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="uploadMode"
                                    value="replace"
                                    className="accent-[#022B59] w-4 h-4"
                                />
                                <span className="text-sm text-[#0D0D11] font-medium">Replace</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="uploadMode"
                                    value="append"
                                    className="accent-[#022B59] w-4 h-4"
                                />
                                <span className="text-sm text-[#0D0D11] font-medium">Append</span>
                            </label>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4 mt-2 p-0">
                        <button className="btn-default btn-primary h-11">
                            Cancel
                        </button>
                        <button className="btn-default btn-dark py-2 h-11">
                            Upload
                        </button>
                    </div>
                </div>

            )}
        </div>
    );

    const renderErrorBox = (borderColor, bgColor, icon, title, desc) => (
        <div className={`border ${borderColor} rounded-[4px] mt-3`}>
            <div className={`px-5 py-6 ${bgColor} m-1`}>
                <div className="flex flex-row items-start justify-start">
                    <div className="mr-2 mt-1">
                        <Image src={icon} alt="status icon" width={16} height={16} />
                    </div>
                    <div className="flex flex-col items-start p-1 justify-center">
                        <div className="text-[#0D0D11] text-sm font-bold">{title}</div>
                        <div className="sec-desc">{desc}</div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="p-8">
            <div className="flex w-full flex-row gap-8">
                {/* Left Section */}
                <div className="w-1/2">
                    <div className="flex flex-row items-center justify-between mb-3">
                        <div className="text-base font-bold">Dashboard</div>
                        <button className="flex flex-row items-center gap-2 my-4">
                            <Image src="/assets/icons/download.svg" alt="download icon" width={12} height={12} />
                            <span className="btn-link blue text-xs">Sample File</span>
                        </button>
                    </div>
                    {renderUploadBox(fileLeft, setFileLeft)}
                    {renderErrorBox("border-[#B0251C]", "bg-[#F9E0DE]", "/assets/icons/error.svg", "Upload failed", "There was an error uploading the file. Please try again.")}
                </div>

                {/* Right Section */}
                <div className="w-1/2">
                    <div className="flex flex-row items-center justify-between mb-3">
                        <div className="text-base font-bold">Dashboard</div>
                        <button className="flex flex-row items-center gap-2 my-4">
                            <Image src="/assets/icons/download.svg" alt="download icon" width={12} height={12} />
                            <span className="btn-link blue text-xs">Sample File</span>
                        </button>
                    </div>

                    {renderUploadBox(fileRight, setFileRight)}
                    {renderErrorBox("border-[#FF9B3F]", "bg-[#FFF0E2]", "/assets/icons/warning.svg", "Upload failed", "There was an error uploading the file. Please try again.")}
                </div>
            </div>
        </section>
    );
}
