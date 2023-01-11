import BoxModule from '@/features/common/box-module'
import Title from '@/features/common/title'
import HorizontalItem from '@/features/common/horizontal-item'
import { useMemo } from 'react'
const Risk = () => {
  const list = useMemo(() => {
    return [
      {
        title: '丰富的出入金方式',
        desc: '支持 FPS、eDDA、银证转账、网银转账等丰富的出入金方式',
      },
      {
        title: '多家银企直连',
        desc: '支持 DBS 银行 - 新加坡、恒生银行、汇丰银行等，并在持续对接中',
      },
      {
        title: '快速到账',
        desc: '支持分钟级的入金到账及出金到账能力',
      },
      {
        title: '流程完善',
        desc: '完善的出入金审核机制，及自动化处理能力，降低人力资源投入',
      },
    ]
  }, [])
  return (
    <BoxModule className="bg-[#F8F9FA]" label={'出入金管理'} title={'丰富且完善的出入金管理'}>
      <>
        <HorizontalItem className="mb-10" list={list} />
        <img src="https://pub.lbkrs.com/static/offline/202301/tKXZrDRrwX2krTeN/Group_427319353.svg" alt="" />
      </>
    </BoxModule>
  )
}
export default Risk
