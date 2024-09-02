import { JobItem, CityItem } from '@/hooks/use-jobs'
import React from 'react'
import get from 'lodash/get'
import { useTranslation } from 'next-i18next'
import { FullMask } from '@/components/popup'
import Icon from '@/components/icon'
import style from './index.module.scss'
import { Modal } from 'antd'

interface JobProps {
  jobs: JobItem[]
  cities: CityItem[]
}
const JobList: React.FC<JobProps> = props => {
  const i18n = useTranslation('common')
  const language = i18n.i18n?.language
  const { jobs, cities } = props
  const [visible, setVisible] = React.useState(false)
  const [detailJob, setDetailJob] = React.useState()

  const getLocation = (_cities: string) => {
    const city = _cities
      .split(',')
      .map(city => {
        const cityItem = cities.find(c => c.key === city)
        return get(cityItem, `address.${language}`, get(cityItem, 'address'))
      })
      .filter(Boolean)

    console.log('🚀 ~ getLocation ~ city:', city)
    return city.join(' ')
  }

  const handleJob = job => {
    setDetailJob(job)
    setVisible(true)
  }
  return (
    <section className="job-list">
      {jobs.map(job => {
        return (
          <div
            className="px-4 py-5 -mx-4 rounded-lg cursor-pointer job-item hover:bg-bg_color_2"
            key={job.id}
            onClick={() => handleJob(job)}
          >
            <div className="text-xl font-medium title text-text-color-1">
              {get(job, `title.${language}`, get(job, 'title'))}
            </div>
            <div className="my-2 text-base font-medium location text-text-color-1">
              {getLocation(get(job, 'cities'))}
            </div>
            <div className="text-sm font-normal whitespace-pre-wrap brief text-text_color_1_supplement line-clamp-2">
              {get(job, `jobResponsibility.${language}`, get(job, 'jobResponsibility'))}
            </div>
          </div>
        )
      })}
      {visible && (
        <Modal
          centered
          width={560}
          open={true}
          footer={null}
          closable={false}
          maskClosable
          onCancel={() => setVisible(false)}
          getContainer={'#__next'}
          bodyStyle={{ padding: 0 }}
          className={style['job-detail-modal']}
          maskStyle={{ backgroundColor: 'rgba(0,0,0,.5)' }}
        >
          <div className="relative p-5 pt-0 rounded-xl">
            <Icon
              type="close"
              className="absolute right-4 top-3 cursor-pointer text-[26px] text-[#ccc] hover:text-text-color-1"
              onClick={() => setVisible(false)}
            ></Icon>
            <div className="pt-3 pb-4 title">
              <div className="text-xl font-medium title text-text-color-1">
                {get(detailJob, `title.${language}`, get(detailJob, 'title'))}
              </div>
            </div>
            <div className="max-h-[60vh] overflow-auto job-detail">
              <div>
                <div className="mb-5 requirement">
                  <div className="mb-4 text-lg font-medium text-text_color_1">Job Requirements</div>
                  <div className="text-sm font-normal leading-6 whitespace-pre-line text-text_color_1_supplement">
                    {get(detailJob, `jobRequirements.${language}`, get(detailJob, 'jobRequirements'))}
                  </div>
                </div>
                <div className="mb-5 responsibility">
                  <div className="mb-4 text-lg font-medium text-text_color_1">Job Responsibilities</div>
                  <div className="text-sm font-normal leading-6 whitespace-pre-line text-text_color_1_supplement">
                    {get(detailJob, `jobResponsibility.${language}`, get(detailJob, 'jobResponsibility'))}
                  </div>
                </div>
                <div className="location">
                  <div className="mb-4 text-lg font-medium text-text_color_1">Work Location</div>
                  <div className="my-2 text-base font-medium location text-text-color-1">
                    {getLocation(get(detailJob, 'cities'))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}

export default JobList
