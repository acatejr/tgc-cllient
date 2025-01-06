// import { defineConfig } from 'vite'
// import solid from 'vite-plugin-solid'

// export default defineConfig({
//   plugins: [solid()],
// })

import solid from "vite-plugin-solid"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [solid()],
  resolve: {
    conditions: ["development", "browser"],
  },
})