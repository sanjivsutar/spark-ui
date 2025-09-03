'use client';

import AddNewCampaign from '@/components/add-new-campaign-modal/AddNewCampaign';
import EditCampaign from '@/components/cp-edit-campaign/CpEditCompaign';
import CpCustomBudgetModal from '@/components/cp-modal/CpCustomBudgetModal';
import React, { useState } from 'react'

const CpMarketingPopup = () => {

const [isCustomBudget, setIsCustomBudget] = useState(false);
const [isAddNewCampaign, setIsAddNewCampaign] = useState(false);
const [isEditNewCampaign, setIsEditNewCampaign] = useState(false);

  return (
    <div className='flex flex-col items-start'>
        {/* KPI target page custom budge */}
        <button className='btn-link my-4' onClick={() => setIsCustomBudget(true)}>Custom Budget</button>

        <button className='btn-link my-4' onClick={() => setIsAddNewCampaign(true)}>Add New Campaign</button>

         <button className='btn-link my-4' onClick={() => setIsEditNewCampaign(true)}>Edit Campaign</button>


        {/* Popup Components */}
        <CpCustomBudgetModal open={isCustomBudget} handleClose={() => setIsCustomBudget(false)} />

        <AddNewCampaign open={isAddNewCampaign} handleClose={() => setIsAddNewCampaign(false)} />

        <EditCampaign open={isEditNewCampaign} handleClose={() => setIsEditNewCampaign(false)} />

    </div>
  )
}

export default CpMarketingPopup