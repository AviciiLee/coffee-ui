import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

/**
 *  为组件添加 install 方法，用于按需引入
 * @param component
 * @returns
 */
export const withInstall = <T>(component: T) => {
  ;(component as SFCWithInstall<T>).install = function (app: App) {
    app.component((component as any).name, component as SFCWithInstall<T>)
  }
  return component
}
