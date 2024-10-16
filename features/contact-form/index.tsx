import { Form, Tabs, Input, Button, DatePicker, TimePicker, Checkbox, message } from 'antd'
import styles from './index.module.scss'
import { useMemo, useState } from 'react'
import { useTranslation } from 'next-i18next'
// @ts-ignore
import debounce from 'lodash/debounce'
import { submitContactUsForm } from '@/services'

type IPrivacyPolicy = { [key: string]: string }

const ContactForm = () => {
  const i18n = useTranslation('common')
  const [form] = Form.useForm()
  const [isFirstForm, setIsFirstForm] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const privacyPolicy: IPrivacyPolicy = useMemo(() => {
    const privacyPolicy = {
      'en': 'https://assets.lbctrl.com/uploads/9a96ef99-760d-4fc8-9b8e-2bb5c056a0c3/privacy.pdf',
      'zh-CN': 'https://assets.lbctrl.com/uploads/515266ca-d590-4957-a705-e159db64a49d/privacy.pdf',
      'zh-HK': 'https://assets.lbctrl.com/uploads/58a78720-9a13-4ee8-a6cc-af6435bb447b/privacy.pdf',
    }
    return privacyPolicy
  }, [])

  const handleTabChange = (key: string) => {
    setIsFirstForm(key === '1')
  }

  const handleSubmit = () => {
    if (isLoading) return

    const {
      full_name,
      phone,
      email,
      company,
      job_title,
      region,
      enquiry_type,
      description,
      date,
      time,
      accept_policy,
      accept_reply,
    } = form.getFieldsValue()
    // 验证表单数据
    if (!full_name || !phone || !email || !company || !job_title || !region || !accept_policy || !accept_reply) return

    if (isFirstForm) {
      if (!enquiry_type || !description) return
    } else {
      if (!date || !time) return
    }
    // 提交表单
    setIsLoading(true)
    submitForm()
  }

  const submitForm = debounce(async () => {
    try {
      const insertData = form.getFieldsValue()
      delete insertData.accept_policy
      delete insertData.accept_reply
      if (isFirstForm) {
        delete insertData.date
        delete insertData.time
      } else {
        delete insertData.enquiry_type
        delete insertData.description
        const { date, time } = insertData
        insertData.date = date.format('YYYY-MM-DD')
        insertData.time = time.format('HH:mm')
      }
      await submitContactUsForm(insertData)

      setIsLoading(false)
      return
    } catch (err) {
      // console.log('submit form error:', err)
    }

    setIsLoading(false)
  }, 1000)

  return (
    <div className={styles['contact-form']}>
      <Tabs
        defaultActiveKey="1"
        onChange={handleTabChange}
        items={[
          {
            label: i18n.t('features_wm_contact_us_index_891164'),
            key: '1',
          },
          {
            label: i18n.t('features_wm_contact_us_index_891165'),
            key: '2',
          },
        ]}
      ></Tabs>
      <Form name="wm-form" layout="vertical" form={form}>
        <div className="form-container">
          <div className="form-row">
            <Form.Item label={i18n.t('features_wm_contact_us_index_891174')} name="full_name" className="half" required>
              <Input />
            </Form.Item>
            <Form.Item label={i18n.t('features_wm_contact_us_index_891166')} name="phone" className="half" required>
              <Input />
            </Form.Item>
          </div>
          <div className="form-row">
            <Form.Item label={i18n.t('features_wm_contact_us_index_891167')} name="email" className="half" required>
              <Input />
            </Form.Item>
            <Form.Item label={i18n.t('features_wm_contact_us_index_891175')} name="company" className="half" required>
              <Input />
            </Form.Item>
          </div>
          <div className="form-row">
            <Form.Item label={i18n.t('features_wm_contact_us_index_891168')} name="job_title" className="half" required>
              <Input />
            </Form.Item>
            <Form.Item label={i18n.t('features_wm_contact_us_index_891169')} name="region" className="half" required>
              <Input />
            </Form.Item>
          </div>
          <div className={isFirstForm ? 'block' : 'hidden'}>
            <div className="form-row">
              <Form.Item label={i18n.t('features_wm_contact_us_index_891170')} name="enquiry_type" required>
                <Input />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item label={i18n.t('features_wm_contact_us_index_891171')} name="description" required>
                <Input.TextArea autoSize={{ minRows: 4, maxRows: 5 }} />
              </Form.Item>
            </div>
          </div>
          <div className={!isFirstForm ? 'block' : 'hidden'}>
            <div className="form-row">
              <Form.Item label={i18n.t('features_contact_form_index_891176')} name="date" className="half" required>
                <DatePicker format={['YYYY-MM-DD', 'YY-MM-DD']} placeholder="" />
              </Form.Item>
              <Form.Item label={i18n.t('features_contact_form_index_891177')} name="time" className="half" required>
                <TimePicker format="HH:mm" placeholder="" />
              </Form.Item>
            </div>
          </div>
          <div className="form-row">
            <Form.Item name="accept_policy" valuePropName="checked">
              <Checkbox>
                <>
                  {i18n.t('features_wm_contact_us_index_891172_1')}
                  <a
                    className="policy-link"
                    href={privacyPolicy[i18n.i18n.language] || privacyPolicy['zh-CN']}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {i18n.t('features_wm_contact_us_index_891172_2')}
                  </a>
                  {i18n.t('features_wm_contact_us_index_891172_3')}
                </>
              </Checkbox>
            </Form.Item>
          </div>
          <div className="form-row">
            <Form.Item name="accept_reply" valuePropName="checked">
              <Checkbox>{i18n.t('features_wm_contact_us_index_891173')}</Checkbox>
            </Form.Item>
          </div>
        </div>
        <div className="form-row">
          <Form.Item className="half">
            <Button className="submit" htmlType="submit" onClick={handleSubmit} loading={isLoading}>
              {i18n.t('live_form_004')}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

export default ContactForm
