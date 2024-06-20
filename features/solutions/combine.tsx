import DotList from '@/components/dot-list'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../common/title'
import classNames from 'classnames'
import { LocaleLink } from '@/components/locale-link'

export type ICombineProps = {
  className?: string
  list: ReactNode[]
}

export const Combine = ({ list, className }: ICombineProps) => {
  const i18n = useTranslation('common')

  return (
    <div className={className}>
      <Title title={i18n.t('pages_brokerages52')} />
      <DotList
        list={list}
        cols={{
          lg: 4,
          sm: 2,
          xs: 1,
        }}
      />
    </div>
  )
}
export type IProductsTableProps = {
  className?: string
  products?: {
    label: string
    list: {
      title: ReactNode
      link: string
    }[]
  }[]
}
export const ProductsTable = ({ products: propsProducts, className }: IProductsTableProps) => {
  const i18n = useTranslation('common')
  const products = propsProducts || [
    {
      label: i18n.t('footer_table_1'),
      list: [
        {
          title: i18n.t('pages_virtual_assets34'),
          link: '/solutions/app-plus',
        },
        {
          title: i18n.t('pages_virtual_assets35'),
          link: '/solutions/securities-market',
        },
        {
          title: i18n.t('pages_virtual_assets36'),
          link: '',
        },
        {
          title: i18n.t('pages_virtual_assets37'),
          link: '/solutions/us-stock',
        },
        {
          title: i18n.t('pages_virtual_assets38'),
          link: '/solutions/virtual-assets',
        },
      ],
    },
    {
      label: i18n.t('pages_brokerages64'),
      list: [
        {
          title: i18n.t('pages_brokerages65'),
          link: '/front-desk',
        },
        {
          title: i18n.t('pages_brokerages66'),
          link: '/backoffice',
        },
        {
          title: i18n.t('pages_brokerages67'),
          link: '/longport',
        },
        {
          title: 'PortAI',
          link: '/portai',
        },
        {
          title: i18n.t('pages_brokerages69'),
          link: '/delivery-system',
        },
        {
          title: i18n.t('pages_brokerages70'),
          link: '/marketing',
        },
        {
          title: i18n.t('pages_brokerages71'),
          link: '/retail',
        },
        {
          title: i18n.t('pages_brokerages72'),
          link: '/account',
        },
      ],
    },
  ]

  return (
    <div>
      <Title title={i18n.t('pages_brokerages52')} />
      <div className="grid grid-cols-[auto_1fr] text-base gap-x-4 sm:gap-x-8 gap-y-8 lg:gap-x-[110px]">
        {products.map((product, index) => {
          return (
            <>
              <div className="font-medium">{product.label}:</div>
              <div
                className={classNames(
                  'relative flex-1 grid md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-x-4 gap-y-6',
                  {
                    'pb-8': index < products.length - 1,
                  }
                )}
              >
                {product.list.map((item, index) => {
                  return (
                    <LocaleLink to={item.link} key={index} className="flex">
                      <div className="w-1.5 h-1.5 bg-brand_color mr-4 mt-[9px]"></div>
                      <div className="w-0 flex-1">{item.title}</div>
                    </LocaleLink>
                  )
                })}
                {index < products.length - 1 && (
                  <div className="absolute h-px bg-border_color left-0 bottom-0 w-full"></div>
                )}
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
