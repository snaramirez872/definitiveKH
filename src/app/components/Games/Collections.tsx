"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import he from "he";
import { CollectionsPopUp } from "./PopUps/CollectionsPopUp";
import { CollProps } from "@/lib/types";
import { collectionImages } from "@/lib/collboxArt";
import collections from "../../../../api/data/json/collections.json";

export default function Collections() {
    const [selected, setSelected] = useState<CollProps | null>(null);

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
            {collections.map((game) => {
                const image = collectionImages[game.id];

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
                <CollectionsPopUp 
                    {...selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </div>
    );
}