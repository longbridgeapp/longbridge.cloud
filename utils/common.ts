export const isServer = () => {
  return typeof window === 'undefined'
}

export function getPurePath(path: string) {
  // 移除 locale 返回纯路径
  return path.replace(/^\/(en|zh-CN|zh-HK)/, '') || '/'
}
export function getRootDomain(hostname: string) {
  const siteArr = hostname.split('.')
  // 取最后两个
  const rootDomain = siteArr.slice(-2).join('.')

  return rootDomain
}
// 在最外面获取当前 path 上的语言信息
export function getBasenameLocale(path?: string) {
  const invalidLocaleRegexResult = path || window.location.pathname.match(/^\/(zh-CN|en|zh-HK)\/?/)
  return invalidLocaleRegexResult?.[1]
}