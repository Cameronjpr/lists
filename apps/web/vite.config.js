// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['../../packages/ui'],
  },
  build: {
    commonjsOptions: {
      include: ['../../packages/ui'],
    },
  },
})
