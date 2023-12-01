import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const componentsDir = path.resolve(__dirname, '..', 'dist', 'components', 'packages', 'components')

const typesFile = path.resolve(__dirname, '..', 'dist', 'components', 'types.d.ts')

const components = fs.readdirSync(componentsDir)

let typesContent = 'import { Plugin } from "vue"\n'
typesContent += 'declare const coffeui: Plugin;\n'
typesContent += 'export default coffeui;\n'

// 为每个组件的类型声明文件生成一个 export 语句
// 并且添加到 typesContent 里面

typesContent += components
  .map((component) => `export * from './packages/components/${component}'`)
  .join('\n')

// 至此，我们要写入到 types.d.ts 的内容已经准备好了
fs.writeFileSync(typesFile, typesContent)

console.log(chalk.green('types.d.ts 生成完毕'))
