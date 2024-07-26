// 社区系统
import Button from '@/components/button'
import ImageIcon from '@/components/image-icon'
import { Layout } from '@/features/common/page-layout'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import i18nextConfig from '@/next-i18next.config'
import { i18nPaths } from '@/utils/i18n-paths'
import React from 'react'
import { SEOMeta } from '@/utils/seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NewBanner as Banner } from '@/features/product/Banner'
import Title from '@/features/product/title'
import Box from '@/features/product/Box'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as any)),
  },
})

const Longport: React.FC = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEN = i18n.i18n.language === 'en'
  const banner_porps = {
    title: i18n.t('whale-community-001'),
    desc: [i18n.t('whale-community-002'), i18n.t('whale-community-003')],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/8c35f363-598b-4631-a197-b6d88a626bb2/longport-en.png',
      'zh-CN': 'https://assets.lbctrl.com/uploads/6360d4fd-e09c-46ca-bb08-b7ecba1e24b5/longport-cn.png',
      'zh-HK': 'https://assets.lbctrl.com/uploads/9665e264-c5ba-473b-a734-bbc84e189249/longport-hk.png',
    },
  }

  const rich_and_diverse_community_features_img: Record<string, string> = {
    'en': 'https://assets.lbctrl.com/uploads/fc2e4335-3018-4108-85b4-700fb51ab461/rich_and_diverse_community_features_en.svg',
    'zh-CN':
      'https://assets.lbctrl.com/uploads/8f1fd81e-585f-4c8e-a450-8927ef70f067/rich_and_diverse_community_features_cn.svg',
    'zh-HK':
      'https://assets.lbctrl.com/uploads/8f1fd81e-585f-4c8e-a450-8927ef70f067/rich_and_diverse_community_features_cn.svg',
  }

  const product_advantage_img: Record<string, string> = {
    'en': 'https://assets.lbctrl.com/uploads/ebc0b445-7d2c-48e0-a9d8-19cfe7aea6ee/product_advantage_en.svg',
    'zh-CN': 'https://assets.lbctrl.com/uploads/d0b0efb0-fba7-4625-96f9-dc1b41550b7f/product_advantage_cn.svg',
    'zh-HK': 'https://assets.lbctrl.com/uploads/d0b0efb0-fba7-4625-96f9-dc1b41550b7f/product_advantage_cn.svg',
  }

  const unique_collection_feature_img: Record<string, string> = {
    'en': 'https://assets.lbctrl.com/uploads/10384578-cd37-48dd-81c4-9cc7bfb7b943/unique_collection_feature_en.svg',
    'zh-CN': 'https://assets.lbctrl.com/uploads/68a97a04-c237-459d-8f4a-07382cbf4e42/Frame%20427319004.svg',
    'zh-HK': 'https://assets.lbctrl.com/uploads/68a97a04-c237-459d-8f4a-07382cbf4e42/Frame%20427319004.svg',
  }

  return (
    <Layout>
      <SEOMeta indexTitle={false} title={seoI18n.t('longport.title')} description={seoI18n.t('longport.description')} />
      <div>
        <Banner {...banner_porps}></Banner>
        {/* 市场痛点 */}
        <div className="py-10 main-container">
          <div className="flex flex-col gap-10 main-content-width">
            <Title label={i18n.t('whale-community-004')} title={i18n.t('whale-community-005')}></Title>
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <div className="flex justify-between flex-1 w-full gap-10">
                <div className="flex-1">
                  <ImageIcon url="https://pub.pbkrs.com/files/202212/6LEMm55Ga2GVCmBF/browser.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">{i18n.t('whale-community-006')}</div>
                  <div className="text-base font-normal text-text_color_3">{i18n.t('whale-community-007')}</div>
                </div>
                <div className="flex-1">
                  <ImageIcon url="https://pub.pbkrs.com/files/202212/Qb1GKG5GL2c1mJVU/circle_up.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">{i18n.t('whale-community-008')}</div>
                  <div className="text-base font-normal text-text_color_3">{i18n.t('whale-community-009')}</div>
                </div>
              </div>
              <div className="flex justify-between flex-1 w-full gap-10">
                <div className="flex-1">
                  <ImageIcon url="https://pub.pbkrs.com/files/202212/Xkw3C35uSEWgMeoU/camera.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">{i18n.t('whale-community-010')}</div>
                  <div className="text-base font-normal text-text_color_3">{i18n.t('whale-community-011')}</div>
                </div>
                <div className="flex-1">
                  <ImageIcon url="https://pub.pbkrs.com/files/202212/m74gCXLM8mkqXxYK/broker.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">{i18n.t('whale-community-012')}</div>
                  <div className="text-base font-normal text-text_color_3">{i18n.t('whale-community-013')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 产品优势 */}
        <div className="py-10 bg-bg_color_2 main-container">
          <div className="flex flex-col gap-10 main-content-width">
            <Title label={i18n.t('whale-community-014')} title={i18n.t('whale-community-015')}></Title>
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="flex-1 p-8 bg-white rounded-lg">
                <ImageIcon
                  url="https://pub.pbkrs.com/files/202212/eFWKfWEu5em5ugGZ/Group_627094__1_.png"
                  className="!h-[56px] !w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">{i18n.t('whale-community-016')}</div>
                <ul className="flex flex-col text-base gap-y-4 text-text_color_3">
                  <li className="list-dot">{i18n.t('whale-community-017')}</li>
                  <li className="list-dot">{i18n.t('whale-community-018')}</li>
                  <li className="list-dot">{i18n.t('whale-community-019')}</li>
                </ul>
              </div>
              <div className="flex-1 p-8 bg-white rounded-lg">
                <ImageIcon
                  url="https://pub.pbkrs.com/files/202212/hH53gGU5c81xmx6X/Group_627094__2_.png"
                  className="!h-[56px] !w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">{i18n.t('whale-community-020')}</div>
                <ul className="flex flex-col text-base gap-y-4 text-text_color_3">
                  <li className="list-dot">{i18n.t('whale-community-021')}</li>
                  <li className="list-dot">{i18n.t('whale-community-022')}</li>
                  <li className="list-dot">{i18n.t('whale-community-023')}</li>
                </ul>
              </div>
              <div className="flex-1 p-8 bg-white rounded-lg">
                <ImageIcon
                  url="https://pub.pbkrs.com/files/202212/6P9Lxdz3T3KCGSAy/Group_627094__3_.png"
                  className="!h-[56px] !w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">{i18n.t('whale-community-024')}</div>
                <ul className="flex flex-col text-base gap-y-4 text-text_color_3">
                  <li className="list-dot">{i18n.t('whale-community-025')}</li>
                  <li className="list-dot">{i18n.t('whale-community-026')}</li>
                  <li className="list-dot">{i18n.t('whale-community-027')}</li>
                  <li className="list-dot">{i18n.t('whale-community-028')}</li>
                </ul>
              </div>
            </div>
            <div>
              <img src={product_advantage_img[i18n.i18n.language]} className="w-full" alt="" />
            </div>
          </div>
        </div>
        {/* 社区优势 */}
        <Box>
          <div>
            <div className="flex flex-col gap-10">
              <Title label={i18n.t('whale-community-029')} title={i18n.t('whale-community-030')}></Title>
              <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                <div className="flex-1">
                  <img
                    src={rich_and_diverse_community_features_img[i18n.i18n.language]}
                    alt=""
                    className="lg:w-[588px]"
                  />
                </div>
                <div className="flex-1 max-w-[520px]">
                  <div className="mb-10 font-medium text-[28px] leading-10 ">{i18n.t('whale-community-031')}</div>
                  <ul className="flex flex-col gap-6">
                    <li className="flex items-center">
                      <ImageIcon
                        url="https://assets.lbctrl.com/uploads/a8e48045-8feb-4a5e-8283-0bc248c9903a/Union.svg"
                        className="mr-8"
                      />
                      <span className="text-base font-normal text-text_color_3 lg:max-w-[448px] leading-7">
                        {i18n.t('whale-community-032')}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <ImageIcon
                        url="https://pub.pbkrs.com/files/202212/FAoH4Cthd3zTonKb/diamond.png"
                        className="mr-8"
                      />
                      <span className="text-base font-normal text-text_color_3 lg:max-w-[448px] leading-7">
                        {i18n.t('whale-community-033')}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <ImageIcon
                        url="https://pub.pbkrs.com/files/202212/wFfpmGp5yV1ciYDP/list_record.png"
                        className="mr-8"
                      />
                      <span className="text-base font-normal text-text_color_3 lg:max-w-[448px] leading-7">
                        {i18n.t('whale-community-034')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-10"></hr>
            <div className="flex flex-col lg:items-center lg:flex-row lg:justify-between">
              <div className="flex-1 max-w-[510px]">
                <div className="mb-10 font-medium text-[28px] leading-10">{i18n.t('whale-community-035')}</div>
                <ul className="flex flex-col gap-6">
                  <li className="flex items-center">
                    <ImageIcon
                      url="https://pub.pbkrs.com/files/202212/SWrinzC21He7nzq7/eyes_open.png"
                      className="mr-8"
                    />
                    <span className="text-base font-normal text-text_color_3 lg:max-w-[448px] leading-7">
                      {i18n.t('whale-community-036')}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ImageIcon
                      url="https://pub.pbkrs.com/files/202212/mqUV14XqnvYE6YgC/customer.png"
                      className="mr-8"
                    />
                    <span className="text-base font-normal text-text_color_3 lg:max-w-[438px] leading-7">
                      {i18n.t('whale-community-037')}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ImageIcon url="https://pub.pbkrs.com/files/202212/Mhvn1KWFHt6mvhr1/option.png" className="mr-8" />
                    <span className="text-base font-normal text-text_color_3 lg:max-w-[438px] leading-7">
                      {i18n.t('whale-community-038')}
                    </span>
                  </li>
                </ul>
              </div>
              <img
                src="https://assets.lbctrl.com/uploads/5df88262-11d9-4f8b-8d92-ba11219eb598/Frame 427319003.png"
                alt=""
                className="lg:w-[588px]"
              />
            </div>
            <hr className="my-10"></hr>
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <div className="flex flex-col items-center justify-center flex-1 text-center">
                <img src={unique_collection_feature_img[i18n.i18n.language]} alt="" className="lg:w-[580px]" />
                <div className="text-2xl lg:text-[28px] font-medium mt-5 mb-4">{i18n.t('whale-community-039')}</div>
                <div className="text-base text-text_color_3 max-w-[398px] leading-7">
                  {i18n.t('whale-community-040')}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 text-center">
                <img
                  src="https://assets.lbctrl.com/uploads/bc64e5f9-f843-4ec3-bae7-91adc06a4862/Frame 427319005.png"
                  alt=""
                  className="lg:w-[580px]"
                />
                <div className="text-2xl lg:text-[28px] font-medium mt-5 mb-4">{i18n.t('whale-community-041')}</div>
                <div className="text-base text-text_color_3  max-w-[400px] leading-7">
                  {i18n.t('whale-community-042')}
                </div>
              </div>
            </div>
          </div>
        </Box>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default Longport
