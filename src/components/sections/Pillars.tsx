"use client";

import { motion, Variants } from "framer-motion";

export default function Pillars() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <section id="pillars" className="bg-background-soft text-slate-900 py-32 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-slate-900 mb-6">The Alignment Layer</h2>
                    <p className="text-xl text-slate-500 max-w-2xl font-light">
                        We are the missing infrastructure. A complete stack to convert attention into enterprise value.
                    </p>
                </motion.div>

                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Pillar 1 */}
                    <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-200 transition-all hover:shadow-md">
                        <div className="absolute top-0 left-0 w-full h-full bg-accent-orange/50 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="p-10 md:w-1/2 flex flex-col justify-center">
                                <div className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700 w-max">
                                    Pillar 01
                                </div>
                                <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">Offer Engineering</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Structuring high-ticket offers and recurring revenue models that resonate with your specific audience segments. We architect the value ladder.
                                </p>
                            </div>
                            <div className="md:w-1/2 bg-slate-100 min-h-[300px] md:min-h-0 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center bg-accent-orange/30">
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        className="w-3/4 h-3/4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 shadow-lg flex items-center justify-center"
                                    >
                                        <span className="material-symbols-outlined text-orange-300 text-6xl opacity-50">architecture</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Pillar 2 */}
                    <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-200 transition-all hover:shadow-md">
                        <div className="absolute top-0 left-0 w-full h-full bg-accent-blue/50 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="md:w-1/2 bg-slate-100 min-h-[300px] md:min-h-0 relative overflow-hidden order-last md:order-first">
                                <div className="absolute inset-0 flex items-center justify-center bg-accent-blue/30">
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: -2 }}
                                        className="w-3/4 h-3/4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 shadow-lg flex items-center justify-center"
                                    >
                                        <span className="material-symbols-outlined text-blue-300 text-6xl opacity-50">filter_alt</span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="p-10 md:w-1/2 flex flex-col justify-center">
                                <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 w-max">
                                    Pillar 02
                                </div>
                                <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">Funnel Architecture</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Building the digital pathways—landing pages, email flows, and retargeting—to capture and nurture leads automatically.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Pillar 3 */}
                    <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-200 transition-all hover:shadow-md">
                        <div className="absolute top-0 left-0 w-full h-full bg-accent-green/50 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="p-10 md:w-1/2 flex flex-col justify-center">
                                <div className="mb-4 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700 w-max">
                                    Pillar 03
                                </div>
                                <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">Monetization & Strategy</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Optimizing pricing elasticity and LTV. We don&apos;t just sell products; we build ecosystems of value that compound over time.
                                </p>
                            </div>
                            <div className="md:w-1/2 bg-slate-100 min-h-[300px] md:min-h-0 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center bg-accent-green/30">
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        className="w-3/4 h-3/4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 shadow-lg flex items-center justify-center"
                                    >
                                        <span className="material-symbols-outlined text-green-300 text-6xl opacity-50">monetization_on</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
