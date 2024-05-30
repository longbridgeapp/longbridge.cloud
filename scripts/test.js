const fs = require('fs')

const dir = './virtual_assets'
const cn = fs.readFileSync(`./texts/${dir}/cn.txt`, 'utf8')
const en = fs.readFileSync(`./texts/${dir}/en.txt`, 'utf8')
const hk = fs.readFileSync(`./texts/${dir}/hk.txt`, 'utf8')

const keyPrefix = 'virtual_assets'

function txtToJson(txt) {
  const json = {}
  txt.split('\n').forEach((line, index) => {
    if (!line) {
      return
    }
    const key = `pages_${keyPrefix}${index}`
    json[key] = line
  })
  return json
}

const jsonCn = txtToJson(cn)
const jsonEn = txtToJson(en)
const jsonHk = txtToJson(hk)

const localeJsonMap = {}
function getLocaleJson(locale) {
  const localePath = `../public/locales/${locale}/common.json`
  const localeJson = localeJsonMap[locale] || JSON.parse(fs.readFileSync(localePath, 'utf8'))
  localeJsonMap[locale] = localeJson

  return localeJson
}
function getLocaleValueExists(locale, value) {
  const localeJson = getLocaleJson(locale)
  const localeJsonValues = Object.values(localeJson)
  return localeJsonValues.find(a => a === value)
}

function writeToLocale(locale, json) {
  const localePath = `../public/locales/${locale}/common.json`
  const localeJson = getLocaleJson(locale)
  Object.keys(json).forEach(key => {
    if (getLocaleValueExists(locale, json[key])) {
      return
    }
    localeJson[key] = json[key]
  })
  fs.writeFileSync(localePath, JSON.stringify(localeJson, null, 2))
}
writeToLocale('zh-CN', jsonCn)
writeToLocale('en', jsonEn)
writeToLocale('zh-HK', jsonHk)
function writeToLocaleByCn(locale, json) {
  const localePath = `../public/locales/${locale}/common.json`
  const localeCnJson = getLocaleJson('zh-CN')
  const localeJson = getLocaleJson(locale)
  const localeCnValue = Object.keys(localeCnJson).map(key => {
    return {
      key,
      value: localeCnJson[key],
    }
  })
  Object.keys(json).forEach(key => {
    const cnValue = jsonCn[key]
    const localeKey = localeCnValue.find((v, index) => {
      return v.value === cnValue
    })?.key
    if (!localeKey) return
    localeJson[localeKey] = json[key]
  })
  fs.writeFileSync(localePath, JSON.stringify(localeJson, null, 2))
}
// writeToLocaleByCn('zh-HK', jsonHk)
