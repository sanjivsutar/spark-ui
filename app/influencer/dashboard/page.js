"use client"
import CpInfluencersPerformanceCard from '@/components/cp-influencers-perfomance/CpInfluencersPerformanceCard'
import MainPanel from '@/components/cp-main-panel/cp-main-panel'
import React from 'react'
import { useState } from 'react'
import CpTopPerformingCampaigns from '@/components/cp-top-performing-compaigns/CpTopPerformingCampaigns'
import Search from '@/components/cp-search/CpSearch'
import ExportFile from '@/components/cp-export/CpExport'
import SelectPrimary from '@/components/cp-select-primary/CpSelectPrimary'

const InfluencerDashboard = () => {
  return (
    <MainPanel>
        <CpInfluencersPerformanceCard />
    <section>
      <div className='flex flex-row justify-between'>
        <div>
          <h1 className="head-title">Influencers</h1>
          <p className='sec-desc'>Manage and analyse your influencer partnerships</p>
        </div>
        <div className='flex flex-row align-center justify-between gap-4'>
          <Search/>
          <ExportFile/>
        </div>
      </div>
    </section>
    <CpTopPerformingCampaigns/>
    </MainPanel>
  )
}

export default InfluencerDashboard