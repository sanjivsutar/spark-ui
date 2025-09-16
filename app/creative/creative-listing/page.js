'use client';

import React from 'react'
import { useState, useCallback } from 'react';
import MainPanel from "@/components/cp-main-panel/cp-main-panel";
import CpCreativesList from '@/components/cp-creatives-list/cp-creatives-list';
import MultipleSelectCheckmarks from '@/components/cp-multiple-select/CpMultipleSelect';
import ImageModal from '@/components/cp-creative-popup/cp-creative-popup';
import CpTopCreativesList from '@/components/cp-top-ten-creatives/cp-top-ten-creatives';

export default function CreativeListing() {

    const sortLabels = [
        "Latest Updated",
        "Last Updated"
    ]
    const viewLabels = [
        "All Creatives",
        "Image",
        "Video"
    ]
    const [modalOpen, setModalOpen] = useState(false);
    const [username, setUsername] = useState(null);
    const [modalSrc, setModalSrc] = useState(null);
    const [engagementPercentage, setEngagementPercentage] = useState(null);

    const handleImageClick = useCallback((src,username,engagement) => {
        setUsername(username);
        setEngagementPercentage(engagement);
        setModalSrc(src);
        setModalOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setModalOpen(false);
        setModalSrc(null);
        setUsername(null);
        setEngagementPercentage(null);
    }, []);

    return (
        <>
            <MainPanel>
                <div className="flex flex-row w-full justify-between items-center">
                    <div className="flex items-center gap-6">
                        <h1 className="text-[28px] font-bold">Creatives</h1>
                        <p className="text-sm text-[#60607B]">
                            <span className="pr-1">Total Creatives</span>
                            <span className="font-semibold text-[#0D0D11] pr-2 pl-1">
                                100
                            </span>{" "}
                            | <span className="pr-1 pl-1">Image </span>
                            <span className="font-semibold text-[#0D0D11] pr-2">
                                80
                            </span> | <span className="pr-1 pl-1">Video </span>
                            <span className="font-semibold text-[#0D0D11] pr-2">
                                20
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <MultipleSelectCheckmarks names={sortLabels} />
                        <MultipleSelectCheckmarks names={viewLabels} />
                        <button
                            onClick={() => sethelpModal(true)}
                            className="btn-outline slim flex items-center gap-2 h-9"
                        >
                            + Upload Creatives
                        </button>
                    </div>
                </div>
                <CpCreativesList onImageClick={handleImageClick} />
                <CpTopCreativesList onImageClick={handleImageClick} />
                <ImageModal isOpen={modalOpen} src={modalSrc} username={username} engagement={engagementPercentage} onClose={handleClose} alt="Creative" />
            </MainPanel>
        </>
    );
}
