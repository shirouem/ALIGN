"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
            {/* Background Decor with Parallax */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    style={{ y: bgY1 }}
                    className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-slate-800/20 via-transparent to-transparent opacity-50 blur-3xl"
                />
                <motion.div
                    style={{ y: bgY2 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[150%] bg-white/5"
                />
                <motion.div
                    style={{ y: bgY2 }}
                    className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5"
                />
                <motion.div
                    style={{ y: bgY3 }}
                    className="absolute right-[10%] top-[20%] w-[400px] h-[600px] border border-white/10 rounded-[100px] rotate-12 opacity-20 blur-sm"
                />
                <motion.div
                    style={{ y: bgY1 }}
                    className="absolute left-[10%] bottom-[30%] w-[300px] h-[300px] border border-white/5 rounded-full opacity-10"
                />
            </div>

            <motion.div
                style={{ y: textY, opacity: textOpacity }}
                className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-10 mt-[-10vh]"
            >
                <motion.h1
                    className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.05]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    The infrastructure for <br /> distribution-first revenue<span className="text-emerald-600">.</span>
                </motion.h1>

                <motion.p
                    className="max-w-xl text-xl text-slate-400 leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    Launch faster on the internet’s founder platform.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6 pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        className="h-12 w-full sm:w-[220px] rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                    >
                        Request Access
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
                        whileTap={{ scale: 0.96 }}
                        className="h-12 w-full sm:w-[220px] rounded-full border border-white/20 text-white font-medium transition-colors flex items-center justify-center"
                    >
                        View Case Studies
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}
