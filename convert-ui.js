import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uiDir = path.join(__dirname, 'src', 'components', 'ui');

if (!fs.existsSync(uiDir)) {
    console.error(`Directory not found: ${uiDir}`);
    process.exit(1);
}

const files = fs.readdirSync(uiDir).filter(f => f.endsWith('.tsx'));

console.log(`Found ${files.length} files to convert.`);

function stripTypes(content) {
    let lines = content.split('\n');
    let newLines = [];
    let skipMode = false;

    for (let line of lines) {
        // Remove interface definitions (naive multiline handling)
        if (line.trim().startsWith('export interface') || line.trim().startsWith('interface')) {
            if (!line.includes('{') || (line.includes('{') && !line.includes('}'))) {
                skipMode = 'interface';
            }
            continue;
        }

        // Remove type definitions
        if (line.trim().startsWith('export type') || line.trim().startsWith('type')) {
            // Check if it's a single line type or start of multiline
            if (!line.includes('=') || (line.includes('=') && !line.trim().endsWith(';'))) {
                // It might be multiline object type
                if (line.includes('{') && !line.includes('}')) {
                    skipMode = 'type';
                } else if (!line.includes('{')) {
                    // could be "type foo = \n bar"
                    skipMode = 'type_assignment';
                }
            }
            continue;
        }

        if (skipMode) {
            if (line.includes('}')) {
                skipMode = false;
            }
            if (skipMode === 'type_assignment' && line.trim().endsWith(';')) {
                skipMode = false;
            }
            continue;
        }

        // Replace generic function calls/definitions
        // React.forwardRef<...>(
        line = line.replace(/React\.forwardRef<[^>]+>\(/g, 'React.forwardRef(');

        // Remove type annotation in args: ({ className, ...props }: SomeProps)
        // transforming to ({ className, ...props })
        // This regex is tricky. 
        // Heuristic: remove ": Type" before ) or , inside function args
        // Simple heuristic for shadcn: "}: Props)" -> "})"
        line = line.replace(/}: \w+(\[\])?\)/g, '})');
        line = line.replace(/}: \w+(\[\])?\) =>/g, '}) =>');

        // Remove "as Type"
        line = line.replace(/ as \w+(\[\])?/g, '');
        line = line.replace(/ as const/g, ''); // keep valid JS "as const"? No, pure JS doesn't have "as const" for type inference usually, actually "as const" is TS.

        // Remove generics in other places <T>
        // line = line.replace(/<[A-Z][a-zA-Z0-9]*>/g, ''); // Too dangerous for JSX

        // Remove import type
        line = line.replace(/import type /g, 'import ');
        line = line.replace(/import { type /g, 'import { ');

        // Remove "React.HTMLAttributes<...>" heritage if in extends (handled by removing interface)

        newLines.push(line);
    }

    return newLines.join('\n');
}

// Better regex based approach for file content
function convertContent(content) {
    // 1. Remove interfaces
    content = content.replace(/export interface [\s\S]*?\{[\s\S]*?\}/g, '');
    content = content.replace(/interface [\s\S]*?\{[\s\S]*?\}/g, '');

    // 2. Remove types
    content = content.replace(/export type [\s\S]*?=[\s\S]*?;/g, '');
    content = content.replace(/type [\s\S]*?=[\s\S]*?;/g, '');

    // 3. Remove React.forwardRef<...>(
    content = content.replace(/React\.forwardRef<[\s\S]*?>\(/g, 'React.forwardRef(');

    // 4. Remove arg types
    // pattern: }: SomeType)
    content = content.replace(/\}: \w+(<.*?>)?(\[\])?\)/g, '})');
    // pattern: (props: SomeType)
    content = content.replace(/\(props: \w+(<.*?>)?(\[\])?\)/g, '(props)');

    // 5. Remove 'as Type'
    content = content.replace(/ as [\w.]+(<.*?>)?(\[\])?/g, '');

    // 6. Remove import type
    content = content.replace(/import type \{/g, 'import {');
    content = content.replace(/, type /g, ', ');

    // 7. Cleanup empty lines left by deletions (optional)
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    return content;
}

files.forEach(file => {
    const filePath = path.join(uiDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    const newContent = convertContent(content);

    const newFilePath = path.join(uiDir, file.replace('.tsx', '.jsx'));

    fs.writeFileSync(newFilePath, newContent);
    fs.unlinkSync(filePath);

    console.log(`Converted ${file} to ${path.basename(newFilePath)}`);
});

console.log('Conversion complete.');
