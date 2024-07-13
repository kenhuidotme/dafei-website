import {
  json,
  type LinksFunction,
  type LoaderFunctionArgs,
} from "@remix-run/node"

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
  useRouteLoaderData,
} from "@remix-run/react"

import { useChangeLanguage } from "remix-i18next/react"
import { i18nServer, localeCookie } from "./i18n.server"

import rootStyleHref from "./root.css?url"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: rootStyleHref },
]

export const handle = { i18n: ["common"] }

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = await i18nServer.getLocale(request)
  return json(
    { locale },
    { headers: { "Set-Cookie": await localeCookie.serialize(locale) } }
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useRouteLoaderData<typeof loader>("root")
  return (
    <html lang={loaderData?.locale ?? "en"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  const { locale } = useLoaderData<typeof loader>()
  useChangeLanguage(locale)
  return <Outlet />
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    )
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    )
  } else {
    return <h1>Unknown Error</h1>
  }
}
