import { Fragment } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import IndexPage from '@/pages/[locale]/index'
import MarketPage from '@/pages/[locale]/market'
import BssPage from '@/pages/[locale]/bss'
import CrmPage from '@/pages/[locale]/crm'
import TradingPage from '@/pages/[locale]/trading'
// import SolutionsPage from '@/pages/[locale]/solutions'
import AboutPage from '@/pages/[locale]/about'
// import AppSolutionPage from '@/pages/[locale]/solutions/app'
import LivePage from '@/pages/[locale]/live'
import IntroducingBroker from '@/pages/[locale]/solutions/introducing-broker'
import Longport from '@/pages/[locale]/solutions/longport'
import WhiteLabel from '@/pages/[locale]/solutions/white-label'
import WhaleReports from '@/pages/[locale]/whale-reports'

export const RouteList = ({ pageProps }: { pageProps: any }) => {
  return (
    <Routes>
      {['', 'zh-CN', 'en', 'zh-HK'].map((locale: string, index) => {
        return (
          <Fragment key={`${locale}${index}`}>
            <Route path={`/${locale}`} element={<Outlet />}>
              <Route index element={<IndexPage {...pageProps} />} />
              <Route path="market" element={<MarketPage {...pageProps} />} />
              <Route path="bss" element={<BssPage {...pageProps} />} />
              <Route path="trading" element={<TradingPage {...pageProps} />} />
              <Route path="crm" element={<CrmPage {...pageProps} />} />
              {/* <Route path="solutions" element={<SolutionsPage {...pageProps} />} /> */}
              {/* <Route path="solutions/app" element={<AppSolutionPage {...pageProps} />} /> */}
              <Route path="solutions" element={<IntroducingBroker {...pageProps} />} />
              <Route path="solutions/introducing-broker" element={<IntroducingBroker {...pageProps} />} />
              <Route path="solutions/longport" element={<Longport {...pageProps} />} />
              <Route path="solutions/white-label" element={<WhiteLabel {...pageProps} />} />
              <Route path="about" element={<AboutPage {...pageProps} />} />
              <Route path="live" element={<LivePage {...pageProps} />} />
              <Route path="whale-reports" element={<WhaleReports {...pageProps} />} />
            </Route>
          </Fragment>
        )
      })}
    </Routes>
  )
}

export default RouteList
