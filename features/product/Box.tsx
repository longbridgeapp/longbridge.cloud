import React, { ReactElement } from 'react'
export interface IBoxModuleProps {
  children: ReactElement
  className?: string
}
const Box = ({ children, className }: IBoxModuleProps) => {
  return (
    <div className={`py-10 main-container lg:py-20 ${className}`}>
      <div className="main-content-width">
        {children}
      </div>
    </div>
  )
}

export default Box
