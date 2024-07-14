import { json, type LoaderFunctionArgs } from "@remix-run/node"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import cx from "clsx"

import { removeTrailingSlashes } from "~/lib/http.server"
import { parseColorScheme } from "~/lib/color-scheme.server"
import { parseLocale, serializeLocale } from "~/lib/i18n.server"

import {
  useForceDark,
  useColorScheme,
  ColorSchemeScript,
} from "~/lib/color-scheme"
import { useLocale } from "~/lib/i18n"

import { GlobalLoading } from "~/ui/global-loading"

import "~/styles/tailwind.css"
import "~/styles/bailwind.css"

export function links() {
  const preloadedFonts = [
    "inter-roman-latin-var.woff2",
    "inter-italic-latin-var.woff2",
    "source-code-pro-roman-var.woff2",
    "source-code-pro-italic-var.woff2",
  ]
  return [
    { rel: "icon", href: "/favicon-32.png", sizes: "32x32" },
    { rel: "icon", href: "/favicon-128.png", sizes: "128x128" },
    { rel: "icon", href: "/favicon-180.png", sizes: "180x180" },
    { rel: "icon", href: "/favicon-192.png", sizes: "192x192" },
    { rel: "apple-touch-icon", href: "/favicon-180.png", sizes: "180x180" },
    ...preloadedFonts.map((font) => ({
      rel: "preload",
      as: "font",
      href: `/fonts/${font}`,
      crossOrigin: "anonymous",
    })),
  ]
}

export async function loader({ request }: LoaderFunctionArgs) {
  removeTrailingSlashes(request)

  const colorScheme = await parseColorScheme(request)
  const locale = await parseLocale(request)

  return json(
    {
      colorScheme,
      locale,
    },
    {
      headers: {
        "Set-Cookie": await serializeLocale(locale),
        Vary: "Cookie",
      },
    },
  )
}

export default function App() {
  const locale = useLocale()
  const forceDark = useForceDark()
  const colorScheme = useColorScheme()
  const zh = locale === "zh" || locale.startsWith("zh-")
  return (
    <html
      lang={locale}
      className={cx({
        dark: forceDark || colorScheme === "dark",
      })}
      data-theme={forceDark ? "dark" : colorScheme}
    >
      <head>
        {!forceDark && <ColorSchemeScript />}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <Links />
        <Meta />
      </head>

      <body
        className={cx(
          "antialiased",
          zh ? "font-['LXGW_WenKai_Regular']" : "",
          "flex min-h-screen w-full flex-col overflow-x-hidden",
          "selection:bg-blue-200 selection:text-black",
          "dark:selection:bg-blue-800 dark:selection:text-white",
          forceDark
            ? "bg-gray-900 text-gray-200"
            : "bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200",
        )}
      >
        <GlobalLoading />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
