import { createFromIconfontCN } from '@ant-design/icons'

export interface IconBaseProps extends React.HTMLProps<HTMLSpanElement> {
  spin?: boolean
  rotate?: number
  type: string
}

// https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=3392465
const SourceIcon = createFromIconfontCN({
  scriptUrl: 'https://pub.lbctrl.com/files/202207/yJb6oKh23EtNqWfe/iconfont.js',
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
