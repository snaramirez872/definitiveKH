"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import he from "he";
import { RemasteredGamesPopUp } from "./PopUps/RemasteredGamesPopUp";
import { RGGamesProps } from "@/lib/types";
import { remasteredGamesImages } from "@/lib/rgBoxArt";
import remasteredGames from "../../../../api/data/json/remasteredGames.json";

export default function RemasteredGames() {
    const [selected, setSelected] = useState<RGGamesProps | null>(null);

    // Lock Scrolling when Pop Up is Open
    useEffect(() => {
        if (selected) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [selected]);

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-[4vh] gap-y-[4vh] p-4"
        >
            {remasteredGames.map((game) => {
                const image = remasteredGamesImages[game.id];

                if (!image) return null;

                return (
                    <div
                        key={game.id}
                        onClick={() =>
                            setSelected({
                                ...game,
                                isOpen: true,
                                onClose: () => setSelected(null),
                                src: image,
                            })
                        }
                        className="cursor-pointer w-[200px] transition-transform duration-200 ease hover:scale-105"
                    >
                        <Image 
                            src={image}
                            alt={game.title}
                            className="mt-[2vh] w-[200px] h-[300px]"
                        />
                        <p className="text-center w-[200px]">
                            {he.decode(game.title)}
                        </p>
                    </div>
                );
            })}

            {selected && (
                <RemasteredGamesPopUp 
                    {...selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </div>
    );
}