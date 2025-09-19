"use client";

import Image from "next/image";
import React from "react";

export default function CpClientMarketingStrategy() {

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <section className="p-8">
            <div className="flex w-full flex-row gap-8">
                <div className="w-1/2">
                    <div className="flex flex-row items-center justify-between mb-3">
                        <div className="text-base font-bold">Dashboard</div>
                        <button className="flex flex-row items-center gap-2 my-4">
                            <Image src="/assets/icons/download.svg" alt='download icon' width={12} height={12} />
                            <span className="btn-link blue text-xs">Sample File</span></button>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg h-[300px] flex flex-col items-center justify-center text-gray-600">
                        <Image src="/assets/icons/Folder-open.svg" alt='Folder-open icon' width={20} height={20} />
                        <p className="text-xs text-sprk-grey font-medium pt-2">Drag &amp; Drop your files</p>
                        <div className="flex items-center my-4 w-[100px]">
                            <div className="flex-1 border-t border-[#CECED6]">
                            </div><span className="text-sprk-light-grey text-xs font-medium px-3">OR</span>
                            <div className="flex-1 border-t border-[#CECED6]"></div>
                        </div>
                        <label className="btn-default btn-primary">
                            Browse
                            <input type="file" className="hidden" onChange={handleFileChange} />
                        </label>
                    </div>
                    <div className="border border-[#B0251C] rounded-[4px] mt-3">
                        <div className="px-5 py-6 bg-[#F9E0DE] m-1">
                            <div className="flex flex-row items-start justify-start">
                                <div className="mr-2 mt-1">
                                    <Image src="/assets/icons/error.svg" alt='Upload-Failed icon' width={16} height={16} />
                                </div>
                                <div className="flex flex-col items-start p-1 justify-center">
                                    <div className="text-[#0D0D11] text-sm font-bold">Upload failed</div>
                                    <div className="sec-desc">There was an error uploading the file. Please try again.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="w-1/2">
                    <div className="flex flex-row items-center justify-between mb-3">
                        <div className="text-base font-bold">Dashboard</div>
                        <button className="flex flex-row items-center gap-2 my-4">
                            <Image src="/assets/icons/download.svg" alt='download icon' width={12} height={12} />
                            <span className="btn-link blue text-xs">Sample File</span></button>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg h-[300px] flex flex-col items-center justify-center text-gray-600">
                        <Image src="/assets/icons/Folder-open.svg" alt='Folder-open icon' width={20} height={20} />
                        <p className="text-xs text-sprk-grey font-medium pt-2">Drag &amp; Drop your files</p>
                        <div className="flex items-center my-4 w-[100px]">
                            <div className="flex-1 border-t border-[#CECED6]">
                            </div><span className="text-sprk-light-grey text-xs font-medium px-3">OR</span>
                            <div className="flex-1 border-t border-[#CECED6]"></div>
                        </div>
                        <label className="btn-default btn-primary">
                            Browse
                            <input type="file" className="hidden" onChange={handleFileChange} />
                        </label>
                    </div>
                    <div className="border border-[#FF9B3F] rounded-[4px] mt-3">
                        <div className="px-5 py-6 bg-[#FFF0E2] m-1">
                            <div className="flex flex-row items-start justify-start">
                                <div className="mr-2 mt-1">
                                    <Image src="/assets/icons/warning.svg" alt='Upload-Failed icon' width={16} height={16} />
                                </div>
                                <div className="flex flex-col items-start p-1 justify-center">
                                    <div className="text-[#0D0D11] text-sm font-bold">Upload failed</div>
                                    <div className="sec-desc">There was an error uploading the file. Please try again.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}