import React, { ReactElement, useMemo } from 'react'
export interface ITitleProps {
  label?: string
  title?: string
}
const Title = ({ label, title }: ITitleProps) => {
  return (
    <>
      {label && <div className="text-base text-[#5622CF] mb-2">{label}</div>}
      {title && <div className="font-medium text-4xl leading-tight mb-10">{title}</div>}
    </>
  )
}

export default Title
