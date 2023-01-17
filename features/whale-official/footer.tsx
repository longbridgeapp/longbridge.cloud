import { CDN_IMAGES } from '@/constants'
import { TalkToUs } from '@/features/talk-to-us'
import { useTranslation } from 'next-i18next'
import React from 'react'

const WhaleOfficialFooter: React.FC = () => {
  const i18n = useTranslation('common')
  return (
    <div
      className="bg-right-top bg-cover main-container py-10 main-container lg:py-20"
      style={{ backgroundImage: `url('${CDN_IMAGES.contact_us}')` }}
    >
      <div className="flex flex-col main-content-width">
        <div className="font-semibold lg:text-[32px] leading-[45px] mb-[10px]">{i18n.t('footer-banner.1m')}</div>
        <div className="text-base lg:text-lg text-text_color_1_supplement lg:w-[840px]">
          {i18n.t('footer-banner.item-2')}
        </div>
        <div>
          <TalkToUs />
        </div>
      </div>
    </div>
  )
}

export default WhaleOfficialFooter
