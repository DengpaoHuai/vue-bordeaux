import type { App } from 'vue'
import CustomGraphikButton from './ui/CustomGraphikButton.vue'

export default {
  install: (app: App<Element>) => {
    app.component('CustomGraphikButton', CustomGraphikButton)

    app.directive('focus', {
      mounted(el) {
        el.focus()
      }
    })

    app.provide('graphik', {
      version: '0.0.1'
    })

    app.provide('display', (e: number) => console.log(e))
  }
}
