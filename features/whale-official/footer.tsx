import { CDN_IMAGES } from '@/constants'
import { TalkToUs, ContactUs } from '@/features/talk-to-us'
import ExperienceDemo from '@/features/experience-demo'
import { useTranslation } from 'next-i18next'
import React from 'react'

const WhaleOfficialFooter: React.FC = () => {
  const i18n = useTranslation('common')
  return (
    <div
      className="py-10 bg-right-top bg-cover main-container"
      style={{ backgroundImage: `url('${CDN_IMAGES.contact_us}')` }}
    >
      <div className="flex flex-col main-content-width">
        <div className="font-semibold lg:text-[32px] leading-[45px] mb-[10px]">{i18n.t('footer-banner.1m')}</div>
        <div className="text-base lg:text-lg text-text_color_1_supplement lg:w-[840px]">
          {i18n.t('footer-banner.item-2')}
        </div>
        <div className="flex space-x-5">
          <ContactUs />
        </div>
      </div>
    </div>
  )
}

export default WhaleOfficialFooter
