import { useEffect } from 'react'
import { useSafeState } from 'ahooks'
import { getAppConfig } from '@/services'
// @ts-ignore
import get from 'lodash/get'

/**
 * 获取媒体报道
 * @returns ReportItem[]
 */
interface LocaleItem {
  'zh-CN': string
  'zh-HK': string
  'en': string
}
export interface JobItem {
  site: string
  city: string
  goodImpression: string
  id: string
  jobRequirements: string | LocaleItem
  jobResponsibility: string | LocaleItem
  title: string | LocaleItem
}
export interface CityItem {
  address: string
  key: string
  name: string
}
let jobsState: JobItem[] = []
const filterSite = 'whale'
const DefaultEmail = 'recruit@longbridge.sg'
export function useJobs() {
  const [jobs, setJobs] = useSafeState<JobItem[]>(jobsState)
  const [cities, setCities] = useSafeState<CityItem[]>([])
  const [email, setEmail] = useSafeState<string>(DefaultEmail)

  useEffect(() => {
    if (!!jobsState.length) return
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    const key = 'jobs'
    const resp = await getAppConfig([key])
    const _jobConfig = resp?.config?.[key]
    if (_jobConfig) {
      const whaleJobs = get(_jobConfig, 'jobs', []).filter((job: JobItem) => job.site === filterSite)
      setCities(get(_jobConfig, 'cities', []))
      setEmail(get(_jobConfig, `emails.${filterSite}`, DefaultEmail))
      setJobs(whaleJobs)
      jobsState = whaleJobs
    }
  }

  return [jobs, cities, email, setJobs] as const
}
