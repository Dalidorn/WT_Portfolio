import { parseMarkdown } from "$lib/utils/parseMarkdown.js"


export async function load() {
    const parsedJobBoard = parseMarkdown("descriptions/JobBoard.md");
    const parsedEdTech = parseMarkdown("descriptions/EdTech.md");
    const parsedTest = parseMarkdown("descriptions/TestingSuite.md");
    const parsedUi = parseMarkdown("descriptions/UiEvaluations.md");
    const parsedUser = parseMarkdown("descriptions/UserMicroService.md");
    return {
        major: {
            jobBoard: parsedEdTech,
            edTech: parsedJobBoard
            },
        minor: {
            test: parsedTest,
            ui: parsedUi,
            user: parsedUser
        }
    };
}