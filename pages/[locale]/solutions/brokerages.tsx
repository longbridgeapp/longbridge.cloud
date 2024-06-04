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
  BrokeragesTabs,
  IBrokeragesCardsProps,
  SolutionBanner,
} from '@/features/solutions/brokerages'

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

const BrokeragesPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'

  const t = i18n.t
  const cards: IBrokeragesCardsProps['cards'] = [
    {
      label: '30%',
      title: i18n.t('pages_brokerages24'),
      desc: i18n.t('pages_brokerages26'),
      icon: 'https://assets.lbkrs.com/uploads/9d4ae70b-785c-4f3d-a13d-12da76647b65/card_icon_1.png',
    },
    {
      label: '50%',
      title: i18n.t('pages_brokerages27'),
      desc: i18n.t('pages_brokerages29'),
      icon: 'https://assets.lbkrs.com/uploads/45edcb2d-436a-48e7-abbe-c46bfdcf4976/card_icon_2.png',
    },
    {
      label: '100+',
      title: i18n.t('pages_brokerages30'),
      desc: i18n.t('pages_brokerages32'),
      icon: 'https://assets.lbkrs.com/uploads/cbb946d4-6a40-4034-a5a7-099109d48cc7/card_icon_3.png',
    },
    {
      label: '60+',
      title: i18n.t('pages_brokerages33'),
      desc: i18n.t('pages_brokerages35'),
      icon: 'https://assets.lbkrs.com/uploads/aaf9664b-b81d-4867-a90a-95a6ce2ddd2e/card_icon_4.png',
    },
  ]

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('brokerages.title')} description={seoI18n.t('brokerages.description')} />
      <SolutionBanner
        label={
          <>
            <span>Whale </span>
            <span>{i18n.t('pages_brokerages0')}</span>
          </>
        }
        title={i18n.t('pages_brokerages1')}
        secondLineTitle={i18n.t('pages_brokerages1_1')}
        desc={i18n.t('pages_brokerages2')}
      />
      <div>
        <Box className="md:py-20">
          <BrokeragesTabs />
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

            <BrokeragesCards cards={cards} className="lg:grid-cols-2" />
          </>
        </Box>
        <Box className="md:py-20">
          <BrokeragesProducts />
        </Box>
        <Box className="md:py-20 bg-brand_color">
          <BrokeragesQuotes />
        </Box>
        <Box className="md:py-20">
          <BrokeragesProductsTable />
        </Box>
        <WhaleOfficialFooterNew />
      </div>
    </Layout>
  )
}
export default BrokeragesPage
