import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { PageLayout } from '@/features/common/page-layout'
import { AboutGallery } from '@/features/about/gallery'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common'], i18nextConfig)),
  },
})
const AboutPage = () => {
  const i18n = useTranslation()

  return (
    <PageLayout
      screenProps={{
        titleNowrap: true,
        backgroundImage: 'url(https://pub.lbkrs.com/files/202205/YU2Z37iWrsLLrxEc/.png)',
        title: i18n.t('关于长桥 WHALE'),
        desc: (
          <span>
            {i18n.t(
              'LONGBRIDGE WHALE（簡稱 WHALE）成立於 2021 年 3 月，是由來自新加坡的長橋集團旗下長橋科技研發的一站式互联网證券交易云服務商，並由來自新加坡和香港的資深金融管理者，以及來自阿里巴巴、字節跳動等國際科技巨頭企業技術專才組成的創始團隊成立推出創辦的。'
            )}
            <br />
            {i18n.t(
              'WHALE 为券商提供 App，前、中、后台的一站式券商产品及解决方案，同时涵盖行情，资讯，基本面等数据服务；所有系统都是基于云端架构，WHALE 也是 SFC 目前唯一颁发 EDSP 之机构。Cloud Native 保障了系统运营的高可靠性，同时免去了本地机房运维的高成本；提供了完整解决方案的同时，可以订阅每一个原子化的产品；WHALE 的主旨是赋能生态，实现与合作伙伴的共赢。'
            )}
          </span>
        ),
      }}
    >
      <SEOMeta title="default" description="Longbridge Whale description" />
      <AboutGallery />
    </PageLayout>
  )
}
export default AboutPage
