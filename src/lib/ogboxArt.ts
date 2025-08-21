import { StaticImageData } from "next/image";

// Game Box Art
import KH1 from "@/assets/games/originals/kh1.jpg";
import KH_COM from "@/assets/games/originals/khcom.jpg";
import KH2 from "@/assets/games/originals/kh2.jpg";
import KH_358_2 from "@/assets/games/originals/kh358_2.jpg";
import KH_BBS from "@/assets/games/originals/khbbs.jpg";
import KH_RC from "@/assets/games/originals/khrc.jpg";
import KH_DDD from "@/assets/games/originals/khddd.jpg";
import KH_UX from "@/assets/games/originals/khunionx.jpg";
import KH_UX_BC from "@/assets/games/originals/khunionxBC.jpg";
import KH_02_BBS from "@/assets/games/originals/kh0_2bbs.jpg";
import KH3 from "@/assets/games/originals/kh3.jpg";
import KH3_R from "@/assets/games/originals/kh3r.jpg";
import KH_UX_DR from "@/assets/games/originals/khunionxdr.jpg";
import KH_MOM from "@/assets/games/originals/khmom.jpg";
import KH4 from "@/assets/games/originals/kh4.jpg";

// Map of Images
export const gameImages: Record<number, StaticImageData> = {
    0: KH1,
    1: KH_COM,
    2: KH2,
    3: KH_358_2,
    4: KH_BBS,
    5: KH_RC,
    6: KH_DDD,
    7: KH_UX,
    8: KH_UX_BC,
    9: KH_02_BBS,
    10: KH3,
    11: KH3_R,
    12: KH_UX_DR,
    13: KH_MOM,
    14: KH4,
}