import type { MetaFunction } from "@remix-run/react"
import { useTranslation } from "react-i18next"
import { useLocale } from "remix-i18next/react"
import cx from "clsx"

import React, { useRef } from "react"

import { AdImage } from "~/ui/ad-image"

export const meta: MetaFunction = () => {
  const { t } = useTranslation(["sky-lite", "common"])
  const site = t("site", { ns: "common" })
  const description = t("description", { ns: "common" })
  const title = t("title") + " | " + site
  return [
    { title },
    {
      property: "og:title",
      content: title,
    },
    {
      name: "description",
      content: description,
    },
  ]
}

export default function SkyLite() {
  return (
    <main className="flex flex-col" tabIndex={-1}>
      <SkyLiteImages />
      <SkyLitePhotos />
      <SkyLiteSpecs />
    </main>
  )
}

function SkyLiteImages() {
  return (
    <div className="text-white">
      <div className="flex flex-col md:hidden">
        <SkyLiteSmallImages />
      </div>
      <div className="hidden md:flex md:flex-col">
        <SkyLiteLargeImages />
      </div>
    </div>
  )
}

function SkyLiteSmallImages() {
  return (
    <>
      <SkyLiteSmallImage01 />
      <SkyLiteSmallImage02 />
      <SkyLiteSmallImage03 />
      <SkyLiteSmallImage04 />
    </>
  )
}

function SkyLiteLargeImages() {
  return (
    <>
      <SkyLiteLargeImage01 />
      <SkyLiteLargeImage02 />
      <SkyLiteLargeImage03 />
      <SkyLiteLargeImage04 />
    </>
  )
}

function SkyLiteSmallImage01() {
  const { t } = useTranslation("sky-lite", { keyPrefix: "ads" })
  const locale = useLocale()
  const textCenter = "left-0 right-0 mx-auto my-0 text-center"
  const textShadow = "[text-shadow:_0.04em_0.02em_0.1em_rgb(0_0_0_/_80%)]"
  const ads = [
    {
      literal: t("dafei-scooter"),
      style: cx(
        locale === "en"
          ? "text-[7.5vw] font-bold top-[6%]"
          : "text-[10vw] top-[5%]",
        textCenter,
        textShadow,
      ),
    },
    {
      literal: t("the-way-you-navigate-life"),
      style: cx(
        locale === "en" ? "text-[5vw] top-[15%]" : "text-[7vw] top-[16%]",
        textCenter,
        textShadow,
      ),
    },
  ]
  const image = "/images/sky-lite/01-small.jpg"
  const width = 1290
  const height = 1720
  return <AdImage image={image} width={width} height={height} ads={ads} />
}

function SkyLiteSmallImage02() {
  const { t } = useTranslation("sky-lite", { keyPrefix: "ads" })
  const locale = useLocale()
  const textShadow = "[text-shadow:_-0.04em_0.02em_0.1em_rgb(0_0_0_/_80%)]"
  const ads = [
    {
      literal: t("ultimate-driving-experience"),
      style: cx(
        "left-[6%] top-[5%]",
        locale === "en" ? "text-[6vw] font-bold" : "text-[9vw]",
        textShadow,
      ),
    },
    {
      literal: t("direct-torque-control"),
      style: cx(
        "left-[6%] top-[20%]",
        locale === "en" ? "text-[4.5vw] font-bold" : "text-[5.5vw]",
        textShadow,
      ),
    },
    {
      literal: t("direct-torque-control-description"),
      style: cx(
        "left-[6%] top-[26%]",
        locale === "en" ? "text-[3vw]" : "text-[3.2vw]",
        textShadow,
      ),
    },
    {
      literal: t("hall-less-foc"),
      style: cx(
        "left-[6%] top-[35%]",
        locale === "en" ? "text-[4.5vw] font-bold" : "text-[5.5vw]",
        textShadow,
      ),
    },
    {
      literal: t("hall-less-foc-description"),
      style: cx(
        "left-[6%] top-[41%]",
        locale === "en" ? "text-[3vw]" : "text-[3.2vw]",
        textShadow,
      ),
    },
    {
      literal: t("regenerative-braking-system"),
      style: cx(
        "left-[6%] top-[50%]",
        locale === "en" ? "text-[4.5vw] font-bold" : "text-[5.5vw]",
        textShadow,
      ),
    },
    {
      literal: t("regenerative-braking-system-description"),
      style: cx(
        "left-[6%] top-[56%]",
        locale === "en" ? "text-[3vw]" : "text-[3.2vw]",
        textShadow,
      ),
    },
  ]
  const image = "/images/sky-lite/02-small.jpg"
  const width = 1290
  const height = 1720
  return <AdImage image={image} width={width} height={height} ads={ads} />
}

