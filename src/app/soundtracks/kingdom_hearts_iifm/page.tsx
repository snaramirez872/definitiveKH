import BackButton from "../../components/BackButton";
import SmartLink from "../../components/SmartLink";

export default function KH_RCOM_Soundtrack() {
    return (
        <div className="py-15 pb-30 px-10 md:px-20 text-[18px] md:text-[20px]">
            <BackButton href="/soundtracks" />
            <h2 className="text-2xl pt-4 pb-3 md:text-2xl font-medium">Kingdom Hearts II Final Mix Soundtrack</h2>
            <p><b>SPOILER WARNING: </b>The Opening Movie for this title contains contains major spoilers for Kingdom Hearts I and Chain of Memories.</p>
            <p>The soundtrack for Kingdom Hearts II: Final Mix encompasses the entirety of Disc 1 to Disc 4 of the Spotify and Apple Music compilations.</p>
            <div className="flex flex-col gap-4 pt-7">
                <SmartLink text="Opening Movie" type="youtube" url="https://youtu.be/_kVnJ52R-F0" />
                <SmartLink text="Spotify Playlist" type="spotify" url="https://open.spotify.com/album/6eVWdfj3yizOc8qtEmF00P?si=YehwEEwKTgC4M188KMyrAA" />
                <SmartLink text="Apple Music Playlist" type="applemusic" url="https://music.apple.com/gb/album/kingdom-hearts-hd-2-5-remix-original-soundtrack/1669111674" />
            </div>

        </div>
    );
}