import { json, redirect, type LoaderFunctionArgs } from "@remix-run/node"

const RE_PRODUCT_ID = /^DF[0-9]{3}[0-9A-Z]{8}[0-9]{14}$/

// DF9920101020120200703000050
function isValidProductId(productId: string) {
  return RE_PRODUCT_ID.test(productId)
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  const productId = params.productId

  if (!productId || !isValidProductId(productId)) {
    return json("invalid productId", { status: 400 })
  }

  const scheme = process.env.NODE_ENV === "production" ? "https" : "http"

  const host =
    process.env.PID_SKY_HOST === "localhost"
      ? request.headers.get("host")
      : process.env.PID_SKY_HOST

  const path = process.env.PID_SKY_PATH

  throw redirect(`${scheme}://${host}${path}${productId}`)
}
