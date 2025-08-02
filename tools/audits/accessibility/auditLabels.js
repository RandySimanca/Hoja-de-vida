import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resuelve __dirname equivalente en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

function auditFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const labelRegex = /<label([^>]*?)>([\s\S]*?)<\/label>/g;
  let match;
  while ((match = labelRegex.exec(content))) {
    const labelAttrs = match[1];
    const labelInner = match[2];
    const hasForAttr = /for\s*=\s*["'][^"']+["']/.test(labelAttrs);
    const hasNestedInput = /<input[^>]*?>/.test(labelInner);
    if (!hasForAttr && !hasNestedInput) {
      console.warn(`⚠️ Falta asociación <label> en: ${filePath}`);
    }
  }
}

function runAudit() {
  const files = scanVueFiles(path.join(__dirname, '../../../src'));
  files.forEach(auditFile);
}

runAudit();
