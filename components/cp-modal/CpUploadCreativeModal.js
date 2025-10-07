'use client';

import React, { useState } from 'react';
import { Modal } from '@mui/material'
import Image from 'next/image';
import CustomTextField from '../cp-custom-textfield/CpCustomTextField';

const CpUploadCreativeModal = ({ open, handleClose }) => {

  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    creativeName: "",
    engagement: ""
  });

  if (!open) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (field) => (event) => {
    const value = event?.target?.value ?? event;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };


  return (
    <Modal open={open} onClose={handleClose}>
      <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div className="bg-white w-full max-w-[848px] rounded-xl shadow-lg p-8 relative">
          <button
            onClick={handleClose}
            className="absolute top-[32px] right-[24px]"
          >
            <Image src="/assets/images/close.png" alt='close icon' width={20} height={20} className='' />
          </button>

          <div>
            <h2 className='text-2xl font-extrabold text-sprk-dark-2'>Upload Creative</h2>
            <div className='py-[48px]'>
              <div className="relative flex items-center justify-between w-full max-w-md mx-auto">
                <div className="absolute top-[20px] left-[50px] right-[30px]  h-[2px] bg-gray-200 "></div>

                <div className="flex flex-col items-center z-10">
                  <div
                    className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium ${step === 1 && "bg-[#022B59] text-white"
                      }`}
                  >
                    {
                      step === 1 ? 1 : <div className='bg-[#31A968] py-[10px] px-2 rounded-full'><Image src='/assets/icons/Tick.svg' alt='Tick icon' width={20} height={20} /></div>
                    }
                  </div>
                  <span
                    className={`mt-2 text-sm ${step === 1 ? "text-black font-medium" : "text-gray-500"
                      }`}
                  >
                    Creative Upload
                  </span>
                </div>

                <div className="flex flex-col items-center z-10">
                  <div
                    className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium ${step === 2
                      ? "bg-[#022B59] text-white"
                      : "bg-blue-50 text-black"
                      }`}
                  >
                    2
                  </div>
                  <span
                    className={`mt-2 text-sm ${step === 2 ? "text-black font-medium" : "text-gray-500"
                      }`}
                  >
                    Creative Data
                  </span>
                </div>
              </div>

              <div className="">
                {step === 1 && (
                  <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-dashed border-gray-300 rounded-lg h-[300px] flex flex-col items-center justify-center text-gray-600"
                  >
                    {file ? (
                      // <p className="text-sm">{file.name}</p>
                      <div className="flex flex-col justify-start items-start">
                        <div className="text-[12px] text-[#60607B] mb-5">Uploaded : <span>4</span></div>
                        <div className="flex flex-row gap-6 justify-center items-center border-b border-b-[#CECED6] border-b-[0.5px] pb-5">
                          <Image src="/assets/images/pexels-mastercowley.png" alt='Image' width={105} height={70} className='mt-2'/>
                          <div className='flex flex-col items-start justify-center'>
                            <div className="mb-2">Creative Name <span className="text-red-500">*</span></div>
                            <CustomTextField
                              placeholder="Enter Creative Name"
                              value={formData.creativeName}
                              onChange={handleChange("creativeName")}
                              sx={{ minWidth: 295 }}
                            />
                          </div>
                          <div>
                            <div className="mb-2">Engagement % <span className="text-red-500">*</span></div>
                            <CustomTextField
                              placeholder="Enter Engagement %"
                              value={formData.engagement}
                              onChange={handleChange("engagement")}
                              sx={{ minWidth: 295 }}
                            />
                          </div>
                              <Image src="/assets/icons/bin.svg" alt='Folder-open icon' width={20} height={20} className='mt-6'/>    
                        </div>
                      </div>
                    ) : (
                      <>
                        <Image src="/assets/icons/Folder-open.svg" alt='Folder-open icon' width={20} height={20} />
                        <p className="text-xs text-sprk-grey font-medium pt-2">Drag & Drop your files</p>
                        <div className="flex items-center my-4 w-[100px]">
                          <div className="flex-1 border-t border-[#CECED6]"></div>
                          <span className="text-sprk-light-grey text-xs font-medium px-3">OR</span>
                          <div className="flex-1 border-t border-[#CECED6]"></div>
                        </div>
                        <label className="btn-default btn-primary">
                          Browse
                          <input type="file" className="hidden" onChange={handleFileChange} />
                        </label>
                      </>
                    )}
                  </div>
                )}

                {step === 2 && (
                  <div>

                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-3 px-6 py-4">
              <button onClick={handleClose} className="btn-default btn-primary">
                Cancel
              </button>
              <button
                onClick={() => setStep(2)}
                className="btn-default btn-grey-gradient"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default CpUploadCreativeModal