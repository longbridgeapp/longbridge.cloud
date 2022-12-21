// 营销系统
import React from 'react'
// eslint-disable-next-line import/named
import { UserConfig, useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Layout } from '@/features/common/page-layout'
import { TalkToUs } from '@/features/talk-to-us'
import { CDN_IMAGES } from '@/constants'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import ImageIcon from '@/components/image-icon'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as UserConfig)),
  },
})

const P2: React.FC = () => {
  const i18n = useTranslation('common')
  return (
    <Layout>
      <div className="pt-[100px]">
        <div
          className="py-10 bg-cover main-container lg:py-20"
          style={{ backgroundImage: `url('${CDN_IMAGES.banner_bg}')` }}
        >
          <div className="flex flex-col gap-8 lg:gap-32 main-content-width lg:flex-row">
            <div className="flex flex-col items-start gap-8">
              <div className="text-[44px] font-semibold">营销系统</div>
              <div className="text-lg leading-9 text-text_color_2">
                提供完整的营销服务，持续不断推出更实用的营销产品模式，为证券业务进行赋能，是传统金融业务数字化转型必不可少的市场工具
              </div>
              <TalkToUs className="mt-0" />
            </div>
            <div className="max-w-[620px]">
              <img src="https://pub.lbkrs.com/files/202212/nSrQZUdNJ7Y8ircg/Group_427319261.png" alt="" />
            </div>
          </div>
        </div>
        <div className="py-10 bg-cover main-container lg:py-20">
          <div className="flex flex-col gap-3 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">市场痛点</div>
              <div className="mb-10 text-4xl font-medium">您是否面临以下问题？</div>
            </div>
            <div className="flex flex-col items-center justify-between gap-20 md:flex-row">
              <div className="flex justify-between flex-1 w-full gap-20">
                <div>
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/txiQsfkn5VULhvmi/cash_plus.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">营销难</div>
                  <div className="text-base font-normal text-text_color_3">如何快速实现用户增长获得收益？</div>
                </div>
                <div>
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/i9JLwB1X14rHsAeH/circle_time.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">开发慢</div>
                  <div className="text-base font-normal text-text_color_3">如何无需开发也能调整活动策略？</div>
                </div>
              </div>
              <div className="flex justify-between flex-1 w-full gap-20">
                <div>
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/queci6LCEx5pyxAx/customer_inquiry.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">难管理</div>
                  <div className="text-base font-normal text-text_color_3">如何快速实现营销成本可追溯？</div>
                </div>
                <div>
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/SBeHqd6MygAG4ihj/conversion.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">成本高</div>
                  <div className="text-base font-normal text-text_color_3">如何用更少的钱和人来实现？</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-20 main-content-width ">
            <div>
              <div className="mb-2 text-base text-brand_color">解决方案</div>
              <div className="text-4xl font-medium">只需运营简单操作，无需产品、开发介入</div>
            </div>
            <div>
              <img src="https://pub.lbkrs.com/files/202212/LjnFBrT4hRiKd65c/Group_427319048.png" alt="" />
            </div>
            <div className="bg-[#fff] rounded-lg flex overflow-hidden">
              <div className="flex-1 p-10 left">
                <div className="text-[30px] font-semibold mb-2">标准版</div>
                <div className="text-base font-normal border-b border-dashed pb-7 border-tag_border_color">
                  <div>适合规模化运营需求， 5 人及以上的运营团队</div>
                  <div>具有强拉新、转化需求，可快速实现数字化转型</div>
                </div>
                <div>
                  <div className="text-xl font-medium mt-[30px] mb-[10px]">功能说明</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">支持活动、奖励、权益全线上管理</li>
                    <li className="list-dot">所有活动成本可管理可追溯，所有权益订单可在线查询导出对账</li>
                    <li className="list-dot">支持基础活动 1 类活动配置</li>
                    <li className="list-dot">支持发放 3 种基础权益</li>
                    <li className="list-dot">不需技术资源即可完成简单的静态页面搭建</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 p-10 bg-brand_color text-[#fff]">
                <div className="text-[30px] font-semibold mb-2 flex items-center">
                  专业版
                  <span className="text-xl text-white font-semibold px-2 py-[2px] rounded rounded-bl-none bg-[#7947FF] ml-4">
                    HOT
                  </span>
                </div>
                <div className="text-base font-normal border-b border-dashed pb-7 border-tag_border_color">
                  <div>适合低运营需求，5 人以内的运营团队</div>
                  <div>主要运营重点在于对基础拉新、促活、老客维护</div>
                </div>
                <div>
                  <div className="text-xl font-medium mt-[30px] mb-[10px]">功能说明</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot white">支持活动、奖励、权益全线上管理</li>
                    <li className="list-dot white">所有活动成本可管理可追溯，所有权益订单可在线查询导出对账</li>
                    <li className="list-dot white">支持基础活动、邀请活动、组队活动 3 类活动配置</li>
                    <li className="list-dot white">支持发放 9 种权益卡券</li>
                    <li className="list-dot white">不需技术资源可进行静态宣传页面、各类活动玩法页面搭建</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 bg-cover main-container lg:py-20">
          <div className="flex flex-col gap-3 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">产品优势</div>
              <div className="text-4xl font-medium">营销系统的具体功能有哪些？</div>
            </div>
            <div className="flex flex-col items-start justify-between gap-3 lg:flex-row">
              <div className="flex-1">
                <img src="https://pub.lbkrs.com/files/202212/xTJxUzUoZzHTVdXX/Frame_427319001.png" alt="" />
              </div>
              <div className="flex-1">
                <div className="text-[28px] font-medium mb-10">13 种卡券奖励模版 - 权益平台</div>
                <ul className="flex flex-col gap-6">
                  <li className="flex items-center">
                    <ImageIcon url="https://pub.lbkrs.com/files/202212/jrd4MwQBxQbkuoay/copy.png" className="mr-8" />
                    <span className="text-base font-normal text-text_color_3">
                      支持打新、融资、交易场景等 11 种卡券类型、2 种奖励类型发放，满足各种证券转化场景
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ImageIcon url="https://pub.lbkrs.com/files/202212/FvC4YU2unWnUkViy/group.png" className="mr-8" />
                    <span className="text-base font-normal text-text_color_3">
                      打新可用：打新特权、打新手续费卡拉动打新频率
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ImageIcon
                      url="https://pub.lbkrs.com/files/202212/M2m5UXvQmU45xHip/task_center.png"
                      className="mr-8"
                    />
                    <span className="text-base font-normal text-text_color_3">
                      交易可用：股票现金卡、平台费抵扣卡、免佣卡促进交易，将交易低频用户转化为高频
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ImageIcon
                      url="https://pub.lbkrs.com/files/202212/jJruyCm1HZzpRQ6u/portfolo_settiongs.png"
                      className="mr-8"
                    />
                    <span className="text-base font-normal text-text_color_3">
                      融资可用：融资利息卡减免用户账单利息，激活用户购买力
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 bg-cover bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-3 lg:items-center main-content-width lg:flex-row">
            <div className="flex-1">
              <div className="text-[28px] font-medium mb-10">基础开户入金、裂变活动全自动发奖 - 活动平台</div>
              <ul className="flex flex-col gap-6">
                <li className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/1jphbciCdpEftiBF/treeview.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">
                    支持打新、融资、交易场景等 11 种卡券类型、2 种奖励类型发放，满足各种证券转化场景
                  </span>
                </li>
                <li className="flex items-center">
                  <ImageIcon
                    url="https://pub.lbkrs.com/files/202212/z4whtrr6ABmv5bNv/translate_to_en.png"
                    className="mr-8"
                  />
                  <span className="text-base font-normal text-text_color_3">
                    打新可用：打新特权、打新手续费卡拉动打新频率
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img src="https://pub.lbkrs.com/files/202212/Cur9afVMeDTPVQy3/Group_427318897.png" alt="" />
            </div>
          </div>
        </div>

        <div className="py-10 bg-cover main-container lg:py-20">
          <div className="flex flex-col gap-3 lg:items-center main-content-width lg:flex-row">
            <div className="flex-1">
              <img src="https://pub.lbkrs.com/files/202212/EHLGit2kRLLzeC25/Group_427319262.png" alt="" />
            </div>
            <div className="flex-1">
              <div className="text-[28px] font-medium mb-10">可视化页面搭建平台 - PageHub</div>
              <ul className="flex flex-col gap-6">
                <li className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/P6JcUv69nJFnTx3b/list.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">
                    高标准化的搭建平台，操作简单、拖拽即可、所见即所得
                  </span>
                </li>
                <li className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/4zxY387JjpngG9F3/code.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">
                    web、H5 多端自适应页面搭建，多种活动组件可供搭配组合，满足线上下线下全场景投放需求
                  </span>
                </li>
                <li className="flex items-center">
                  <ImageIcon
                    url="https://pub.lbkrs.com/files/202212/fU72Gy3aB5WdFU77/translation_EN-CN.png"
                    className="mr-8"
                  />
                  <span className="text-base font-normal text-text_color_3">
                    单个页面链接可适配多种语言，依据用户系统语言自行切换
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default P2
