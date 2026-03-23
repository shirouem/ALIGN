"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-32 px-6 bg-[#F5F7F5] text-center">
            <div className="mx-auto max-w-4xl flex flex-col items-center">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl font-medium text-slate-900 mb-8 tracking-tighter leading-[1.1]"
                >
                    Ready to align <br /> your revenue?
                </motion.h2>

                {/* <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light"
                >
                    We are currently accepting applications for {new Date().getFullYear()}. Secure your infrastructure audit today.
                </motion.p> */}

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="rounded-full bg-black px-10 py-5 text-lg font-semibold text-white transition-all shadow-xl hover:shadow-black/20"
                >
                    Request Access
                </motion.button>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8 text-sm text-slate-400"
                >
                    Audit requires no commitment.
                </motion.p>
            </div>
        </section>
    );
}
