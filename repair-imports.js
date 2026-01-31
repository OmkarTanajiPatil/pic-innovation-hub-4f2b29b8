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

const files = fs.readdirSync(uiDir).filter(f => f.endsWith('.jsx'));

const radixMap = {
    'accordion': 'AccordionPrimitive',
    'alert-dialog': 'AlertDialogPrimitive',
    'aspect-ratio': 'AspectRatioPrimitive',
    'avatar': 'AvatarPrimitive',
    'checkbox': 'CheckboxPrimitive',
    'collapsible': 'CollapsiblePrimitive',
    'context-menu': 'ContextMenuPrimitive',
    'dialog': 'DialogPrimitive',
    'dropdown-menu': 'DropdownMenuPrimitive',
    'hover-card': 'HoverCardPrimitive',
    'label': 'LabelPrimitive',
    'menubar': 'MenubarPrimitive',
    'navigation-menu': 'NavigationMenuPrimitive',
    'popover': 'PopoverPrimitive',
    'progress': 'ProgressPrimitive',
    'radio-group': 'RadioGroupPrimitive',
    'scroll-area': 'ScrollAreaPrimitive',
    'select': 'SelectPrimitive',
    'separator': 'SeparatorPrimitive',
    'slider': 'SliderPrimitive',
    'switch': 'SwitchPrimitive',
    'tabs': 'TabsPrimitive',
    'toast': 'ToastPrimitive',
    'toggle': 'TogglePrimitive',
    'toggle-group': 'ToggleGroupPrimitive',
    'tooltip': 'TooltipPrimitive',
};

files.forEach(file => {
    const filePath = path.join(uiDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Fix React import
    content = content.replace(/import \* from "react"/g, 'import * as React from "react"');

    // 2. Fix Radix imports
    // Matches: import * from "@radix-ui/react-accordion";
    content = content.replace(/import \* from "@radix-ui\/react-([\w-]+)"/g, (match, pkg) => {
        // Map pkg to Primitive name
        // e.g. accordion -> AccordionPrimitive
        // Some might act differently, but this covers 90%
        const primitiveName = pkg.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('') + 'Primitive';
        return `import * as ${primitiveName} from "@radix-ui/react-${pkg}"`;
    });

    // 3. Fix CMDK (Special case)
    if (file === 'command.jsx') {
        // Configured to fix the broken lines we saw
        // Likely line 2 is: import { 
        // And it logic was: import { Command as CommandPrimitive } from "cmdk"
        // But regex removed " as CommandPrimitive" -> import { Command }
        // Check if we have "import { " and check content
        if (content.includes('import {') && !content.includes('cmdk')) {
            // It might be severely broken. Let's just FORCE replace the top imports if we detect it's command.jsx
            // Identifying it by "CommandPrimitive" usage
            if (content.includes('CommandPrimitive')) {
                content = `import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

${content.split('\n').filter(l => !l.includes('import ') && !l.includes('CommandPrimitive.displayName') && !l.includes('Command.displayName =')).join('\n')}
`;
                // Re-add lines we might have stripped or that were intact
                // Actually, let's be careful.
                // The previous view of command.jsx showed lines 1, 2, 3 as:
                // 1: import * from "react";
                // 2: import { 
                // 3: Command.displayName = CommandPrimitive.displayName;
                // It seems lines were lost.
                // I will simply overwrite imports for command.jsx
                const lines = fs.readFileSync(filePath, 'utf8').split('\n');
                const newLines = [
                    'import * as React from "react";',
                    'import { Command as CommandPrimitive } from "cmdk";',
                    'import { Search } from "lucide-react";',
                    'import { Dialog, DialogContent } from "@/components/ui/dialog";',
                    'import { cn } from "@/lib/utils";',
                ];
                // Append lines starting from start of code.
                // Heuristic: find first line that is NOT import and NOT empty
                let codeStart = 0;
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i].includes('Command.displayName =')) {
                        codeStart = i;
                        break;
                    }
                }
                if (codeStart > 0) {
                    content = newLines.join('\n') + '\n' + lines.slice(codeStart).join('\n');
                }
            }
        }
    }

    // 4. Cleanup remaining types
    // : React.HTMLAttributes<HTMLDivElement>
    content = content.replace(/: React\.[\w\.]+(<[^>]+>)?/g, '');
    // : React.ComponentPropsWithoutRef<typeof ...>
    content = content.replace(/: React\.ComponentPropsWithoutRef<[^>]+>/g, '');

    // Clean up any double empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Repaired ${file}`);
    }
});

console.log('Repair complete.');
