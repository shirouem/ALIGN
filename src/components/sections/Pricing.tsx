"use client";

import { motion } from "framer-motion";

const topTiers = [
    {
        name: "Tier 0",
        price: "0",
        tax: "30%",
        volume: "< $5K",
        desc: "Zero upfront cost. Prove the model and establish early traction.",
        features: ["Core infrastructure included", "Limited capacity", "Standard support channels"],
        highlight: false
    },
    {
        name: "Tier 1",
        price: "50",
        tax: "20%",
        volume: "$5K - $10K",
        desc: "Increased capacity for growing programs gaining momentum.",
        features: ["Higher capacity core infra", "Priority processing queue", "Direct email support"],
        highlight: false
    },
    {
        name: "Tier 2",
        price: "800",
        tax: "10%",
        volume: "$10K - $60K",
        desc: "Advanced tooling and expanded access for scaling networks.",
        features: ["Everything in Tier 1", "Higher access limits", "More tools included"],
        highlight: true // Makes it pop slightly
    }
];

const bottomTiers = [
    {
        name: "Tier 3",
        price: "1,000",
        tax: "5%",
        volume: "$60K - $100K",
        desc: "Maximum capacity routing for highly active, large-volume networks.",
        features: ["Maximum infrastructure capacity", "Custom integrations access", "Dedicated engineering channel"],
        highlight: false
    },
    {
        name: "Enterprise",
        price: "Custom",
        tax: "Custom",
        volume: "$100K+",
        desc: "White-glove infrastructure for institutional-scale environments.",
        features: ["White-glove onboarding", "SLA uptime guarantees", "Dedicated account management"],
        highlight: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="bg-[#050505] text-white py-32 px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
            {/* Extremely subtle ambient glow to make the section not boring */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[150px] pointer-events-none transform -translate-y-1/2"></div>

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    className="mb-20 text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >

                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                        Infrastructure that aligns with your scale.
                    </h2>
                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                        No hidden fees. Platform tax decreases dynamically as your network volume grows.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-6">
                    {/* Top Row: 3 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {topTiers.map((tier, i) => (
                            <motion.div
                                key={tier.name}
                                className={`group relative rounded-[2rem] backdrop-blur-xl flex flex-col transition-all duration-300 p-[1px] ${tier.highlight ? "bg-gradient-to-b from-white/15 to-white/5 shadow-2xl shadow-white/5" : "bg-white/[0.08]"
                                    } hover:bg-white/[0.15]`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                            >
                                {/* Inner Card Container */}
                                <div className="rounded-[calc(2rem-1px)] bg-[#0A0A0A]/90 h-full p-8 flex flex-col relative overflow-hidden">
                                    {/* Subtle inner top glow */}
                                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>

                                    <div className="mb-8 relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-medium tracking-tight text-white">{tier.name}</h3>
                                            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-slate-300">
                                                {tier.volume} MRR
                                            </span>
                                        </div>
                                        <div className="flex items-baseline gap-1 mb-2">
                                            <span className="text-3xl font-medium text-slate-500">$</span>
                                            <span className="text-5xl font-medium tracking-tighter text-white">{tier.price}</span>
                                            <span className="text-slate-500 ml-1 text-sm font-medium">/mo</span>
                                        </div>

                                        {/* Subtle but sharp Red Platform Tax Badge */}
                                        <div className="mb-4">
                                            <span className="inline-flex items-center rounded-[4px] bg-red-500/10 px-2 py-0.5 text-[11px] uppercase tracking-wider font-bold text-red-500 ring-1 ring-inset ring-red-500/30">
                                                {tier.tax} Platform Tax
                                            </span>
                                        </div>

                                        <p className="text-sm font-light text-slate-400">{tier.desc}</p>
                                    </div>

                                    <ul className="flex flex-col gap-3 mt-auto border-t border-white/5 pt-6 relative z-10">
                                        {tier.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-slate-500 text-sm mt-0.5">check</span>
                                                <span className="text-sm font-light text-slate-300">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Row: 2 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {bottomTiers.map((tier, i) => (
                            <motion.div
                                key={tier.name}
                                className={`group relative rounded-[2rem] backdrop-blur-xl flex flex-col transition-all duration-300 p-[1px] ${tier.highlight ? "bg-gradient-to-b from-white/15 to-white/5 shadow-2xl shadow-white/5" : "bg-white/[0.08]"
                                    } hover:bg-white/[0.15]`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                            >
                                <div className="rounded-[calc(2rem-1px)] bg-[#0A0A0A]/90 h-full p-8 flex flex-col relative overflow-hidden">
                                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>

                                    <div className="mb-8 relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-medium tracking-tight text-white">{tier.name}</h3>
                                            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-slate-300">
                                                {tier.volume} MRR
                                            </span>
                                        </div>
                                        <div className="flex items-baseline gap-1 mb-2">
                                            {tier.price !== "Custom" && <span className="text-3xl font-medium text-slate-500">$</span>}
                                            <span className="text-5xl font-medium tracking-tighter text-white">{tier.price}</span>
                                            {tier.price !== "Custom" && <span className="text-slate-500 ml-1 text-sm font-medium">/mo</span>}
                                        </div>

                                        <div className="mb-4">
                                            <span className="inline-flex items-center rounded-[4px] bg-red-500/10 px-2 py-0.5 text-[11px] uppercase tracking-wider font-bold text-red-500 ring-1 ring-inset ring-red-500/30">
                                                {tier.tax} Platform Tax
                                            </span>
                                        </div>

                                        <p className="text-sm font-light text-slate-400">{tier.desc}</p>
                                    </div>

                                    <ul className="flex flex-col gap-3 mt-auto border-t border-white/5 pt-6 relative z-10">
                                        {tier.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-slate-500 text-sm mt-0.5">check</span>
                                                <span className="text-sm font-light text-slate-300">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