function SkyLiteSmallImage03() {
  const { t } = useTranslation("sky-lite", { keyPrefix: "ads" })
  const locale = useLocale()
  const textShadow = "[text-shadow:_-0.04em_0.02em_0.1em_rgb(0_0_0_/_80%)]"
  const ads = [
    {
      literal: t("small-but-powerful"),
      style: cx(
        "left-[6%] bottom-[12%]",
        locale === "en" ? "text-[4.5vw] font-bold" : "text-[6.2vw]",
        textShadow,
      ),
    },
    {
      literal: t("48v-architecture-description"),
      style: cx(
        "left-[6%] bottom-[5%]",
        locale === "en" ? "text-[3vw]" : "text-[3.2vw]",
        textShadow,
      ),
    },
  ]
  const image = "/images/sky-lite/03-small.jpg"
  const width = 1290
  const height = 860
  return <AdImage image={image} width={width} height={height} ads={ads} />
}

function SkyLiteSmallImage04() {
  const { t } = useTranslation("sky-lite", { keyPrefix: "ads" })
  const locale = useLocale()
  const textShadow = "[text-shadow:_0.04em_0.02em_0.1em_rgb(0_0_0_/_80%)]"
  const ads = [
    {
      literal: t("small-is-better"),
      style: cx(
        "right-[3.5%] bottom-[12%]",
        locale === "en" ? "text-[4.5vw] font-bold" : "text-[6.2vw]",
        textShadow,
      ),
    },
    {
      literal: t("the-trunk-can-easily-fit-3-dafei-sky-scooters"),
      style: cx(
        "right-[3.5%] bottom-[5%]",
        locale === "en" ? "text-[3vw]" : "text-[3.2vw]",
        textShadow,
      ),
    },
  ]
  const image = "/images/sky-lite/04-small.jpg"
  const width = 1290
  const height = 860
  return <AdImage image={image} width={width} height={height} ads={ads} />
}

function SkyLiteLargeImage01() {
  const { t } = useTranslation("sky-lite", { keyPrefix: "ads" })
  const locale = useLocale()
  const textShadow = "[text-shadow:_0.04em_0.02em_0.1em_rgb(0_0_0_/_80%)]"
  const ads = [
    {
      literal: t("dafei-scooter"),
      style: cx(
        "left-[9%] top-[7%]",
        locale === "en" ? "text-[4.5vw] font-bold" : "text-[5.5vw]",
        textShadow,
      ),
    },
    {
      literal: t("the-way-you-navigate-life"),
      style: cx(
        "left-[20%] top-[22%]",
        locale === "en" ? "text-[3.2vw]" : "text-[4vw]",
        textShadow,
      ),
    },
  ]
  const image = "/images/sky-lite/01-large.jpg"
  const width = 3840
  const height = 1920
  return <AdImage image={image} width={width} height={height} ads={ads} />
}

