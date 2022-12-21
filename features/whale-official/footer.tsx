import { CDN_IMAGES } from '@/constants'
import React from 'react'
import { TalkToUs } from '@/features/talk-to-us'

const WhaleOfficialFooter: React.FC = () => {
  return (
    <div
      className="bg-right-top bg-cover h-72 main-container"
      style={{ backgroundImage: `url('${CDN_IMAGES.contact_us}')` }}
    >
      <div className="flex flex-col items-start justify-center h-full gap-2 main-content-width">
        <div className="text-3xl font-semibold">Get Started With WHALE Market Data </div>
        <div className="text-lg text-text_color_1_supplement">
          Try Whale Market Data for free, and explore all the tools and services you need to start{' '}
        </div>
        <TalkToUs />
      </div>
    </div>
  )
}

export default WhaleOfficialFooter
