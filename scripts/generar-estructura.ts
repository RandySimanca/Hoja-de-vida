import { readdirSync, statSync, writeFileSync } from 'fs'
import { join } from 'path'

const raiz = process.cwd()
const resultado: string[] = []
const excluidos = ['node_modules', '.git', 'dist', 'logs', 'objects', 'hooks', 'refs'] // opcional

function recorrer(ruta: string, nivel = 0) {
  const items = readdirSync(ruta)

  for (const item of items) {
    if (excluidos.includes(item)) continue

    const rutaCompleta = join(ruta, item)
    const stats = statSync(rutaCompleta)
    const sangria = '│   '.repeat(nivel)
    const tipo = stats.isDirectory() ? '📁' : '📄'

    resultado.push(`${sangria}├── ${tipo} ${item}`)

    if (stats.isDirectory()) {
      recorrer(rutaCompleta, nivel + 3)
    }
  }
}

recorrer(raiz)
console.log('🚀 Ejecutando desde:', raiz)


writeFileSync(join(raiz, 'estructura.txt'), resultado.join('\n'), {
  encoding: 'utf8'
})

console.log('✅ Árbol completo generado')
