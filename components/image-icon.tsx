import React from 'react'

const ImageIcon = ({ url, className }: { url: string; className?: string }) => {
  return <img src={url} alt="" className={`w-10 h-10 ${className}`} />
}

export default ImageIcon
