import Link from "next/link";

interface NavLinkProps {
    text: string;
    link: string;
}

export default function NavLink({ text, link }: NavLinkProps) {
    return (
        <Link 
            href={link}
            className="no-underline text-[20px] text-white hover:text-[rgb(255,214,33)]"
        >
            {text}
        </Link>
    );
}