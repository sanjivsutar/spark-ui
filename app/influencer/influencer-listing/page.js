"use client"

import React from 'react'
import Image from 'next/image'
import ExportFile from '@/components/cp-export/CpExport'
import MainPanel from '@/components/cp-main-panel/cp-main-panel'
import Search from '@/components/cp-search/CpSearch'
import MultipleSelectCheckmarks from '@/components/cp-multiple-select/CpMultipleSelect'
import CustomSelect from '@/components/cp-custom-select/CpCustomSelect'

const InfluencerListing = () => {
    return (
      <MainPanel>
        {/* Influencer Details Section */}
        <section>
          <div className="flex flex-row items-center justify-between mb-4">
            <div className="flex flex-col justify-center gap-2">
              <h1 className="sec-title">Influencer Name</h1>
              <p className="sec-desc">Technology</p>
            </div>
            <div className="flex flex-row items-end gap-[6px]">
              <Search />
              <MultipleSelectCheckmarks />
              <CustomSelect />
              <ExportFile />
            </div>
          </div>
        </section>
      </MainPanel>
    );
}

export default InfluencerListing;