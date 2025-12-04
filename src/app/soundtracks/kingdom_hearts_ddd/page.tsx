import BackButton from "../../components/BackButton";
import SmartLink from "../../components/SmartLink";

export default function KHDDD_Soundtrack() {
    return (
        <div className="py-15 pb-30 px-10 md:px-50 text-[18px] md:text-[20px]">
            <BackButton href="/soundtracks" />
            <h2 className="text-2xl pt-4 pb-3 md:text-2xl font-medium">Kingdom Hearts Dream Drop Distance Soundtrack</h2>
            <p className="pt-1">The first link is to the opening movie featured when starting a new game in Kingdom Hearts Dream Drop Distance HD.</p>
            <div className="flex flex-col gap-4 pt-7">
                <SmartLink text="Opening Movie" type="youtube" url="https://youtu.be/dEce09STScE" />
                <SmartLink text="YouTube Playlist" type="youtube" url="https://youtu.be/k5pOhEJs08A?list=PLF94CA5DC51DDA816" />
            </div>
        </div>
    );
}