import React from 'react'
import { useTranslation } from 'react-i18next'
import { CDN_IMAGES } from '@/constants'
import { TalkToUs } from '../talk-to-us'
import ExperienceDemo from '../experience-demo'
import classnames from 'classnames'
interface Props {
  title: string
  subtitle?: string
  desc: string[]
  img: Record<string, string>
  imgClassName?: string
}

const Banner: React.FC<Props> = props => {
  const { title, subtitle, desc, img, imgClassName = '' } = props
  const i18n = useTranslation('common')
  const isEN = i18n.i18n.language === 'en'
  return (
    <div
      className="py-10 bg-cover main-container lg:pt-20 lg:pb-[90px]"
      style={{ backgroundImage: `url('${CDN_IMAGES.banner_bg}')` }}
    >
      <div className="flex flex-col items-center justify-between main-content-width lg:flex-row ">
        {/* 文字 */}
        <div className="flex flex-col items-start lg:w-[550px]">
          <h1 className="text-[44px] leading-[62px] font-semibold">{title}</h1>
          {!!subtitle && <h1 className="text-[44px] leading-[62px] font-semibold">{subtitle}</h1>}
          <div className="mt-5 text-lg font-normal leading-8 text-text_color_1_supplement">
            {desc.map((i, index) => {
              return <div key={index}>{i}</div>
            })}
          </div>
          <div className="flex space-x-5">
            <TalkToUs className="mt-10" />
            <ExperienceDemo />
          </div>
        </div>
        {/* 图片 */}
        <div className={`lg:w-[620px] lg:h-[430px] flex flex-col justify-center ${imgClassName}`}>
          <img src={img[i18n.i18n.language] || img['zh-CN']} alt="" />
        </div>
      </div>
    </div>
  )
}

export const NewBanner: React.FC<Props> = props => {
  const { title, subtitle, desc, img, imgClassName = '' } = props
  const i18n = useTranslation('common')
  const isEN = i18n.i18n.language === 'en'
  return (
    <div className="py-10 bg-cover">
      <div className="flex flex-col items-center justify-between space-y-10">
        {/* 文字 */}
        <div className="main-container">
          <div className="flex flex-col items-center text-center main-content-width">
            <h1 className="text-[44px] leading-[62px] font-semibold">{title}</h1>
            {!!subtitle && <h1 className="text-[44px] leading-[62px] font-semibold">{subtitle}</h1>}
            <div className="mt-4 text-lg font-normal leading-8 text-text_color_1_supplement">
              {desc.map((i, index) => {
                return <div key={index}>{i}</div>
              })}
            </div>
            <div className="flex mt-6 space-x-5">
              <TalkToUs className="h-10 mt-0" />
              <ExperienceDemo className="h-[40px] mt-0" />
            </div>
          </div>
        </div>
        {/* 图片 */}
        <div
          className={classnames(
            'relative flex justify-center w-full',
            'before:absolute before:left-0  before:top-0 before:h-full before:w-16 md:before:w-48 before:bg-gradient-to-r before:from-front-bg-color-1 before:to-transparent',
            'after:absolute after:right-0  after:top-0 after:h-full after:w-16 md:after:w-48 after:bg-gradient-to-l after:from-front-bg-color-1 after:to-transparent',
            imgClassName
          )}
        >
          <img src={img[i18n.i18n.language] || img['zh-CN']} alt="" className="min-w-[1000px]" />
        </div>
      </div>
    </div>
  )
}

export default Banner
