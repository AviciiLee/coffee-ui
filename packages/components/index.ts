import Button from './button/src/button.vue'
import Card from './card/src/card.vue'
import type { App, Plugin } from 'vue'

const components = [Button, Card]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

const coffeeui: Plugin = {
  install
}

export default coffeeui
