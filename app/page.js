"use client";

import CpModal from "@/components/cp-delete-compaign/CpDeleteCompaign";
import ToastMessage from "@/components/cp-toast-message/CpToastMessage";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
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
    {
      title: "Client Listing",
      url: "/client/client-listing",
    },
    {
      title: "Client Detail",
      url: "/client/client-detail",
    },
    {
      title: "Creative Listing",
      url: "/creative/creative-listing",
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
        </ul>
      </div>
    </>
  );
}
