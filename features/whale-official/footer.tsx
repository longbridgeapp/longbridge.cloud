import { CDN_IMAGES } from '@/constants'
import { TalkToUs, ContactUs } from '@/features/talk-to-us'
import ExperienceDemo from '@/features/experience-demo'
import { useTranslation } from 'next-i18next'
import React from 'react'
import Box from '../product/Box'

export const WhaleOfficialFooterNew: React.FC = () => {
  const i18n = useTranslation('common')
  return (
    <Box className="py-[60px] border-y border-border_color">
      <div className="lg:flex items-center justify-between">
        <div className="mb-4 lg:mb-0 lg:mr-4">
          <h3 className="font-semibold text-2xl mb-3">{i18n.t('features_whale_official_footer_891125')}</h3>
          <h4 className="text-sm text-text_color_1_supplement">{i18n.t('features_whale_official_footer_891126')}</h4>
        </div>
        <div className="flex whitespace-nowrap">
          <ContactUs className="!mt-0" />
        </div>
      </div>
    </Box>
  )
}

export default WhaleOfficialFooterNew
