import BackButton from "../../components/BackButton";
import SmartLink from "../../components/SmartLink";

export default function KH3_Soundtrack() {
    return (
        <div className="py-15 pb-30 px-10 md:px-20 text-[18px] md:text-[20px]">
            <BackButton href="/soundtracks" />
            <h2 className="text-2xl pt-4 pb-3 md:text-2xl font-medium">Kingdom Hearts III</h2>
            <p className="pt-1"><b>SPOILER WARNING: </b>Opening Movie 1 for this title contains contains major spoilers for many other games in the series.</p>
            <div className="flex flex-col gap-4 pt-7">
                <SmartLink text="Opening Movie 1" type="youtube" url="https://youtu.be/PYAlnhy88Y4" />
                <SmartLink text="Opening Movie 2" type="youtube" url="https://youtu.be/d8MGyUjEW8Q" />
                <SmartLink text="YouTube Playlist" type="youtube" url="https://youtu.be/Xruws5dQU2w?list=PLKOgquLeB254wQNE4SqH7EM9SWk0f5tdy" />
                <SmartLink text="Spotify" type="spotify" url="https://open.spotify.com/album/3e7IU11zNQe3GzMnGDeQOX?si=cwGlBklvRYqIbyoD4Pwghw" />
                <SmartLink text="Apple Music" type="applemusic" url="https://music.apple.com/us/album/kingdom-hearts-iii-ii-8-unchained-χ-union-χ-cross-original/1536667542" />
            </div>

        </div>
    );
}