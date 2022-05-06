import React from "react";
import { SEOMeta } from "../../utils/seo";
import { i18nPaths } from "../../utils/i18n-paths";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../next-i18next.config";
import { LocalPath } from "../../utils/local-path";
import { useTranslation } from "next-i18next";

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
});

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(
      ctx?.params?.locale,
      ["common"],
      i18nextConfig
    )),
  },
});

const AboutPage = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <SEOMeta title="About" description="Longbridge Whale description about" />
      AboutPage
      <hr />
      <LocalPath href="/">{t("appName")}</LocalPath>
    </div>
  );
};
export default AboutPage;
