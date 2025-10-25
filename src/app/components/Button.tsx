import Link from "next/link";

interface ButtonProps {
    text: string;
    href: string;
}

export default function Button({ text, href }: ButtonProps) {
    return (
        <Link 
            href={href}
            className="
                cursor-pointer px-4 py-2
                w-[60%] hover:w-[45%]
                bg-black text-white hover:text-black hover:bg-yellow-400
                md:w-[30%] md:hover:w-[25%]
            "
        >
            {text}
        </Link>
    );
}