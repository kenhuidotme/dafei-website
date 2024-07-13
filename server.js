import { createRequestHandler } from "@remix-run/express"
import compression from "compression"
import express from "express"

import * as serverBuild from "./dist/app/server/index.js"
import { addWsService } from "./dist/ws.cjs"

const app = express()
app.use(compression())

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by")

// handle asset requests
const base = process.env.BASE_URL || "/"
app.use(
  `${base}/assets`,
  express.static("./dist/app/client/assets", { immutable: true, maxAge: "1y" })
)
app.use(base, express.static("./dist/app/client", { maxAge: "1h" }))

// handle SSR requests
const remixHandler = createRequestHandler({
  build: serverBuild,
})
app.all("*", remixHandler)

// start server
const host = process.env.HOST || "localhost"
const port = process.env.PORT || 4000
const server = app.listen(port, () =>
  console.log(`Server listening at http://${host}:${port}`)
)

// add ws service
addWsService(server)
