// 后台系统
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

const P1: React.FC = () => {
  const i18n = useTranslation('common')
  return (
    <Layout>
      <div className="pt-[100px]">
        <div
          className="py-10 bg-cover main-container lg:py-20"
          style={{ backgroundImage: `url('${CDN_IMAGES.banner_bg}')` }}
        >
          <div className="flex flex-col gap-3 main-content-width lg:gap-16 lg:flex-row ">
            <div className="flex flex-col items-start gap-8 content max-w-[530px]">
              <div className="text-[44px] font-semibold">柜台系统后台</div>
              <div className="text-lg font-normal leading-9 text-text_color_2">
                <div>全新一代基于云原生架构的一站式交易结算系统，覆盖了从交易到结算的全部流程。</div>
                <div>
                  支持不同市场、多投资品、多币种的交易清算能力，具备运营卡券一体化清算能力，满足券商灵活的业务模式。
                </div>
              </div>
              <TalkToUs className="mt-0" />
            </div>
            <div className="max-w-[620px]">
              <img src="https://pub.lbkrs.com/files/202212/p2JxoPtvXNsJCunE/Group_427319260__1_.png" alt="" />
            </div>
          </div>
        </div>
        <div className="py-10 bg-cover main-container lg:py-20">
          <div className="flex flex-col gap-8 main-content-width lg:flex-row">
            <div className="flex flex-col items-start gap-8 content min-w-[485px]">
              <div>
                <div className="mb-2 text-base text-brand_color">产品优势</div>
                <div className="text-4xl font-medium">新一代互联网架构后台</div>
              </div>
              <div>
                <div className="mb-2 text-xl font-medium">开放灵活</div>
                <div className="text-base font-normal">标准化的接口，各子系统灵活连接各类上下游服务</div>
              </div>
              <div>
                <div className="mb-2 text-xl font-medium">开放灵活</div>
                <div className="text-base font-normal">互联网营销结合的核心业务流，尽可能自动化执行提高效率与质量 </div>
              </div>
              <div>
                <div className="mb-2 text-xl font-medium">开放灵活</div>
                <div className="text-base font-normal">提供最新最先进的线上服务，无需重新按版本部署</div>
              </div>
            </div>
            <div>
              <img src="https://pub.lbkrs.com/files/202212/TLhxiVz6YiPiFVzd/Group_427319109.png" alt="" />
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-8 main-content-width ">
            <div className="text-4xl font-medium">资产账本</div>
            <div className="flex flex-col justify-between gap-8 lg:gap-36 lg:flex-row">
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">多资产种类</div>
                <div className="text-base font-normal text-text_color_3">
                  覆盖多种资产种类，前后端统一账本，避免前后端账本差异
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">实时更新</div>
                <div className="text-base font-normal text-text_color_3">
                  账本基于业务变动进行实时更新，满足客户即时调配资产
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">数据全面</div>
                <div className="text-base font-normal text-text_color_3">前台数据更全面、准确、实时、高效</div>
              </div>
            </div>
            <div>
              <img src="https://pub.lbkrs.com/files/202212/64ugGy9xFLTEagdg/Group_427319108.png" alt="" />
            </div>
          </div>
        </div>
        <div className="py-10 main-container">
          <div className="main-content-width">
            <div className="mb-10 text-4xl font-medium">结算系统</div>
            <div className="flex flex-col justify-center gap-12 lg:items-center lg:flex-row">
              <div className="min-w-[500px]">
                <div className="mb-10 text-[28px] font-medium">
                  <div>结算业务流程全覆盖</div>
                  <div>处理性能弹性扩展</div>
                </div>
                <ul className="flex flex-col text-text_color_3 gap-y-4">
                  <li className="list-dot">统一的清算流程管理，覆盖计费、结单、OTC 补单等功能</li>
                  <li className="list-dot">支持全球多市场的清算架构体系，可通过配置实现个性化的清算方案</li>
                  <li className="list-dot">支持运营卡券一体化清算，满足业务运营需求</li>
                  <li className="list-dot">计费支持多维度、多类型的个性化计费套餐设置</li>
                  <li className="list-dot">可在前台 7x24 运转情况下完成分市场精准清算，自定义日切时间点</li>
                  <li className="list-dot">分布式清算引擎，具备计算资源水平扩展能力</li>
                  <li className="list-dot">高效率的清算流程，可在 20 分钟内完成十万数量级客户的证券清算日终操作</li>
                  <li className="list-dot">高并发的结单生成方案，十万客户量级的日/月结单可在 5 分钟内生成</li>
                </ul>
              </div>
              <div>
                <img src="https://pub.lbkrs.com/files/202212/P3K4RrwMHdKnKv3Q/Group_427319186.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-8 main-content-width ">
            <div className="text-4xl font-medium">公司行动</div>
            <div className="flex flex-col justify-between gap-8 lg:gap-36 lg:flex-row">
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">全流程解决方案</div>
                <div className="text-base font-normal text-text_color_3">
                  提供预告、登记、过户、指令、执行等系统化流程，保障方案高效准确执行
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">自动生成</div>
                <div className="text-base font-normal text-text_color_3">
                  系统可自动生成公司行动预告和方案信息，提高操作效率
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">完善报表</div>
                <div className="text-base font-normal text-text_color_3">提供完善的报表，提高公司行动处理的准确性</div>
              </div>
            </div>
            <div>
              <img src="https://pub.lbkrs.com/files/202212/qQFmxf16KXvYRHLz/Group_427319159.png" alt="" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="py-10 main-container">
          <div className="main-content-width">
            <div className="mb-10 text-4xl font-medium">会计系统</div>
            <div className="flex flex-col items-start gap-12 lg:items-center lg:flex-row">
              <div className="min-w-[475px] flex flex-col gap-8">
                <div className="text-2xl font-medium">灵活配置高效记账，快速对接财务软件</div>
                <div className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/Uoz4JvFGpFNxGF7f/pen.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">
                    通过规则配置，自动化记账，提高会计核算效率
                  </span>
                </div>
                <div className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/xWEQJZ6PzZuHbnHc/treeview.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">
                    系统自动化处理，完善对账逻辑，通过记账核算保证账实平衡
                  </span>
                </div>
                <div className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/q2xDeZMTLrzfQuE6/unlock.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">
                    标准化数据接口，具备快速对接传统财务软件的能力
                  </span>
                </div>
              </div>
              <div>
                <img src="https://pub.lbkrs.com/files/202212/vTDjFkFe265SDaYK/Group_427319192.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-10 main-content-width ">
            <div className="text-4xl font-medium">报表打印</div>
            <div className="flex flex-col justify-between gap-5 lg:gap-36 lg:flex-row">
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">文件类型全面</div>
                <div className="text-base font-normal text-text_color_3">
                  自定义模板的报表系统，支持 PDF、Excel、CSV 类型报表打印，支持批量导出策略
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">权限自定义</div>
                <div className="text-base font-normal text-text_color_3">报表权限分类定义，可按角色设定数据权限</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">报表种类丰富</div>
                <div className="text-base font-normal text-text_color_3">
                  支持客户、财务、交易、合规、FRR、风控、结算等七大类实时及日终清算类报表
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">报表开发高效</div>
                <div className="text-base font-normal text-text_color_3">基于数据中台的报表快速生产加工能力</div>
              </div>
            </div>
            <div>
              <img src="https://pub.lbkrs.com/files/202212/mVWoqMYKVAsP35aN/Group_427319157.png" alt="" />
            </div>
          </div>
        </div>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default P1
