import { FC } from 'react'
import { FirstScreen, IFirstScreenProps } from '@/features/home/first-screen'
import Header from '@/features/header'
import Footer from '@/features/footer'
import Head from 'next/head'

export const PageLayout: FC<{
  screenProps: IFirstScreenProps
}> = ({ screenProps, children }) => {
  return (
    <div>
      {/* 放在这里一是因为它和 header 绑定了，二是可以后面方便控制吸顶效果 */}
      <FirstScreen {...screenProps} />
      {children}
      <Footer />
    </div>
  )
}

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <div className="relative">
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>
        {children}
        <Footer />
      </div>
    </>
  )
}
