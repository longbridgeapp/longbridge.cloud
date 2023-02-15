import React from 'react'
import classnames from 'classnames'

interface IPageDivide {
  title?: string
  subTitle?: string
  cover?: string
  className?: string
}

const PageDivide: React.FC<IPageDivide> = ({ className, title, subTitle, cover }) => {
  return (
    <div
      className={classnames(
        'h-40 bg-no-repeat bg-cover bg-center flex justify-center flex-col items-center text-white gap-y-2',
        className
      )}
      style={cover ? { backgroundImage: `url(${cover})` } : {}}
    >
      {subTitle && <div className="text-base">{subTitle}</div>}
      {title && <div className="text-4xl font-semibold">{title}</div>}
    </div>
  )
}

export default PageDivide
