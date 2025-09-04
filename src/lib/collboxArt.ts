import { StaticImageData } from "next/image";

// Game Box Art
import KH1_5 from "@/assets/games/collections/kh1_5.jpg";
import KH2_5 from "@/assets/games/collections/kh2_5.jpg";
import KH2_8 from "@/assets/games/collections/kh2_8.jpg";
import KH1_5_2_5 from "@/assets/games/collections/kh1_5-2_5.jpg";
import KH_TSF from "@/assets/games/collections/kh_TSF.jpg";
import KH_AIOP from "@/assets/games/collections/kh_AIOP.jpg";
import KH_IMP from "@/assets/games/collections/kh_IMP.jpg";

// Map of Images
export const collectionImages: Record<number, StaticImageData> = {
    0: KH1_5,
    1: KH2_5,
    2: KH2_8,
    3: KH1_5_2_5,
    4: KH_TSF,
    5: KH_AIOP,
    6: KH_IMP
}