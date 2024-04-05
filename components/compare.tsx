/**
 * 将统一行相互对比的项目进行排列
 * 同属一级的始终保持水平
 */
import React, { ReactNode, useRef } from 'react'
import { useDebounceEffect, useSize } from 'ahooks'
import { keepSiblingsHeight } from '@/hooks/use-resize'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export interface ICompareProps {
  title?: ReactNode
  description?: ReactNode
  subTitle?: ReactNode
  subList?: ReactNode[]
  thirdTitle?: ReactNode
  thirdDescription?: ReactNode
  imgSrc?: string | Record<'zh-CN' | 'en' | 'zh-HK', string>
}
const Compares: React.FC<{ list: ICompareProps[]; compareId: string; className?: string }> = props => {
  const { list, compareId, className } = props
  const compareSceneRef = useRef(null)
  const compareSceneSize = useSize(compareSceneRef)
  const wrapperClassName = `${compareId}compare-scene-plans`
  const i18n = useTranslation('common')

  /** 尺寸变化时，计算同级高度，进行统一 */
  useDebounceEffect(
    () => {
      keepSiblingsHeight(`.${wrapperClassName}`, 'compare-first')
      keepSiblingsHeight(`.${wrapperClassName}`, 'compare-second')
      keepSiblingsHeight(`.${wrapperClassName}`, 'compare-third')
    },
    [compareSceneSize?.width],
    { wait: 300 }
  )

  return (
    <div
      className={classNames('flex flex-col justify-between gap-10 lg:flex-row', wrapperClassName, className)}
      ref={compareSceneRef}
    >
      {list.map((item, index) => (
        <div
          className="flex flex-col flex-1 overflow-hidden bg-white border rounded-lg border-border_color"
          key={index}
        >
          <div className="flex flex-col compare-first">
            {item.title && (
              <>
                <div className="text-[30px] p-8 pb-0 font-semibold mb-2">{item.title}</div>
                <div className="flex-1 pb-5 mx-8 text-base font-normal border-b border-dashed border-tag_border_color text-text_color_1">
                  {item.description}
                </div>
              </>
            )}
            {item.imgSrc && (
              <div className="">
                <img
                  className="w-full"
                  src={
                    typeof item.imgSrc === 'string'
                      ? item.imgSrc
                      : item.imgSrc[i18n.i18n.language as never] || item.imgSrc['zh-CN']
                  }
                  alt=""
                />
              </div>
            )}
          </div>
          {item.subList && (
            <div className="flex-1 px-8 pb-8 compare-second">
              <div
                className={classNames('font-medium mt-[30px]', item.imgSrc ? 'text-[28px] mb-4' : 'text-xl mb-[10px]')}
              >
                {item.subTitle}
              </div>
              <ul className="flex flex-col gap-y-4">
                {item.subList.map((subItem, subIndex) => (
                  <li
                    className={classNames('text-base text-left list-dot', {
                      'text-text_color_1_supplement': item.imgSrc,
                    })}
                    key={subIndex}
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {item.thirdDescription && (
            <div className="px-8 py-8 text-white bg-brand_color compare-third">
              <div className="mb-3 text-base">{item.thirdTitle}</div>
              <div className="text-xl font-medium">{item.thirdDescription}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Compares
