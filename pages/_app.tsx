import type { AppProps } from 'next/app'
import Head from 'next/head'
import { BrowserRouter } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import { appWithTranslation } from 'next-i18next'
import '@/styles/globals.scss'
import RouteList from '@/routes'
import Cookies from 'js-cookie'
import { useMount } from 'ahooks'
import { getSystemLanguage, getBasenameLocale, getLocaleHref, isServer } from '@/utils/common'

const AppWithTranslation = appWithTranslation(({ Component, pageProps, router }: AppProps) => {
  const nextRouter = (
    <StaticRouter location={router.asPath}>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </StaticRouter>
  )
  const feRouter = (
    <BrowserRouter>
      <RouteList pageProps={pageProps} />
    </BrowserRouter>
  )

  useMount(() => {
    const pathLocale = getBasenameLocale()
    const cookieLocale = Cookies.get('locale')
    const locale = getSystemLanguage()
    if (pathLocale) {
      return
    }
    if (!cookieLocale && locale !== 'zh-HK') {
      location.href = getLocaleHref(pathLocale, locale)
    } else if (cookieLocale && cookieLocale !== 'zh-HK') {
      location.href = getLocaleHref(pathLocale, cookieLocale)
    }
  })
  useMount(() => {
    const bindEventListener = function (type: string) {
      const historyEvent = (history as any)[type]
      return function(this: any) {
        const e: any = new Event(type)
        // eslint-disable-next-line prefer-rest-params
        e.arguments = arguments
        window.dispatchEvent(e)
        // eslint-disable-next-line prefer-rest-params
        const newEvent = historyEvent.apply(this, arguments)
        return newEvent
      }
    }
    history.pushState = bindEventListener('pushState')
    history.replaceState = bindEventListener('replaceState')
    const resetTop = () => {
      window.document.scrollingElement!.scrollTop = 0
    }
    window.addEventListener('popstate', resetTop)
    window.addEventListener('pushState', resetTop)
    window.addEventListener('replaceState', resetTop)
  })

  return (
    <div className="app">
      <Head>
        <link rel="icon" type="image/x-icon" href="https://pub.lbkrs.com/files/202205/xAwaQmCk1cD1AUsm/favicon.png" />
      </Head>
      {isServer() ? nextRouter : feRouter}
    </div>
  )
})

export default function LBApp(props: any) {
  props.router.locale = props.router.query.locale
  return <AppWithTranslation {...props} />
}
