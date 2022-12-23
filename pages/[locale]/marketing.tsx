// 营销系统
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

const Marketing: React.FC = () => {
  const marketSceneRef = useRef(null)
  const marketSceneSize = useSize(marketSceneRef)

  useDebounceEffect(
    () => {
      keepSiblingsHeight('.marketing-version-list', 'version-first')
    },
    [marketSceneSize?.width],
    { wait: 300 }
  )

  const marketingBanners = useMemo(() => [1], [])

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
              <div className="text-[44px] font-semibold">{i18n.t('whale-marketing-001')}</div>
              <div className="text-lg leading-9 text-text_color_2">{i18n.t('whale-marketing-002')}</div>
              <TalkToUs className="mt-0" />
            </div>
            <div className="max-w-[620px]">
              <img src="https://pub.lbkrs.com/files/202212/nSrQZUdNJ7Y8ircg/Group_427319261.png" alt="" />
            </div>
          </div>
        </div>
        <div className="py-10 main-container lg:py-20">
          <div className="flex flex-col gap-3 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-marketing-003')}</div>
              <div className="mb-10 text-4xl font-medium">{i18n.t('whale-marketing-004')}</div>
            </div>
            <div className="flex flex-col items-center justify-between gap-20 md:flex-row">
              <div className="flex justify-between flex-1 w-full gap-20">
                <div>
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/txiQsfkn5VULhvmi/cash_plus.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">{i18n.t('whale-marketing-005')}</div>
                  <div className="text-base font-normal text-text_color_3">{i18n.t('whale-marketing-006')}</div>
                </div>
                <div>
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/i9JLwB1X14rHsAeH/circle_time.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">{i18n.t('whale-marketing-007')}</div>
                  <div className="text-base font-normal text-text_color_3">{i18n.t('whale-marketing-008')}</div>
                </div>
              </div>
              <div className="flex justify-between flex-1 w-full gap-20">
                <div>
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/queci6LCEx5pyxAx/customer_inquiry.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">{i18n.t('whale-marketing-009')}</div>
                  <div className="text-base font-normal text-text_color_3">{i18n.t('whale-marketing-010')}</div>
                </div>
                <div>
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/SBeHqd6MygAG4ihj/conversion.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">{i18n.t('whale-marketing-011')}</div>
                  <div className="text-base font-normal text-text_color_3">{i18n.t('whale-marketing-012')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-20 main-content-width ">
            <div>
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-marketing-013')}</div>
              <div className="text-4xl font-medium">{i18n.t('whale-marketing-014')}</div>
            </div>
            <div>
              <img
                src="https://assets.lbkrs.com/uploads/longbridge-whale/29c433e9-de02-4232-b1b2-6b57dc18e59c/b1.svg"
                alt=""
              />
            </div>
            <div className="bg-[#fff] rounded-lg flex marketing-version-list overflow-hidden" ref={marketSceneRef}>
              <div className="flex-1 p-10 left">
                <div className="border-b border-dashed version-first border-tag_border_color">
                  <div className="text-[30px] font-semibold mb-2">{i18n.t('whale-marketing-015')}</div>
                  <div className="text-base font-normal pb-7">
                    <div>{i18n.t('whale-marketing-016')}</div>
                    <div>{i18n.t('whale-marketing-017')}</div>
                  </div>
                </div>
                <div className="version-second">
                  <div className="text-xl font-medium mt-[30px] mb-[10px]">{i18n.t('whale-marketing-018')}</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">{i18n.t('whale-marketing-019')}</li>
                    <li className="list-dot">{i18n.t('whale-marketing-020')}</li>
                    <li className="list-dot">{i18n.t('whale-marketing-021')}</li>
                    <li className="list-dot">{i18n.t('whale-marketing-022')}</li>
                    <li className="list-dot">{i18n.t('whale-marketing-023')}</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 p-10 bg-brand_color text-[#fff]">
                <div className="border-b border-dashed version-first border-tag_border_color">
                  <div className="text-[30px] font-semibold mb-2 flex items-center">
                    {i18n.t('whale-marketing-024')}
                    <span className="text-xl text-white font-semibold px-2 py-[2px] rounded rounded-bl-none bg-[#7947FF] ml-4">
                      HOT
                    </span>
                  </div>
                  <div className="text-base font-normal pb-7">
                    <div>{i18n.t('whale-marketing-025')}</div>
                    <div>{i18n.t('whale-marketing-026')}</div>
                  </div>
                </div>
                <div className="version-second">
                  <div className="text-xl font-medium mt-[30px] mb-[10px]">{i18n.t('whale-marketing-018')}</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot white">{i18n.t('whale-marketing-019')}</li>
                    <li className="list-dot white">{i18n.t('whale-marketing-020')}</li>
                    <li className="list-dot white">{i18n.t('whale-marketing-027')}</li>
                    <li className="list-dot white">{i18n.t('whale-marketing-028')}</li>
                    <li className="list-dot white">{i18n.t('whale-marketing-029')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 main-container lg:py-20">
          <div className="flex flex-col gap-3 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-marketing-030')}</div>
              <div className="text-4xl font-medium">{i18n.t('whale-marketing-031')}</div>
            </div>
            <div className="flex flex-col items-start justify-between gap-3 lg:flex-row">
              <div className="flex-1">
                <img src="https://pub.lbkrs.com/files/202212/xTJxUzUoZzHTVdXX/Frame_427319001.png" alt="" />
              </div>
              <div>
                <div className="text-[28px] font-medium mb-10">{i18n.t('whale-marketing-032')}</div>
                <ul className="flex flex-col gap-6">
                  <li className="flex items-center">
                    <ImageIcon url="https://pub.lbkrs.com/files/202212/jrd4MwQBxQbkuoay/copy.png" className="mr-8" />
                    <span className="text-base font-normal text-text_color_3 lg:max-w-[386px] leading-7">
                      {i18n.t('whale-marketing-033')}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ImageIcon url="https://pub.lbkrs.com/files/202212/FvC4YU2unWnUkViy/group.png" className="mr-8" />
                    <span className="text-base font-normal text-text_color_3 lg:max-w-[386px] leading-7">
                      {i18n.t('whale-marketing-034')}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ImageIcon
                      url="https://pub.lbkrs.com/files/202212/M2m5UXvQmU45xHip/task_center.png"
                      className="mr-8"
                    />
                    <span className="text-base font-normal text-text_color_3 lg:max-w-[386px] leading-7">
                      {i18n.t('whale-marketing-035')}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ImageIcon
                      url="https://pub.lbkrs.com/files/202212/jJruyCm1HZzpRQ6u/portfolo_settiongs.png"
                      className="mr-8"
                    />
                    <span className="text-base font-normal text-text_color_3 lg:max-w-[386px] leading-7">
                      {i18n.t('whale-marketing-036')}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-3 lg:items-center main-content-width lg:flex-row">
            <div className="flex-1">
              <div className="text-[28px] font-medium mb-10">{i18n.t('whale-marketing-037')}</div>
              <ul className="flex flex-col gap-6">
                <li className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/1jphbciCdpEftiBF/treeview.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3 lg:max-w-[386px] leading-7">
                    {i18n.t('whale-marketing-038')}
                  </span>
                </li>
                <li className="flex items-center">
                  <ImageIcon
                    url="https://pub.lbkrs.com/files/202212/z4whtrr6ABmv5bNv/translate_to_en.png"
                    className="mr-8"
                  />
                  <span className="text-base font-normal text-text_color_3 lg:max-w-[386px] leading-7">
                    {i18n.t('whale-marketing-039')}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img src="https://pub.lbkrs.com/files/202212/Cur9afVMeDTPVQy3/Group_427318897.png" alt="" />
            </div>
          </div>
        </div>

        <div className="py-10 main-container lg:py-20">
          <div className="flex flex-col gap-8 lg:items-center main-content-width lg:flex-row">
            <div className="flex-1">
              <img src="https://pub.lbkrs.com/files/202212/EHLGit2kRLLzeC25/Group_427319262.png" alt="" />
            </div>
            <div>
              <div className="text-[28px] font-medium mb-10">{i18n.t('whale-marketing-040')}</div>
              <ul className="flex flex-col gap-6">
                <li className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/P6JcUv69nJFnTx3b/list.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3 lg:max-w-[386px] leading-7">
                    {i18n.t('whale-marketing-041')}
                  </span>
                </li>
                <li className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/4zxY387JjpngG9F3/code.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3 lg:max-w-[386px] leading-7">
                    {i18n.t('whale-marketing-042')}
                  </span>
                </li>
                <li className="flex items-center">
                  <ImageIcon
                    url="https://pub.lbkrs.com/files/202212/fU72Gy3aB5WdFU77/translation_EN-CN.png"
                    className="mr-8"
                  />
                  <span className="text-base font-normal text-text_color_3 lg:max-w-[386px] leading-7">
                    {i18n.t('whale-marketing-043')}
                  </span>
                </li>
              </ul>
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
                  <div>
                    <div className="mb-2 text-base text-brand_color">{i18n.t('whale-marketing-044')}</div>
                    <div className="mb-10 text-4xl font-medium">{i18n.t('whale-marketing-045')}</div>
                  </div>
                  <div className="text-base font-normal leading-7 text-text_color_3">
                    {i18n.t('whale-marketing-046')}
                  </div>
                  <div className="flex items-center justify-center pt-10 lg:justify-start">
                    <div className="border-r border-dashed border-border_color pr-14">
                      <div className="text-brand_color">
                        <span className="text-4xl font-medium">20</span>%
                      </div>
                      <div className="text-base font-normal">{i18n.t('whale-marketing-047')}</div>
                    </div>
                    <div className="pl-14">
                      <div className="text-brand_color">
                        <span className="text-4xl font-medium">30</span>%
                      </div>
                      <div className="text-base font-normal">{i18n.t('whale-marketing-048')}</div>
                    </div>
                  </div>
                </div>
              }
            />
          </Block>
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
                  <div>
                    <div className="mb-2 text-base text-brand_color">{i18n.t('whale-marketing-044')}</div>
                    <div className="mb-10 text-4xl font-medium">{i18n.t('whale-marketing-045')}</div>
                  </div>
                  <div className="text-base font-normal leading-7 text-text_color_3">
                    {i18n.t('whale-marketing-046')}
                  </div>
                  <div className="flex items-center justify-center pt-10 lg:justify-start">
                    <div className="border-r border-dashed border-border_color pr-14">
                      <div className="text-brand_color">
                        <span className="text-4xl font-medium">20</span>%
                      </div>
                      <div className="text-base font-normal">{i18n.t('whale-marketing-047')}</div>
                    </div>
                    <div className="pl-14">
                      <div className="text-brand_color">
                        <span className="text-4xl font-medium">30</span>%
                      </div>
                      <div className="text-base font-normal">{i18n.t('whale-marketing-048')}</div>
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

export default Marketing
