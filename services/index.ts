const host = 'https://m.longbridge.xyz/api/forward' || 'https://m.lbkrs.com/api/forward';

type IResponse<T> = Promise<{
  code: number
  data: T
  message: string
}>
/**
 * 报名
 */
 export const report = async ({ email, name, institution, messages } : {
  email: string
  name: string
  institution: string
  messages: string
 }, started: boolean) => {
  const resp = await fetch(`${host}/support/feedback/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*',
    },
    body: JSON.stringify({
      content: `
        姓名: ${name};
        邮箱: ${email};
        公司或机构: ${institution};
        其它信息：${messages}
      `,
      sub_type: started ? 'whale_report_started' : 'whale_report',
    })
  })
  if (resp.ok) {
    return resp.json()
  }
  return Promise.reject(resp.statusText)
}
export enum LIVE_STATUS {
  booking = 1,
  online = 2,
  ended = 3
}
export type ILiveInfo = {
  m3u8_live_url: string
  /** 秒数 */
  started_at: string | number
  status: LIVE_STATUS
}
/**
 * 获取直播信息
 */
 export const getLiveInfo = async (id: string = '14735'): IResponse<{
   live: ILiveInfo
 }> => {
  const resp = await fetch(`${host}/lives/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*',
    }
  })
  if (resp.ok) {
    return resp.json()
  }
  return Promise.reject(resp.statusText)
}