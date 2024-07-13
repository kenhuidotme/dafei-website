import { createCookie } from "@remix-run/node"
import { RemixI18Next } from "remix-i18next/server"
import * as i18n from "./i18n"

export const localeCookie = createCookie("lng", {
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
})

export const i18nServer = new RemixI18Next({
  detection: {
    supportedLanguages: i18n.supportedLngs,
    fallbackLanguage: i18n.fallbackLng,
    cookie: localeCookie,
  },
  i18next: {
    ...i18n,
  },
})

export async function getTranslation(request: Request, namespace?: string) {
  return await i18nServer.getFixedT(request, namespace)
}
