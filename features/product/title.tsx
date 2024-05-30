import React, { ReactElement, useMemo } from 'react'
export interface ITitleProps {
  label?: string
  title?: string
  desc?: string
}
const Title = ({ label, title, desc }: ITitleProps) => {
  return (
    <div>
      {label && <div className="mb-2 text-base text-brand_color font-medium">{label}</div>}
      <div className="text-[36px] xl:text-[36px] xl:leading-[50px] font-medium">{title}</div>
      {desc && <p className="mt-4 text-base xl:text-xl text-text_color_2">{desc}</p>}
    </div>
  )
}

export default Title
