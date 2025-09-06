import TextFileContent from "../components/TextFileContent";
import { getTxtFile } from "@/utils/useTxtFiles";

export default async function History() {
    const enix_history = getTxtFile("enix.txt");
    const square_history = getTxtFile("square.txt");
    const square_enix_history = getTxtFile("square_enix.txt");
    const pre_production = getTxtFile("pre-production.txt");

    return (
        <div>
            <h2>Brief History of Square Enix</h2>
            <TextFileContent text={enix_history} />
            <TextFileContent text={square_history} />
            <TextFileContent text={square_enix_history} />
            <h2>What Led Up to Kingdom Hearts</h2>
            <TextFileContent text={pre_production} />
        </div>
    );
}