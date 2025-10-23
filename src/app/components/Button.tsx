import Link from "next/link";

interface ButtonProps {
    text: string;
    href: string;
}

export default function Button({ text, href }: ButtonProps) {
    return (
        <Link 
            href={href}
            className="bg-black text-white px-6 py-2 hover:px-4 hover:bg-yellow-400 hover:text-black"
        >
            {text}
        </Link>
    );
}