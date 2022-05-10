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
  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      {
        title: i18n.t('crm_page_001'),
        desc: i18n.t('crm_page_002'),
        picture: 'https://pub.lbkrs.com/files/202205/UR6qffqL4krfeNuB/Vector__12_.png',
      },
      {
        title: i18n.t('crm_page_003'),
        desc: i18n.t('crm_page_004'),
        picture: 'https://pub.lbkrs.com/files/202205/FvV7aZauLSUfqFjf/Vector__13_.png',
      },
      {
        title: i18n.t('crm_page_005'),
        desc: i18n.t('crm_page_006'),
        picture: 'https://pub.lbkrs.com/files/202205/nYkoKAQfXUpC8aGZ/Vector__14_.png',
      },
      {
        title: i18n.t('crm_page_007'),
        desc: i18n.t('crm_page_008'),
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
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})
const CrmPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const features = useFeatures()

  return (
    <PageLayout
      screenProps={{
        contactUs: true,
        backgroundImage: 'url(https://pub.lbkrs.com/files/202205/P6diSwqwKAq21wRK/crm.png)',
        title: i18n.t('crm_page_009'),
        desc: i18n.t('crm_page_0010'),
        cover: 'https://pub.lbkrs.com/files/202205/EAvD94bcLjHKXzGk/Group_627297.png',
      }}
    >
      <SEOMeta title={seoI18n.t('crm.title')} description={seoI18n.t('crm.description')} />
      <div className="py-[60px]">
        <BssSection features={features} />
      </div>
      <ContactBanner title={i18n.t('crm_page_0011')} desc={i18n.t('crm_page_0012')} />
    </PageLayout>
  )
}
export default CrmPage
