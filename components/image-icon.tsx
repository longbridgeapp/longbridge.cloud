import React from 'react'
import classnames from 'classnames'

const ImageIcon = ({ url, className }: { url: string; className?: string }) => {
  return <img src={url} alt="" className={classnames('w-10 h-10', className)} />
}

export default ImageIcon