function SkyLiteLargeImage02() {
  const { t } = useTranslation("sky-lite", { keyPrefix: "ads" })
  const locale = useLocale()
  const textShadow = "[text-shadow:_-0.04em_0.02em_0.1em_rgb(0_0_0_/_80%)]"
  const ads = [
    {
      literal: t("ultimate-driving-experience"),
      style: cx(
        "left-[9%] top-[6.5%]",
        locale === "en" ? "text-[4vw] font-bold" : "text-[5.5vw]",
        textShadow,
      ),
    },
    {
      literal: t("direct-torque-control"),
      style: cx(
        "left-[9%] top-[37%]",
        locale === "en" ? "text-[2.6vw] font-bold" : "text-[3.2vw]",
        textShadow,
      ),
    },
    {
      literal: t("direct-torque-control-description"),
      style: cx(
        "left-[9%] top-[46%]",
        locale === "en" ? "text-[1.6vw]" : "text-[1.8vw]",
        textShadow,
      ),
    },
    {
      literal: t("hall-less-foc"),
      style: cx(
        "left-[9%] top-[57%]",
        locale === "en" ? "text-[2.6vw] font-bold" : "text-[3.2vw]",
        textShadow,
      ),
    },
    {
      literal: t("hall-less-foc-description"),
      style: cx(
        "left-[9%] top-[66%]",
        locale === "en" ? "text-[1.6vw]" : "text-[1.8vw]",
        textShadow,
      ),
    },
    {
      literal: t("regenerative-braking-system"),
      style: cx(
        "left-[9%] top-[77%]",
        locale === "en" ? "text-[2.6vw] font-bold" : "text-[3.2vw]",
        textShadow,
      ),
    },
    {
      literal: t("regenerative-braking-system-description"),
      style: cx(
        "left-[9%] top-[86%]",
        locale === "en" ? "text-[1.6vw]" : "text-[1.8vw]",
        textShadow,
      ),
    },
  ]
  const image = "/images/sky-lite/02-large.jpg"
  const width = 3840
  const height = 1920
  return <AdImage image={image} width={width} height={height} ads={ads} />
}

function SkyLiteLargeImage03() {
  const { t } = useTranslation("sky-lite", { keyPrefix: "ads" })
  const locale = useLocale()
  const textShadow = "[text-shadow:_-0.04em_0.02em_0.1em_rgb(0_0_0_/_80%)]"
  const ads = [
    {
      literal: t("small-but-powerful"),
      style: cx(
        "left-[9%] top-[6.5%]",
        locale === "en" ? "text-[4vw] font-bold" : "text-[5.5vw]",
        textShadow,
      ),
    },
    {
      literal: t("48v-architecture"),
      style: cx(
        "left-[9%] top-[37%]",
        locale === "en" ? "text-[2.6vw] font-bold" : "text-[3.2vw]",
        textShadow,
      ),
    },
    {
      literal: t("48v-architecture-description"),
      style: cx(
        "left-[9%] top-[46%]",
        locale === "en" ? "text-[1.6vw]" : "text-[1.8vw]",
        textShadow,
      ),
    },
    {
      literal: t("maximum-speed"),
      style: cx(
        "left-[9%] top-[57%]",
        locale === "en" ? "text-[2.6vw] font-bold" : "text-[3.2vw]",
        textShadow,
      ),
    },
    {
      literal: t("maximum-speed-description"),
      style: cx(
        "left-[9%] top-[66%]",
        locale === "en" ? "text-[1.6vw]" : "text-[1.8vw]",
        textShadow,
      ),
    },
    {
      literal: t("braking-distance"),
      style: cx(
        "left-[9%] top-[77%]",
        locale === "en" ? "text-[2.6vw] font-bold" : "text-[3.2vw]",
        textShadow,
      ),
    },
    {
      literal: t("braking-distance-description"),
      style: cx(
        "left-[9%] top-[86%]",
        locale === "en" ? "text-[1.6vw]" : "text-[1.8vw]",
        textShadow,
      ),
    },
  ]
  const image = "/images/sky-lite/03-large.jpg"
  const width = 3840
  const height = 1920
  return <AdImage image={image} width={width} height={height} ads={ads} />
}

function SkyLiteLargeImage04() {
  const { t } = useTranslation("sky-lite", { keyPrefix: "ads" })
  const locale = useLocale()
  const textShadow = "[text-shadow:_0.04em_0.02em_0.1em_rgb(0_0_0_/_80%)]"
  const ads = [
    {
      literal: t("small-is-better"),
      style: cx(
        "right-[5%] bottom-[15%]",
        locale === "en" ? "text-[4vw] font-bold" : "text-[5.5vw]",
        textShadow,
      ),
    },
    {
      literal: t("the-trunk-can-easily-fit-3-dafei-sky-scooters"),
      style: cx(
        "right-[5%] bottom-[8%]",
        locale === "en" ? "text-[2vw]" : "text-[2.8vw]",
        textShadow,
      ),
    },
  ]
  const image = "/images/sky-lite/04-large.jpg"
  const width = 3840
  const height = 1920
  return <AdImage image={image} width={width} height={height} ads={ads} />
}

