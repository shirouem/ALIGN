"use client";

import { motion, Variants } from "framer-motion";

export default function Philosophy() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="philosophy" className="bg-background-dark py-32 px-6 lg:px-8 border-t border-white/5">
            <motion.div
                className="mx-auto max-w-7xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-medium tracking-tighter text-white max-w-2xl">
                        Revenue is not created by individuals. <span className="text-slate-500">It emerges from overlapping influence.</span>
                    </motion.h2>

                    <motion.div variants={itemVariants} className="flex gap-8 items-end">
                        {/* Reach Chart */}
                        <div className="flex flex-col gap-2 w-32">
                            <div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest font-mono">
                                <span>Reach</span>
                                <span>High</span>
                            </div>
                            <div className="h-40 flex items-end gap-1">
                                <motion.div initial={{ height: 0 }} whileInView={{ height: "20%" }} transition={{ duration: 1, delay: 0.1 }} className="w-full bg-slate-800 rounded-sm"></motion.div>
                                <motion.div initial={{ height: 0 }} whileInView={{ height: "40%" }} transition={{ duration: 1, delay: 0.2 }} className="w-full bg-slate-700 rounded-sm"></motion.div>
                                <motion.div initial={{ height: 0 }} whileInView={{ height: "60%" }} transition={{ duration: 1, delay: 0.3 }} className="w-full bg-slate-600 rounded-sm"></motion.div>
                                <motion.div initial={{ height: 0 }} whileInView={{ height: "80%" }} transition={{ duration: 1, delay: 0.4 }} className="w-full bg-slate-500 rounded-sm"></motion.div>
                                <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ duration: 1, delay: 0.5 }} className="w-full bg-white rounded-sm"></motion.div>
                            </div>
                            <div className="text-right text-2xl font-medium text-white">4M+</div>
                        </div>

                        {/* Capture Chart */}
                        <div className="flex flex-col gap-2 w-32">
                            <div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest font-mono">
                                <span>Capture</span>
                                <span>Low</span>
                            </div>
                            <div className="h-40 flex items-end gap-1 relative">
                                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-red-500/50"></div>
                                <motion.div initial={{ height: 0 }} whileInView={{ height: "10%" }} transition={{ duration: 1, delay: 0.1 }} className="w-full bg-slate-900 border border-slate-800 rounded-sm"></motion.div>
                                <motion.div initial={{ height: 0 }} whileInView={{ height: "15%" }} transition={{ duration: 1, delay: 0.2 }} className="w-full bg-slate-900 border border-slate-800 rounded-sm"></motion.div>
                                <motion.div initial={{ height: 0 }} whileInView={{ height: "8%" }} transition={{ duration: 1, delay: 0.3 }} className="w-full bg-slate-900 border border-slate-800 rounded-sm"></motion.div>
                                <motion.div initial={{ height: 0 }} whileInView={{ height: "12%" }} transition={{ duration: 1, delay: 0.4 }} className="w-full bg-slate-900 border border-slate-800 rounded-sm"></motion.div>
                                <motion.div initial={{ height: 0 }} whileInView={{ height: "5%" }} transition={{ duration: 1, delay: 0.5 }} className="w-full bg-red-500 rounded-sm animate-pulse"></motion.div>
                            </div>
                            <div className="text-right text-2xl font-medium text-red-400">~2%</div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden md:grid-cols-2">
                    <motion.div variants={itemVariants} className="bg-[#0A0A0A] p-12 hover:bg-[#0F0F0F] transition-colors group">
                        <span className="material-symbols-outlined text-slate-500 text-4xl mb-6 group-hover:text-white transition-colors">podcasts</span>
                        <h3 className="text-2xl font-medium text-white mb-4">The Individual Myth</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Existing tools track single clicks. They fail to measure compounded distribution across networks.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-[#0A0A0A] p-12 hover:bg-[#0F0F0F] transition-colors group">
                        <span className="material-symbols-outlined text-slate-500 text-4xl mb-6 group-hover:text-white transition-colors">inventory_2</span>
                        <h3 className="text-2xl font-medium text-white mb-4">Broken Attribution</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Calculates revenue contribution across multiple touchpoints. Models interaction overlap between participants.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
