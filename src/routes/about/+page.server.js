import { parseMarkdown } from "$lib/utils/parseMarkdown.js"


export async function load() {
    const parsedTestMarkdown = parseMarkdown("test.md");
    return parsedTestMarkdown;
}