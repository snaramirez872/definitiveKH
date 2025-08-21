import React from "react";
import Image from "next/image";
import he from "he";
import { ogTitleMap } from "@/lib/ogGameTitles";
import { OGGamesProps } from "@/lib/types";

export const OriginalGamesPopUp: React.FC<OGGamesProps> = ({ isOpen, onClose, title, release_date_JP, release_date_NA, platform, genre, description, src}) => {
    if (!isOpen) return null;

    // Tailwind for Actual Pop Ups
    let popUpContainer = "justify-center items-center h-[40vh] w-[80vh] p-[5vh] rounded-[5vh]";
    let closeButton = "w-[25%] text-[18px] p-[calc(18px/4)] rounded-[20px] cursor-pointer";

    if (he.decode(title) === he.decode(ogTitleMap[0])) { // Kingdom Hearts I
        popUpContainer += " bg-black bg-[linear-gradient(0deg,rgba(0,0,0,1)0%,rgb(8,0,46)63%,rgb(14,0,92)100%)] border-[5px] border-[rgb(38,0,255)] text-[rgb(106,158,218)]";
        closeButton += " bg-[rgb(14,0,92)] text-[rgb(190,22,0)] hover:bg-[rgb(190,22,0)] hover:text-white";
    }

    return (
        <div
            className="fixed flex justify-center items-center z-[9999] h-[100vh] w-[100vw] top-0 left-0 text-[18px] bg-[rgba(0,0,0,0.2)] backdrop-blur-lg"
            onClick={onClose}
        >
            <div
                className={popUpContainer}
                onClick={(e) => e.stopPropagation}
            >
                <section
                    className="flex justify-between items-center"
                >
                    <div>
                        <p><b>Title:</b> {he.decode(title)}</p>
                        <p><b>Release Date (Japan):</b> {release_date_JP.join(', ')}</p>
                        <p><b>Release Date (North America):</b> {release_date_NA.join(', ')}</p>
                        <p><b>Platform:</b> {platform.join(', ')}</p>
                        <p><b>Genre:</b> {genre.join(', ')}</p>
                    </div>
                    <Image src={src} alt="" height="150" width="100" />
                </section>
                <section>
                    <p
                        className="mt-[36px]"
                    >
                        {he.decode(description)}
                    </p>
                </section>
                <section
                    className="flex w-[100%] justify-center mt-[36px] mb-[18px]"
                >
                    <button 
                        className={closeButton}
                        onClick={onClose}
                    >
                        Close
                    </button>
                </section>
            </div>
        </div>
    );
}