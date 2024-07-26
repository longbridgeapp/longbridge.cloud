import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { Block, BlockHeader } from '@/components/block'
import classNames from 'classnames'
import Style from './whale-trade-terminal.module.scss'

const WhaleTradeTerminal = () => {
  const i18n = useTranslation('common')

  console.log('en', i18n.i18n.language)

  const list = useMemo(() => {
    return [
      {
        image_url: 'https://pub.pbkrs.com/files/202207/bS6wAwyj44TqQugX/1.png',
        title: i18n.t('terminal.item-1'),
        desc: i18n.t('terminal.item-2'),
      },
      {
        image_url: 'https://pub.pbkrs.com/files/202207/1Xh6KA4ZiDgS6wqh/2.png',
        title: i18n.t('terminal.item-3'),
        desc: i18n.t('terminal.item-4'),
      },
      {
        image_url: 'https://pub.pbkrs.com/files/202207/oKC2gczcinhaLLom/3.png',
        title: i18n.t('terminal.item-5'),
        desc: i18n.t('terminal.item-6'),
      },
      {
        image_url: 'https://pub.pbkrs.com/files/202207/3PzbFjF7TfVMu5nU/4.png',
        title: i18n.t('terminal.item-7'),
        desc: i18n.t('terminal.item-8'),
      },
    ]
  }, [])

  return (
    <Block className={Style.scope}>
      <BlockHeader title={i18n.t('one-stop.terminal.title')} desc={i18n.t('one-stop.terminal.desc')} />
      <div className="flex items-center mt-5">
        <ul className="justify-between md:flex md:flex-wrap ">
          {list.map(({ image_url, title, desc }) => (
            <li className="mt-8 overflow-hidden rounded-lg md:w-[48%]" key={image_url}>
              <div className="px-10 pt-8 bg-brand_color">
                <img src={image_url} alt="" />
              </div>
              <div className="h-[175px] py-8 px-10 bg-white">
                <h3 className="text-xl text-brand_color">{title}</h3>
                <p
                  className={classNames('mt-3 text-xl font-medium', {
                    'desc-en': i18n.i18n.language === 'en',
                  })}
                >
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Block>
  )
}

export default WhaleTradeTerminal
