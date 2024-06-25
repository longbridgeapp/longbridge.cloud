import React, { ReactNode } from 'react'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'
import { TalkToUs, ContactUs } from '@/features/talk-to-us'
import { LocaleLink } from '@/components/locale-link'
import ImageIcon from '@/components/image-icon'
import Button from '@/components/button'

interface IInfoIntroduce {
  icon?: string
  iconClass?: string
  title?: string
  description?: string
  className?: string
}
interface IImageAndTextProps {
  title?: string
  desc?: ReactNode[]
  img: Record<string, string>
  cover?: string
  needTalk?: boolean
  needContact?: boolean | ReactNode
  reverse?: boolean
  localLink?: string
  tips?: string
  subTitle?: string
  showDot?: boolean
  titleClassName?: string
  imgClassName?: string
}

interface IImageAndListProps {
  subTitle?: string
  title: string
  desc: { icon: string; text: ReactNode }[]
  img: Record<string, string>
  cover?: string
  needTalk?: boolean
  reverse?: boolean
}

const InfoIntroduce: React.FC<{
  data: IInfoIntroduce[]
  className?: string
  maxWidth?: number
  descClass?: string
}> = ({ className, data, maxWidth = 374, descClass = 'text-base text-text_color_2' }) => {
  return (
    <div className={classnames('flex flex-col gap-10 lg:flex-row justify-center items-start', className)}>
      {data.map((info, index) => (
        <div
          key={index}
          className={classnames('flex flex-col flex-1 gap-y-2', `max-w-[${maxWidth}px]`, info.className)}
        >
          {info.icon && <ImageIcon url={info.icon} className={classnames('mx-auto lg:mx-0', info.iconClass)} />}
          {info.title && (
            <div className="text-xl font-medium text-center text-text_color_1 lg:text-left">{info.title}</div>
          )}
          {info.description && <div className={descClass}>{info.description}</div>}
        </div>
      ))}
    </div>
  )
}

export const ImageAndList: React.FC<IImageAndListProps> = ({
  title,
  subTitle,
  reverse = true,
  desc,
  img,
  cover,
  needTalk = true,
}) => {
  const i18n = useTranslation('common')
  return (
    <div className="py-10" style={cover ? { backgroundImage: `url('${cover}')` } : {}}>
      <div
        className={classnames(
          'flex flex-col items-center justify-between gap-y-10  main-content-width',
          `lg:flex-row${reverse ? '-reverse' : ''}`
        )}
      >
        {/* 文字 */}
        <div className="flex flex-col items-start">
          {subTitle && <div className="mb-2 text-base font-medium text-text_color_2">{subTitle}</div>}
          <div className="text-3xl font-semibold lg:w-[510px] text-left">{title}</div>
          <div className="flex flex-col mt-10 text-base font-normal text-text_color_1_supplement gap-y-6">
            {desc.map((i, index) => {
              return (
                <div key={index} className="flex items-center gap-x-8">
                  {i?.icon && <ImageIcon url={i?.icon} className="w-8 !h-auto" />}
                  {i?.text && <div className="lg:w-[438px] text-left">{i?.text}</div>}
                </div>
              )
            })}
          </div>
          {needTalk && <TalkToUs className="mt-10" text={i18n.t('features_solutions_info_introduce_891112')} />}
        </div>
        {/* 图片 */}
        <div className="lg:w-[484px] ">
          <img src={img[i18n.i18n.language] || img['zh-CN']} alt="" />
        </div>
      </div>
    </div>
  )
}
export const ImageAndText: React.FC<IImageAndTextProps> = ({
  title,
  desc,
  img,
  cover,
  needTalk = true,
  needContact = false,
  reverse = true,
  showDot = false,
  localLink = '',
  tips,
  subTitle = '',
  titleClassName = '',
  imgClassName = '',
}) => {
  const i18n = useTranslation('common')
  return (
    <div className="py-10" style={cover ? { backgroundImage: `url('${cover}')` } : {}}>
      <div
        className={classnames(
          'flex flex-col items-center justify-between gap-y-10  main-content-width',
          `lg:flex-row${reverse ? '-reverse' : ''}`
        )}
      >
        {/* 文字 */}
        <div className="flex flex-col items-start lg:w-[632px]">
          {!!tips && <div className="mb-2 text-brand_color">{tips}</div>}
          {!!title && <div className={`text-4xl font-semibold ${titleClassName}`}>{title}</div>}
          {!!subTitle && <div className="mt-2 text-base font-medium">{subTitle}</div>}
          {desc && (
            <div className="flex flex-col mt-5 text-base font-normal text-text_color_1_supplement gap-y-4">
              {desc.map((i, index) => {
                return (
                  <div
                    key={index}
                    className={classnames({
                      'pl-2.5 relative': showDot,
                      "before:content-[''] before:inline-block before:w-[4px] before:h-[4px] before:bg-brand_color before:rounded-full before:absolute before:left-0 before:top-2.5":
                        showDot,
                    })}
                  >
                    {i}
                  </div>
                )
              })}
            </div>
          )}

          <div className="flex space-x-4">
            {needTalk && (
              <>
                {localLink ? (
                  <LocaleLink className="flex items-center mt-10" to={localLink}>
                    <Button size="medium">{i18n.t('features_solutions_info_introduce_891112')}</Button>
                  </LocaleLink>
                ) : (
                  <TalkToUs className="mt-10" text={i18n.t('features_solutions_info_introduce_891112')} />
                )}
              </>
            )}
            {needContact === true ? <ContactUs /> : needContact || <></>}
          </div>
        </div>
        {/* 图片 */}
        <div className={`sm:w-[430px] w-[100%] ${imgClassName}`}>
          <img src={img[i18n.i18n.language] || img['zh-CN']} alt="" />
        </div>
      </div>
    </div>
  )
}
export default InfoIntroduce
