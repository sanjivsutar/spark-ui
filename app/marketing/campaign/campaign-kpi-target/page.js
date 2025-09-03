'use client';
import Image from 'next/image'
import React, {useState} from 'react'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {  Button, Grid, Modal } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { color, fontSize, fontWeight } from '@mui/system';
import CustomTextField from '@/components/cp-custom-textfield/CpCustomTextField';
import MainPanel from '@/components/cp-main-panel/cp-main-panel';
import CpCustomBudgetModal from '@/components/cp-modal/CpCustomBudgetModal';

const CpCampaignKPITarget = () => {

  const [KPIName, setKPIName] = useState('TOM');
  const [drivers, setDrivers] = useState(['OTT spends']);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCard, setSelectedCard] = useState("kpi");

//   custom budget 
  const [open, setOpen] = useState(false);

  const tagList = [
  "TV spends", "Digital branding", "OTT spends", "Performance spends",
  "Digital branding", "OTT spends", "TV spends", "OTT spends",
  "TV spends", "Performance spends", "Performance spends", "Digital branding",
  "Performance spends", "TV spends", "OTT spends", "Digital branding",
];



  const handleChange = (event) => {
    setKPIName(event.target.value);
  };

  const handleDrivers = (tag) => {
  setDrivers((prev) =>
    prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
  );
};
  return (
    <MainPanel>
        <>
          <div>
            <div className='cp-breadcrumbs'>
                <p className='breadcrumb-item'>Campaign Listing</p>
                <Image src="/assets/icons/Chevron-right.svg" alt='' width={12} height={12} />
                <p className='breadcrumb-item'>Details: Campaign Name</p>
                <Image src="/assets/icons/Chevron-right.svg" alt='' width={12} height={12} />
                <p className='breadcrumb-item'>Setup Your Scenario: Scenario Name</p>
            </div>
            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-8'>
                <div className='flex justify-between'>
                    <div className='pb-6'>
                        <h2 className='sec-title'>Setup Your Scenario</h2>
                        <p className='sec-desc'>Add scenario name and choose from available scenario type. </p>
                    </div>
                    <Image src="/assets/icons/Chevron-up.svg" alt='Chevron-up Icon' width={32} height={32}/>
                </div>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    className='cp-scenario-form'
                    >
                    <div>
                        <p className='label-wrap text-sprk-dark-2'>Scenario Name</p>
                        <FormControl fullWidth>
                            <OutlinedInput placeholder="Lenovo target" style={{fontSize: '14px', fontWeight: 500, color: '#0D0D11'}}/>
                        </FormControl>
                    </div>
                    <div className="flex flex-wrap gap-6 my-8">
                        <div className={`cp-scenario-card ${selectedCard === "kpi" ? "active" : null}`} onClick={() => setSelectedCard("kpi")}>
                            <div>
                                <p className="title">KPI Target</p>
                                <p className="desc">Targeted growth goals</p>
                            </div>
                            <Image src="/assets/icons/Series-search.svg" alt="" width={55} height={55} />
                        </div>

                        <div className={`cp-scenario-card ${selectedCard === "budget" ? "active" : null}`} onClick={() => setSelectedCard("budget")}>
                            <div>
                                <p className="title">Budget</p>
                                <p className="desc">By budget split</p>
                            </div>
                            <Image src="/assets/icons/Calculator.svg" alt="" width={55} height={55} />
                        </div>

                        <div className={`cp-scenario-card ${selectedCard === "threshold" ? "active" : null}`} onClick={() => setSelectedCard("threshold")}>
                            <div>
                                <p className="title">Threshold</p>
                                <p className="desc">Most favourable outcome</p>
                            </div>
                            <Image src="/assets/icons/Form.svg" alt="" width={55} height={55} />
                        </div>

                        <div 
                            className={`cp-scenario-card ${selectedCard === "custom" ? "active" : null}`} 
                            onClick={() => {
                                setSelectedCard("custom")
                                setOpen(true)
                            }}
                        >
                            <div>
                                <p className="title">Custom</p>
                                <p className="desc">Add preferred budget</p>
                            </div>
                            <Image src="/assets/icons/color-style.svg" alt="" width={55} height={55} />
                        </div>
                    </div>

                    <div className='w-full'>
                        <p className='label-wrap text-sprk-dark-2'>
                            KPI
                            <Image src="/assets/icons/question.svg" alt='' width={14} height={18}/>
                        </p>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={KPIName}
                            style={{color: '#0D0D11', width: '49%', fontSize: 14, fontWeight: 500, fontFamily: 'Inter'}}
                            onChange={handleChange}
                        >
                            <MenuItem value="TOM" style={{color: '#0D0D11', width: '100%', fontSize: 14, fontWeight: 500, fontFamily: 'Inter'}}>TOM</MenuItem>
                            <MenuItem value="JERRY" style={{color: '#0D0D11', width: '100%', fontSize: 14, fontWeight: 500, fontFamily: 'Inter'}}>JERRY</MenuItem>
                        </Select>
                    </div>
                    <div className='py-8 flex w-full'>
                        <div className='w-[50%] pr-4'>
                            <p className='label-wrap text-[#333333]'>
                                Current KPI Level
                                <Image src="/assets/icons/question.svg" alt='' width={14} height={18}/>
                            </p>
                            <p className='text-base font-bold text-sprk-dark-2'>30</p>
                        </div>
                        <div>
                            <p className='label-wrap text-[#333333]'>
                                Current Market Share
                                <Image src="/assets/icons/question.svg" alt='' width={14} height={18}/>
                            </p>
                            <p className='text-base font-bold text-sprk-dark-2'>48</p>
                        </div>
                    </div>
                    <div className='pb-8 flex w-full'>
                        <div className='w-[50%] pr-4'>
                            <p className='label-wrap text-[#333333]'>
                                Target KPI Level
                                <Image src="/assets/icons/question.svg" alt='' width={14} height={18}/>
                            </p>
                            <FormControl className='w-full'>
                                <OutlinedInput placeholder="480" />
                            </FormControl>
                        </div>
                        <div className='w-[50%]'>
                            <p className='label-wrap text-[#333333]'>
                                Target Market Share
                                <Image src="/assets/icons/question.svg" alt='' width={14} height={18}/>
                            </p>
                            <FormControl className='w-full'>
                                <OutlinedInput placeholder="Sustenance" />
                            </FormControl>
                        </div>
                    </div>
                    <div className='pb-8 w-full'>
                        <p className='label-wrap text-sprk-dark-2'>
                            Expected Category KPI Level
                            <Image src="/assets/icons/question.svg" alt='' width={14} height={18}/>
                        </p>
                        <FormControl className='w-[49%]'>
                            <OutlinedInput placeholder="Select KPI" />
                        </FormControl>
                    </div>
                </Box>

                <div>
                    <div className='flex justify-between items-center my-[31px]'>
                        <h2 className='sec-title text-sprk-dark-2'>Select Drivers</h2>
                        <div className='flex items-center'>
                            <button className='mr-5 btn-link'>Select All</button>
                            <button className='btn-outline flex items-center gap-2'>
                                <Image src="/assets/icons/Helper-management.svg" alt='' width={12} height={12} />
                                Manage Constraints
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {tagList.map((tag, index) => {
                            const isSelected = drivers.includes(tag);
                            return (
                            <div key={index} className="basis-1/6 p-2">
                                <button
                                onClick={() => handleDrivers(tag)}
                                className={`w-full rounded-xl px-4 py-[11px] font-medium text-sm 
                                    ${isSelected
                                    ? "text-white bg-gradient-to-r from-[#EC3228] to-[#FF9B3F] shadow text-sm font-medium"
                                    : "bg-sprk-light text-sm font-medium text-sprk-dark-2 border border-gray-300 hover:bg-gray-50"}
                                `}
                                >
                                {tag}
                                </button>
                            </div>
                            );
                        })}
                    </div>

                </div>

                <div className='mt-8'>
                    <div className='flex justify-between items-center py-6'>
                        <div>
                            <h2 className='sec-title text-sprk-dark-2'>Assumptions</h2>
                            <p>Description</p>
                        </div>
                        <button className='btn-link'>Set default</button>
                    </div>
                    <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    className='cp-assumptions-form'
                    >
                        <div className='pb-8 flex w-full'>
                            <div className='w-[50%] pr-4'>
                                <p className='label-wrap text-[#333333]'>
                                    Weighted Distribution
                                    <Image src="/assets/icons/question.svg" alt='' width={14} height={18}/>
                                </p>
                                <FormControl className='w-full'>
                                    <OutlinedInput placeholder="57" />
                                </FormControl>
                            </div>
                            <div className='w-[50%]'>
                                <p className='label-wrap text-[#333333]'>
                                Product Configuration Index
                                    <Image src="/assets/icons/question.svg" alt='' width={14} height={18}/>
                                </p>
                                <FormControl className='w-full'>
                                    <OutlinedInput placeholder="104" />
                                </FormControl>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <div className='w-[50%] pr-4'>
                                <p className='label-wrap text-[#333333]'>
                                    Discount Level
                                    <Tooltip 
                                        title="% increased compared to same period last year" 
                                        slotProps={{
                                            popper: {
                                            sx: {
                                                [`& .${tooltipClasses.tooltip}`]: {
                                                backgroundColor: "#fff",
                                                color: "#60607B",
                                                padding: '16px',
                                                boxShadow: 1, // theme.shadows[1]
                                                fontSize: 12,
                                                fontWeight: 500,
                                                },
                                            },
                                            },
                                        }}

                                    >
                                        <Image src="/assets/icons/question.svg" alt='' width={14} height={18}/>
                                    </Tooltip>

                                </p>
                                <FormControl className='w-full'>
                                    <OutlinedInput placeholder="0" />
                                </FormControl>
                            </div>
                            <div className='w-[50%]'>
                                <p className='label-wrap text-[#333333]'>
                                PFV Index
                                    <Image src="/assets/icons/question.svg" alt='' width={14} height={18}/>
                                </p>
                                <FormControl className='w-full'>
                                    <OutlinedInput placeholder="0.94" />
                                </FormControl>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </div>


        {/* custom budget modal code */}
        {/* <Modal open={open} onClose={() => setOpen(true)}>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white w-full max-w-[848px] rounded-xl shadow-lg p-8 relative">
                    <button
                    onClick={() => setOpen(false)}
                    className="absolute top-[32px] right-[24px]"
                    >
                        <Image src="/assets/images/close.png" alt='close icon' width={20} height={20} />
                    </button>
                    <h2 className="text-2xl font-extrabold text-sprk-dark-2 mb-6">
                    Custom Budget
                    </h2>
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
                    <div className="flex justify-end space-x-3 mt-4">
                    <button
                        onClick={() => setOpen(false)}
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
        </Modal> */}

        <CpCustomBudgetModal open={open} handleClose={() => setOpen(false)} />
        </>
    </MainPanel>
  )
}

export default CpCampaignKPITarget