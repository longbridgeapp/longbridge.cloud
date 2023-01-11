import BoxModule from '@/features/common/box-module'
import { BlockBetween } from '@/components/block'
import { TalkToUs } from '@/features/talk-to-us'
import { CDN_IMAGES } from '@/constants'

const MainContain = () => {
  return (
    <div style={{ backgroundImage: `url('${CDN_IMAGES.banner_bg}')` }}>
      <BoxModule>
        <BlockBetween
          left={
            <div className="flex flex-col items-start gap-8">
              <div className="text-[44px] font-semibold">柜台系统前中台</div>
              <div className="text-lg leading-9 text-text_color_2">
                具备覆盖多地区、多市场的前台开户、交易、风控、出入金能力。统一的资产管理与高性能的交易风控处理为保障，提供体验佳、处理快、7×24H
                连续的前台系统
              </div>
              <TalkToUs className="mt-0" />
            </div>
          }
          right={
            <img
              className="w-[560px]"
              src={'https://pub.lbkrs.com/static/offline/202301/pMBj9uXMrmTVf5tT/Frame_427319007.svg'}
              alt=""
            />
          }
        />
      </BoxModule>
    </div>
  )
}
export default MainContain
