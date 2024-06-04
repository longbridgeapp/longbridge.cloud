import DotList from '@/components/dot-list'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../common/title'

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
