import React, { FC, ReactNode, useCallback, useState } from 'react'
import { Modal } from 'antd'

export const FullMask: FC<{ transparent?: boolean; width?: number; maskClosable?: boolean; onCancel?: () => void}> = ({ children, transparent = false, width = 375, maskClosable = false, onCancel }) => {
  return (
    <Modal
      width={width}
      open={true}
      footer={null}
      closable={false}
      maskClosable={maskClosable}
      onCancel={onCancel}
      getContainer={'#__next'}
      className="custom-full-mask"
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
