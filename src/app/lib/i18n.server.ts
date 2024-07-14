import { createCookie } from "@remix-run/node"
import { RemixI18Next } from "remix-i18next/server"

import i18n from "./i18n"

const localeCookie = createCookie("lng", {
  path: "/",
  sameSite: "lax",
})

const i18nServer = new RemixI18Next({
  detection: {
    supportedLanguages: i18n.supportedLngs,
    fallbackLanguage: i18n.fallbackLng,
    cookie: localeCookie,
  },
  i18next: {
    ...i18n,
  },
})

export function parseLocale(request: Request) {
  return i18nServer.getLocale(request)
}

export function serializeLocale(locale: string) {
  return localeCookie.serialize(locale)
}

export function getTranslation(request: Request, namespace?: string) {
  return i18nServer.getFixedT(request, namespace)
}
