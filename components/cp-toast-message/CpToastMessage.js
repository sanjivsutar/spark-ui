"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ToastMessage({
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
    <div className="flex flex-col items-end justify-center 
    fixed bottom-6 bg-[#FFFFFF] left-6 z-50 px-4 py-2 min-w-[346px]
    rounded-lg shadow-lg animate-slide-in border-1 border-[#EEEEF1]">
        <button className="text-gray-400 hover:text-gray-600">
            <Image src="/assets/images/close.png" alt="Icon" width={14} height={14} />
        </button>
      <div className="flex items-center justify-center gap-3">
        <Image src="/assets/images/tick-icon.png" alt="Icon" width={20} height={20} />
      <div className="text-[#0D0D11]">
        {message}
      </div>
    </div>
    </div>
  );
}
