'use client';

import AddNewCampaign from '@/components/add-new-campaign-modal/AddNewCampaign';
import AddNewClient from '@/components/cp-add-new-client/cp-add-new-client';
import CpModal from '@/components/cp-delete-compaign/CpDeleteCompaign';
import EditCampaign from '@/components/cp-edit-campaign/CpEditCompaign';
import CpContentAnalyticsModal from '@/components/cp-modal/CpcontentAnalyticsModal';
import CpCustomBudgetModal from '@/components/cp-modal/CpCustomBudgetModal';
import CpLimitReachedModal from '@/components/cp-modal/CpLimitReachedModal';
import CpUploadCreativeModal from '@/components/cp-modal/CpUploadCreativeModal';
import ToastMessage from '@/components/cp-toast-message/CpToastMessage';
import Image from 'next/image';
import React, { useState } from 'react'

const CpMarketingPopup = () => {

  const [isCustomBudget, setIsCustomBudget] = useState(false);
  const [isAddNewCampaign, setIsAddNewCampaign] = useState(false);
  const [isAddNewClient, setisAddNewClient] = useState(false);
  const [isEditNewCampaign, setIsEditNewCampaign] = useState(false);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const [isContentAnalytics, setIsContentAnalytics] = useState(false);
  const [showToast, setShowToast] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [isUploadCreative, setIsUploadCreative] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className='flex flex-col items-start'>
      {/* KPI target page custom budge */}
      <button className='btn-link my-4' onClick={() => setIsCustomBudget(true)}>Custom Budget</button>

      <button className='btn-link my-4' onClick={() => setIsAddNewCampaign(true)}>Add New Campaign</button>

      <button className='btn-link my-4' onClick={() => setIsEditNewCampaign(true)}>Edit Campaign</button>

      <button onClick={handleShowToast} className="bg-blue-500 text-white px-4 py-2 rounded mt-6">Show Toast</button>

      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-6" onClick={() => setIsOpen(true)}>Open Modal</button>

      <button className='btn-link my-4' onClick={() => setIsLimitReached(true)}>Limit Reached</button>

      <button className='btn-link my-4' onClick={() => setIsContentAnalytics(true)}>Content Analytics</button>

      <button className='btn-link my-4' onClick={() => setIsUploadCreative(true)}>Upload Creatives</button>

      <button className='btn-link my-4' onClick={() => setisAddNewClient(true)}>Add New Client</button>

      {/* Popup Components */}
      <CpCustomBudgetModal open={isCustomBudget} handleClose={() => setIsCustomBudget(false)} />

      <AddNewCampaign open={isAddNewCampaign} handleClose={() => setIsAddNewCampaign(false)} />
      <AddNewClient open={isAddNewClient} handleClose={() => setisAddNewClient(false)} />

      <EditCampaign open={isEditNewCampaign} handleClose={() => setIsEditNewCampaign(false)} />
      <ToastMessage
        icon={
          <Image
            src="/assets/images/tick-icon.png"
            alt="Icon"
            width={20}
            height={20} />
        }
        show={showToast}
        message="This is a toast message!"
        onClose={handleCloseToast}
        duration={3000}
      />
          {isOpen && (
            <CpModal
              icon={
                <Image
                  src="/assets/images/error.png"
                  alt="Error"
                  width={38}
                  height={38}
                />
              }
              title="Delete Campaign"
              description="Are you sure you want to delete this campaign from the application?"
              cancelText="Cancel"
              confirmText="Delete"
              onClose={() => setIsOpen(false)} 
              onCancel={() => setIsOpen(false)} 
              onConfirm={() => {setIsOpen(false)}}
            />
          )}

        <CpLimitReachedModal open={isLimitReached} handleClose={() => setIsLimitReached(false)} />
        
        <CpContentAnalyticsModal open={isContentAnalytics} handleClose={() => setIsContentAnalytics(false)} />

        <CpUploadCreativeModal open={isUploadCreative} handleClose={() => setIsUploadCreative(false)} />


    </div>
  )
}

export default CpMarketingPopup