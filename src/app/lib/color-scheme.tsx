import { useMemo } from "react"
import { useLayoutEffect } from "~/ui/utils"
import { useMatches, useNavigation, useRouteLoaderData } from "@remix-run/react"

import type { loader as rootLoader } from "~/root"

export type ColorScheme = "dark" | "light" | "system"

export function useForceDark() {
  let matches = useMatches()
  return matches.some(({ handle }) => {
    if (handle && typeof handle == "object" && "forceDark" in handle) {
      return handle.forceDark
    }
    return false
  })
}

export function useColorScheme(): ColorScheme {
  let rootLoaderData = useRouteLoaderData<typeof rootLoader>("root")
  let rootColorScheme = rootLoaderData?.colorScheme ?? "system"

  let { formData } = useNavigation()
  let optimisticColorScheme = formData?.has("colorScheme")
    ? (formData.get("colorScheme") as ColorScheme)
    : null
  return optimisticColorScheme || rootColorScheme
}

export function ColorSchemeScript() {
  let colorScheme = useColorScheme()

  // This script automatically adds the dark class to the document element if
  // colorScheme is "system" and prefers-color-scheme: dark is true.
  const script = useMemo(
    () => `
        const colorScheme = ${JSON.stringify(colorScheme)};
        if (colorScheme === "system") {
          const media = window.matchMedia("(prefers-color-scheme: dark)");
          if (media.matches) document.documentElement.classList.add("dark");
        }
      `,
    [],
  )

  // Update the document element class whenever colorScheme changes.
  useLayoutEffect(() => {
    switch (colorScheme) {
      case "light":
        document.documentElement.classList.remove("dark")
        break
      case "dark":
        document.documentElement.classList.add("dark")
        break
      case "system":
        const media = window.matchMedia("(prefers-color-scheme: dark)")
        syncColorScheme(media)
        media.addEventListener("change", syncColorScheme)
        return () => media.removeEventListener("change", syncColorScheme)
      default:
        console.error("Impossible color scheme state:", colorScheme)
    }
  }, [colorScheme])

  return <script dangerouslySetInnerHTML={{ __html: script }} />
}

function syncColorScheme(media: MediaQueryList | MediaQueryListEvent) {
  if (media.matches) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}
