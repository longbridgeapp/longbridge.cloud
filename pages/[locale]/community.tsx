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
              <div className="text-[44px] font-semibold">{i18n.t('whale-community-001')}</div>
              <div className="text-lg leading-9 text-text_color_2  max-w-[500px]">
                <div>{i18n.t('whale-community-002')}</div>
                <div>{i18n.t('whale-community-003')}</div>
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
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-community-004')}</div>
              <div className="text-4xl font-medium">{i18n.t('whale-community-005')}</div>
            </div>
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <div className="flex justify-between flex-1 w-full gap-10">
                <div className="flex-1">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/6LEMm55Ga2GVCmBF/browser.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">{i18n.t('whale-community-006')}</div>
                  <div className="text-base font-normal text-text_color_3">{i18n.t('whale-community-007')}</div>
                </div>
                <div className="flex-1">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/Qb1GKG5GL2c1mJVU/circle_up.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">{i18n.t('whale-community-008')}</div>
                  <div className="text-base font-normal text-text_color_3">{i18n.t('whale-community-009')}</div>
                </div>
              </div>
              <div className="flex justify-between flex-1 w-full gap-10">
                <div className="flex-1">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/Xkw3C35uSEWgMeoU/camera.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">{i18n.t('whale-community-010')}</div>
                  <div className="text-base font-normal text-text_color_3">{i18n.t('whale-community-011')}</div>
                </div>
                <div className="flex-1">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/m74gCXLM8mkqXxYK/broker.png" />
                  <div className="mt-4 mb-2 text-xl font-medium">{i18n.t('whale-community-012')}</div>
                  <div className="text-base font-normal text-text_color_3">{i18n.t('whale-community-013')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-community-014')}</div>
              <div className="text-4xl font-medium">{i18n.t('whale-community-015')}</div>
            </div>
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="flex-1 p-8 bg-white rounded-lg">
                <ImageIcon
                  url="https://pub.lbkrs.com/files/202212/eFWKfWEu5em5ugGZ/Group_627094__1_.png"
                  className="!h-[70px] !w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">{i18n.t('whale-community-016')}</div>
                <ul className="flex flex-col text-base leading-7 gap-y-4 text-text_color_3">
                  <li className="list-dot">{i18n.t('whale-community-017')}</li>
                  <li className="list-dot">{i18n.t('whale-community-018')}</li>
                  <li className="list-dot">{i18n.t('whale-community-019')}</li>
                </ul>
              </div>
              <div className="flex-1 p-8 bg-white rounded-lg">
                <ImageIcon
                  url="https://pub.lbkrs.com/files/202212/hH53gGU5c81xmx6X/Group_627094__2_.png"
                  className="!h-[70px] !w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">{i18n.t('whale-community-020')}</div>
                <ul className="flex flex-col text-base leading-7 gap-y-4 text-text_color_3">
                  <li className="list-dot">{i18n.t('whale-community-021')}</li>
                  <li className="list-dot">{i18n.t('whale-community-022')}</li>
                  <li className="list-dot">{i18n.t('whale-community-023')}</li>
                </ul>
              </div>
              <div className="flex-1 p-8 bg-white rounded-lg">
                <ImageIcon
                  url="https://pub.lbkrs.com/files/202212/6P9Lxdz3T3KCGSAy/Group_627094__3_.png"
                  className="!h-[70px] !w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">{i18n.t('whale-community-024')}</div>
                <ul className="flex flex-col text-base leading-7 gap-y-4 text-text_color_3">
                  <li className="list-dot">{i18n.t('whale-community-025')}</li>
                  <li className="list-dot">{i18n.t('whale-community-026')}</li>
                  <li className="list-dot">{i18n.t('whale-community-027')}</li>
                  <li className="list-dot">{i18n.t('whale-community-028')}</li>
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
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-community-029')}</div>
              <div className="text-4xl font-medium">{i18n.t('whale-community-030')}</div>
            </div>
            <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
              <div className="flex-1">
                <img src="https://pub.lbkrs.com/files/202212/RBpWhMErPAjDhKQb/Frame_427319002.png" alt="" />
              </div>
              <div className="flex-1">
                <div className="text-[28px] font-medium mb-10">{i18n.t('whale-community-031')}</div>
                <ul className="flex flex-col gap-6">
                  <li className="flex items-center">
                    <ImageIcon url="https://pub.lbkrs.com/files/202212/txcPMSuzGoyT6StG/Union.png" className="mr-8" />
                    <span className="text-base font-normal text-text_color_3 max-w-[386px] leading-7">
                      {i18n.t('whale-community-032')}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ImageIcon url="https://pub.lbkrs.com/files/202212/FAoH4Cthd3zTonKb/diamond.png" className="mr-8" />
                    <span className="text-base font-normal text-text_color_3 max-w-[386px] leading-7">
                      {i18n.t('whale-community-033')}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ImageIcon
                      url="https://pub.lbkrs.com/files/202212/wFfpmGp5yV1ciYDP/list_record.png"
                      className="mr-8"
                    />
                    <span className="text-base font-normal text-text_color_3 max-w-[386px] leading-7">
                      {i18n.t('whale-community-034')}
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
              <div className="text-[28px] font-medium mb-10">{i18n.t('whale-community-035')}</div>
              <ul className="flex flex-col gap-6">
                <li className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/SWrinzC21He7nzq7/eyes_open.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3 max-w-[386px] leading-7">
                    {i18n.t('whale-community-036')}
                  </span>
                </li>
                <li className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/mqUV14XqnvYE6YgC/customer.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3 max-w-[386px] leading-7">
                    {i18n.t('whale-community-037')}
                  </span>
                </li>
                <li className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/Mhvn1KWFHt6mvhr1/option.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3 max-w-[386px] leading-7">
                    {i18n.t('whale-community-038')}
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
            <div className="flex flex-col items-center justify-center flex-1 text-center">
              <img src="https://pub.lbkrs.com/files/202212/htdSLdapVmaEN7a3/Frame_427319004.png" alt="" />
              <div className="text-[28px] font-medium mt-14 mb-4">{i18n.t('whale-community-039')}</div>
              <div className="text-base text-text_color_3  max-w-[400px] leading-7">
                {i18n.t('whale-community-040')}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 text-center">
              <img src="https://pub.lbkrs.com/files/202212/urinyWrhLpdn7pvq/Frame_427319005.png" alt="" />
              <div className="text-[28px] font-medium mt-14 mb-4">{i18n.t('whale-community-041')}</div>
              <div className="text-base text-text_color_3  max-w-[400px] leading-7">
                {i18n.t('whale-community-042')}
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
