import React from 'react'
import { render } from 'react-dom'
import { I18nextProvider, useTranslation } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { useMount } from 'ahooks'
import AppRouter from './routes'
import i18nConfig from './locales'

// 在最外面获取当前 path 上的语言信息，以方便 React Router 进行挂载。
function getBasenameLocale() {
  const invalidLocaleRegexResult = window.location.pathname.match(/^\/(zh-CN|en|zh-HK)$\/?/)
  return invalidLocaleRegexResult?.[1]
}


function LBApp() {
  const { i18n } = useTranslation()
  const localeFormPath = getBasenameLocale()

  useMount(async () => {
    // 如果从 path 中获取到语言，第一优先切换
    if (localeFormPath) {
      await i18n.changeLanguage(localeFormPath, () => console.log('-21', i18n.language))
      if (localeFormPath === i18n.options.lng) return (window.location.href = '/')
    }
  })

  return (
    <I18nextProvider i18n={i18nConfig}>
      <BrowserRouter basename={localeFormPath || '/'}>
        <AppRouter />
      </BrowserRouter>
    </I18nextProvider>
  )
}

render(<LBApp />, document.getElementById('root'))
