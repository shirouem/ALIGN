"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
                {/* Logo */}
                <div className="flex flex-col items-start leading-none cursor-pointer">
                    <div className="text-xl font-bold tracking-tighter text-white">ALIGN</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/50 mt-0.5">By Noer</div>
                </div>

                {/* Navigation - Desktop */}
                <nav className="hidden space-x-8 md:flex">
                    {["Philosophy", "The Core", "The Model"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Action Button */}
                <div className="hidden md:block">
                    <Button variant="primary" size="sm">
                        Request Access
                    </Button>
                </div>

                {/* Mobile Menu Button - simplified for MVP */}
                <button className="flex flex-col space-y-1.5 md:hidden">
                    <span className="h-0.5 w-6 block bg-white"></span>
                    <span className="h-0.5 w-6 block bg-white"></span>
                    <span className="h-0.5 w-6 block bg-white"></span>
                </button>
            </div>
        </motion.header>
    );
}
