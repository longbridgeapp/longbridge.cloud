import React, { ReactElement, useMemo } from 'react'
export interface ITitleProps {
  label?: string
  title?: string
}
const Title = ({ label, title }: ITitleProps) => {
  return (
    <div>
      {label && (<div className="mb-2 text-base text-brand_color">{label}</div>)}
      <div className="text-2xl xl:text-[36px] xl:leading-[50px] font-medium">{title}</div>
    </div>
  )
}

export default Title
