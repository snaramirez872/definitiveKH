import OriginalGames from "../components/Games/OriginalGames";
import RemasteredGames from "../components/Games/RemasteredGames";
import Collections from "../components/Games/Collections";
import Link from "next/link";

export default function Games() {
    return (
        <div
            className="flex flex-col justify-center items-center py-[10vh] px-[6vh] text-[18px] gap-[2vh]"
        >
            <h1 className="text-3xl font-semibold mt-[calc(18px*3)] text-center">The Games</h1>
            <p className="text-center">Below are lists of each game, remaster, and collection in each series. Click each image for more information!</p>
            <p className="text-center"><i>All images used are official works that belong to Disney and Square Enix. These are used here for educational purposes only.</i></p>
            <h2 className="text-2xl font-semibold mt-[calc(18px*3)] text-center">The Original Releases</h2>
            <OriginalGames />
            <h2 className="text-2xl font-semibold mt-[calc(18px*3)] text-center">The Remastered Titles</h2>
            <RemasteredGames />
            <h2 className="text-2xl font-semibold mt-[calc(18px*3)] text-center">The Collections</h2>
            <Collections />
            <h2 className="text-2xl font-semibold mt-[calc(18px*3)] text-center">Reccomended Plan</h2>
            <p className="text-start px-5 md:px-15">A big reason as to why this world is so complex is the fact that all of the games have some sort of connection with each other and understanding these connections are needed for various aspects of Kingdom Hearts III and future titles of the series. This means quite a lot of information needs to be digested should you be someone that cares about lore. Unless you happen to have original copies of the games lying around along with the consoles they were made for, the only way to really experience the Kingdom Hearts games these days prior to KHIII and ReMind are through the <b>1.5+2.5 collection</b> and the <b>2.8 collection</b>. Click the two corresponding images for each collection above for more information on each! The Integrum Masterpiece is on Steam and can be viewed/purchased <Link href="https://store.steampowered.com/sub/1000794/" target="_blank" rel="noreferrer" className="underline text-blue-500">here</Link>. Additional information for the Integrum Masterpiece can be found when clicking the image for it directly above this section. On Steam, Square Enix usually takes part in every major Steam Sale and the Kingdom Hearts collections and KHIII + ReMind are also usually among the titles that recieve a discount. When it comes to the mobile games, best way to experience these since they are discontinued is to look up lore videos about them on YouTube. I unfortunately don't have any specific reccomendations for this.</p>
        </div>
    );
}
