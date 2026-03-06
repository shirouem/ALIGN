"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100, x: "-50%" }}
                animate={{ y: 0, x: "-50%" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-6 left-1/2 z-50 w-[95%] max-w-[800px] transition-all duration-300 rounded-full overflow-hidden border ${scrolled
                    ? "bg-black/20 backdrop-blur-[5px] border-white/10 shadow-xl"
                    : "bg-black/10 backdrop-blur-[4px] border-white/5 shadow-md"
                    }`}
            >
                {/* Subtle light hit on the top inner edge to frame the glass */}
                <div className="absolute inset-x-0 top-0 h-px bg-white/20 pointer-events-none" />

                <div className="relative flex h-[60px] items-center justify-between px-2 w-full z-10">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-3 pl-4">
                        <Link href="/" className="text-[17px] font-bold tracking-widest text-white drop-shadow-md transition-colors hover:text-white/80 block">
                            ALIGN
                        </Link>
                    </motion.div>

                    <nav className="hidden md:flex items-center gap-8 drop-shadow-sm">
                        <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.95 }}>
                            <Link href="#philosophy" className="text-[14px] font-medium text-white hover:text-white/80 transition-all duration-200 block">
                                Philosophy
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.95 }}>
                            <Link href="#pillars" className="text-[14px] font-medium text-white hover:text-white/80 transition-all duration-200 block">
                                The Core
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.95 }}>
                            <Link href="#model" className="text-[14px] font-medium text-white hover:text-white/80 transition-all duration-200 block">
                                The Model
                            </Link>
                        </motion.div>
                    </nav>

                    <div className="flex items-center gap-2 pr-2">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.96 }}
                            className="hidden sm:flex h-[44px] items-center justify-center rounded-full bg-white px-6 text-[14px] font-semibold text-black transition-colors duration-200 hover:bg-slate-50 shadow-md"
                        >
                            Request Access
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className="md:hidden p-2 text-white rounded-full hover:bg-black/10 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined">{isMobileMenuOpen ? "close" : "menu"}</span>
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[95%] bg-black/60 backdrop-blur-[6px] shadow-2xl border border-white/10 rounded-3xl px-6 py-6 flex flex-col gap-6 overflow-hidden"
                >
                    <div className="absolute inset-x-0 top-0 h-px bg-white/20 pointer-events-none" />

                    <div className="relative z-10 flex flex-col gap-6">
                        <Link href="#philosophy" className="text-base font-medium text-white drop-shadow-sm hover:text-white/80 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            Philosophy
                        </Link>
                        <Link href="#pillars" className="text-base font-medium text-white drop-shadow-sm hover:text-white/80 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            The Core
                        </Link>
                        <Link href="#model" className="text-base font-medium text-white drop-shadow-sm hover:text-white/80 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            The Model
                        </Link>
                        <button className="h-12 flex items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition-all duration-300 hover:bg-slate-50 w-full shadow-md mt-2">
                            Request Access
                        </button>
                    </div>
                </motion.div>
            )}
        </>
    );
}
