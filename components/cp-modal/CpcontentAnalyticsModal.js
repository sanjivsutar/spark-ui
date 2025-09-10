import React from 'react';
import { Modal } from '@mui/material'
import Image from 'next/image';
import ExportFile from '../cp-export/CpExport';

const CpContentAnalyticsModal = ({open, handleClose}) => {
  return (
    <Modal open={open} onClose={handleClose}>
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="bg-white w-full max-w-[848px] rounded-xl shadow-lg p-8 relative">
                <button
                    onClick={handleClose}
                    className="absolute top-[32px] right-[24px]"
                >
                    <Image src="/assets/images/close.png" alt='close icon' width={20} height={20} className=''/>
                </button>
                <h2 className='text-2xl font-extrabold text-sprk-dark-2'>Content Analytics</h2>

                <div className='pt-[36px]'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <div className='p-[1px] rounded-full red-yellow-border-gradient'>
                                <Image src="/assets/images/influencer-prajakta-kohli.png" alt='profile image' width={40} height={40} className='rounded-full bg-white'/>
                            </div>
                            <h3 className='card-title'>Prajakta Kohli</h3>
                        </div>
                        <div className='flex gap-3 justify-between'>
                            <div className='flex gap-1 items-center'>
                                <Image src="/assets/icons/calender-icon.svg" alt='calender icon' width={12} height={12}/>
                                <p className='text-xs font-medium text-[#373748]'>12th August, 2025</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <Image src="/assets/icons/Map-marker.svg" alt='calender icon' width={12} height={12}/>
                                <p className='text-xs font-medium text-[#373748]'>United Kingdom</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <Image src="/assets/icons/Translate.svg" alt='calender icon' width={12} height={12}/>
                                <p className='text-xs font-medium text-[#373748]'>English</p>
                            </div>
                           <ExportFile />
                        </div>
                    </div>
                    <div className='py-5 relative'>
                         <video
                            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" // place video inside public/assets/videos/
                            controls
                            autoPlay
                            loop
                            muted
                            className="w-[840px] h-[305px] rounded-xl shadow-lg"
                        >
                            Your browser does not support the video tag.
                        </video>
                        <div className='flex gap-2 absolute top-10 left-3'>
                            <div className='rounded-xl py-1 px-2 bg-red-orange-gradient'>
                                <p className='text-xs font-medium text-white'>Excellent</p>
                            </div>
                            <div className='rounded-xl py-1 px-2 bg-sprk-light'>
                                <p className='text-xs font-medium text-sprk-dark-2'>Technology</p>
                            </div>
                            <div className='rounded-xl py-1 px-2 bg-sprk-light'>
                                <p className='text-xs font-medium text-sprk-dark-2'>Instagram</p>
                            </div>
                            <div className='rounded-xl py-1 px-2 bg-sprk-light'>
                                <p className='text-xs font-medium text-sprk-dark-2'>Story</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-xs text-[#373748]'>
                            <span className='font-medium'>Caption Posted: </span>
                            <span className='font-bold'>Loving this new sustainable fashion collection.</span>
                        </p>
                         <div className="stats-container pt-4 pb-5 flex justify-between flex-start">
                            <div className="stat-item">
                                <p className="text-xs font-medium text-sprk-grey">Like</p>
                                <p className="text-sm font-extrabold text-sprk-dark-2">100k</p>
                            </div>
                            <div className="stat-item">
                                <p className="text-xs font-medium text-sprk-grey">Share</p>
                                <p className="text-sm font-extrabold text-sprk-dark-2">100</p>
                            </div>
                            <div className="stat-item">
                                <p className="text-xs font-medium text-sprk-grey">Comments</p>
                                <p className="text-sm font-extrabold text-sprk-dark-2">200</p>
                            </div>
                            <div className="stat-item">
                                <p className="text-xs font-medium text-sprk-grey">Views</p>
                                <p className="text-sm font-extrabold text-sprk-dark-2">200</p>
                            </div>
                            <div className="stat-item">
                                <p className="text-xs font-medium text-sprk-grey">CTR</p>
                                <p className="text-sm font-extrabold text-sprk-dark-2">3.2%</p>
                            </div>
                            <div className="stat-item">
                                <p className="text-xs font-medium text-sprk-grey">Engagement %</p>
                                <p className="text-sm font-extrabold text-sprk-dark-2">5%</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm font-medium text-sprk-dark pb-3'>Sentiment Breakdown</p>
                        <div className='flex justify-between items-center'>
                            <div className='py-4 px-[31.17px] bg-[#E2F8EC] flex gap-2 items-center rounded-xl'>
                                <p className='text-[#31A968]'>
                                    <span className='text-[32px] font-bold'>0.6</span>
                                    <span className='text-[22px] font-medium'>%</span>
                                </p>
                                <div>
                                    <p className='text-xs font-semibold text-[#05051E]'>Positive Sentiment</p>
                                    <p className='text-[8px] font-medium text-sprk-grey'>Favourable responses</p>
                                </div>
                            </div>
                             <div className='py-4 px-[31.17px] bg-[#FFFAD9] flex gap-2 items-center rounded-xl'>
                                <p className='text-[#CCBC5B]'>
                                    <span className='text-[32px] font-bold'>0.3</span>
                                    <span className='text-[22px] font-medium'>%</span>
                                </p>
                                <div>
                                    <p className='text-xs font-semibold text-[#05051E]'>Neutral Sentiment</p>
                                    <p className='text-[8px] font-medium text-sprk-grey'>Balanced or mix tone</p>
                                </div>
                            </div>
                             <div className='py-4 px-[31.17px] bg-[#F9E0DE] flex gap-2 items-center rounded-xl'>
                                <p className='text-[#B0251C]'>
                                    <span className='text-[32px] font-bold'>0.1</span>
                                    <span className='text-[22px] font-medium'>%</span>
                                </p>
                                <div>
                                    <p className='text-xs font-semibold text-[#05051E]'>Negative Sentiment</p>
                                    <p className='text-[8px] font-medium text-sprk-grey'>Critical or unfavourable tone</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
  )
}

export default CpContentAnalyticsModal