import Link from "next/link";

interface BackButtonProps {
    href: string;
}

export default function BackButton({ href }: BackButtonProps) {
    return (
        <Link 
            href={href}
            className="bg-black text-white px-6 py-2 hover:px-4 hover:bg-yellow-400 hover:text-black"
        >
            Back
        </Link>
    );
}