import BackButton from "../../components/BackButton";
import SmartLink from "../../components/SmartLink";

export default function KH1_Soundtrack() {
    return (
        <div className="py-15 pb-30 px-10 md:px-20 text-[18px] md:text-[20px]">
            <BackButton href="/soundtracks" />
            <h2 className="text-2xl pt-4 pb-3 md:text-2xl font-medium">Kingdom Hearts Soundtrack</h2>
            <p className="pt-1">The first link is to the opening movie featured when starting a new game in Kingdom Hearts I: Final Mix.</p>
            <p className="pt-4">In both the Spotify and Apple Music compilations, the soundtrack for Kingdom Hearts I is in Discs 1 and 2. You may listen to Disc 3 if you wish, however this is select music from Chain of Memories.</p>
            <div className="flex flex-col gap-4 pt-7">
                <SmartLink text="Opening Movie" type="youtube" url="https://youtu.be/_dLOO2SbdH0?si=v_ajg3qGh-iGnIOm" />
                <SmartLink text="Spotify Playlist" type="spotify" url="https://open.spotify.com/album/59xa0duBH2doywRKohAqIY?si=zXfN1fGqQjOlV67yslYIvg" />
                <SmartLink text="Apple Music Playlist" type="applemusic" url="https://music.apple.com/gb/album/kingdom-hearts-hd-1-5-remix-original-soundtrack/1670071081" />
            </div>
        </div>
    );
}