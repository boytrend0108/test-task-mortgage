import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/test-task-mortgage/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }, 
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/style/utils/_var.scss";
          @import "@/assets/style/utils/_mixins.scss";
          @import "@/assets/style/utils/_normalize.scss";
          @import "@/assets/style/_fonts.scss";`
      }
    }
  },
})