function SkyLitePhotos() {
  const photos = ["01", "02", "03", "04", "05", "06", "07"]
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseDown = (ev: React.MouseEvent) => {
    const el = ref.current
    if (!el) {
      return
    }

    const startPos = {
      left: el.scrollLeft,
      top: el.scrollTop,
      x: ev.clientX,
      y: ev.clientY,
    }

    const handleMouseMove = (ev: MouseEvent) => {
      const dx = ev.clientX - startPos.x
      const dy = ev.clientY - startPos.y
      el.scrollTop = startPos.top - dy
      el.scrollLeft = startPos.left - dx
    }

    const handleMouseUp = () => {
      el.style.cursor = "grab"
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    el.style.cursor = "grabbing"
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <div
      ref={ref}
      onMouseDown={handleMouseDown}
      className="__carousel flex gap-6 pb-3 pt-6"
    >
      {photos.map((nbr, index) => (
        <img
          key={index}
          src={`/images/sky-lite/${nbr}-photo.jpg`}
          className="w-[80vw] shrink-0 rounded-lg md:w-[43vw]"
        />
      ))}
    </div>
  )
}

function SkyLiteSpecs() {
  return (
    <div
      className={cx(
        "columns-1 gap-0 md:columns-2",
        "px-0 pb-9 lg:px-16 2xl:px-32 4xl:px-64",
      )}
    >
      <SpecTable part="scooter" />
      <SpecTable part="motor" />
      <SpecTable part="controller" />
      <SpecTable part="battery" />
    </div>
  )
}

const specKeys = {
  scooter: ["size", "weigth", "speed", "mileage"],
  motor: ["category", "tire-size", "power", "hall-sensor"],
  controller: ["voltage", "current-limit", "algorithm", "e-brake"],
  battery: ["cell-type", "voltage", "capacity", "charge-time"],
}

function SpecTable({ part }: { part: keyof typeof specKeys }) {
  const { t } = useTranslation("sky-lite", { keyPrefix: "specs" })
  const locale = useLocale()
  const baseText = locale === "en" ? "text-md" : "text-lg"
  return (
    <div className="flex justify-center">
      <table
        className={cx(
          "table-fixed border-collapse",
          "mt-12 lg:mt-16 2xl:mt-20 4xl:mt-24",
          "w-[84vw] md:w-[42vw] lg:w-[36vw] 2xl:w-[32vw] 4xl:w-[28vw]",
        )}
      >
        <thead>
          <tr>
            <th
              colSpan={2}
              className={cx(
                "py-6 lg:py-8 2xl:py-10 4xl:py-12",
                "text-2xl lg:text-3xl 2xl:text-4xl 4xl:text-5xl",
                "border-b border-gray-100 dark:border-gray-700",
              )}
            >
              {t(`${part}.title`)}
            </th>
          </tr>
        </thead>
        <tbody>
          {specKeys[part].map((item, index) => (
            <tr key={index}>
              <td
                className={cx(
                  baseText,
                  "pl-4 lg:pl-5 2xl:pl-6 4xl:pl-7",
                  "py-4 lg:py-5 2xl:py-6 4xl:py-7",
                  "lg:text-xl 2xl:text-2xl 4xl:text-3xl",
                  "border-b border-gray-100 dark:border-gray-700",
                )}
              >
                {t(`${part}.${item}.name`)}
              </td>
              <td
                className={cx(
                  baseText,
                  "py-4 lg:py-5 2xl:py-6 4xl:py-7",
                  "lg:text-xl 2xl:text-2xl 4xl:text-3xl",
                  "border-b border-gray-100 dark:border-gray-700",
                )}
              >
                {t(`${part}.${item}.value`)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
