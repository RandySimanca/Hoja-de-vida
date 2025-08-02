import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔁 Recorrido de archivos .vue
function scanVueFiles(dir) {
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(scanVueFiles(fullPath));
    } else if (file.endsWith('.vue')) {
      files.push(fullPath);
    }
  }
  return files;
}

// 🩺 Reparación semántica por archivo
function repairFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  const labelRegex = /<label([^>]*?)>([\s\S]*?)<\/label>/g;
  content = content.replace(labelRegex, (match, attrs, inner) => {
    const hasFor = /for\s*=\s*["'][^"']+["']/.test(attrs);
    const hasInput = /<input[^>]*?>/.test(inner);

    if (hasFor || hasInput) return match;

    // Generar id único basado en texto del label
    const textContent = inner.replace(/<[^>]+>/g, '').trim().toLowerCase().replace(/\s+/g, '-');
    const id = textContent || 'auto-id';

    // Insertar nuevo input y for
    const newLabel = `<label for="${id}">${textContent}</label><input id="${id}" />`;
    changed = true;
    console.log(`✅ Reparado <label> en: ${filePath} → id="${id}"`);
    return newLabel;
  });

  if (changed) {
    const backupPath = filePath + '.bak';
    fs.writeFileSync(backupPath, content); // Puedes cambiar esto a `filePath` si quieres sobrescribir directamente
  }
}

// 🚀 Auditoría global
function runRepair() {
  const srcPath = path.resolve(__dirname, '../../../src');
  const files = scanVueFiles(srcPath);
  files.forEach(repairFile);
}

runRepair();
