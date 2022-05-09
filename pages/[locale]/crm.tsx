import React, { useMemo } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '../../utils/i18n-paths'
import i18nextConfig from '../../next-i18next.config'
import { SEOMeta } from '../../utils/seo'
import { BssSection } from '@/features/bss/features'
import { PageLayout } from '@/features/common/page-layout'
import ContactBanner from '@/features/contact-banner'

function useFeatures() {
  const i18n = useTranslation()
  return useMemo(() => {
    return [
      {
        title: i18n.t('客户生命周期管理'),
        desc: i18n.t(
          '与客户建立良好客户管理的核心是了解客户在每个生命周期节点的需求，通过WHALE CRM 能够高效管理用户状态，确保用户需求能够被管理以及被执行'
        ),
        picture: 'https://pub.lbkrs.com/files/202205/UR6qffqL4krfeNuB/Vector__12_.png',
      },
      {
        title: i18n.t('KYC 管理'),
        desc: i18n.t(
          '通过自动化的人脸以及证件识别，实时完成认证对比以及活体验证，提高开户效率。对接了各地区合规认证系统，实现了高效的的 AML 审核'
        ),
        picture: 'https://pub.lbkrs.com/files/202205/FvV7aZauLSUfqFjf/Vector__13_.png',
      },
      {
        title: i18n.t('用户触达'),
        desc: i18n.t(
          '对于不同类型用户，不同生命周期的用户，一定需要不同的内容去触达运营。wHALE 构建了常用的用户触达通道，如：通过 App Push、短信、邮件、WhatsApp 等。'
        ),
        picture: 'https://pub.lbkrs.com/files/202205/nYkoKAQfXUpC8aGZ/Vector__14_.png',
      },
      {
        title: i18n.t('市场管理'),
        desc: i18n.t(
          '通过市场管理系统，可轻松完成广告渠道线上签约，数据同步以及市场费用结速等；并且可以通过数据化分析了解市场动态，并对各营销渠道效果精细化运营'
        ),
        picture: 'https://pub.lbkrs.com/files/202205/ZnaK9tRK2iv2RwR9/Vector__15_.png',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

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
  const features = useFeatures()

  return (
    <PageLayout
      screenProps={{
        contactUs: true,
        backgroundImage: 'url(https://pub.lbkrs.com/files/202205/P6diSwqwKAq21wRK/crm.png)',
        title: i18n.t('WHALE CRM'),
        desc: i18n.t(
          '客户关系管理帮助企业管理证券业务的零售客户关系及提升内部的营销效率。从客户关系的管理维护上，可以协助客户经理等团队高效的完成潜在客户的转化和既有客户的关系维持，通过线上线下各种途径持续触达和服务客户；从企业内部的营销效率上，可以在线管理内部团队绩效、管理营销渠道，通过数据化的分析持续提升效率。'
        ),
        cover: 'https://pub.lbkrs.com/files/202205/EAvD94bcLjHKXzGk/Group_627297.png',
      }}
    >
      <SEOMeta title="default" description="Longbridge Whale description" />
      <div className="py-[60px]">
        <BssSection features={features} />
      </div>
      <ContactBanner title={i18n.t('Get Started With WHALE CRM')} desc={i18n.t('Try Whale Crm for free, and explore all the tools and services you need to start')} />
    </PageLayout>
  )
}
export default CrmPage
