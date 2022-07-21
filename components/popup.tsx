import React, { FC, ReactNode, useCallback, useState } from 'react'
import classNames from 'classnames'

export const FullMask: FC<{ transparent?: boolean }> = ({ children, transparent = false }) => {
  return (
    <div
      className={classNames('fixed inset-0 p-5 flex justify-center items-center z-50')}
      style={{
        backgroundColor: transparent ? '' : 'rgba(0,0,0,.5)',
      }}
    >
      {children}
    </div>
  )
}

const Popup: FC<{
  children: ({ open, close, visible }: { open: Function; close: Function; visible: boolean }) => ReactNode
}> = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const open = useCallback(() => {
    setVisible(true)
  }, [])
  const close = useCallback(() => {
    setVisible(false)
  }, [])
  return <>{children({ open, close, visible })}</>
}

export default Popup
