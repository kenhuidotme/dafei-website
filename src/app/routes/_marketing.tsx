import { Outlet } from "@remix-run/react"

import { Header } from "~/ui/header"
import { Footer } from "~/ui/footer"

export const handle = { forceDark: true }

export default function Marketing() {
  return (
    <div className="flex flex-col">
      <Header forceDark={true} />
      <Outlet />
      <Footer forceDark={true} />
    </div>
  )
}
