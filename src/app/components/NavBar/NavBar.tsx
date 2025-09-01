import Link from "next/link";
import NavLink from "./NavLink";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center py-[2.5vh] px-[6vh] z-[10000] bg-black">
            <Link href='/'>
                <h2 className="text-[calc(20px+2vh)] font-medium text-white">Definitive KH</h2>
            </Link>
            <div className="flex gap-x-[2vh]">
                <NavLink text="Games" link="/games" />
                <NavLink text="Story" link="#" />
                <NavLink text="History" link="#" />
                <NavLink text="Soundtracks" link="#" />
            </div>
        </nav>
    );
}