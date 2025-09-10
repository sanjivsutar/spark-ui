"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ToastMessage({
  icon,
  message,
  show,
  onClose,
  duration = 3000,
}) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
  <div className="flex items-center justify-between rounded-md bg-[#FFFFFF] fixed bottom-6 left-6 z-50 px-1 w-full max-w-[345px] shadow-md border-1 border-[#EEEEF1]">
    <div className="flex items-start justify-center space-x-2 py-1">
      <div className="w-[2px] self-stretch bg-[#022B59] rounded-[3px]"></div>
      <div className="flex items-center justify-center mt-[2px] py-2 pl-2">
        {icon}
      </div>
      <div className="flex flex-col items-start py-2">
      <div className="text-[14px] text-[#0D0D11] font-bold">Toast Heading</div>
      <div className="text-[14px] text-[#0D0D11]">{message}</div>
      <button className="text-sm text-[#022B59] underline decoration-[#022B59] mt-1 font-semibold">BUTTON</button>
      </div>
    </div>

    <button className="text-black text-lg font-semibold hover:text-red-600">
      <Image src="/assets/images/close.png" alt="Icon" width={14} height={14} className="absolute right-2 top-2"/>
    </button>
  </div>
  );
}
