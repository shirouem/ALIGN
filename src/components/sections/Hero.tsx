"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Parallax transforms
    const bgY1 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]); // Strong movement down
    const bgY2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]); // Medium movement down
    const bgY3 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Strong movement up

    // Text container transforms
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative flex flex-col items-center justify-center min-h-[120vh] px-4 pt-32 pb-40 overflow-hidden bg-background-dark">
            {/* Clean, Minimal Organic Background Decor */}
            {/* <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
                <motion.div style={{ y: bgY1 }} className="absolute w-full h-full flex items-center justify-center">
                    <motion.div
                        className="w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-white/[0.02] border border-white/[0.05]"
                        animate={{
                            rotate: [0, 360],
                            borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "30% 70% 50% 50% / 50% 30% 70% 50%", "50% 50% 30% 70% / 40% 60% 40% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
                            x: [0, 50, -50, 0],
                            y: [0, -50, 50, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>

                <motion.div style={{ y: bgY2 }} className="absolute w-full h-full flex items-center justify-center">
                    <motion.div
                        className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-500/[0.02] border border-emerald-500/[0.05]"
                        animate={{
                            rotate: [360, 0],
                            borderRadius: ["60% 40% 30% 70% / 50% 60% 40% 50%", "40% 60% 50% 50% / 60% 40% 60% 40%", "50% 50% 70% 30% / 70% 30% 50% 50%", "60% 40% 30% 70% / 50% 60% 40% 50%"],
                            x: [0, -80, 80, 0],
                            y: [0, 80, -80, 0]
                        }}
                        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>

                <motion.div style={{ y: bgY3 }} className="absolute w-full h-full flex items-center justify-center">
                    <motion.div
                        className="w-[500px] h-[500px] md:w-[900px] md:h-[900px] bg-slate-500/[0.02] border border-slate-500/[0.05]"
                        animate={{
                            rotate: [0, 360],
                            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 20% 80% 50% 50%", "70% 30% 50% 50% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
                            x: [0, 100, -100, 0],
                            y: [0, 100, -100, 0]
                        }}
                        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div> */}

            <motion.div
                style={{ y: textY, opacity: textOpacity }}
                className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-10 mt-[-10vh]"
            >
                <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-sm font-semibold text-slate-900 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" /> */}
                    YC Demo
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.05]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    The infrastructure for <br /> distribution-first revenue<span className="text-emerald-600">.</span>
                </motion.h1>

                <motion.p
                    className="max-w-xl text-xl text-slate-400 leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    Launch faster on the internet's founder platform.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6 pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        className="h-12 w-full sm:w-[220px] rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                    >
                        Request Access
                    </motion.button>

                    <Link href="/thesis" passHref legacyBehavior>
                        <motion.a
                            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
                            whileTap={{ scale: 0.96 }}
                            className="h-12 w-full sm:w-[220px] rounded-full border border-white/20 text-white font-medium transition-colors flex items-center justify-center cursor-pointer"
                        >
                            Read Thesis
                        </motion.a>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
