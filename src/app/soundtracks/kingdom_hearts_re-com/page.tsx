import BackButton from "../../components/BackButton";
import SmartLink from "../../components/SmartLink";

export default function KH_RCOM_Soundtrack() {
    return (
        <div className="py-15 pb-30 px-10 md:px-20 text-[18px] md:text-[20px]">
            <BackButton href="/soundtracks" />
            <h2 className="text-2xl pt-4 pb-3 md:text-2xl font-medium">Kingdom Hearts Re:Chain of Memories Soundtrack</h2>
            <p><b>SPOILER WARNING: </b>The Opening Movie for this title contains contains major spoilers for Kingdom Hearts I.</p>
            <div className="flex flex-col gap-4 pt-7">
                <SmartLink text="Opening Movie" type="youtube" url="https://youtu.be/igILOGOZuS0" />
                <SmartLink text="YouTube Playlist" type="youtube" url="https://youtu.be/iMGb6N-_y24?list=PLhPt7n-ALrSCNGeM1shEA73QIw1SPamC4" />
            </div>

        </div>
    );
}