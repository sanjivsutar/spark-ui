import { FormControl, Modal, OutlinedInput } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const CpCustomBudgetModal = ({open, handleClose}) => {

      const handleSubmit = () => {
    console.log("Submitting Custom Budget:");
    handleClose(); // close modal
  };

  return (
     <Modal open={open} onClose={handleClose}>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                {/* Modal box */}
                <div className="bg-white w-full max-w-[848px] rounded-xl shadow-lg p-8 relative">
                    {/* Close button */}
                    <button
                    onClick={handleClose}
                    className="absolute top-[32px] right-[24px]"
                    >
                        <Image src="/assets/images/close.png" alt='close icon' width={20} height={20} />
                    </button>

                    {/* Modal Title */}
                    <h2 className="text-2xl font-extrabold text-sprk-dark-2 mb-6">
                    Custom Budget
                    </h2>

                    {/* Form */}
                    <div>
                    <div className='py-6'>
                        <p className="text-sm font-medium text-sprk-dark-2 pb-2">
                        TV Spends
                        </p>
                        <FormControl fullWidth>
                            <OutlinedInput
                                placeholder="5.8"
                                sx={{
                                    "& input": {
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        color: "#0D0D11",
                                    },
                                }}
                            />
                        </FormControl>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-sprk-dark-2 pb-2">
                        Digital Branding
                        </p>
                        <FormControl fullWidth>
                            <OutlinedInput
                                placeholder="18"
                                sx={{
                                    "& input": {
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        color: "#0D0D11",
                                    },
                                }}
                            />
                        </FormControl>
                    </div>

                    <div className='py-6'>
                        <p className="text-sm font-medium text-sprk-dark-2 pb-2">
                        OTT Spends
                        </p>
                        <FormControl fullWidth>
                            <OutlinedInput
                                placeholder="5.8"
                                sx={{
                                    "& input": {
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        color: "#0D0D11",
                                    },
                                }}
                            />
                        </FormControl>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-sprk-dark-2 pb-2">
                        Performance Spends
                        </p>
                        <FormControl fullWidth>
                            <OutlinedInput
                                placeholder="18"
                                sx={{
                                    "& input": {
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        color: "#0D0D11",
                                    },
                                }}
                            />
                        </FormControl>
                    </div>

                    <div className='py-6'>
                        <p className="text-sm font-medium text-sprk-dark-2 pb-2">
                        Social Media Spends
                        </p>
                        <FormControl fullWidth>
                            <OutlinedInput
                                placeholder="Add custom budget"
                                sx={{
                                    "& input": {
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        color: "#60607B",
                                    },
                                }}
                            />
                        </FormControl>
                    </div>

                    <div className='pb-8'>
                        <p className="text-sm font-medium text-sprk-dark-2 pb-2">
                        PR Spends
                        </p>
                        <FormControl fullWidth>
                            <OutlinedInput
                                placeholder="Add custom budget"
                                sx={{
                                    "& input": {
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        color: "#60607B",
                                    },
                                }}
                            />
                        </FormControl>
                    </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-3 mt-4">
                    <button
                        onClick={handleClose}
                        className="btn-default btn-primary"
                    >
                        Cancel
                    </button>
                    <button className="btn-default btn-dark" onClick={handleSubmit}>
                        Update
                    </button>
                    </div>
                </div>
                </div>
        </Modal>
  )
}

export default CpCustomBudgetModal