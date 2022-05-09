import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { FirstScreen } from '@/features/home/first-screen'
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
const CrmPage = () => {
  const i18n = useTranslation()

  return (
    <div>
      <SEOMeta title="default" description="Longbridge Whale description" />
      <FirstScreen
        contactUs
        backgroundImage="linear-gradient(90deg, rgba(252, 252, 252, 0.83) 22.47%, rgba(252, 252, 252, 0.6) 61.17%, rgba(252, 252, 252, 0.72) 96.67%);"
        title={i18n.t('WHALE CRM')}
        desc={i18n.t(
          '客户关系管理帮助企业管理证券业务的零售客户关系及提升内部的营销效率。从客户关系的管理维护上，可以协助客户经理等团队高效的完成潜在客户的转化和既有客户的关系维持，通过线上线下各种途径持续触达和服务客户；从企业内部的营销效率上，可以在线管理内部团队绩效、管理营销渠道，通过数据化的分析持续提升效率。'
        )}
        cover="https://pub.lbkrs.com/files/202205/EAvD94bcLjHKXzGk/Group_627297.png"
      />
    </div>
  )
}
export default CrmPage
