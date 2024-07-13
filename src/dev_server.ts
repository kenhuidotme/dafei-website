import { createRequestHandler } from "@remix-run/express"
import type { ServerBuild } from "@remix-run/node"
import { createServer } from "vite"
import express from "express"

const app = express()

const vite = await createServer({
  server: { middlewareMode: true },
})
app.use(vite.middlewares)

const remixHandler = createRequestHandler({
  build: () =>
    vite.ssrLoadModule("virtual:remix/server-build") as Promise<ServerBuild>,
})
app.all("*", remixHandler)

const host = process.env.HOST || "localhost"
const port = process.env.PORT || 4000
const server = app.listen(port, () =>
  console.log(`Server listening at http://${host}:${port}`)
)

import { addWsService } from "./ws"
addWsService(server)
