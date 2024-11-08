import { createCookie } from "@remix-run/node"
import type { ColorScheme } from "./color-scheme"

const cookie = createCookie("color-scheme", {
  maxAge: 34560000,
  sameSite: "lax",
})

export function serializeColorScheme(colorScheme: ColorScheme) {
  const eatCookie = colorScheme === "system"
  if (eatCookie) {
    return cookie.serialize({}, { expires: new Date(0), maxAge: 0 })
  } else {
    return cookie.serialize({ colorScheme })
  }
}

export async function parseColorScheme(request: Request) {
  const header = request.headers.get("Cookie")
  const vals = await cookie.parse(header)

  const colorScheme = vals?.colorScheme
  if (validateColorScheme(colorScheme)) {
    return colorScheme
  }
  return "system"
}

export function validateColorScheme(formValue: any): formValue is ColorScheme {
  return formValue === "dark" || formValue === "light" || formValue === "system"
}
