import React from 'react'
import CpDropdown from '../dropdown/CpDropdown';

const CpHeader = () => {
  return (
    <div className='flex justify-between'>
        <h2 className="font-semibold text-[28px] text-[#0D0D11]">Welcome Meha,</h2>
        
        <div className='flex justify-between gap-4'>
            <CpDropdown
                options={["Last 30 days", "All time", "Last week", "Last month", "Last 3 months", "Last year"]}
                // onSelect={(val) => console.log("Time Range Selected:", val)}
            />
            <CpDropdown
                label="Export"
                options={["JPEG","PNG","PDF"]}
            />
        </div>
    </div>
  )
}

export default CpHeader;