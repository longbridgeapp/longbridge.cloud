// 产品-wealth-management
import { Layout } from '@/features/common/page-layout'
import i18nextConfig from '@/next-i18next.config'
import { i18nPaths } from '@/utils/i18n-paths'
import ImageIcon from '@/components/image-icon'
import React, { useEffect, useMemo } from 'react'
import { SEOMeta } from '@/utils/seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NewBanner as Banner } from '@/features/product/Banner'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import CarouselCard from '@/features/carousel-card'
import ContactUs from '@/features/wm-contact-us'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as any)),
  },
})

const Retail: React.FC = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  // img[i18n.i18n.language] || img['zh-CN'] 这样用！
  const banner_props = {
    title: i18n.t('pages_locale_wealth_management_891127'),
    desc: [i18n.t('pages_locale_wealth_management_891128')],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/0e2fa625-47ff-45fe-a33b-ad67abdc2287/wealth-management-cn.png',
      'zh-CN': 'https://assets.lbctrl.com/uploads/0e2fa625-47ff-45fe-a33b-ad67abdc2287/wealth-management-cn.png',
      'zh-HK': 'https://assets.lbctrl.com/uploads/0e2fa625-47ff-45fe-a33b-ad67abdc2287/wealth-management-cn.png',
    },
  }

  // 轮播描述
  const carouselTitle = i18n.t('pages_locale_wealth_management_891152')
  const { carouselContents } = useMemo(() => {
    const carouselContents = [
      {
        title: i18n.t('pages_locale_wealth_management_891153'),
        desc: i18n.t('pages_locale_wealth_management_891154'),
      },
      {
        title: i18n.t('pages_locale_wealth_management_891155'),
        desc: i18n.t('pages_locale_wealth_management_891156'),
      },
      {
        title: i18n.t('pages_locale_wealth_management_891157'),
        desc: i18n.t('pages_locale_wealth_management_891158'),
      },
      {
        title: i18n.t('pages_locale_wealth_management_891159'),
        desc: i18n.t('pages_locale_wealth_management_891160'),
      },
    ]
    return { carouselContents }
  }, [])

  return (
    <Layout>
      <SEOMeta
        indexTitle={false}
        title={seoI18n.t('wealth-management.title')}
        description={seoI18n.t('wealth-management.description')}
      />
      <div>
        <Banner {...banner_props}></Banner>
        <div className="py-10 main-container">
          <div className="flex flex-col gap-10 main-content-width">
            <Title
              label={i18n.t('pages_locale_wealth_management_891129')}
              title={i18n.t('pages_locale_wealth_management_891130')}
            ></Title>
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="flex-1 p-8 rounded-lg border border-solid border-[#eaebec]">
                <ImageIcon
                  url="https://assets.lbctrl.com/uploads/fc6e276a-a920-498a-8df9-d8b844673410/wm-icon-1.png"
                  className="!h-[56px] !w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">{i18n.t('pages_locale_wealth_management_891131')}</div>
                <div>{i18n.t('pages_locale_wealth_management_891132')}</div>
              </div>
              <div className="flex-1 p-8 rounded-lg border border-solid border-[#eaebec]">
                <ImageIcon
                  url="https://assets.lbctrl.com/uploads/642010de-a788-43aa-bdb5-dc7f61cc8e63/wm-icon-6.png"
                  className="!h-[56px] !w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">{i18n.t('pages_locale_wealth_management_891133')}</div>
                <div>{i18n.t('pages_locale_wealth_management_891134')}</div>
              </div>
              <div className="flex-1 p-8 rounded-lg border border-solid border-[#eaebec]">
                <ImageIcon
                  url="https://assets.lbctrl.com/uploads/7775f6a6-5d79-4295-b204-7d780fa27349/wm-icon-5.png"
                  className="!h-[56px] !w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">{i18n.t('pages_locale_wealth_management_891135')}</div>
                <div>{i18n.t('pages_locale_wealth_management_891136')}</div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="flex-1 p-8 rounded-lg border border-solid border-[#eaebec]">
                <ImageIcon
                  url="https://assets.lbctrl.com/uploads/99d7bef2-e895-452e-a928-b23d9a59ba34/wm-icon-4.png"
                  className="!h-[56px] !w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">{i18n.t('pages_locale_wealth_management_891137')}</div>
                <div>{i18n.t('pages_locale_wealth_management_891138')}</div>
              </div>
              <div className="flex-1 p-8 rounded-lg border border-solid border-[#eaebec]">
                <ImageIcon
                  url="https://assets.lbctrl.com/uploads/7d8963ca-3d8e-425c-b6d6-46347ac58fe2/wm-icon-3.png"
                  className="!h-[56px] !w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">{i18n.t('pages_locale_wealth_management_891139')}</div>
                <div>{i18n.t('pages_locale_wealth_management_891140')}</div>
              </div>
              <div className="flex-1 p-8 rounded-lg border border-solid border-[#eaebec]">
                <ImageIcon
                  url="https://assets.lbctrl.com/uploads/b40e2517-966c-4cf8-bdf4-f9a0b7ff6e6f/wm-icon-2.png"
                  className="!h-[56px] !w-auto"
                />
                <div className="mt-8 mb-4 text-xl font-medium">{i18n.t('pages_locale_wealth_management_891141')}</div>
                <div>{i18n.t('pages_locale_wealth_management_891142')}</div>
              </div>
            </div>
          </div>
        </div>
        <Box
          className="bg-bg_color_2 bg-no-repeat bg-right-top bg-[length:717px_393px]"
          backgroundImage="https://pub.pbkrs.com/files/202307/zfP6yEtKhFSMFSdB/bg-image.png"
        >
          <>
            <div className="flex flex-col gap-10">
              <Title
                label={i18n.t('pages_locale_wealth_management_891143')}
                title={i18n.t('pages_locale_wealth_management_891144')}
              ></Title>
              <div>{i18n.t('pages_locale_wealth_management_891145')}</div>
              <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                <div className="flex-1">
                  <img
                    src={
                      'https://assets.lbctrl.com/uploads/8f1fd81e-585f-4c8e-a450-8927ef70f067/rich_and_diverse_community_features_cn.svg'
                    }
                    alt=""
                    className="lg:w-[588px]"
                  />
                </div>
                <div className="flex-1 max-w-[520px]">
                  <ul className="flex flex-col gap-6">
                    <li className="flex items-center">
                      <ImageIcon
                        url="https://assets.lbctrl.com/uploads/4473ab05-1c98-45c3-a458-177d18ecf2b4/phone.png"
                        className="mr-8"
                      />

                      <span className="text-base font-normal text-text_color_3 lg:max-w-[448px] leading-7">
                        <span className="block font-bold">{i18n.t('pages_locale_wealth_management_891146')}</span>
                        {i18n.t('pages_locale_wealth_management_891147')}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <ImageIcon
                        url="https://pub.pbkrs.com/files/202212/1jphbciCdpEftiBF/treeview.png"
                        className="mr-8"
                      />
                      <span className="text-base font-normal text-text_color_3 lg:max-w-[448px] leading-7">
                        <span className="block font-bold">{i18n.t('pages_locale_wealth_management_891148')}</span>
                        {i18n.t('pages_locale_wealth_management_891149')}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <ImageIcon
                        url="https://assets.lbctrl.com/uploads/5635910b-0715-46b2-b4bf-ac3731ffcbeb/service-provider.png"
                        className="mr-8"
                      />
                      <span className="text-base font-normal text-text_color_3 lg:max-w-[448px] leading-7">
                        <span className="block font-bold">{i18n.t('pages_locale_wealth_management_891150')}</span>
                        {i18n.t('pages_locale_wealth_management_891151')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        </Box>
        <CarouselCard title={carouselTitle} list={carouselContents} />
        <ContactUs />
      </div>
    </Layout>
  )
}

export default Retail
