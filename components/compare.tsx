/**
 * 将统一行相互对比的项目进行排列
 * 同属一级的始终保持水平
 */
import React, { ReactNode, useRef } from 'react'
import { useDebounceEffect, useSize } from 'ahooks'
import { keepSiblingsHeight } from '@/hooks/use-resize'
import classNames from 'classnames'

interface ICompareProps {
  title: ReactNode
  description: ReactNode
  subTitle?: ReactNode
  subList?: ReactNode[]
  thirdTitle?: ReactNode
  thirdDescription?: ReactNode
}
const Compares: React.FC<{ list: ICompareProps[]; compareId: string; className?: string }> = props => {
  const { list, compareId, className } = props
  const compareSceneRef = useRef(null)
  const compareSceneSize = useSize(compareSceneRef)
  const wrapperClassName = `${compareId}compare-scene-plans`

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
        <div className="flex flex-col flex-1 overflow-hidden border rounded-lg border-border_color" key={index}>
          <div className="flex flex-col compare-first">
            <div className="text-[22px] p-8 pb-0 font-medium mb-2">{item.title}</div>
            <div className="flex-1 pb-5 mx-8 text-base font-normal border-b border-dashed border-tag_border_color text-text_color_1">
              {item.description}
            </div>
          </div>
          {item.subList && (
            <div className="flex-1 px-8 pb-5 compare-second">
              <div className="text-base font-medium mt-[30px] mb-[10px]">{item.subTitle}</div>
              <ul className="flex flex-col gap-y-4">
                {item.subList.map((subItem, subIndex) => (
                  <li className="list-dot" key={subIndex}>
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {item.thirdDescription && (
            <div className="px-8 py-5 text-white bg-brand_color compare-third">
              <div className="text-base font-medium mb-[10px]">{item.thirdTitle}</div>
              <div className="text-sm font-normal">{item.thirdDescription}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Compares
