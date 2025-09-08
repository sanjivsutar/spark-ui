import Image from 'next/image'
import React from 'react'

const CpMetricCard = () => {

    const cards = [
        {
            cardInfoNumber: '41',
            cardInfoText: 'Posts',
            cardImage: '/assets/icons/Media.svg'
        },
         {
            cardInfoNumber: '115K',
            cardInfoText: 'Engagement',
            cardImage: '/assets/icons/market-graph.svg'
        },
         {
            cardInfoNumber: '1.2K',
            cardInfoText: 'Likes',
            cardImage: '/assets/icons/Thumbs-up.svg'
        },
         {
            cardInfoNumber: '2.5K',
            cardInfoText: 'Comments',
            cardImage: '/assets/icons/Chat.svg'
        },
         {
            cardInfoNumber: '1M',
            cardInfoText: 'Impressions',
            cardImage: '/assets/icons/Series-search.svg'
        }
    ]

  return (
    <div className="flex gap-4  mb-5 mt-6">
        {
            cards.map((card,index) => {
                return(
                    <div className="flex-1 min-w-0 rounded-xl shadow-lg p-6 border border-gray-200 relative overflow-hidden" key={`card_${index}`}>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-xl font-bold text-sprk-dark'>{card.cardInfoNumber}</p>
                                <p className='text-xs font-medium text-sprk-grey'>{card.cardInfoText}</p>
                            </div>
                            <div className='w-10 h-10 rounded-full border border-gray-200 bg-[radial-gradient(circle,rgba(0,0,0,0.1)_0%,transparent_70%)] flex items-center justify-center'>
                                <Image
                                    src={card.cardImage}
                                    alt="card Image"
                                    width={16}
                                    height={16}
                                />
                            </div>
                        </div>
                    </div>
                )
            })
        }

   </div>
  )
}

export default CpMetricCard;