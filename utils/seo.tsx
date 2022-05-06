import { NextSeo, NextSeoProps } from "next-seo";
import React, { FC } from "react";

export const SEOMeta:FC<NextSeoProps & {url?:string}> = (props)=>{
  const { title, description, url='https://longbridge.cloud'} = props;
  const openGraph = {
    title,
    description,
    url,
    images: [
      { url: 'https://pub.lbkrs.com/files/202205/bHQKu1TbTP5prjuH/preview.png' },
    ],
    site_name: 'Longbridge Whale',
  }
  const twitter={
    handle: '@longbridgeapp',
    site: url,
    cardType: 'summary_large_image',
  }
 return (
   <NextSeo title={title} description={description} openGraph={openGraph} twitter={twitter}/>
 )
}
