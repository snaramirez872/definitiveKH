import he from "he";
import TextFileContent from "../components/TextFileContent";
import { getTxtFile } from "@/utils/useTxtFiles";

export default async function History() {
    const enix_history = he.decode(getTxtFile("enix.txt")).replace(/\r?\n/g, "<br />");
    const square_history = he.decode(getTxtFile("square.txt")).replace(/\r?\n/g, "<br />");
    const square_enix_history = he.decode(getTxtFile("square_enix.txt")).replace(/\r?\n/g, "<br />");
    const pre_production = he.decode(getTxtFile("pre-production.txt")).replace(/\r?\n/g, "<br />");

    return (
        <div className="py-15 pb-30 px-20 md:px-50 text-[18px] md:text-[20px]">
            <h2 className="text-2xl py-3 sm:text-2xl font-medium">Brief History of Square Enix</h2>
            <TextFileContent text={enix_history} />
            <TextFileContent text={square_history} />
            <TextFileContent text={square_enix_history} />
            <h2 className="text-2xl py-3 sm:text-2xl font-medium">What Led Up to Kingdom Hearts</h2>
            <TextFileContent text={pre_production} />
            <h2 className="text-2xl py-3 sm:text-2xl font-medium">Who Owns Kingdom Hearts?</h2>
            <p className="pb-[calc(3*18px)] sm:pb-[calc(3*20px)]">The Kingdom Hearts Intellectual Property (IP) is 100% owned by Disney and is developed/published by Square Enix.</p>
            <p className="text-2xl py-3 sm:text-2xl font-medium">Fun Facts</p>
            <ul className="list-disc pl-15">
                <li className="py-1">In the original 3D Platformer idea the main character was supposed to be either Mickey Mouse or Donald Duck, but one of Tetsuya Nomura&apos;s changes was to make original characters to emotionally tie everything together in a deeper story.</li>
                <li className="py-1">The inclusion of Disney Characters and stories came directly from an agreement made between Square and Disney for Square to use their IPs.</li>
                <li className="py-1">The inclusion and cameos of Final Fantasy characters was one of the changes Tetsuya Nomura introduced to bring more familiarity to the series outside of the Disney characters and worlds.</li>
                <li className="py-1">Disney&apos;s Japan branches have always done their best to advertise Kingdom Hearts where ever and whenever they could, however this was not really the case outside of Japan. Disney in North America and Europe (among others for example) never really did much marketing for the series outside of the bare minimum and the D23 Expo until the build up towards Kingdom Hearts III. As more and more fans of the series starting being employed by Disney around the world, Kingdom Hearts has notably been featured in a lot of different events and easter eggs in other media.</li>
            </ul>
        </div>
    );
}