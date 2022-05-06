import React from "react";
import { NextSeo } from "next-seo";
import { i18nPaths } from "../../utils/i18n-paths";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../next-i18next.config";
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
const IndexPage = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <NextSeo
        title={t("appName")}
        description="Longbridge Whale description"
      />
      {t("h1")}
    </div>
  );
};
export default IndexPage;
