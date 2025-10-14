import Link from "next/link";

interface ButtonProps {
    text: string;
    href: string;
}

export default function Button({ text, href }: ButtonProps) {
    return (
        <Link 
            href={href}
            className="bg-black text-white"
        >
            {text}
        </Link>
    );
}