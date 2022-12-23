// 零售终端
import React, { useMemo, useRef } from 'react'
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
import { useDebounceEffect, useSize } from 'ahooks'
import { keepSiblingsHeight } from '@/hooks/use-resize'
import { Block, BlockBetween } from '@/components/block'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as UserConfig)),
  },
})

const Retail: React.FC = () => {
  const i18n = useTranslation('common')
  const marketSceneRef = useRef(null)
  const marketSceneSize = useSize(marketSceneRef)

  useDebounceEffect(
    () => {
      keepSiblingsHeight('.marketing-version-list', 'version-first')
      keepSiblingsHeight('.marketing-version-list', 'version-second')
      keepSiblingsHeight('.marketing-version-list', 'version-third')
    },
    [marketSceneSize?.width],
    { wait: 300 }
  )

  const marketingBanners = useMemo(() => [1], [])

  const marketingList = useMemo(() => {
    return [
      {
        title: 'White Label',
        titleTips:
          '为客户搭建终端 APP，可提供数十种特色功能：实时行情、便捷开户、快捷下单、更丰富的交易品种等，可独立社区内容，独立运营品牌社区',
        question: '终端优势',
        questionList: [
          '支持功能定制化',
          '支持嵌入各类个性化运营、营销工具',
          '支持定制化开发',
          '可选择开放荐股、财务评分功能',
        ],
        resolveList: [
          {
            resolveTitle: '适用客户',
            resolve: '自营、有自己用户体量想要推广自己品牌',
          },
          {
            resolveTitle: '交付模式',
            resolve: '可灵活配置，配置 + 定制化完成后即可上线',
          },
        ],
      },
      {
        title: 'Longport',
        titleTips:
          '为客户快捷提供开户平台，开户成功后可直接进行交易提供更好的用户流量，用户无需另下载 APP，开户成功即可体验交易',
        question: '终端优势',
        questionList: ['提供更多的流量', '更庞大的社区系统', '提供各类数据源授权', '操作便捷，无需另下载 APP'],
        resolveList: [
          {
            resolveTitle: '适用客户',
            resolve: '用户体量、资金量少的客户',
          },
          {
            resolveTitle: '交付模式',
            resolve: '开通账号可立即上线',
          },
        ],
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      <div className="pt-[100px]">
        <div
          className="py-10 bg-cover main-container lg:py-20"
          style={{ backgroundImage: `url('${CDN_IMAGES.banner_bg}')` }}
        >
          <Block>
            <BlockBetween
              left={
                <div className="flex flex-col items-start gap-8">
                  <div className="text-[44px] font-semibold">零售终端</div>
                  <div className="text-lg leading-9 text-text_color_2">
                    为客户提供了更优体验的证券 App，将「发现 → 认知 →
                    交易」作为用户的核心旅程为基础，善于结合大量的结构化数据，降低用户认知和投资交易的门槛，提供更多的交易投资建议及选股功能，可让用户更好的进行选股交易，在美股、港股、沪深、新加坡、欧洲等全球核心市场更容易发现投资机会。
                  </div>
                  <TalkToUs className="mt-0" />
                </div>
              }
              right={
                <img
                  src={'https://assets.lbkrs.com/uploads/f0ff19c0-f3a6-4c54-b1cb-75e25c616323/Group 427319264.png'}
                  alt=""
                />
              }
            />
          </Block>
        </div>
        <div className="py-10 main-container lg:py-20">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">Whale 生态终端产品</div>
              <div className="text-4xl font-medium">面对券商提供两类 APP 终端产品</div>
            </div>
            <div className="flex flex-col justify-between gap-6 lg:flex-row marketing-scene-plans" ref={marketSceneRef}>
              {marketingList.map((item, index) => (
                <div className="flex flex-col flex-1 overflow-hidden border rounded-lg border-border_color" key={index}>
                  <div className="flex flex-col scene-first">
                    <div className="text-[22px] p-8 pb-0 font-medium mb-2">{item.title}</div>
                    <div className="flex-1 pb-5 mx-8 text-sm font-normal border-b border-dashed border-tag_border_color">
                      {item.titleTips}
                    </div>
                  </div>
                  <div className="flex-1 px-8 pb-5 scene-second">
                    <div className="text-base font-medium mt-[30px] mb-[10px]">{item.question}</div>
                    <ul className="flex flex-col gap-y-4">
                      {item.questionList.map((listItem, listIndex) => (
                        <li className="list-dot" key={listIndex}>
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-5 px-8 py-5 text-white bg-brand_color scene-third">
                    {item.resolveList.map((listItem, listIndex) => (
                      <div key={listIndex}>
                        <div className="text-base font-medium mb-[10px]">{listItem.resolveTitle}</div>
                        <div className="text-sm font-normal">{listItem.resolve}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
              <div className="mb-2 text-base text-brand_color">证券业务</div>
              <div className="text-4xl font-medium">我们将提供的证券业务</div>
            </div>
            <div>
              <img
                src={'https://assets.lbkrs.com/uploads/bef6e00c-ae17-4e31-98ed-5c14464c1123/Group 427319323.svg'}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="py-10 main-container lg:py-20">
          <div className="flex flex-col gap-3 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">产品优势</div>
              <div className="text-4xl font-medium">终端产品在行业的优势</div>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:gap-48">
              <div className="flex flex-col items-center justify-center flex-1 text-center">
                <img
                  src="https://assets.lbkrs.com/uploads/f8c262b4-8c76-4de6-a90e-d845cf62ec5b/Frame 427319005.svg"
                  alt=""
                />
                <div className="text-[28px] font-medium mt-14 mb-4">{i18n.t('whale-community-039')}</div>
                <div className="text-base text-text_color_3  max-w-[400px] leading-7">
                  {i18n.t('whale-community-040')}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 text-center">
                <img
                  src="https://assets.lbkrs.com/uploads/a84ca15f-2e59-4447-858e-7f54f3cf2127/Frame 427319004.svg"
                  alt=""
                />
                <div className="text-[28px] font-medium mt-14 mb-4">{i18n.t('whale-community-041')}</div>
                <div className="text-base text-text_color_3  max-w-[400px] leading-7">
                  {i18n.t('whale-community-042')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Carousel autoplay effect="fade" className="bg-bg_color_2">
          <Block>
            <BlockBetween
              reverse
              left={
                <img
                  src={'https://assets.lbkrs.com/uploads/f0ff19c0-f3a6-4c54-b1cb-75e25c616323/Group 427319264.png'}
                  alt=""
                />
              }
              right={
                <div>
                  <div className="mb-10 text-4xl font-medium">更稳定实时的数据源</div>
                  <ul className="flex flex-col text-base font-normal leading-6 gap-y-4 text-text_color_3">
                    <li className="list-dot">0 延迟的全球市场行情</li>
                    <li className="list-dot">港股、美股、沪深、新加坡、欧洲等全球核心市场行情</li>
                    <li className="list-dot">支持行情商城购买功能，更好的控制行情流量</li>
                    <li className="list-dot">支持港股延迟行情、BMP、实时行情，满足客户的多重行情需求</li>
                  </ul>
                  <div className="flex items-center justify-center pt-10 lg:justify-start">
                    <div className="border-r border-dashed border-border_color pr-14">
                      <div className="text-brand_color">
                        <span className="text-4xl font-medium">0</span>
                      </div>
                      <div className="text-base font-normal">延迟</div>
                    </div>
                    <div className="pl-14">
                      <div className="text-brand_color">
                        <span className="text-4xl font-medium">5</span>+
                      </div>
                      <div className="text-base font-normal">全球核心市场</div>
                    </div>
                  </div>
                </div>
              }
            />
          </Block>
        </Carousel>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default Retail
