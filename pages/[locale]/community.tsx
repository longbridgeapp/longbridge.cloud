// 社区系统
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

const Community: React.FC = () => {
  const i18n = useTranslation('common')
  return (
    <Layout>
      <div className="pt-[100px]">
        <div
          className="py-10 bg-cover main-container lg:py-20"
          style={{ backgroundImage: `url('${CDN_IMAGES.banner_bg}')` }}
        >
          <div className="flex flex-col gap-8 lg:gap-36 main-content-width lg:flex-row">
            <div className="flex flex-col items-start flex-1 gap-8 content">
              <div className="text-[44px] font-semibold">LongPort 社区</div>
              <div className="text-lg leading-9 text-text_color_2">
                <div>
                  随着投资者往更便捷高效的互联网交易工具上迁移，除查看传统的行情、财务等信息外，投资者正在越来越多通过社区交流来辅助决策。
                </div>
                <div>
                  Whale 结合自身业务的长期实践推出了 LongPort
                  ，旨在以SaaS方式提供一个公共社区。传统券商无需产研资源和互联网方法论，便可拥有行业顶尖竞争力的社区服务。
                </div>
              </div>
              <TalkToUs className="mt-0" />
            </div>
            <div className="flex-1">
              <img src="https://pub.lbkrs.com/files/202212/iEatvz7kmT1HAzmh/Frame_427318999.png" alt="" />
            </div>
          </div>
        </div>
        <div className="py-10 bg-cover main-container lg:py-20">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">市场痛点</div>
              <div className="text-4xl font-medium">传统券商建立社区的门槛高企</div>
            </div>
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div className="flex justify-between flex-1 w-full gap-3">
                <div className="flex-1">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/6LEMm55Ga2GVCmBF/browser.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">成本高昂</div>
                  <div className="text-base font-normal text-text_color_3">
                    互联网工具日新月异，社区服务已成为标配，但从 0 到 1 成本高昂
                  </div>
                </div>
                <div className="flex-1">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/Qb1GKG5GL2c1mJVU/circle_up.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">竞争力弱</div>
                  <div className="text-base font-normal text-text_color_3">
                    新兴的互联网券商快速试错迭代，传统券商在产品力上很难与之竞争
                  </div>
                </div>
              </div>
              <div className="flex justify-between flex-1 w-full gap-3">
                <div className="flex-1">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/Xkw3C35uSEWgMeoU/camera.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">合规繁琐</div>
                  <div className="text-base font-normal text-text_color_3">
                    各地区对网络社区合规要求尽不相同，需处理各种棘手的运营、法务问题
                  </div>
                </div>
                <div className="flex-1">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/m74gCXLM8mkqXxYK/broker.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">团队复杂</div>
                  <div className="text-base font-normal text-text_color_3">
                    社区建设需要兼具金融和互联网双重认知的产品、研发、运营、法务团队
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">产品优势</div>
              <div className="text-4xl font-medium">longPort 产品架构与优势</div>
            </div>
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="flex-1 p-8 bg-white rounded-lg">
                <ImageIcon
                  url="https://pub.lbkrs.com/files/202212/eFWKfWEu5em5ugGZ/Group_627094__1_.png"
                  className="h-[70px] w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">基于成熟的社区业务实践</div>
                <ul className="flex flex-col gap-y-4 text-text_color_3">
                  <li className="list-dot">整体社区信息架构逻辑成熟、满足投资者对社区的全方位诉求</li>
                  <li className="list-dot">直接通过 SaaS 提供服务，并提供内容接入的扩展能力</li>
                  <li className="list-dot">先进的算法支撑，覆盖内容生产、处理、分发全流程</li>
                </ul>
              </div>
              <div className="flex-1 p-8 bg-white rounded-lg">
                <ImageIcon
                  url="https://pub.lbkrs.com/files/202212/hH53gGU5c81xmx6X/Group_627094__2_.png"
                  className="h-[70px] w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">提供公共社区运营服务</div>
                <ul className="flex flex-col gap-y-4 text-text_color_3">
                  <li className="list-dot">引入 300+ 投资者意见领袖、高质量观点输出</li>
                  <li className="list-dot">严格的内容安全控制，符合地区法律法规</li>
                  <li className="list-dot">投入人力专员统一管理、运营</li>
                </ul>
              </div>
              <div className="flex-1 p-8 bg-white rounded-lg">
                <ImageIcon
                  url="https://pub.lbkrs.com/files/202212/6P9Lxdz3T3KCGSAy/Group_627094__3_.png"
                  className="h-[70px] w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">接入券商开箱即用</div>
                <ul className="flex flex-col gap-y-4 text-text_color_3">
                  <li className="list-dot">无需了解互联网社区方法论即可获得</li>
                  <li className="list-dot">无需投入运营人力资源</li>
                  <li className="list-dot">无需承担技术资源成本</li>
                  <li className="list-dot">无需承担 UGC 信息合规风险</li>
                </ul>
              </div>
            </div>
            <div>
              <img src="https://pub.lbkrs.com/files/202212/xgPuem8BJao9XdNc/Group_427319256.png" alt="" />
            </div>
          </div>
        </div>
        <div className="py-10 bg-cover main-container lg:py-20">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">社区优势</div>
              <div className="text-4xl font-medium">多元丰富的社区功能</div>
            </div>
            <div className="flex flex-col items-start justify-between gap-3 lg:flex-row">
              <div className="flex-1">
                <img src="https://pub.lbkrs.com/files/202212/RBpWhMErPAjDhKQb/Frame_427319002.png" alt="" />
              </div>
              <div className="flex-1">
                <div className="text-[28px] font-medium mb-10">具备行业 Top 竞争力的完整社区架构</div>
                <ul className="flex flex-col gap-6">
                  <li className="flex items-center">
                    <ImageIcon url="https://pub.lbkrs.com/files/202212/txcPMSuzGoyT6StG/Union.png" className="mr-8" />
                    <span className="text-base font-normal text-text_color_3">
                      个股抽屉讨论区，可在浏览股票信息时随时查看其他用户的观点
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ImageIcon url="https://pub.lbkrs.com/files/202212/FAoH4Cthd3zTonKb/diamond.png" className="mr-8" />
                    <span className="text-base font-normal text-text_color_3">
                      公共聚合讨论区，可发现并关注整个市场中的热点内容与高质量用户
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ImageIcon
                      url="https://pub.lbkrs.com/files/202212/wFfpmGp5yV1ciYDP/list_record.png"
                      className="mr-8"
                    />
                    <span className="text-base font-normal text-text_color_3">
                      具有丰富动态的个人主页，可查看自己和他人过往发布的内容、互动历史
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 main-container bg-bg_color_2 lg:py-20">
          <div className="flex flex-col gap-3 lg:items-center main-content-width lg:flex-row">
            <div className="flex-1">
              <div className="text-[28px] font-medium mb-10">独特的股票观点 Thread 能力</div>
              <ul className="flex flex-col gap-6">
                <li className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/SWrinzC21He7nzq7/eyes_open.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">
                    可视化结合用户观点与股票走势，形成独特的长期 Thread 功能
                  </span>
                </li>
                <li className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/mqUV14XqnvYE6YgC/customer.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">
                    个股讨论区-达人视图 Thread：可快速发现个股下最有价值的投资者，追踪、回溯其长期观点
                  </span>
                </li>
                <li className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/Mhvn1KWFHt6mvhr1/option.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">
                    用户主页-股票视图 Thread：可快速发现用户长期关注的股票，跟踪、回溯其长期观点
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img src="https://pub.lbkrs.com/files/202212/ngoVxzVrWcNKg8V8/Frame_427319003.png" alt="" />
            </div>
          </div>
        </div>

        <div className="py-10 main-container lg:py-20">
          <div className="flex flex-col gap-3 main-content-width md:flex-row md:gap-48">
            <div className="flex-1 text-center">
              <img src="https://pub.lbkrs.com/files/202212/htdSLdapVmaEN7a3/Frame_427319004.png" alt="" />
              <div className="text-[28px] font-medium mt-14 mb-4">独特的合集功能</div>
              <div className="text-base text-text_color_3">
                投资者可以把自己的长期观点按照特定逻辑进行分类，形成具备高消费价值的深度内容合集
              </div>
            </div>
            <div className="flex-1 text-center">
              <img src="https://pub.lbkrs.com/files/202212/urinyWrhLpdn7pvq/Frame_427319005.png" alt="" />
              <div className="text-[28px] font-medium mt-14 mb-4">独立官方号支持</div>
              <div className="text-base text-text_color_3">
                White Label App 接入方可创建独立官方账号，通过 API 接入或人工运营自有内容，并限定分发到独立 App 内
              </div>
            </div>
          </div>
        </div>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default Community
