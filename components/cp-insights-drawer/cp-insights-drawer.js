"use client";

import Image from "next/image";

export default function Drawer({ open, onToggle, title, description, children }) {
  return (
    <div
      className={`absolute -top-10 right-0 w-80 max-h-[730px] min-h-[616px] min-w-[32%]
                  bg-gradient-to-l from-[#FFF5EF] to-white
                  shadow-xl border-l border-gray-200
                  transform transition-transform duration-300 ease-in-out
                  ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Toggle Button (sticks to drawer edge) */}
      <button
        onClick={onToggle}
        className={`absolute top-1/2 -translate-y-1/2 -left-23
              rotate-270 bg-[#FF5C35] text-white text-[14px] font-semibold
              px-4 py-3 rounded-t-[8px] shadow-md
              transform transition-transform duration-300 ease-in-out flex items-center gap-2
              [background:linear-gradient(89.69deg,#EC3128_-14.76%,#F56233_49.73%,#FF9B3F_100%)]
              `}
      >
        <span>
          <Image
            src="/assets/icons/Shape.svg"
            alt="Home Icon"
            width={14}
            height={14}
            className="invert brightness-0"
          />
        </span>
        <span>AI Insights</span>

        {open ? (
          <Image
            src="/assets/icons/Chevron-up.svg"
            alt="Close"
            width={14}
            height={14}
            className="invert brightness-0"
          />
        ) : (
          <Image
            src="/assets/icons/Chevron-up.svg"
            alt="Open AI Insights"
            width={14}
            height={14}
            className="invert brightness-0"
          />
        )}
      </button>

      {/* Drawer Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">{title}</h2>
            {description && (
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 text-sm text-gray-700">{children}</div>
      </div>
    </div>
  );
}
