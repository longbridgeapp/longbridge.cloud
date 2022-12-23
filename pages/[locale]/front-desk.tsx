// 系统前中台
import React, { useMemo } from 'react'
import { Carousel } from 'antd'
import ImageIcon from '@/components/image-icon'
import { CDN_IMAGES } from '@/constants'
import { Layout } from '@/features/common/page-layout'
import { TalkToUs } from '@/features/talk-to-us'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import i18nextConfig from '@/next-i18next.config'
import { i18nPaths } from '@/utils/i18n-paths'
// eslint-disable-next-line import/named
import { UserConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Block, BlockBetween } from '@/components/block'
import { SEOMeta } from '@/utils/seo'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as UserConfig)),
  },
})

const FrontDesk: React.FC = () => {
  const i18n = useTranslation('common')
  const seoI18n = useTranslation(['seo'])

  const marketingBanners = useMemo(() => [1], [])

  return (
    <Layout>
      <SEOMeta indexTitle={true} title={seoI18n.t('tdk.title')} description={seoI18n.t('tdk.description')} />
      <div className="pt-[100px]">
        <div
          className="py-10 bg-cover main-container lg:py-20"
          style={{ backgroundImage: `url('${CDN_IMAGES.banner_bg}')` }}
        >
          <Block>
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
                  src={'https://assets.lbkrs.com/uploads/803fb793-4d71-4182-9fca-a1f40c08f6c3/Frame_627325.svg'}
                  alt=""
                />
              }
            />
          </Block>
        </div>
        <div className="py-10 main-container lg:py-20">
          <Block>
            <BlockBetween
              left={
                <div className="flex flex-col gap-10 main-content-width">
                  <div>
                    <div className="mb-2 text-base text-brand_color">产品优势</div>
                    <div className="text-4xl font-medium">更实时更准确</div>
                  </div>

                  <ul className="flex flex-col text-base font-normal leading-6 gap-y-4 text-text_color_3">
                    <li className="list-dot">
                      支持全球 200 + 国家地区客户开户，多种身份认证方式，满足不同国家地区合规要求
                    </li>
                    <li className="list-dot">交易覆盖多市场多品种，提供条件单、附加单等全面的订单交易能力</li>
                    <li className="list-dot">全面、准确、高效的处理各类证券交易相关的事前、事中、事后风控</li>
                    <li className="list-dot">
                      支持分钟级的入金到账及出金到账能力，及
                      FPS、EDDA、银证转账、网银转账、支票、柜台、电汇、SWIFT、CHATS、行内转账、网银转账、PAYNOW
                      等丰富的出入金方式
                    </li>
                  </ul>
                </div>
              }
              right={
                <img
                  src={'https://assets.lbkrs.com/uploads/0957b82b-a119-43ca-a6be-7ea90542a863/Group_427319325.svg'}
                  alt=""
                />
              }
            />
          </Block>
        </div>
        <div className="py-10 main-container bg-bg_color_2 lg:py-20">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">交易系统</div>
              <div className="text-4xl font-medium">闪电下单，极致体验</div>
            </div>
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <div className="flex justify-between flex-1 w-full gap-10">
                <div className="flex-1">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/6LEMm55Ga2GVCmBF/browser.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">标题</div>
                  <div className="text-base font-normal text-text_color_3">
                    闪电般下单体验的极速交易系统，极低延迟，快至 0.01 秒
                  </div>
                </div>
                <div className="flex-1">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/Qb1GKG5GL2c1mJVU/circle_up.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">标题</div>
                  <div className="text-base font-normal text-text_color_3">
                    多达 32,000 多只可交易标的，覆盖股票/ETF/债券/权证/期权
                  </div>
                </div>
              </div>
              <div className="flex justify-between flex-1 w-full gap-10">
                <div className="flex-1">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/Xkw3C35uSEWgMeoU/camera.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">标题</div>
                  <div className="text-base font-normal text-text_color_3">
                    专业多样订单类型，搭配毫秒级行情服务延时，辅助用户的多种交易策略
                  </div>
                </div>
                <div className="flex-1">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/m74gCXLM8mkqXxYK/broker.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">标题</div>
                  <div className="text-base font-normal text-text_color_3">
                    多平台交易，随时随地享受每一个交易的瞬间，而不仅仅是美观
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 main-container lg:py-20">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">风控系统</div>
              <div className="text-4xl font-medium">全面处理各类证券交易相关风控</div>
            </div>

            <div>
              <img
                src={'https://assets.lbkrs.com/uploads/7ab6515a-e206-435a-8d70-7ffe674e1b5f/Group%20427319354.svg'}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="py-10 main-container bg-bg_color_2 lg:py-20">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">账户系统</div>
              <div className="text-4xl font-medium">一站式账户管理系统</div>
            </div>
            <div className="flex flex-col gap-10 md:flex-row md:gap-48 md:items-center">
              <div>
                <img
                  src={'https://assets.lbkrs.com/uploads/438524d7-4304-48cc-8bf4-aa7e45b0a63d/Group_427319348.svg'}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-10 main-content-width">
                <div className="text-4xl font-medium">打通多主体、多类型账户体系</div>
                <ul className="flex flex-col text-base font-normal leading-6 gap-y-4 text-text_color_3">
                  <li className="list-dot">
                    标准化 KYC 审核流程，多维度风控模型评估客户风险，满足不同国家地区合规要求
                  </li>
                  <li className="list-dot">单账户打通多市场功能，同时支持客户开通多账户</li>
                  <li className="list-dot">安全管理客户资料，持续监测账户风险</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 main-container lg:py-20">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">WTT 操作平台</div>
              <div className="text-4xl font-medium">多合一 WTT 前台系统</div>
            </div>
            <div className="flex flex-col gap-10 md:flex-row md:gap-48 md:items-center">
              <div className="flex flex-col gap-10 lg:max-w-[485px]">
                <div>
                  <div className="mb-2 text-xl font-medium">强大功能</div>
                  <div className="text-base font-normal">
                    一站式投资平台，包括全市场实时行情、毫秒级交易、资产等功能并有灵活的自定义面板及组件工具，根据投资者操作模式制定专属面板
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-xl font-medium">操作便捷</div>
                  <div className="text-base font-normal">
                    丰富的快捷键操作，大大提升投资者操作效率，便捷的前台操作系统，管理及风控用户资产，并支持简、繁、英三种显示语言，能够充分满足各地投资者使用习惯
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={'https://assets.lbkrs.com/uploads/438524d7-4304-48cc-8bf4-aa7e45b0a63d/Group_427319348.svg'}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 main-container bg-bg_color_2 lg:py-20">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">WTT 操作平台</div>
              <div className="text-4xl font-medium">丰富且完善的出入金管理</div>
            </div>
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <div className="flex justify-between flex-1 w-full gap-10">
                <div className="flex-1">
                  <div className="mt-4 mb-2 text-xl font-medium">12+ 种出入金方式</div>
                  <div className="text-base font-normal text-text_color_3">
                    支持 FPS、EDDA、银证转账、网银转账等丰富的出入金方式
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mt-4 mb-2 text-xl font-medium">7+ 种银行</div>
                  <div className="text-base font-normal text-text_color_3">
                    支持 DBS 银行 - 新加坡、恒生银行、汇丰银行等，并在持续对接中
                  </div>
                </div>
              </div>
              <div className="flex justify-between flex-1 w-full gap-10">
                <div className="flex-1">
                  <div className="mt-4 mb-2 text-xl font-medium">快速到账</div>
                  <div className="text-base font-normal text-text_color_3">支持分钟级的入金到账及出金到账能力</div>
                </div>
                <div className="flex-1">
                  <div className="mt-4 mb-2 text-xl font-medium">完善机制</div>
                  <div className="text-base font-normal text-text_color_3">
                    完善的出入金审核机制，及自动化处理能力，降低人力资源投入
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={'https://assets.lbkrs.com/uploads/27d50d1e-32db-4e16-8fac-38024d4d0e29/Group_427319353.svg'}
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>

        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default FrontDesk
