'use client';

import React from 'react'
import MainPanel from "@/components/cp-main-panel/cp-main-panel";
import CpClientList from '@/components/cp-client-list/cp-client-list';
import CpCreativeReportInsights from '@/components/cp-creative-report-insights/cp-creative-report-insights';

export default function ClientListing() {

    return (
        <>
            <MainPanel>
            <CpCreativeReportInsights />
            <div className='p-8'>
                <CpClientList />
            </div>
            </MainPanel>
        </>
    );
}
