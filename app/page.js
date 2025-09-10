"use client";

import CpModal from "@/components/cp-delete-compaign/CpDeleteCompaign";
import ToastMessage from "@/components/cp-toast-message/CpToastMessage";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showToast, setShowToast] = useState(false)

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const templateLinks = [
    {
      title: "Marketing Dashboard",
      url: "/marketing/dashboard",
    },
    {
      title: "Marketing Campaign",
      url: "/marketing/campaign",
    },
    {
      title: "Marketing Campaign Detail",
      url: "/marketing/campaign/campaign-detail",
    },
    {
      title: "Marketing Campaign Kpi Target",
      url: "/marketing/campaign/campaign-kpi-target",
    },
    {
      title: "Scenario Detail",
      url: "/marketing/campaign/scenario-detail",
    },
    {
      title: "Marketing Modal Components",
      url: "/marketing/marketing-modal-component",
    },
    {
      title: "Influencer Dashboard",
      url: "/influencer/dashboard",
    },
    {
      title: "Influencer Detail",
      url: "/influencer/influencer-detail",
    },

  ];
  return (
    <>
      <div className="p-[22px]">
        <h2 className="text-2xl">UI Page Templates </h2>
        <ul className="list-disc p-6">
          {templateLinks.map((ele, index) => {
            return (
              <li key={index}>
                <Link href={ele.url} className="hover:text-red-400">
                  {ele.title}
                </Link>
              </li>
            );
          })}
          <button
            onClick={handleShowToast}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-6"
          >
            Show Toast
          </button>
          <ToastMessage
            icon={
              <Image 
              src="/assets/images/tick-icon.png" 
              alt="Icon" 
              width={20}
              height={20} />
            }
            show={showToast}
            message="This is a toast message!"
            onClose={handleCloseToast}
            duration={3000}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-6"
            onClick={() => setIsOpen(true)}
          >
            Open Modal
          </button>
          {isOpen && (
            <CpModal
              icon={
                <Image
                  src="/assets/images/error.png"
                  alt="Error"
                  width={38}
                  height={38}
                />
              }
              title="Delete Campaign"
              description="Are you sure you want to delete this campaign from the application?"
              cancelText="Cancel"
              confirmText="Delete"
              onClose={() => setIsOpen(false)} 
              onCancel={() => setIsOpen(false)} 
              onConfirm={() => {setIsOpen(false)}}
            />
          )}
        </ul>
      </div>
    </>
  );
}
