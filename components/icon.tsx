import { createFromIconfontCN } from '@ant-design/icons'

export interface IconBaseProps extends React.HTMLProps<HTMLSpanElement> {
  spin?: boolean
  rotate?: number
  type: string
}

const SourceIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3392465_6t9rfuzt01b.js',
  extraCommonProps: {
    className: 'iconfont',
  },
})

const Icon: React.FC<IconBaseProps> = props => {
  const { type, style = {}, ...args } = props
  const _type = `icon-${type}`
  // fix tailwindcss line-height
  return <SourceIcon type={_type} {...args} style={{ lineHeight: 0, ...style }} />
}
export default Icon
