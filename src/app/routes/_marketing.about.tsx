import type { MetaFunction } from "@remix-run/react"
import { useTranslation } from "react-i18next"
import { useLocale } from "remix-i18next/react"
import cx from "clsx"

import { AdImage } from "~/ui/ad-image"

export const meta: MetaFunction = () => {
  const { t } = useTranslation(["about", "common"])
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

export default function About() {
  return (
    <main className="flex flex-col" tabIndex={-1}>
      <AboutImages />
    </main>
  )
}

function AboutImages() {
  return (
    <>
      <div className="flex flex-col md:hidden">
        <AboutSmallImages />
      </div>
      <div className="hidden md:flex md:flex-col">
        <AboutLargeImages />
      </div>
    </>
  )
}

function AboutSmallImages() {
  return (
    <>
      <div className="text-gray-200">
        <AboutSmallImage01 />
        <AboutSmallImage02 />
      </div>
      <div className="text-gray-900">
        <AboutSmallImage03 />
      </div>
    </>
  )
}

function AboutLargeImages() {
  return (
    <>
      <div className="text-gray-200">
        <AboutLargeImage01 />
        <AboutLargeImage02 />
      </div>
      <div className="text-gray-900">
        <AboutLargeImage03 />
      </div>
    </>
  )
}

function AboutSmallImage01() {
  const { t } = useTranslation("about", { keyPrefix: "ads" })
  const locale = useLocale()
  const textCenter = ""
  const ads = [
    {
      literal: t("building-a-better-tomorrow"),
      style: cx(
        "top-[6%] left-0 right-0 mx-auto my-0 text-center",
        locale === "en" ? "text-[4.5vw] font-bold" : "text-[8vw]",
      ),
    },
    {
      literal: t("building-a-better-tomorrow-description"),
      style: cx(
        "left-0 right-0 mx-[8vw]",
        locale === "en"
          ? "text-[3.3vw] top-[13%] leading-relaxed"
          : "text-[4vw] top-[15%] leading-relaxed indent-[2em]",
      ),
    },
  ]
  const image = "/images/about/01-small.jpg"
  const width = 1290
  const height = 2160
  return <AdImage image={image} width={width} height={height} ads={ads} />
}

function AboutSmallImage02() {
  const { t } = useTranslation("about", { keyPrefix: "ads" })
  const locale = useLocale()
  const ads = [
    {
      literal: t("updating-infrastructures"),
      style: cx(
        "top-[8%] left-0 right-0 mx-auto my-0 text-center",
        locale === "en" ? "text-[4.5vw] font-bold" : "text-[8vw]",
      ),
    },
    {
      literal: t("updating-infrastructures-description"),
      style: cx(
        "left-0 right-0 mx-[8vw]",
        locale === "en"
          ? "text-[3.3vw] top-[15%] leading-relaxed"
          : "text-[4vw] top-[17%] leading-relaxed indent-[2em]",
      ),
    },
  ]
  const image = "/images/about/02-small.jpg"
  const width = 1290
  const height = 2160
  return <AdImage image={image} width={width} height={height} ads={ads} />
}

function AboutSmallImage03() {
  const { t } = useTranslation("about", { keyPrefix: "ads" })
  const locale = useLocale()
  const ads = [
    {
      literal: t("exploring-the-boundaries-of-intelligence"),
      style: cx(
        "top-[5%] left-0 right-0 mx-auto my-0 text-center",
        locale === "en" ? "text-[4.5vw] font-bold" : "text-[8vw]",
      ),
    },
    {
      literal: t("exploring-the-boundaries-of-intelligence-description"),
      style: cx(
        "left-0 right-0 mx-[8vw]",
        locale === "en"
          ? "text-[3.3vw] top-[12%] leading-relaxed"
          : "text-[4vw] top-[14%] leading-relaxed indent-[2em]",
      ),
    },
  ]
  const image = "/images/about/03-small.jpg"
  const width = 1290
  const height = 2160
  return <AdImage image={image} width={width} height={height} ads={ads} />
}

function AboutLargeImage01() {
  const { t } = useTranslation("about", { keyPrefix: "ads" })
  const locale = useLocale()
  const ads = [
    {
      literal: t("building-a-better-tomorrow"),
      style: cx(
        "top-[6%] left-0 right-0 mx-auto my-0 text-center",
        locale === "en" ? "text-[3vw] font-bold" : "text-[3.5vw]",
      ),
    },
    {
      literal: t("building-a-better-tomorrow-description"),
      style: cx(
        "top-[16%] left-0 right-0 mx-[10vw]",
        locale === "en"
          ? "text-[1.5vw] leading-loose"
          : "text-[1.7vw] leading-loose indent-[2em]",
      ),
    },
  ]
  const image = "/images/about/01-large.jpg"
  const width = 3840
  const height = 2160
  return <AdImage image={image} width={width} height={height} ads={ads} />
}

function AboutLargeImage02() {
  const { t } = useTranslation("about", { keyPrefix: "ads" })
  const locale = useLocale()
  const ads = [
    {
      literal: t("updating-infrastructures"),
      style: cx(
        "top-[8%] left-0 right-0 mx-auto my-0 text-center",
        locale === "en" ? "text-[3vw] font-bold" : "text-[3.5vw]",
      ),
    },
    {
      literal: t("updating-infrastructures-description"),
      style: cx(
        "top-[18%] left-0 right-0 mx-[10vw]",
        locale === "en"
          ? "text-[1.5vw] leading-loose"
          : "text-[1.7vw] leading-loose indent-[2em]",
      ),
    },
  ]
  const image = "/images/about/02-large.jpg"
  const width = 3840
  const height = 2160
  return <AdImage image={image} width={width} height={height} ads={ads} />
}

function AboutLargeImage03() {
  const { t } = useTranslation("about", { keyPrefix: "ads" })
  const locale = useLocale()
  const ads = [
    {
      literal: t("exploring-the-boundaries-of-intelligence"),
      style: cx(
        "top-[6%] left-0 right-0 mx-auto my-0 text-center",
        locale === "en" ? "text-[3vw] font-bold" : "text-[3.5vw]",
      ),
    },
    {
      literal: t("exploring-the-boundaries-of-intelligence-description"),
      style: cx(
        "left-0 right-0 top-[16%] mx-[10vw]",
        locale === "en"
          ? "text-[1.5vw] leading-loose"
          : "text-[1.7vw] leading-loose indent-[2em]",
      ),
    },
  ]
  const image = "/images/about/03-large.jpg"
  const width = 3840
  const height = 2160
  return <AdImage image={image} width={width} height={height} ads={ads} />
}
