import BackButton from "../../components/BackButton";
import SmartLink from "../../components/SmartLink";

export default function KH_RCOM_Soundtrack() {
    return (
        <div className="py-15 pb-30 px-10 md:px-20 text-[18px] md:text-[20px]">
            <BackButton href="/soundtracks" />
            <h2 className="text-2xl pt-4 pb-3 md:text-2xl font-medium">Kingdom Hearts Re:Coded Soundtrack</h2>
            <p className="pt-1"><b>SPOILER WARNING: </b>The Opening Movie for this title contains contains major spoilers for Kingdom Hearts I, Re:Chain of Memories, and II.</p>
            <div className="flex flex-col gap-4 pt-7">
                <SmartLink text="Opening Movie" type="youtube" url="https://youtu.be/406y8AvF_zc" />
                <SmartLink text="Original NDS Game OST" type="youtube" url="https://youtu.be/EK4Nas0mcpM?list=PL1D4E1B91FC330A96" />
            </div>

        </div>
    );
}