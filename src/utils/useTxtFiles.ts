import fs from "fs";
import path from "path";

export function getTxtFile(filename: string): string {
    const inFile = path.join(
        process.cwd(),
        "api",
        "data",
        "longer-text",
        "history-page",
        filename
    );

    return fs.readFileSync(inFile, "utf-8");
}