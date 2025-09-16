"use client";

import React from "react";
import Image from "next/image";

/**
 * Props:
 * - cards: [{ id, title, src }] (optional; uses defaults if not provided)
 * - onImageClick: function(src) -> called when the card image is clicked
 */
export default function CpCreativesList({ cards: propCards, onImageClick }) {
  const defaultCards = [
    { id: 1, title: "Creative 1", src: "/assets/images/influencer-prajakta.jpg",engagement: "5" },
    { id: 2, title: "Creative 2", src: "/assets/images/influencer-aliaa.png" ,engagement: "5"},
    { id: 3, title: "Creative 3", src: "/assets/images/influencer-jenny.jpg",engagement: "5" },
    { id: 4, title: "Creative 4", src: "/assets/images/influencer-prajakta.jpg",engagement: "5" },
  ];

  const cards = propCards || defaultCards;

  return (
    <section>
      <div className="flex flex-row gap-4 pb-4 pt-6">
        {cards.map((c) => (
          <div
            key={c.id}
            className="creative-card relative rounded-2xl overflow-hidden shadow-lg w-[320px]"
          >
            <div className="absolute top-4 left-6 right-0 w-full pointer-events-none">
              <h3 className="text-xl font-bold text-sprk-light after:content-[''] after:block after:w-[42px] after:h-[3px] after:rounded-[9px] after:bg-[linear-gradient(89.69deg,#EC3128_-14.76%,#F56233_49.73%,#FF9B3F_100%)] after:mt-2">
                {c.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => onImageClick && onImageClick(c.src,c.title,c.engagement)}
              aria-label={`Open ${c.title} image`}
              className="block w-full h-[287px] p-0 m-0 bg-transparent border-0"
            >
              <Image
                src={c.src}
                alt={c.title}
                width={1200}
                height={600}
                className="w-full h-[287px] object-cover"
              />
            </button>

            <div className="rounded-xl p-6 absolute bottom-0 left-0 right-0 bg-[linear-gradient(126.16deg,rgba(82,82,82,0.24)_-3.39%,rgba(0,30,41,0.4)_58.7%)]">
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-between pt-4">
                  <p className="text-xs font-[500] text-[#F7F7F8] pb-[2px]">Engagement %</p>
                  <p className="text-sm font-extrabold text-sprk-light">{c.engagement} %</p>
                </div>
                <Image src={"/assets/icons/delete.svg"} alt="Delete" width={13} height={15} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
