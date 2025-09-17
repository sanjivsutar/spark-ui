"use client";

import React from "react";
import Image from "next/image";

const SimulatingReportState = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div>
        <Image
          src="/assets/images/spark-group.png"
          alt="spark-group"
          width={60}
          height={60}
        />
      </div>
      <div className="flex flex-col items-center justify-center p-4 max-w-[30%] text-center">
        <h2 className="text-base text-[#0D0D11] font-bold mb-2">
          Analysing your data!
        </h2>
        <p className="text-[14px] text-[#60607B]">
          We’re analyzing the data in the background. Once your report is ready,
          we’ll notify you right away.
        </p>
      </div>
    </div>
  );
};

export default SimulatingReportState;
