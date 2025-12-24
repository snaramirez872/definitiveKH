import Link from "next/link";
import Button from "../components/Button";
import SmartLink from "../components/SmartLink";

export default function soundtracks() {
    return (
        <div className="py-15 pb-30 px-10 md:px-50 text-[18px] md:text-[20px]">
            <h1 className="text-3xl py-3 md:text-3xl font-medium">The Soundtracks</h1>
            <p className="pb-9">The music of the Kingdom Hearts Games are all composed by <Link href="https://en.wikipedia.org/wiki/Yoko_Shimomura" target="_blank" rel="noreferrer" className="underline text-blue-500">Yoko Shimomura</Link> with orchestral arrangements by <Link href="https://en.wikipedia.org/wiki/Kaoru_Wada" target="_blank" rel="noreferrer" className="underline text-blue-500">Kaoru Wada</Link>. The games also feature many vocal works with the most notable of them being the four main theme songs: &quot;Hikari&quot;, &quot;Passion&quot;, &quot;Chikai&quot;, and &quot;Face my Fears&quot;. These songs were both written and performed by Japanese-American pop star <Link href="https://en.wikipedia.org/wiki/Hikaru_Utada" target="_blank" rel="noreferrer" className="underline text-blue-500">Hikaru Utada</Link>. Arrangements from Square Enix&apos;s Final Fantasy series and many Disney Intellectual Properties are also used to reflect the usage of Final Fantasy characters, Disney characters, and Disney-themed Worlds.</p>
            <h2 className="text-2xl py-3 md:text-2xl font-medium">The Main Themes</h2>
            <p className="pb-7">As stated above, Hikaru Utada wrote and performed each of the four main themes of the games: &quot;Hikari&quot;, &quot;Passion&quot;, &quot;Chikai&quot;, and &quot;Face My Fears&quot;. The first three songs also have English versions: &quot;Simple and Clean&quot;, &quot;Sanctuary&quot; (Passion is an English name but the song itself has Japanese lyrics), and &quot;Don&apos;t Think Twice&quot;. &quot;Face My Fears&quot; has an English version as well but it&apos;s under the same name. In the games, these songs are played during anime-esque opening movies. </p>
            <p className="pb-7">The opening movies for Kingdom Hearts I, Re:Chain of Memories, Birth By Sleep, and Re:Coded all feature a remix of &quot;Hikari&quot;/&quot;Simple and Clean&quot; produced by PlanitB. A different remix of &quot;Hikari&quot;/&quot;Simple and Clean&quot; titled &quot;Ray of Hope MIX&quot; was produced by PUNPEE for the opening movie of Kingdom Hearts 0.2 Birth By Sleep -A Fragmentary Passage-. The opening movie for Kingdom Hearts Dream Drop Distance uses an orchestral arrangement of &quot;Hikari&quot;/&quot;Simple and Clean&quot;. The opening movie for Kingdom Hearts Melody of Memory uses the original mix of &quot;Hikari&quot;/&quot;Simple and Clean&quot;. Kingdom Hearts III has a pair of opening movies that use &quot;Chikai&quot;/&quot;Don&apos;t Think Twice&quot; and &quot;Face My Fears&quot; resepctively. The rest of the games use &quot;Passion&quot;/&quot;Sanctuary&quot; in their opening movies. Different arrangements of each of these songs also exist in the games themselves and in concert form.</p>
            <p className="pb-7">The following links can be used to explore the different soundtracks of the Kingdom Hearts games.</p>
            <div className="flex flex-col gap-4">
                <Button text="Kingdom Hearts Final Mix" href="/soundtracks/kingdom_hearts_fm" />
                <Button text="Kingdom Hearts Re:Chain of Memories" href="/soundtracks/kingdom_hearts_re-com" />
                <Button text="Kingdom Hearts II Final Mix" href="/soundtracks/kingdom_hearts_iifm" />
                <Button text="Kingdom Hearts Birth by Sleep Final Mix" href="/soundtracks/kingdom_hearts_bbsfm" />
                <Button text="Kingdom Hearts 358/2 Days" href="/soundtracks/kingdom_hearts_358_days" />
                <Button text="Kingdom Hearts Re:Coded" href="/soundtracks/kingdom_hearts_recoded" />
                <Button text="Kingdom Hearts Dream Drop Distance HD" href="/soundtracks/kingdom_hearts_ddd" />
                <Button text="Kingdom Hearts III + Re:Mind" href="/soundtracks/kingdom_hearts_iii" />
            </div>
            <p className="py-7">Any game not listed above uses various arrangements that are already listed and linked or are currently not released to the public.</p>
            <div>
                <div>
                    <h2 className="text-2xl py-3 md:text-2xl font-medium">Kingdom Hearts Orchestra -World of Tres-</h2>
                    <p>In celebration of Kingdom Hearts III in 2019, Square Enix organized the Kingdom Hearts World of Tres Orchestra Tour. The tour ran from April 2019 to November 2019. Various arrangements from the Kingdom Hearts franchise were performed by the Kanagawa Philharmonic Orchestra and led/composed by Yoko Shimomoura herself.</p>
                    <p>To read more info about the World of Tres Orchestra, please go <Link href="https://www.khwiki.com/Kingdom_Hearts_Orchestra_-World_of_Tres-" target="_blank" rel="noreferrer" className="underline text-blue-500">here</Link> to the Kingdom Hearts Wiki Page dedicated to it.</p>
                    <p>A live recordng of the show is part of a DLC bundle included with Kingdom Hearts III Re Mind.</p>
                </div>
            </div>
        </div>
    );
}