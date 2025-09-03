"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }

        return () => {
          document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    return (
        <nav className="relative flex justify-between items-center py-[2.5vh] px-[6vh] z-[10000] bg-black">
            <Link href='/'>
                <h2 className="text-[calc(16px+1vh)] sm:text-[calc(20px+2vh)] font-medium text-white">Definitive KH</h2>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-x-[2vh]">
                <NavLink text="Games" link="/games" />
                <NavLink text="Story" link="#" />
                <NavLink text="History" link="#" />
                <NavLink text="Soundtracks" link="#" />
            </div>

            {/* Mobile Menu Button */}
            {!isOpen && (
                <button
                    className="md:hidden text-white z-[10001] relative"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu size={28} />
                </button>
            )}

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black z-[9998]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Slide-out Menu */}
                        <motion.div
                            key="menu"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.05, ease: "easeInOut" }}
                            className="fixed top-0 right-0 w-1/2 h-screen bg-black flex flex-col items-end gap-y-6 py-6 px-6 mt-[8vh] md:hidden z-[9999]"
                        >   
                            <NavLink text="Games" link="/games" onClick={() => setIsOpen(false)} />
                            <NavLink text="Story" link="#" onClick={() => setIsOpen(false)} />
                            <NavLink text="History" link="#" onClick={() => setIsOpen(false)} />
                            <NavLink text="Soundtracks" link="#" onClick={() => setIsOpen(false)} />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}