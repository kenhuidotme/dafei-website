import { startTransition } from "react"
import { hydrateRoot } from "react-dom/client"
import { RemixBrowser } from "@remix-run/react"

import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import { initReactI18next, I18nextProvider } from "react-i18next"
import { getInitialNamespaces } from "remix-i18next/client"

import * as i18n from "./i18n"

async function main() {
  await i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      ...i18n,
      // This function detects the namespaces your routes rendered while SSR use
      ns: getInitialNamespaces(),
      detection: {
        // Here only enable htmlTag detection, we'll detect the language only
        // server-side with remix-i18next, by using the `<html lang>` attribute
        // we can communicate to the client the language detected server-side
        order: ["htmlTag"],
        // Because we only use htmlTag, there's no reason to cache the language
        // on the browser, so we disable it
        caches: [],
      },
    })

  startTransition(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18next}>
        <RemixBrowser />
      </I18nextProvider>
    )
  })
}

main().catch((error) => console.error(error))
