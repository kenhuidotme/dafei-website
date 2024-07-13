// common
import en from "./locales/en"
import zh_CN from "./locales/zh-CN"
import zh_HK from "./locales/zh-HK"

// dash
import dash_zh_CN from "./locales/dash/zh-CN"
import dash_zh_HK from "./locales/dash/zh-HK"

export const supportedLngs = ["en", "zh-CN", "zh-HK"]
export const fallbackLng = "zh-CN"
export const defaultNS = "common"

export const resources = {
  en: { common: en },
  "zh-CN": { common: zh_CN, dash: dash_zh_CN },
  "zh-HK": { common: zh_HK, dash: dash_zh_HK },
}
