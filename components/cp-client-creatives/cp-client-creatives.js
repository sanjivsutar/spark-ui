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

                {!file ? (
                    <div className="flex flex-col items-center">
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
                        <p className="mt-4 text-xs text-gray-400 font-medium">
                            Supported file type: CSV or Excel
                        </p>
                    </div>
                    // <p className="mt-4 text-xs text-gray-700 font-medium">
                    //     Uploaded: {file.name}
                    // </p>
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
    }

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-lg h-[300px] flex flex-col items-center justify-center text-gray-600 transition-all duration-150 mb-8 ${dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"
                }`}
        >

            {!file ? (
                <div className="flex flex-col items-center">
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
                    <p className="mt-4 text-xs text-gray-400 font-medium">
                        Supported file type: JPEG, PNG & MP4
                    </p>
                </div>
            ) : (
                <div className="flex flex-col w-[600px] rounded-lg p-6">
                    {/* File Section */}
                    <div className="mb-3 py-2">
                        <div className="text-[14px] font-medium text-[#0D0D11] mb-2">
                            File Selected to Upload
                        </div>
                        <div className="flex items-center gap-2 justify-start mb-3">
                            <Image src="/assets/images/pexels-mastercowley.png" alt="file icon" width={60} height={40} />
                            <span className="text-sm text-[#60607B] font-medium">{file.name}</span>
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
