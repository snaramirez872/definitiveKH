import BackButton from "@/app/components/BackButton";
import SmartLink from "@/app/components/SmartLink";

export default function KH1_Soundtrack() {
    return (
        <div className="py-15 pb-30 px-10 sm:px-50 text-[18px] sm:text-[20px]">
            <BackButton href="/soundtracks" />
            <h2>Kingdom Hearts Soundtrack</h2>
            <p>[Insert text about Kingdom Hearts Soundtrack]</p>
            <SmartLink text="KH1 Opening Movie" type="youtube" url="https://youtu.be/_dLOO2SbdH0?list=RD_dLOO2SbdH0" />
        </div>
    );
}