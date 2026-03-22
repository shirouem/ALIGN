"use client";

import { motion } from "framer-motion";

export default function Pillars() {
    return (
        <section id="pillars" className="relative bg-[#050505] text-white py-32 px-6 lg:px-8 border-t border-white/5 overflow-hidden">
            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    className="mb-24 max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                        Architect the system.<br className="hidden md:block" />
                        <span className="text-slate-500">Not the negotiation.</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                        Track revenue at the system level—not by clicks, links, or last-touch gestures. Actual revenue mapped across contributors, distributed autonomously.
                    </p>
                </motion.div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* BOX 1: Programmable Campaigns (Large) */}
                    <motion.div
                        className="col-span-1 md:col-span-8 group relative overflow-hidden rounded-[2rem] bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] transition-all hover:bg-white/[0.04] hover:border-white/[0.15] flex flex-col justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Inner subtle glow */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="p-10 z-10 md:w-2/3">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                                <span className="material-symbols-outlined text-slate-300 text-2xl">code_blocks</span>
                            </div>
                            <h3 className="text-3xl font-medium text-white mb-4 tracking-tight">Programmable Campaigns</h3>
                            <p className="text-slate-400 text-lg leading-relaxed font-light">
                                Replace manual negotiations with codified rules. Define nested tier structures, logic-based revenue shares, and strict participation constraints entirely at the system level.
                            </p>
                        </div>
                        {/* Visual motif: Frosted code blocks */}
                        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-40 group-hover:opacity-100 transition-opacity duration-700 hidden md:flex flex-col justify-center items-end pr-8 gap-4 pointer-events-none">
                            <motion.div className="h-10 w-48 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 flex items-center px-4 gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" whileHover={{ scale: 1.05 }}>
                                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                <div className="w-24 h-2 rounded-full bg-white/20"></div>
                            </motion.div>
                            <motion.div className="h-10 w-64 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 flex items-center px-4 gap-3 ml-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" whileHover={{ scale: 1.05 }}>
                                <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                                <div className="w-32 h-2 rounded-full bg-white/20"></div>
                            </motion.div>
                            <motion.div className="h-10 w-56 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 flex items-center px-4 gap-3 ml-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" whileHover={{ scale: 1.05 }}>
                                <div className="w-2 h-2 rounded-full bg-white/80"></div>
                                <div className="w-20 h-2 rounded-full bg-white/20"></div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* BOX 2: Autonomous Payouts (previously BOX 5) */}
                    <motion.div
                        className="col-span-1 md:col-span-4 group relative overflow-hidden rounded-[2rem] bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] transition-all hover:bg-white/[0.04] hover:border-white/[0.15] flex flex-col justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="p-10 z-10 h-full flex flex-col">
                           <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                                <span className="material-symbols-outlined text-slate-300 text-2xl">task_alt</span>
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">Autonomous Resolution</h3>
                            <p className="text-slate-400 leading-relaxed font-light flex-1">
                                Eliminate tracking links and manual dispute resolution. The framework accurately attributes revenue and executes ledger payouts instantly.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
