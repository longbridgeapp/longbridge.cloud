import React, { ReactElement, useMemo } from 'react'
import Title from './title'
export interface IBoxModuleProps {
  children: ReactElement
  label?: string
  title?: string
  className?: string
}
const BoxModule = ({ children, label, title, className }: IBoxModuleProps) => {
  return (
    <div className={`${className} px-5 lg:px-0`}>
      <div className={`py-10 lg:py-20 main-content-width`}>
        <Title label={label} title={title} />
        {children}
      </div>
    </div>
  )
}

export default BoxModule
