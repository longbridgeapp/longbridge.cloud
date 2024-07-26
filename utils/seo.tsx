import { NextSeo, NextSeoProps } from 'next-seo'
import React, { FC } from 'react'

export const SEOMeta: FC<NextSeoProps & { url?: string; indexTitle?: boolean }> = props => {
  const { title: rawTitle, description, url = 'https://longbridge.cloud', indexTitle } = props
  const title = indexTitle ? rawTitle : `${rawTitle} - Longbridge Whale`
  const openGraph = {
    title,
    description,
    url,
    images: [
      {
        url: 'https://pub.pbkrs.com/files/202205/bHQKu1TbTP5prjuH/preview.png',
      },
    ],
    site_name: 'Longbridge Whale',
  }
  const twitter = {
    handle: '@longbridgeapp',
    site: url,
    cardType: 'summary_large_image',
  }
  return <NextSeo title={title} description={description} openGraph={openGraph} twitter={twitter} />
}
