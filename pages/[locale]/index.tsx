import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { FirstScreen } from '@/features/home/first-screen'
import { HomeFeatures } from '@/features/home/features'
import DivideDot from '@/components/divide-dot'
import { HomeExamples } from '@/features/home/examples'
import { i18nPaths } from '../../utils/i18n-paths'
import i18nextConfig from '../../next-i18next.config'
import { SEOMeta } from '../../utils/seo'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common'], i18nextConfig)),
  },
})
const IndexPage = () => {
  const i18n = useTranslation()

  const title = (
    <>
      <div className="text-5xl leading-tight">
        <span>{i18n.t('Empower and connect the financial industry with ')}</span>
        <span className="text-text_brand_color">{i18n.t('Internet technology')}</span>
      </div>
      <DivideDot size="large" />
    </>
  )

  return (
    <div>
      <SEOMeta title="default" description="Longbridge Whale description" />
      <FirstScreen
        backgroundColor="var(--bg_color_1)"
        title={title}
        desc={i18n.t(
          'A one-stop service provider for brokerage infrastructure, including systems, apps, and basic services for platform operations, with the lowest cost.'
        )}
        cover="https://pub.lbkrs.com/files/202205/c4LPqwdQrmZ4VtLk/Group_627289.png"
      />
      <HomeFeatures />
      <HomeExamples />
    </div>
  )
}
export default IndexPage
