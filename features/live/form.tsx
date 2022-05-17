import { FC, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'next-i18next'
import styles from './form.module.scss'
import Button from '@/components/button'
import { useRequest } from 'ahooks'
import { report } from '@/services'
import { useLive } from '@/hooks/use-live'
import { isServer } from '@/utils/common'

function useFormItems(started: boolean) {
  const i18n = useTranslation('common')
  const items = [
    {
      label: i18n.t('live_form_005'),
      placeholder: i18n.t('live_form_006'),
      key: 'name',
      value: '',
      type: 'text',
      required: true,
    },
    {
      label: i18n.t('live_form_007'),
      placeholder: i18n.t('live_form_008'),
      key: 'institution',
      value: '',
      type: 'text',
      required: true,
    },
    {
      label: i18n.t('live_form_009'),
      placeholder: i18n.t('live_form_010'),
      key: 'email',
      value: '',
      type: 'text',
      required: true,
    },
  ]
  if (started) {
    items.push({
      label: i18n.t('live_form_012'),
      placeholder: i18n.t('live_form_013'),
      key: 'messages',
      value: '',
      type: 'text',
      required: false,
    })
  }
  const [formItems, setFormItems] = useState(items)

  const update = (key: string, value: any) => {
    const newItems = formItems.map(item => {
      if (item.key === key) {
        item.value = value
      }
      return item
    })
    setFormItems(newItems)
  }
  const formValue = useMemo(() => {
    const val = {
      name: '',
      email: '',
      institution: '',
      messages: '',
    }
    formItems.forEach(({ key, value }) => {
      ;(val as any)[key] = value
    }, {} as any)
    return val
  }, [formItems])
  useEffect(() => {
    setFormItems(items)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started])

  return [formItems, update, formValue] as const
}
export const LiveForm: FC = () => {
  const i18n = useTranslation('common')
  const { succeed, setSucceed, started, startedSucceed, setStartedSucceed } = useLive()
  const [formItems, update, formValue] = useFormItems(started)
  const isValid = useMemo(() => {
    return formItems.filter(item => item.required === true).every(item => item.value)
  }, [formItems])
  const disabled = !isValid || (!started && succeed) || (started && startedSucceed)
  const { run, loading } = useRequest(
    async () => {
      if (disabled) {
        return
      }
      // 这里认为成功即可
      await report(formValue, started)
      formItems.forEach(({ key }) => {
        update(key, '')
      })
      if (!started) {
        setSucceed(true)
      } else {
        setStartedSucceed(true)
      }
    },
    {
      manual: true,
    }
  )
  if (isServer()) {
    return null
  }
  return (
    <form className={styles.form}>
      <div>
        <div className="header">
          <h3 className="text-xl font-bold">{started ? i18n.t('live_form_011') : i18n.t('live_form_001')}</h3>
        </div>
        <div className="mt-6">
          {formItems.map(item => {
            const id = `form-${item.key}`
            return (
              <div key={item.key} className="form-item">
                <label htmlFor={id}>{item.label}{item.required && '*'}</label>
                <input
                  value={item.value}
                  onChange={e => update(item.key, e.target.value)}
                  type={item.type}
                  id={id}
                  placeholder={item.placeholder}
                />
              </div>
            )
          })}
        </div>
      </div>

      <Button loading={loading} onClick={run} disabled={disabled} size="medium" className="w-full">
        {!started ? (succeed ? i18n.t('live_form_003') : i18n.t('live_form_004')) : i18n.t('live_form_004')}
      </Button>
    </form>
  )
}
