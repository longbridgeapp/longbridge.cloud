import BoxModule from '@/features/common/box-module'
import HorizontalItem from '@/features/common/horizontal-item'
import { useMemo } from 'react'
const Risk = () => {
  const list = useMemo(() => {
    return [
      {
        title: '统一购买力',
        desc: '多币种、跨市场的统一购买力，为用户提供更好的交易体验',
      },
      {
        title: '高性能风控',
        desc: '5ms 完成前台交易、出入金等场景的风控判断',
      },
      {
        title: '实时风控指标',
        desc: '基于自有的实时资产数据及风控管理做相关计算，更安全、高效',
      },
      {
        title: '便捷的风控管理',
        desc: '提供实时的资产风险监控与多场景事后风控及管理功能',
      },
    ]
  }, [])
  return (
    <BoxModule label={'风控系统'} title={'支持股票、期权等多证券类别高性能风控'}>
      <>
        <HorizontalItem className="mb-10" list={list} />
        <img src="https://pub.lbkrs.com/static/offline/202301/Pewfzf5fGYTakUYy/Group_427319392.svg" alt="" />
      </>
    </BoxModule>
  )
}
export default Risk
