import React, { FC, ReactNode, useCallback, useState } from 'react'
import { Modal } from 'antd'
import classNames from 'classnames'

export const FullMask: FC<{
  centered?: boolean
  transparent?: boolean
  width?: number
  className?: string
  maskClosable?: boolean
  onCancel?: () => void
}> = ({ children, centered, transparent = false, className, width = 375, maskClosable = false, onCancel }) => {
  return (
    <Modal
      centered={centered}
      width={width}
      open={true}
      footer={null}
      closable={false}
      maskClosable={maskClosable}
      onCancel={onCancel}
      getContainer={'#__next'}
      className={classNames('custom-full-mask', className)}
      bodyStyle={{ padding: 0 }}
      maskStyle={{ backgroundColor: transparent ? 'transparent' : 'rgba(0,0,0,.5)' }}
    >
      {children}
    </Modal>
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
