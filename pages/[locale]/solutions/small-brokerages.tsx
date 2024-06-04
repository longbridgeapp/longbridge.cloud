import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { Layout } from '@/features/common/page-layout'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import { WhaleOfficialFooterNew } from '@/features/whale-official/footer'
import {
  BrokeragesCards,
  BrokeragesProducts,
  BrokeragesProductsTable,
  BrokeragesQuotes,
  IBrokeragesCardsProps,
  SolutionBanner,
} from '@/features/solutions/brokerages'
import { SmallBrokeragesFeatures } from '@/features/solutions/small-brokerages'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    // @ts-ignore
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})

const SmallBrokeragesPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'

  const t = i18n.t

  const cards: IBrokeragesCardsProps['cards'] = [
    {
      label: '30%',
      title: i18n.t('pages_brokerages24'),
      desc: i18n.t('pages_brokerages26'),
    },
    {
      label: '50%',
      title: i18n.t('pages_brokerages27'),
      desc: i18n.t('pages_brokerages29'),
    },
    {
      label: '100+',
      title: i18n.t('pages_brokerages30'),
      desc: i18n.t('pages_brokerages32'),
    },
    {
      label: '60+',
      title: i18n.t('pages_brokerages33'),
      desc: i18n.t('pages_brokerages35'),
    },
    {
      label: (
        <>
          BSS <span className="text-3xl">{i18n.t('pages_locale_solutions_small_brokerages_891125')}</span>
        </>
      ),
      title: i18n.t('pages_small_brokerages35'),
      desc: i18n.t('pages_small_brokerages37'),
    },
  ]

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('brokerages.title')} description={seoI18n.t('brokerages.description')} />
      <SolutionBanner
        label={i18n.t('pages_small_brokerages0')}
        title={i18n.t('pages_brokerages1')}
        secondLineTitle={i18n.t('pages_brokerages1_1')}
        desc={i18n.t('pages_brokerages2')}
      />
      <div>
        <Box className="md:py-20">
          <>
            <div className="mb-10">
              <Title title={i18n.t('pages_small_brokerages3')} desc={i18n.t('pages_small_brokerages4')} />
            </div>
            <SmallBrokeragesFeatures />
          </>
        </Box>
        <Box className="bg-bg_color_2 md:py-20">
          <>
            <div className="mb-10">
              <Title
                label={i18n.t('pages_brokerages21')}
                title={i18n.t('pages_brokerages22')}
                desc={i18n.t('pages_brokerages23')}
              />
            </div>

            <BrokeragesCards cards={cards} className="md:grid-cols-2 lg:grid-cols-3" />
          </>
        </Box>
        <Box className="md:py-20">
          <BrokeragesProducts />
        </Box>
        <Box className="md:py-20">
          <BrokeragesProductsTable />
        </Box>
        <WhaleOfficialFooterNew />
      </div>
    </Layout>
  )
}
export default SmallBrokeragesPage
