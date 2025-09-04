import React from "react";
import Image from "next/image";
import he from "he";
import { collGameTitles } from "@/lib/collTitles";
import { CollProps } from "@/lib/types";

export const CollectionsPopUp: React.FC<CollProps> = ({ isOpen, onClose, title, release_date_JP, release_date_NA, release_date_EU_AUS, release_date_WW, platform, description, src }) => {
    if (!isOpen) return null;

    // Tailwind for Actual Pop Ups
    let popUpContainer = "justify-center items-center w-[97vh] p-[5vh] rounded-[5vh]";
    let closeButton = "w-[25%] text-[18px] p-[calc(18px/4)] rounded-[20px] cursor-pointer";
    const closeButtonKH2 = closeButton + " bg-black text-white border-t-2 border-l-2 border-[rgb(99,99,99)] hover:bg-[linear-gradient(180deg,rgb(54,0,0)_0%,rgb(136,0,0)_100%)]";
    let desc = "mt-[36px]"

    // Kingdom Hearts 1.5
    if (he.decode(title) === he.decode(collGameTitles[0])) {
        popUpContainer += " bg-black bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgb(8,0,46)_63%,rgb(14,0,92)_100%)] border-[5px] border-[rgb(38,0,255)] text-[rgb(106,158,218)]";
        closeButton += " bg-[rgb(14,0,92)] text-[rgb(119,119,119)] hover:bg-[rgb(190,22,0)] hover:text-white";
    }

    // Kingdom Hearts 2.5, 1.5 + 2.5
    if (he.decode(title) === he.decode(collGameTitles[1]) || he.decode(title) === he.decode(collGameTitles[3])) {
        popUpContainer += " bg-[linear-gradient(180deg,rgb(0,4,31)_0%,rgb(0,15,112)_100%)] border-t-2 border-t-white border-l-2 border-l-black border-r-2 border-r-[rgb(8,0,46)] border-b-2 border-b-[rgb(8,0,46)] text-white";
        closeButton = closeButtonKH2;
        desc += " text-yellow-300";
    }

    // Kingdom Hearts 2.8
    if (he.decode(title) === he.decode(collGameTitles[2])) {
        popUpContainer += " bg-[linear-gradient(60deg,rgba(79,0,75,1)0%,rgba(170,0,255,1)100%)] text-white";
        closeButton = closeButtonKH2;
    }

    // Kingdom Hearts TSF, AIOP, IMP
    if (he.decode(title) === he.decode(collGameTitles[4]) || he.decode(title) === he.decode(collGameTitles[5]) || he.decode(title) === he.decode(collGameTitles[6]) ) {
            popUpContainer += " text-white bg-[linear-gradient(101deg,rgba(51,51,51,1)0%,rgba(92,92,92,1)100%)]";
            closeButton = closeButtonKH2;
            desc += " text-yellow-300";
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
                        <p><b>Release Date (EU and AUS):</b> {release_date_EU_AUS.join(', ')}</p>
                        <p><b>Release Date (Worldwide):</b> {release_date_WW.join(', ')}</p>
                        <p><b>Platform:</b> {platform.join(', ')}</p>
                    </div>
                    <Image src={src} alt="" height="150" width="100" />
                </section>
                <section>
                    <p className={desc}>
                        {he.decode(description)}
                    </p>
                </section>
                <section
                    className="flex w-[100%] justify-center mt-[48px]"
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