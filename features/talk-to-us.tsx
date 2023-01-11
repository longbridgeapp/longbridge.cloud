import React, { useState, createElement, useMemo, useCallback, CSSProperties } from 'react'
import Button from '@/components/button'
import { useTranslation } from 'next-i18next'
import { FullMask } from '@/components/popup'
import { useRequest } from 'ahooks'
import { feedback } from '@/services'
import classNames from 'classnames'
import Icon from '@/components/icon'
import { toast } from 'react-toastify'
import styles from './talk-to-us.module.scss'

function useFormItems() {
  const i18n = useTranslation('common')
  const items = [
    {
      label: i18n.t('feedback.name'),
      placeholder: i18n.t('feedback.name-placeholder'),
      key: 'name',
      value: '',
      type: 'text',
      error: false,
      required: true,
    },
    {
      label: i18n.t('feedback.institution'),
      placeholder: i18n.t('feedback.institution-placeholder'),
      key: 'institution',
      value: '',
      error: false,
      type: 'text',
      required: true,
    },
    {
      label: i18n.t('feedback.email'),
      placeholder: i18n.t('feedback.email-placeholder'),
      key: 'email',
      error: false,
      value: '',
      type: 'text',
      rule: (val: string) => {
        return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val)
      },
      required: true,
    },
    {
      label: i18n.t('feedback.other'),
      placeholder: i18n.t('feedback.other-placeholder'),
      key: 'other',
      error: false,
      value: '',
      type: 'text',
      required: false,
    },
  ]

  const [formItems, setFormItems] = useState(items)

  const update = (key: string, value: any) => {
    const newItems = formItems.map(item => {
      if (item.key === key) {
        item.value = value
        if ((item.required && !item.value) || (item.rule && !item.rule(value))) {
          item.error = true
        } else {
          item.error = false
        }
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

  return [formItems, update, formValue] as const
}
const TalkToUsForm = ({ onClose }: { onClose: () => void }) => {
  const i18n = useTranslation('common')
  const [formItems, update, formValue] = useFormItems()

  const isValid = useMemo(() => {
    const required = formItems.filter(item => item.required === true).every(item => item.value)
    const rule = formItems.filter(item => item.rule).every(item => item.rule?.(item.value))
    return required && rule
  }, [formItems])

  const disabled = !isValid

  const { run, loading } = useRequest(
    async () => {
      if (disabled) {
        return
      }
      // 这里认为成功即可
      const resp = await feedback(formValue)
      console.log('resp', resp)
      if (resp?.ok) {
        formItems.forEach(({ key }) => {
          update(key, '')
        })
        toast(i18n.t('send-success'), {
          type: 'success',
        })
        onClose()
      } else {
        toast(i18n.t('send-error'), {
          type: 'error',
        })
      }
    },
    {
      manual: true,
    }
  )

  return (
    <form className={styles.form}>
      <div>
        <div className="flex justify-between">
          <h3 className="w-2/3 text-xl font-bold">{i18n.t('feedback.title')}</h3>
          <div>
            <Icon type="close" className="cursor-pointer hover:text-brand_color" onClick={onClose}></Icon>
          </div>
        </div>
        <div className="mt-6 text-left">
          {formItems.map(item => {
            const id = `form-${item.key}`
            return (
              <div
                key={item.key}
                className={classNames('form-item', {
                  'is-error': item.error,
                })}
              >
                <label htmlFor={id}>
                  {item.label}
                  {item.required && '*'}
                </label>
                {createElement(item.type === 'textarea' ? 'textarea' : 'input', {
                  value: item.value,
                  onChange: (e: any) => update(item.key, e.target.value),
                  type: item.type,
                  id,
                  rows: 5,
                  placeholder: item.placeholder,
                })}
              </div>
            )
          })}
        </div>
        {/* <p className="mb-4 text-sm text-text_color_2">{i18n.t(' 星号 (*) 的栏位为必填')}</p> */}
        <p className="mb-4 text-sm text-text_color_2">Email: cs@Longbridge.cloud</p>
      </div>
      <Button loading={loading} onClick={run} disabled={disabled} size="medium" className="w-full text-sm">
        {i18n.t('live_form_004')}
      </Button>
    </form>
  )
}

export const TalkToUs = ({ className, style }: { className?: string; style?: CSSProperties }) => {
  const i18n = useTranslation('common')
  const [visible, setVisible] = useState(false)

  const onClose = useCallback(() => {
    setVisible(false)
  }, [])
  const onOpen = useCallback(() => {
    setVisible(true)
  }, [])

  return (
    <>
      {visible && (
        <FullMask>
          <TalkToUsForm onClose={onClose} />
        </FullMask>
      )}
      <Button size="medium" className={classNames('mt-10', className)} style={style} onClick={onOpen}>
        {i18n.t('talk-to-us')}
      </Button>
    </>
  )
}
