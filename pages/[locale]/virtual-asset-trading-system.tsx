import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18nextConfig from '@/next-i18next.config'
import { NextSeo } from 'next-seo'
import { i18nPaths } from '@/utils/i18n-paths'
import { useEffect, useRef } from 'react'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as any)),
  },
})

const VirtualAssetTradingSystem = () => {
  // 监听 iframe 加载完成，设置 iframe 高度
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (!iframeRef.current) return
    const iframe = iframeRef.current
    const handleIframeLoad = () => {
      const doc = iframe.contentDocument || iframe.contentWindow?.document
      const requestFullScreen =
        doc?.documentElement.requestFullscreen ||
        // @ts-ignore
        doc?.documentElement?.webkitRequestFullScreen ||
        // @ts-ignore
        doc?.documentElement?.mozRequestFullScreen ||
        // @ts-ignore
        doc?.documentElement?.msRequestFullscreen
      if (requestFullScreen) {
        requestFullScreen.call(doc.documentElement)
      }
    }
    iframe.addEventListener('load', handleIframeLoad)
    return () => {
      iframe.removeEventListener('load', handleIframeLoad)
    }
  }, [])

  return (
    <>
      <NextSeo
        title={'7x24 一站式虛擬資產 交易解決方案'}
        description={'7x24 一站式虛擬資產 交易解決方案'}
        openGraph={{
          title: 'Whale 將推出全港首個面向券商的',
          description: '7x24 一站式虛擬資產 交易解決方案',
          url: 'https://activity.lbkrs.com/pages/longbridge/1968/index.html?app_id=longbridge&org_id=1&account_channel=lb',
          images: [
            {
              url: 'https://pub.lbkrs.com/files/202305/smtJobvVG139kuLz/20230526-150057.png',
            },
          ],
        }}
        twitter={{
          handle: '@longbridgeapp',
          site: 'https://activity.lbkrs.com/pages/longbridge/1968/index.html?app_id=longbridge&org_id=1&account_channel=lb',
          cardType: 'summary_large_image',
        }}
      />
      <div className="w-full h-screen">
        <iframe
          ref={iframeRef}
          src="https://activity.lbkrs.com/pages/longbridge/1968/index.html?app_id=longbridge&org_id=1&account_channel=lb"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default VirtualAssetTradingSystem
