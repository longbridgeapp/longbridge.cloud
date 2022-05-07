import type { AppProps } from 'next/app'
import Head from 'next/head'
import { BrowserRouter } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import { appWithTranslation } from 'next-i18next'
import '@/styles/globals.scss'
import RouteList from '@/routes'
import { isServer } from '@/utils/common'

const AppWithTranslation = appWithTranslation(({ Component, pageProps, router }: AppProps) => {
  const nextRouter = (
    <StaticRouter location={router.asPath}>
      <Component {...pageProps} />
    </StaticRouter>
  )
  const feRouter = (
    <BrowserRouter>
      <RouteList pageProps={pageProps} />
    </BrowserRouter>
  )
  return (
    <div className="app">
      <Head>
        <link rel="icon" type="image/x-icon" href="https://pub.lbkrs.com/files/202205/xAwaQmCk1cD1AUsm/favicon.png" />
      </Head>
      {/*@ts-ignore*/}
      {isServer() ? nextRouter : feRouter}
    </div>
  )
})

export default function LBApp(props: any) {
  props.router.locale = props.router.query.locale
  return <AppWithTranslation {...props} />
}
