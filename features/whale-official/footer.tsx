import { CDN_IMAGES } from '@/constants'
import { TalkToUs } from '@/features/talk-to-us'
import { useTranslation } from 'next-i18next'
import React from 'react'

const WhaleOfficialFooter: React.FC = () => {
  const i18n = useTranslation('common')
  return (
    <div
      className="bg-right-top bg-cover h-72 main-container"
      style={{ backgroundImage: `url('${CDN_IMAGES.contact_us}')` }}
    >
      <div className="flex flex-col items-start justify-center h-full gap-2 main-content-width">
        <div className="text-xl font-semibold lg:text-3xl">{i18n.t('footer-banner.1m')}</div>
        <div className="text-base lg:text-lg text-text_color_1_supplement lg:w-[840px]">
          {i18n.t('footer-banner.item-2')}
        </div>
        <TalkToUs />
      </div>
    </div>
  )
}

export default WhaleOfficialFooter
