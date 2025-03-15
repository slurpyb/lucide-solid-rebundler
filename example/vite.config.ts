import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      "lucide-solid/icons": fileURLToPath(
        new URL(
          // Replace with the path to your lucide-solid package
          "./node_modules/lucide-solid/dist/source/icons",
          import.meta.url,
        ),
      ),
    },
  },
})
