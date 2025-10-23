import Link from "next/link";

interface NavLinkProps {
    text: string;
    link: string;
    onClick?: () => void;
}

export default function NavLink({ text, link, onClick }: NavLinkProps) {
    return (
        <Link 
            href={link}
            className="no-underline text-[20px] text-white hover:text-yellow-400"
            onClick={onClick}
        >
            {text}
        </Link>
    );
}