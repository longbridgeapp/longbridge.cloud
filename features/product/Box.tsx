import React, { ReactElement } from 'react'
export interface IBoxModuleProps {
  children: ReactElement
  className?: string
  backgroundImage?: string
}
const Box = ({ children, className, backgroundImage }: IBoxModuleProps) => {
  return (
    <div
      className={`py-10 main-container ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="main-content-width">{children}</div>
    </div>
  )
}

export default Box
