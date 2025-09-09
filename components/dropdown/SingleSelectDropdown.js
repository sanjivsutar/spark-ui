"use client";

import React, { useState, useEffect, useRef } from "react";

const SingleSelectDropdown = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0] || "");
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div ref={ref} className="relative w-190">
      <button
        className=" flex items-center px-4 py-2 font-semibold text-[13px] text-[#022B59] rounded-md border border-[#022B59]/30 hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {label || selected}
        {/* <ChevronDownIcon className="w-5 h-5 ml-2 text-[#022B59]" /> */}
      </button>
      {isOpen && (
        <div
          role="listbox"
          className="absolute mt-1 border border-[#E5E5E9] shadow-lg rounded-md p-3 bg-white z-10 w-30"
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`block w-full text-left px-2 py-2 text-[#0D0D11] rounded-md font-medium hover:bg-gray-100 text-[13px] ${
                selected === option ? "bg-gray-200" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleSelectDropdown;
