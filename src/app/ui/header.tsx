import { useTranslation } from "react-i18next"
import cx from "clsx"

import { useLocale } from "~/lib/i18n"

import { NavLink } from "./link"
import { DetailsMenu, DetailsPopup } from "./details-menu"

import { WordmarkENLogo, WordmarkZHLogo } from "./logos"
import { MenuIcon } from "./icons"

export function Header({
  forceDark,
  to = "/",
  className = "",
}: {
  forceDark?: boolean
  to?: string
  className?: string
}) {
  const locale = useLocale()
  return (
    <header
      className={cx(
        "flex items-center justify-between px-6 py-6 md:px-12 md:py-8",
        forceDark ? "text-white" : "text-gray-900 dark:text-white",
        className,
      )}
    >
      <NavLink to={to} prefetch="intent" aria-label="DAFEI">
        {locale === "en" ? (
          <WordmarkENLogo aria-hidden />
        ) : (
          <WordmarkZHLogo aria-hidden />
        )}
      </NavLink>

      <nav className="hidden gap-8 md:flex" aria-label="Main">
        <HeaderLinks />
      </nav>

      <HeaderMenuMobile className="md:hidden" />
    </header>
  )
}

function HeaderMenuMobile({ className = "" }: { className: string }) {
  return (
    <DetailsMenu className={cx("relative cursor-pointer", className)}>
      <summary
        className={cx(
          "bg-gray-100 hover:bg-gray-200 [[open]>&]:bg-gray-200",
          "dark:bg-gray-800 dark:hover:bg-gray-700 dark:[[open]>&]:bg-gray-700",
          "__no-triangle flex h-10 w-10 items-center justify-center rounded-full",
        )}
      >
        <MenuIcon className="h-5 w-5" />
      </summary>
      <DetailsPopup>
        <nav className="flex flex-col gap-2 px-2 py-2.5">
          <HeaderLinks />
        </nav>
      </DetailsPopup>
    </DetailsMenu>
  )
}

function HeaderLinks() {
  const { t } = useTranslation("common", { keyPrefix: "menu" })
  return (
    <>
      <HeaderLink to="/sky-lite">{t("sky-lite")}</HeaderLink>
      <HeaderLink to="/about">{t("about")}</HeaderLink>
    </>
  )
}

function HeaderLink({
  children,
  to,
  className = "",
  prefetch = "none",
}: {
  children: React.ReactNode
  to: string
  className?: string
  prefetch?: "none" | "intent"
}) {
  return (
    <NavLink
      prefetch={prefetch}
      className={cx(
        "text-base font-semibold opacity-80 last:mr-0 hover:opacity-100",
        className,
      )}
      to={to}
      children={children}
    />
  )
}
