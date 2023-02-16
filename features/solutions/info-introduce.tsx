import React from 'react'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'
import { TalkToUs } from '@/features/talk-to-us'
import ImageIcon from '@/components/image-icon'

interface IInfoIntroduce {
  icon?: string
  title?: string
  description?: string
}
interface IImageAndTextProps {
  title: string
  desc: string[]
  img: Record<string, string>
  cover?: string
  needTalk?: boolean
}

const InfoIntroduce: React.FC<{
  data: IInfoIntroduce[]
  className?: string
  maxWidth?: number
  descClass?: string
}> = ({ className, data, maxWidth = 374, descClass = 'text-base text-text_color_2' }) => {
  return (
    <div className={classnames('flex flex-col gap-10 lg:flex-row justify-center items-center ', className)}>
      {data.map((info, index) => (
        <div key={index} className={classnames('flex flex-col flex-1 gap-y-2', className, `max-w-[${maxWidth}px]`)}>
          {info.icon && <ImageIcon url={info.icon} className="mx-auto lg:mx-0" />}
          {info.title && (
            <div className="text-xl font-medium text-center text-text_color_1 lg:text-left">{info.title}</div>
          )}
          {info.description && <div className={descClass}>{info.description}</div>}
        </div>
      ))}
    </div>
  )
}

export const ImageAndText: React.FC<IImageAndTextProps> = ({ title, desc, img, cover, needTalk = true }) => {
  const i18n = useTranslation('common')
  return (
    <div className="py-10" style={cover ? { backgroundImage: `url('${cover}')` } : {}}>
      <div className="flex flex-col items-center justify-between gap-y-10 lg:flex-row-reverse main-content-width ">
        {/* 文字 */}
        <div className="flex flex-col items-start lg:w-[618px]">
          <div className="text-[44px] leading-[62px] font-semibold">{title}</div>
          <div className="mt-5 text-lg font-normal leading-8 text-text_color_1_supplement">
            {desc.map((i, index) => {
              return <div key={index}>{i}</div>
            })}
          </div>
          {needTalk && <TalkToUs className="mt-10" text="了解更多" />}
        </div>
        {/* 图片 */}
        <div className="lg:w-[430px] ">
          <img src={img[i18n.i18n.language] || img['zh-CN']} alt="" />
        </div>
      </div>
    </div>
  )
}
export default InfoIntroduce
