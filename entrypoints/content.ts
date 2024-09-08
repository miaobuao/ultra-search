import Search from '@/components/search/Search.vue'
import { createApp } from 'vue'
import type { ContentScriptContext } from 'wxt/client'
import { name as pkgName } from '../package.json'
import '@/assets/index.css'

export default defineContentScript({
  matches: [`*://*/*`],
  cssInjectionMode: 'ui',
  async main(ctx) {
    const ui = await createUI(ctx)
    ui.mount()
  },
})

function createUI(ctx: ContentScriptContext) {
  return createShadowRootUi(ctx, {
    name: pkgName,
    position: 'inline',
    anchor: 'body',
    append: 'last',
    onMount: (uiContainer) => {
      const root = document.createElement('div')
      const app = createApp(Search)
      app.mount(root)
      uiContainer.append(root)
    },
  })
}
