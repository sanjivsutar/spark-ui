"use client";

import * as React from "react";
import Image from "next/image";
import { Modal, Box } from "@mui/material";

export default function CpPremiumCompete() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
           width: 1000,
          height: 500,
          overflow: "hidden",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="card-title">Premium Compete</div>
          <Image src="/assets/images/close.png" alt="Icon" width={20} height={20}/>
        </div>
        <iframe
          src="https://www.youtube.com/embed/b4ba60j_4o8"
          width="100%"
          height="400"
          style={{ border: "none", borderRadius: "8px" }}
          title="Premium Compete Content"
        ></iframe>
      </Box>
    </Modal>
  );
}
