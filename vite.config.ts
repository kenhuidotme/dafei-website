import { vitePlugin as remix } from "@remix-run/dev"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vite"

const base = process.env.BASE_URL || "/"

export default defineConfig(() => {
  return {
    plugins: [
      remix({
        basename: base,
        appDirectory: "src/app",
        buildDirectory: "dist/app",
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
        },
      }),
      tsconfigPaths(),
    ],
    base,
  }
})
