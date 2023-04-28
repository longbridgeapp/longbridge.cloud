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
  if (isServer()) {
    return ''
  }
  const invalidLocaleRegexResult = path || window.location.pathname.match(/^\/(zh-CN|en|zh-HK)\/?/)
  return invalidLocaleRegexResult?.[1] || ''
}
export function getSystemLanguage() {
  const lang = navigator.language

  switch (lang) {
    case 'zh-TW':
    case 'zh':
      return 'zh-HK'
    case 'en':
    case 'zh-CN':
    case 'zh-HK':
      return lang
    default:
      return 'zh-HK'
  }
}

export function getLocaleHref(pathLocale: string, locale: string) {
  let pathname = location.pathname
  if (pathLocale) {
    pathname = pathname.replace(`/${pathLocale}`, `/${locale}`)
  } else {
    pathname = `/${locale}${pathname}`
  }
  const url = new URL(location.href)
  url.pathname = pathname
  return url.toString()
}
/** 填充最多 2 个 0 */
export function fillZero(val: string | number) {
  if (val.toString().length >= 2) {
    return val
  }
  return `0${val}`
}
