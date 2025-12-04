import BackButton from "../../components/BackButton";
import SmartLink from "../../components/SmartLink";

export default function KH_RCOM_Soundtrack() {
    return (
        <div className="py-15 pb-30 px-10 md:px-50 text-[18px] md:text-[20px]">
            <BackButton href="/soundtracks" />
            <h2 className="text-2xl pt-4 pb-3 md:text-2xl font-medium">Kingdom Hearts Birth by Sleep Final Mix Soundtrack</h2>
            <div className="flex flex-col gap-4 pt-7">
                <SmartLink text="Opening Movie" type="youtube" url="https://youtu.be/kU1dehayU2o" />
                <SmartLink text="YouTube Playlist" type="youtube" url="https://youtu.be/WnPtx7nE-3Y?list=PLKOgquLeB256HJsZXJBoVBG2LjNCif41T" />
            </div>

        </div>
    );
}