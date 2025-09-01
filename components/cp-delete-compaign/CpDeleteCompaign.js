"use client";

import React from "react";
import Image from "next/image";

export default function CpDeleteCompaign() {
  return (
    <section className="modal-show">
      <div className="popup-box">
        {/* Close button */}
        <button className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
          <Image src="/assets/images/close.png" alt="Close" width={20} height={20} />
        </button>

        {/* Icon */}
        <div className="rounded-full flex justify-center items-center">
          <Image src="/assets/images/error.png" alt="Error" width={38} height={38} />
        </div>

        <h1 className="sec-title mt-2">Delete Campaign</h1>
        <p className="text-center text-gray-600">
          Are you sure you want to delete this campaign from the application?
        </p>

        {/* Action buttons */}
        <div className="flex gap-4 mt-8">
          <button className="btn-outline w-24">Cancel</button>
          <button className="btn-dark btn-default w-24">Delete</button>
        </div>
      </div>
    </section>
  );
}
