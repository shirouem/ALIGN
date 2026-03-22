"use client";

import { motion } from "framer-motion";

export default function Model() {
    return (
        <section id="model" className="bg-white py-32 px-6 lg:px-8 border-t border-slate-100">
            <div className="mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-slate-900 mb-8">
                            Not influencer marketing.<br />Not affiliate systems.<br />Not marketplaces.
                        </h2>
                        <p className="text-slate-500 text-2xl mb-10 leading-relaxed font-light">
                            Those are static.<br />
                            <strong className="text-slate-900 font-medium tracking-tight">ALIGN is adaptive.</strong>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50"
                    >
                        <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-6">
                            <div>
                                <div className="text-xs text-slate-400 font-mono uppercase mb-1 tracking-wider">Total Revenue Generated (this is mock data :P)</div>
                                <div className="text-4xl font-semibold text-slate-900 tabular-nums tracking-tight">$14,203,000</div>
                            </div>
                            <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">arrow_upward</span> 128%
                            </div>
                        </div>

                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="w-24 text-xs font-mono text-slate-400">Products</div>
                                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "75%" }} transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }} className="h-full bg-black"></motion.div>
                                </div>
                                <div className="w-12 text-right text-xs font-bold text-slate-900">75%</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-24 text-xs font-mono text-slate-400">Affiliate</div>
                                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "45%" }} transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }} className="h-full bg-slate-400"></motion.div>
                                </div>
                                <div className="w-12 text-right text-xs font-bold text-slate-900">45%</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-24 text-xs font-mono text-slate-400">Recurring</div>
                                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }} className="h-full bg-slate-300"></motion.div>
                                </div>
                                <div className="w-12 text-right text-xs font-bold text-slate-900">60%</div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="mt-10 p-4 bg-white rounded-xl border border-slate-100 flex items-center gap-4"
                        >
                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-slate-500">notifications_active</span>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-slate-900">Revenue Alert</div>
                                <div className="text-xs text-slate-500">Q4 projections exceeded by 24%</div>
                            </div>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
