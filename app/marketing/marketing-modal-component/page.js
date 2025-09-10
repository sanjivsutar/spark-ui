'use client';

import AddNewCampaign from '@/components/add-new-campaign-modal/AddNewCampaign';
import EditCampaign from '@/components/cp-edit-campaign/CpEditCompaign';
import CpContentAnalyticsModal from '@/components/cp-modal/CpcontentAnalyticsModal';
import CpCustomBudgetModal from '@/components/cp-modal/CpCustomBudgetModal';
import CpLimitReachedModal from '@/components/cp-modal/CpLimitReachedModal';
import React, { useState } from 'react'

const CpMarketingPopup = () => {

const [isCustomBudget, setIsCustomBudget] = useState(false);
const [isAddNewCampaign, setIsAddNewCampaign] = useState(false);
const [isEditNewCampaign, setIsEditNewCampaign] = useState(false);
const [isLimitReached, setIsLimitReached] = useState(false);
const [isContentAnalytics, setIsContentAnalytics] = useState(false);

  return (
    <div className='flex flex-col items-start'>
        {/* KPI target page custom budge */}
        <button className='btn-link my-4' onClick={() => setIsCustomBudget(true)}>Custom Budget</button>

        <button className='btn-link my-4' onClick={() => setIsAddNewCampaign(true)}>Add New Campaign</button>

         <button className='btn-link my-4' onClick={() => setIsEditNewCampaign(true)}>Edit Campaign</button>

         <button className='btn-link my-4' onClick={() => setIsLimitReached(true)}>Limit Reached</button>

         <button className='btn-link my-4' onClick={() => setIsContentAnalytics(true)}>Content Analytics</button>


        {/* Popup Components */}
        <CpCustomBudgetModal open={isCustomBudget} handleClose={() => setIsCustomBudget(false)} />

        <AddNewCampaign open={isAddNewCampaign} handleClose={() => setIsAddNewCampaign(false)} />

        <EditCampaign open={isEditNewCampaign} handleClose={() => setIsEditNewCampaign(false)} />

        <CpLimitReachedModal open={isLimitReached} handleClose={() => setIsLimitReached(false)} />
        
        <CpContentAnalyticsModal open={isContentAnalytics} handleClose={() => setIsContentAnalytics(false)} />

    </div>
  )
}

export default CpMarketingPopup