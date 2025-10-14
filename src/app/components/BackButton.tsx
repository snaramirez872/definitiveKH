import Link from "next/link";

interface BackButtonProps {
    href: string;
}

export default function BackButton({ href }: BackButtonProps) {
    return (
        <Link 
            href={href}
            className="flex gap-x-3 bg-black text-white w-17 p-2 text-[18px]"
        >
            Back
        </Link>
    );
}