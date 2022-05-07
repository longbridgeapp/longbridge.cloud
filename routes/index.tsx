import { Fragment } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import IndexPage from '@/pages/[locale]/index'
import MarketPage from '@/pages/[locale]/market'
import BssPage from '@/pages/[locale]/bss'
import CrmPage from '@/pages/[locale]/crm'
import TradingPage from '@/pages/[locale]/trading'

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
            </Route>
          </Fragment>
        )
      })}
    </Routes>
  )
}

export default RouteList
