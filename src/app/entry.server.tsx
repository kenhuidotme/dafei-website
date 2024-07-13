import { PassThrough } from "node:stream"

import {
  createReadableStreamFromReadable,
  type AppLoadContext,
  type EntryContext,
} from "@remix-run/node"

import { renderToPipeableStream } from "react-dom/server"
import { RemixServer } from "@remix-run/react"
import { isbot } from "isbot"

import i18next from "i18next"
import { initReactI18next, I18nextProvider } from "react-i18next"

import * as i18n from "./i18n"
import { i18nServer } from "./i18n.server"

const ABORT_DELAY = 5_000

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  // This is ignored so we can keep it in the template for visibility.  Feel
  // free to delete this parameter in your app if you're not using it!
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _loadContext: AppLoadContext
) {
  const lng = await i18nServer.getLocale(request)
  const ns = i18nServer.getRouteNamespaces(remixContext)

  const instance = i18next.createInstance()
  await instance.use(initReactI18next).init({
    ...i18n,
    lng,
    ns,
  })

  let callbackName = isbot(request.headers.get("user-agent"))
    ? "onAllReady"
    : "onShellReady"

  return new Promise((resolve, reject) => {
    let shellRendered = false
    const { pipe, abort } = renderToPipeableStream(
      <I18nextProvider i18n={instance}>
        <RemixServer
          context={remixContext}
          url={request.url}
          abortDelay={ABORT_DELAY}
        />
      </I18nextProvider>,
      {
        [callbackName]: () => {
          shellRendered = true
          const body = new PassThrough()
          const stream = createReadableStreamFromReadable(body)

          responseHeaders.set("Content-Type", "text/html")

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          )

          pipe(body)
        },
        onShellError(error: unknown) {
          reject(error)
        },
        onError(error: unknown) {
          responseStatusCode = 500
          // Log streaming rendering errors from inside the shell. Don't log
          // errors encountered during initial shell rendering since they'll
          // reject and get logged in handleDocumentRequest.
          if (shellRendered) {
            console.error(error)
          }
        },
      }
    )

    setTimeout(abort, ABORT_DELAY)
  })
}
