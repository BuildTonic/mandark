import fs from "node:fs";
import path from "node:path";

const editTypespec = fs.readFileSync(
  path.join(__dirname, "./edit-type.ts"),
  "utf8"
);

export const taskPrompt = (task: string) => `Task: ${task}

Follow this typespec and return ONLY VALID JSON to suggest additions or replacements in files to make this change in this codebase.

Facts:
1. You can provide a new filename to create a file.
2. Leave toLine empty for additions.

\`\`\`typescript
${editTypespec}
\`\`\``;
