import { useTranslation } from "react-i18next"
import cx from "clsx"

import { NavLink } from "./link"
import { TrademarkDFLogo } from "./logos"
import { BiliBiliIcon, YouTubeIcon } from "./icons"

export function Footer({
  forceDark,
  to = "/",
  className = "",
}: {
  forceDark?: boolean
  to?: string
  className?: string
}) {
  const { t } = useTranslation("common", { keyPrefix: "footer" })
  return (
    <footer
      className={cx(
        "flex items-center justify-between px-6 py-9 text-base lg:px-12",
        forceDark ? "text-white" : "text-black dark:text-white",
        className,
      )}
    >
      <NavLink to={to} prefetch="intent" aria-label="DAFEI">
        <TrademarkDFLogo aria-label="DAFEI logo" />
      </NavLink>
      <div className="text-sm text-gray-500">{t("label")}</div>
      <nav
        className={cx(
          "flex gap-6",
          forceDark ? "text-white" : "text-black dark:text-white",
        )}
        aria-label="Find us on the web"
      >
        <a href="#" aria-label="BiliBili">
          <BiliBiliIcon aria-hidden />
        </a>
        <a href="#" aria-label="YouTube">
          <YouTubeIcon aria-hidden />
        </a>
      </nav>
    </footer>
  )
}
