import BackButton from "../../components/BackButton";
import SmartLink from "../../components/SmartLink";

export default function KH_358_Days_Soundtrack() {
    return (
        <div className="py-15 pb-30 px-10 md:px-50 text-[18px] md:text-[20px]">
            <BackButton href="/soundtracks" />
            <h2 className="text-2xl pt-4 pb-3 md:text-2xl font-medium">Kingdom Hearts 358/2 Days Soundtrack</h2>
            <p className="pt-1"><b>SPOILER WARNING: </b>The opening movie that is linked is the one from the 1.5 HD Remix Collection. It features scenes where key characters for this title were first introduced in Kingdom Hearts II Final Mix and Kingdom Hearts Re:Chain of Memories.</p>
            <div className="flex flex-col gap-4 pt-7">
                <SmartLink text="Opening Movie" type="youtube" url="https://youtu.be/6iqS5N8QH8w" />
                <SmartLink text="YouTube Playlist" type="youtube" url="https://youtu.be/Ea5-O9_O7Nk?list=PLuUSFdBe9Vn155ujbS32_il6wHj1Ube2V" />
            </div>

        </div>
    );
}