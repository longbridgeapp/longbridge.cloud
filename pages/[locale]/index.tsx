import React from "react";
import { NextSeo } from "next-seo";
import { i18nPaths } from "../../utils/i18n-paths";
import { LocalPath } from "../../utils/local-path";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../next-i18next.config";
import { useTranslation } from "next-i18next";
import { SEOMeta } from "../../utils/seo";

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
      <SEOMeta title={"default"} description="Longbridge Whale description" />
      <LocalPath href="/about">about</LocalPath>
    </div>
  );
};
export default IndexPage;
