import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return <div className='app'>
    <Head>
      <link rel="icon" type="image/x-icon" href="https://pub.lbkrs.com/files/202205/xAwaQmCk1cD1AUsm/favicon.png"/>
    </Head>
    <Component {...pageProps} />
  </div>
}

export default App
