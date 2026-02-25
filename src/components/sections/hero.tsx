"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function Hero() {
    return (
        <Section theme="dark" className="relative flex min-h-screen items-center justify-center pt-20">
            {/* Background glow or gradient effect if needed */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-black to-zinc-950" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
                >
                    The infrastructure for distribution-first revenue.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="mx-auto mt-8 max-w-2xl text-lg text-white/60 sm:text-xl"
                >
                    Bridging the gap between raw distribution and product infrastructure.
                    The engine for creator parity, towards beyond sponsorship.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    className="mt-12 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                >
                    <Button variant="primary" size="lg">
                        Request Access
                    </Button>
                    <Button variant="outline" size="lg">
                        View Case Studies
                    </Button>
                </motion.div>
            </div>
        </Section>
    );
}
