import OriginalGames from "../components/Games/OriginalGames";

export default function Games() {
    return (
        <div
            className="flex flex-col justify-center items-center py-[5vh] px-[6vh] text-[18px] gap-[2vh]"
        >
            <h2 className="text-2xl font-semibold mt-[calc(18px*3)]">The Games: Original Releases</h2>
            <OriginalGames />
            <h2 className="text-2xl font-semibold mt-[calc(18px*3)]">The Games: Remastered Titles</h2>
            <h2>The Games: Collections</h2>
        </div>
    );
}
