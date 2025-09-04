import OriginalGames from "../components/Games/OriginalGames";
import RemasteredGames from "../components/Games/RemasteredGames";
import Collections from "../components/Games/Collections";

export default function Games() {
    return (
        <div
            className="flex flex-col justify-center items-center py-[5vh] px-[6vh] text-[18px] gap-[2vh]"
        >
            <h2 className="text-2xl font-semibold mt-[calc(18px*3)] text-center">The Games: Original Releases</h2>
            <OriginalGames />
            <h2 className="text-2xl font-semibold mt-[calc(18px*3)] text-center">The Games: Remastered Titles</h2>
            <RemasteredGames />
            <h2 className="text-2xl font-semibold mt-[calc(18px*3)] text-center">The Games: Collections</h2>
            <Collections />
        </div>
    );
}
