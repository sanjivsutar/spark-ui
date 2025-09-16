"use client";

import * as React from "react";
import Image from "next/image";
import { Modal, Box } from "@mui/material";

/**
 * Props:
 * - isOpen: boolean
 * - src: string (image path)
 * - onClose: function() -> called when closing
 * - alt: string (optional alt text)
 */
export default function ImageModal({ username,engagement,isOpen, src, onClose, alt = "Preview" }) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          width: 850,
          height: 710,
          overflow: "hidden",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
        }}
      >
        {/* header */}
        <div className="h-full flex flex-col p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="text-lg font-bold">Creative Preview</div>
          <button onClick={onClose}>
            <Image src="/assets/images/close.png" alt="Close" width={20} height={20} />
          </button>
        </div>
        <div>
        <div className="flex items-center justify-between mb-5">
            <h2 className="card-title">{username}</h2>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700">
                <span>
                    <Image
                    src='/assets/icons/market-graph.svg'
                    alt={alt}
                    width={16}
                    height={16}
                    />
                </span>
                <span className="text-sm text-[#373748]">Engagement % : </span>
                <span className="text-base font-bold text-[#373748]">{engagement}</span>
            </div>
        </div>
        {/* image */}
        <div className="flex items-center justify-center h-[calc(100%-64px)]  rounded-lg">
          {src && (
            <Image
              src={src}
              alt={alt}
              width={800}
              height={520}
              className="object-contain max-h-[520px] max-w-full rounded-lg"
            />
          )}
        </div>
        </div>
        </div>
      </Box>
    </Modal>
  );
}
