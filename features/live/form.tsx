import { FC, useMemo, useState } from 'react'
import { useTranslation } from 'next-i18next'
import styles from './form.module.scss'
import Button from '@/components/button'
import { useRequest } from 'ahooks'
import { report } from '@/services'
import { useLive } from '@/hooks/use-live'

function useFormItems() {
  const i18n = useTranslation('common')
  const items = [
    {
      label: i18n.t('姓名'),
      placeholder: i18n.t('请输入姓名'),
      key: 'name',
      value: '',
      type: 'text',
      required: true,
    },
    {
      label: i18n.t('所在公司/结构名称'),
      placeholder: i18n.t('请输入公司/结构名称'),
      key: 'institution',
      value: '',
      type: 'text',
      required: true,
    },
    // {
    //   label: i18n.t('手机号'),
    //   placeholder: i18n.t('输入包括区号，例如 +852、+86 等完整手机号'),
    //   key: 'phone',
    //   type: 'number',
    //   value: '',
    //   required: true,
    // },
    {
      label: i18n.t('邮箱'),
      placeholder: i18n.t('请输入邮箱地址'),
      key: 'email',
      value: '',
      type: 'text',
      required: true,
    },
    // {
    //   label: i18n.t('所在地址和地区'),
    //   placeholder: i18n.t('请选择所在国家或地区'),
    //   key: 'area',
    //   value: '',
    //   type: 'text',
    //   required: true,
    // },
  ]
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
    }
    formItems.forEach(({ key, value }) => {
      ;(val as any)[key] = value
    }, {} as any)
    return val
  }, [formItems])

  return [formItems, update, formValue] as const
}
export const LiveForm: FC = () => {
  const i18n = useTranslation('common')
  const [formItems, update, formValue] = useFormItems()
  const { succeed, setSucceed } = useLive()
  const isValid = useMemo(() => {
    return formItems.every(item => item.value)
  }, [formItems])
  const { run, loading } = useRequest(
    async () => {
      if (!isValid) {
        return
      }
      // 这里认为成功即可
      await report(formValue)
      formItems.forEach(({ key }) => {
        update(key, '')
      })
      setSucceed(true)
    },
    {
      manual: true,
    }
  )

  return (
    <form className={styles.form}>
      <div>
        <div className="header">
          <h3 className="text-xl font-bold">{i18n.t('报名表')}</h3>
        </div>
        <div className="mt-6">
          {formItems.map(item => {
            const id = `form-${item.key}`
            return (
              <div key={item.key} className="form-item">
                <label htmlFor={id}>{item.label}</label>
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

      <Button loading={loading} onClick={run} disabled={!isValid || succeed} size="medium" className="w-full">
        {succeed ? i18n.t('你已成功报名') : i18n.t('提交')}
      </Button>
    </form>
  )
}
