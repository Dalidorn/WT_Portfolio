import { marked } from 'marked';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

// Accepts markdown file from content folder. Returns object with metadata and parsed html.

export function parseMarkdown(markdown) {
    console.log("Parsing Markdown File")

    const appendedPath = path.join('src/lib/content/', markdown);
    const fileContents = fs.readFileSync(appendedPath, 'utf8');
    const { data, content } = matter(fileContents);
    const html = marked(content);


    return { metadata: data, html };
}
