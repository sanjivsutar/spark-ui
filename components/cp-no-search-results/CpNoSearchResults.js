"use client";

import React from "react";
import Image from "next/image";

export default function CpNoSearchResults() {
    return(
        <section>
            <div className="flex flex-col items-center justify-center h-96 text-center gap-4">
                <Image src="/assets/images/no-table.png" alt="No Results Found" width={114} height={83} />
                <h1 className="sec-title">No Results Found</h1>
                <p>We couldn’t find anything matching your search.</p>
            </div>
        </section>
    )
}