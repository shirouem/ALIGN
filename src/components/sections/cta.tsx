"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

export function Cta() {
    return (
        <Section theme="light" className="py-32 px-6 bg-[#F5F7F5] text-center">
            <div className="mx-auto max-w-4xl flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block py-1 px-4 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wide mb-8"
                >
                    Pilot Program Open
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-medium text-slate-900 mb-8 tracking-tighter leading-[1.1]"
                >
                    Ready to align <br /> your revenue?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light"
                >
                    We are currently accepting applications for Q4. Secure your infrastructure audit today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <button className="rounded-full bg-black px-10 py-5 text-lg font-semibold text-white hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                        Request Access
                    </button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-sm text-slate-400"
                >
                    Limited spots available. No commitment required for initial audit.
                </motion.p>
            </div>
        </Section>
    );
}
