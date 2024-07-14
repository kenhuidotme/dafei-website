import { createRequestHandler } from "@remix-run/express"
import type { ServerBuild } from "@remix-run/node"
import { createServer } from "vite"
import express from "express"
import morgan from "morgan"

const app = express()

const vite = await createServer({
  server: { middlewareMode: true },
})
app.use(vite.middlewares)

const remixHandler = createRequestHandler({
  build: () =>
    vite.ssrLoadModule("virtual:remix/server-build") as Promise<ServerBuild>,
})

app.use(
  morgan("tiny", {
    skip: (req) => req.method === "GET" && req.url.startsWith("/__manifest"),
  }),
)

app.all("*", remixHandler)

const host = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"
app.listen(port, () =>
  console.log(`Server listening at http://${host}:${Number(port)}`),
)
