import React from "react";
import { SEOMeta } from "../../utils/seo";
import { i18nPaths } from "../../utils/i18n-paths";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../next-i18next.config";

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
  return (
    <div>
      <SEOMeta
        title="About - Longbridge Whale"
        description="Longbridge Whale description about"
      />
      AboutPage
    </div>
  );
};
export default AboutPage;
