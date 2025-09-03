// app/page.tsx (Next.js 13+ App Router)
"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import SelectPrimary from '../../components/cp-select-primary/CpSelectPrimary';
import MultipleSelectCheckmarks from '../../components/cp-multiple-select/CpMultipleSelect';
import Search from '../../components/cp-search/CpSearch';
import ValueGetterGrid from '../../components/cp-data-grid/CpDataGrid';
import CpDeleteCompaign from '../../components/cp-delete-compaign/CpDeleteCompaign';
import CpNoSearchResults from '../../components/cp-no-search-results/CpNoSearchResults';
import ToastMessage from '../../components/cp-toast-message/CpToastMessage';
import AddNewCampaign from '../../components/add-new-campaign-modal/AddNewCampaign';
import HelpModal from '../../components/cp-help-modal/CpHelpModal';
import CpScenarioCard from "../cp-scenario-card/CpScenarioCard";
import CpTimelineDropdown from "../dropdown/CpTimelineDropdown";

export default function CmpCampaign() {
    const [showToast, setShowToast] = useState(true);
    const [open, setOpen] = useState(false);
    const [helpModal, sethelpModal] = useState(false);
    return (
        <main className="p-6 space-y-6">
            {/* Top Header */}
            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-6">
                    <h1 className="sec-title">Campaigns</h1>
                    <p className="text-sm text-[#60607B]">
                        Total Campaigns: <span className="font-semibold text-[#0D0D11]">40</span> | Ongoing:{" "}
                        <span className="font-semibold text-[#0D0D11]">12</span> | Completed:{" "}
                        <span className="font-semibold text-[#0D0D11]">20</span> | Archived:{" "}
                        <span className="font-semibold text-[#0D0D11]">8</span>
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <CpTimelineDropdown/>
                    <button onClick={() => sethelpModal(true)} className="btn-outline px-4 py-3">
                        + Add New Campaigns
                    </button>
                </div>
            </div>
            {/* Add campaign */}
            <div className='flex gap-5 rounded-2xl  w-full mb-6 py-4 shadow-lg border border-gray-200 relative'>
                <Image src="/assets/images/thumb-up-dynamic.png" alt="Home Icon" width={84} height={84} />
                <div className='w-[50%] mt-[10px]'>
                    <h2 className='sec-title text-sprk-dark-2'>New “Test campaign” added</h2>
                    <p className='sec-desc text-sprk-grey'>You can create multiple scenario to compare simulation report</p>
                </div>
                <div className="relative w-[40%]">
                    <button className="btn-dark btn-default absolute top-1/2 -translate-y-1/3 right-4">
                        Add Scenario
                    </button>
                </div>
                <button className="absolute top-3 right-4  text-gray-400 hover:text-gray-600">
                    <Image src="/assets/images/close.png" alt="Icon" width={14} height={14} />
                </button>
            </div>
            <div className="flex flex-col gap-5 rounded-2xl  w-full mb-6 py-4 shadow-lg border border-gray-200 relative">
                <div className="flex flex-row flex-wrap items-center justify-between gap-4 px-4">
                    <Search />
                    <div className="flex flex-wrap items-center gap-3">
                        <div>RESET</div>
                        <MultipleSelectCheckmarks />
                        <MultipleSelectCheckmarks />
                        <MultipleSelectCheckmarks />
                        <MultipleSelectCheckmarks />
                    </div>
                </div>
                <ValueGetterGrid />
                {/* <CpNoSearchResults/> */}
                {/* <CpDeleteCompaign/> */}
                {/* <ToastMessage
                message="“Test Campaign” added successfully!"
                show={showToast}
                onClose={() => setShowToast(true)}
                /> */}
                {/* <HelpModal
                open={helpModal}
                title="Got a question? We’re here to help."
                description="Ask us anything about our services or platform. Our team will get back to you shortly."
                cancelText="Cancel"
                confirmText="Send"
                onCancel={() => sethelpModal(false)}
                onConfirm={() => {
                sethelpModal(false);
                }}
            /> */}
            </div>
        </main>
    );
}
