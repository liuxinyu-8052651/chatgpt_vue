import { createApp } from 'vue'
import { setupAssets, setupScrollbarStyle } from './plugins/index'
import { setupI18n } from './locales'
import { setupStore } from './stores'
import App from './App.vue'
import { setupRouter } from './router'

async function bootstrap() {
  const app = createApp(App)
  setupAssets()
  setupScrollbarStyle()
  setupStore(app)
  setupI18n(app)
  await setupRouter(app)

  app.mount('#app')
}

bootstrap()
