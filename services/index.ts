const host = 'https://m.longbridge.xyz/api/forward' || 'https://m.lbkrs.com/api/forward';

/**
 * 报名
 */
 export const report = ({ email, name, institution } : {
  email: string
  name: string
  institution: string
 }) => {
  return fetch(`${host}/support/feedback/upload`, {
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
      `,
      sub_type: 'whale_report',
    })
  })
}