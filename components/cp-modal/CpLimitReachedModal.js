import React from 'react';
import { Modal } from '@mui/material'
import Image from 'next/image';

const CpLimitReachedModal = ({open, handleClose}) => {

     const handleSavedInfluencer = () => {
    console.log("View Saved Influencer");
    handleClose(); 
  };
  return (
     <Modal open={open} onClose={handleClose}>
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="bg-white w-full max-w-[524px] rounded-xl shadow-lg p-8 relative">
                <button
                    onClick={handleClose}
                    className="absolute top-[32px] right-[24px]"
                >
                    <Image src="/assets/images/close.png" alt='close icon' width={20} height={20} className=''/>
                </button>
                    
                <div>
                    <div className='flex justify-center'>
                        <Image src="/assets/icons/Warning-sign.svg" alt="Warning Sign Icon" width={40} height={40} className='pt-6 pb-4'/>
                    </div>
                        
                    <h2 className="text-xl font-bold text-sprk-dark-2 pb-1 text-center">
                        Limit Reached
                    </h2>

                    <p className='text-sm font-medium text-sprk-grey text-center'>You can only save up to 20 influencers. To add a new one, please remove an existing influencer from your saved list.</p>
                        
                    <div className="flex justify-center space-x-3 mt-[40px]">
                        <button
                            onClick={handleClose}
                            className="btn-default btn-primary border-[#022B59]"
                        >
                            Cancel
                        </button>
                        <button className="btn-default btn-dark" onClick={handleSavedInfluencer}>
                            View Saved Influencer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
  )
}

export default CpLimitReachedModal