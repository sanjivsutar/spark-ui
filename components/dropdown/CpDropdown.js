'use client';

import React, { useState } from 'react'

const CpDropdown = ({label, options, onSelect}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(options[0]);


  const handleSelectedOption = (option) => {
    setIsSelected(option);
    setIsOpen(false);
    if(onSelect) onSelect(option);
  }

  return (
   <div>
    <button 
        className="px-[16px] py-[12px] font-semibold text-[13px] text-[#022B59] rounded-md border border-[#022B59]-300"
        onClick={() => setIsOpen(!isOpen)} 
    >
        {label ? label : isSelected}
    </button>

    {isOpen && (
          <div className="border border-[#E5E5E9] shadow-[0px_4px_8px_0px_#05051E26] rounded-md p-4 m-1">
             {
                options.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleSelectedOption(option)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#0D0D11] font-medium"
                    >
                    {option}
                    </button>
                ))
             }
          </div>
        )}
   </div>
  )
}

export default CpDropdown