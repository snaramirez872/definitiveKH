import { StaticImageData } from "next/image";

// Game Box Art
import KH1_FM from "@/assets/games/remastered/kh_fm.jpg";
import KH_RCOM from "@/assets/games/remastered/kh_rcom.jpg";
import KH2_FM from "@/assets/games/remastered/kh2_fm.jpg";
import KH_358_HD from "@/assets/games/remastered/kh_358_hd.jpg";
import KH_BBS_FM from "@/assets/games/remastered/kh_bbs_fm.jpg";
import KH_RC_HD from "@/assets/games/remastered/kh_rc_hd.jpg";
import KH_DDD_HD from "@/assets/games/remastered/kh_ddd_hd.jpg";

// Map of Images
export const remasteredGamesImages: Record<number, StaticImageData> = {
    0: KH1_FM,
    1: KH_RCOM,
    2: KH2_FM,
    3: KH_358_HD,
    4: KH_BBS_FM,
    5: KH_RC_HD,
    6: KH_DDD_HD
}