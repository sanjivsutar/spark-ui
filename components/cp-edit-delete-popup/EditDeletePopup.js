"use-client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Box, ClickAwayListener } from "@mui/material";

export default function EditDeletePopup() {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    const handleClickAway = () => {
        setOpen(false);
    };
    return (
        <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={handleClickAway}
        >
            <Box>
                <button type="button" onClick={handleClick}>
                    <Image src="/assets/icons/dots.svg" alt='' width={14} height={14} />
                </button>
                {open ? (
                    <Box className="absolute bg-white rounded-xl shadow-sm border border-gray-200 py-2 px-[18px] opacity-100 transition-opacity duration-200 z-50">
                        <p className='text-xs font-medium py-2'>Mark as final</p>
                        <p className='text-xs font-medium py-2'>Edit</p>
                        <p className='text-xs font-medium py-2'>Delete</p>
                    </Box>
                ) : null}
            </Box>
        </ClickAwayListener>
    )
}
