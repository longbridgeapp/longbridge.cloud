import { useEffect } from 'react'
import { useSafeState } from 'ahooks'
import { getAppConfig } from '@/services'
import { ReportItem } from '@/features/whale-reports/types'

/**
 * 获取媒体报道
 * @returns ReportItem[]
 */
let reportsState: ReportItem[] = []
export function useReports() {
  const [reports, setReports] = useSafeState<ReportItem[]>(reportsState)

  useEffect(() => {
    if (!!reportsState.length) return
    fetchReports()
  }, [])

  const fetchReports = async () => {
    const key = 'hk-reports'
    const resp = await getAppConfig([key])
    const _reports = resp?.config?.['hk-reports']
    if (_reports) {
      setReports(_reports)
      reportsState = _reports
    }
  }

  return [reports, setReports] as const
}
