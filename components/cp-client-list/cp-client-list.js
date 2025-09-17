"use client";

import React from "react";
import EditDeletePopup from "../cp-edit-delete-popup/EditDeletePopup";

const cards = [
  {
    id: 1,
    title: "Client Name",
    user: "5",
    enrolled: "21 July 2025",
    tags: ["Brand/Sub Brand", "Premium","Inactive"],
    modules: ["Marketing Strategy", "Creatives"],
  },
  {
    id: 2,
    title: "Client Name",
    user: "5",
    enrolled: "21 July 2025",
    tags: ["Brand/Sub Brand", "Growth"],
    modules: ["Branding", "Sales Funnel"],
  },
  {
    id: 3,
    title: "Client Name",
    user: "5",
    enrolled: "21 July 2025",
    tags: ["Brand/Sub Brand"],
    modules: ["Content Marketing", "SEO"],
  },
];

function Card({ item }) {
  return (
    <div className="rounded-2xl shadow-lg p-6 border border-gray-200 min-w-[430px]">
      <div className="flex flex-row items-center gap-2 mb-4 flex-wrap">
        {item.tags.map((tag, idx) => (
          <div
            key={idx}
            className="label"
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center justify-between mb-6">
        <div className="card-title">{item.title}</div>
        <EditDeletePopup />
      </div>

      <div className="flex flex-row items-center justify-between mb-4">
        <div className="font-bold text-[12px] leading-[16px] text-[#373748]">
          <span className="font-normal text-[11px]">Modules Enrolled: </span>
          {item.modules.join(", ")}
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="font-bold text-[12px] leading-[16px] text-[#373748]">
          <span className="font-normal text-[11px]"> User: </span>
          {item.user}
        </div>
        <div className="font-bold text-[12px] leading-[16px] text-[#373748]">
          <span className="font-normal text-[11px]">Enrolled On: </span>
          {item.enrolled}
        </div>
      </div>
    </div>
  );
}

export default function CpClientList() {
  return (
    <section className="flex flex-row gap-4">
      {cards.map((c) => (
        <Card key={c.id} item={c} />
      ))}
    </section>
  );
}