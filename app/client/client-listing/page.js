'use client';

import React from 'react'
import MainPanel from "@/components/cp-main-panel/cp-main-panel";
import CpClientList from '@/components/cp-client-list/cp-client-list';

export default function ClientListing() {

    return (
        <>
            <div className='p-8'>
                <CpClientList />
            </div>
        </>
    );
}
