import { StaticImageData } from "next/image";

export interface TimeSince {
    days: number;
    hrs: number;
    mins: number;
    secs: number;
}

export interface OGGamesProps {
    isOpen: boolean;
    onClose: () => void;
    id: number;
    title: string;
    release_date_JP: string[];
    release_date_NA: string[];
    platform: string[];
    genre: string[];
    description: string;
    src: StaticImageData;
}

export interface RGGamesProps {
    isOpen: boolean;
    onClose: () => void;
    id: number;
    title: string;
    release_date_JP: string[];
    release_date_NA: string[];
    platform: string[];
    description: string;
    src: StaticImageData;
}

export interface CollProps {
    isOpen: boolean;
    onClose: () => void;
    id: number;
    title: string;
    release_date_JP: string[];
    release_date_NA: string[];
    release_date_EU_AUS: string[];
    release_date_WW: string[];
    platform: string[];
    description: string;
    src: StaticImageData;
}