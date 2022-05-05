const localeRegex = /^\/(zh-HK|zh-CN|en)?\/?.*?/

export default {
  name: 'localePathDetector',

  /*
   * https://longbridgeapp.com/en/profiles/:id
   * pathname: -> /en/profiles/:id
   * localeRegex matched -> ['/en/profiles/:id','en']
   * */
  lookup(options) {
    const pathname = window.location.pathname
    const matchedLocale = pathname.match(localeRegex)
    if (!matchedLocale) return
    return matchedLocale[1]
  },
}
