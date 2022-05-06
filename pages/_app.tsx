import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

const AppWithTranslation = appWithTranslation(
  ({ Component, pageProps }: AppProps) => {
    return (
      <div className="app">
        <Head>
          <link
            rel="icon"
            type="image/x-icon"
            href="https://pub.lbkrs.com/files/202205/xAwaQmCk1cD1AUsm/favicon.png"
          />
        </Head>
        {/*@ts-ignore*/}
        <Component {...pageProps} />
      </div>
    );
  }
);

export default function LBApp(props: any) {
  props.router.locale = props.router.query.locale;
  return <AppWithTranslation {...props} />;
}
