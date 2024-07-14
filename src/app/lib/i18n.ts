import { useRouteLoaderData } from "@remix-run/react"
import type { loader as rootLoader } from "~/root"

export function useLocale() {
  let rootLoaderData = useRouteLoaderData<typeof rootLoader>("root")
  return rootLoaderData?.locale ?? "en"
}

import common_en from "~/locales/en"
import sky_lite_en from "~/locales/sky-lite/en"
import about_en from "~/locales/about/en"

import common_zh_hans from "~/locales/zh-hans"
import sky_lite_zh_hans from "~/locales/sky-lite/zh-hans"
import about_zh_hans from "~/locales/about/zh-hans"

import common_zh_hant from "~/locales/zh-hant"
import sky_lite_zh_hant from "~/locales/sky-lite/zh-hant"
import about_zh_hant from "~/locales/about/zh-hant"

const lng_en = {
  common: common_en,
  "sky-lite": sky_lite_en,
  about: about_en,
}

const lng_zh_hans = {
  common: common_zh_hans,
  "sky-lite": sky_lite_zh_hans,
  about: about_zh_hans,
}

const lng_zh_hant = {
  common: common_zh_hant,
  "sky-lite": sky_lite_zh_hant,
  about: about_zh_hant,
}

export default {
  supportedLngs: ["en", "zh", "zh-CN", "zh-HK", "zh-MO", "zh-SG", "zh-TW"],
  fallbackLng: "en",
  defaultNS: "common",
  resources: {
    en: lng_en,
    zh: lng_zh_hans,
    "zh-CN": lng_zh_hans,
    "zh-HK": lng_zh_hant,
    "zh-MO": lng_zh_hant,
    "zh-SG": lng_zh_hant,
    "zh-TW": lng_zh_hant,
  },
}
