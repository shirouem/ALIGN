"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Copyleft as Architecture, Filter, DollarSign } from "lucide-react"; // Using similar icons for now

export function Alignment() {
    return (
        <Section theme="light" className="bg-[#F9F9FB] text-slate-900 py-32" id="pillars">
            <div className="mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-medium tracking-tighter text-slate-900 mb-6"
                >
                    The Alignment Layer
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-500 max-w-2xl font-light"
                >
                    We are the missing infrastructure. A complete stack to convert attention into enterprise value.
                </motion.p>
            </div>

            <div className="space-y-6">
                {/* Pillar 01 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-[2rem] bg-white shadow-sm border border-slate-200 transition-all hover:shadow-md"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[#FFF0E6]/50 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex flex-col md:flex-row h-full">
                        <div className="p-10 md:w-1/2 flex flex-col justify-center">
                            <div className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700 w-fit">
                                Pillar 01
                            </div>
                            <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">Offer Engineering</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Structuring high-ticket offers and recurring revenue models that resonate with your specific audience segments. We architect the value ladder.
                            </p>
                        </div>
                        <div className="md:w-1/2 bg-slate-100 min-h-[300px] md:min-h-0 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center bg-[#FFF0E6]/30">
                                <div className="w-3/4 h-3/4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 shadow-lg flex items-center justify-center">
                                    <Architecture className="text-orange-300 w-16 h-16 opacity-50" strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Pillar 02 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="group relative overflow-hidden rounded-[2rem] bg-white shadow-sm border border-slate-200 transition-all hover:shadow-md"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[#E6F0FF]/50 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex flex-col md:flex-row h-full">
                        <div className="md:w-1/2 bg-slate-100 min-h-[300px] md:min-h-0 relative overflow-hidden order-last md:order-first">
                            <div className="absolute inset-0 flex items-center justify-center bg-[#E6F0FF]/30">
                                <div className="w-3/4 h-3/4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 shadow-lg flex items-center justify-center">
                                    <Filter className="text-blue-300 w-16 h-16 opacity-50" strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                        <div className="p-10 md:w-1/2 flex flex-col justify-center">
                            <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 w-fit">
                                Pillar 02
                            </div>
                            <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">Funnel Architecture</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Building the digital pathways—landing pages, email flows, and retargeting—to capture and nurture leads automatically.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Pillar 03 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="group relative overflow-hidden rounded-[2rem] bg-white shadow-sm border border-slate-200 transition-all hover:shadow-md"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[#E6FFF0]/50 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex flex-col md:flex-row h-full">
                        <div className="p-10 md:w-1/2 flex flex-col justify-center">
                            <div className="mb-4 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700 w-fit">
                                Pillar 03
                            </div>
                            <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">Monetization & Strategy</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Optimizing pricing elasticity and LTV. We don't just sell products; we build ecosystems of value that compound over time.
                            </p>
                        </div>
                        <div className="md:w-1/2 bg-slate-100 min-h-[300px] md:min-h-0 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center bg-[#E6FFF0]/30">
                                <div className="w-3/4 h-3/4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 shadow-lg flex items-center justify-center">
                                    <DollarSign className="border-2 border-green-300 rounded-full p-2 text-green-300 w-16 h-16 opacity-50" strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
