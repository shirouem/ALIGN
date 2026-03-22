"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const phases = [
    {
        id: "phase1",
        label: "01",
        title: "Simulation & Diligence",
        subtitle: "Before capital moves, the system models the network.",
        items: [
            {
                title: "Prelaunch Simulation",
                desc: "Simulate user routing and landing page flows under volume before exposing brand equity to live traffic.",
                icon: "preview"
            },
            {
                title: "Market Due-Diligence",
                desc: "Automated macro-alignment checks ensuring campaign parameters fit current market saturation points.",
                icon: "monitoring"
            },
            {
                title: "Creator Due-Diligence",
                desc: "Evaluate creators like assets. Assess forward-looking expected revenue contribution, role classification, and historical consistency rather than vanity metrics.",
                icon: "shield_person"
            },
            {
                title: "Network-Level Simulation",
                desc: "Simulate the system, not individuals. Model how creators interact, identify outperforming combinations, and locate where compounding amplification actually happens.",
                icon: "hub"
            }
        ]
    },
    {
        id: "phase2",
        label: "02",
        title: "Live Optimization",
        subtitle: "Continuous autonomous adaptation during the live window.",
        items: [
            {
                title: "Real-Time Performance",
                desc: "Revenue attribution and creator performance shifts map instantly. Detect momentum vs decay immediately, eliminating wait times for asynchronous reports.",
                icon: "bolt"
            },
            {
                title: "Autonomous Agents",
                desc: "Agents actively reallocate distribution toward high-performing nodes and reduce exposure to underperformance. Governed entirely by strict deterministic rules.",
                icon: "memory"
            },
            {
                title: "Continuous Experimentation",
                desc: "Structured A/B testing is always on. New creators are introduced under controlled exploration budgets, shifting the balance between exploitation and exploration.",
                icon: "science"
            }
        ]
    },
    {
        id: "phase3",
        label: "03",
        title: "Intelligence & Detection",
        subtitle: "Act on systemic leverage points, not noisy data.",
        items: [
            {
                title: "Opportunity Detection",
                desc: "The system actively surfaces structural leverage, instantly highlighting outperforming creator pairs or under-allocated high-conversion segments.",
                icon: "target"
            },
            {
                title: "Risk & Failure Detection",
                desc: "Isolate underperforming segments and detect performance decay or saturation early. Immediate correction signals prevent the slow, silent death of campaigns.",
                icon: "warning"
            },
            {
                title: "Post-Campaign Intelligence",
                desc: "Knowledge compounds. The system internalizes which combination patterns are repeatable and which allocation structures performed best, feeding back into Phase 01.",
                icon: "auto_graph"
            }
        ]
    }
];

export default function Agentic() {
    const [activePhase, setActivePhase] = useState(phases[0].id);

    return (
        <section id="agentic-engine" className="bg-[#050505] text-white py-32 px-6 lg:px-8 border-t border-white/5">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    className="mb-24 max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-400 mb-8 shadow-sm">
                        The Agentic Framework
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                        Simulate the system.<br className="hidden md:block" />
                        <span className="text-slate-600">Not the individual.</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                        A continuous intelligence loop that removes massive manual oversight. Evaluate assets, simulate network-level amplification, and allocate resources autonomously.
                    </p>
                </motion.div>

                {/* Sleek Interactive Layout */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* Left: Interactive Tab Triggers */}
                    <div className="flex flex-col gap-6 lg:w-1/3 shrink-0">
                        {phases.map((phase) => {
                            const isActive = activePhase === phase.id;
                            return (
                                <button
                                    key={phase.id}
                                    onClick={() => setActivePhase(phase.id)}
                                    className={`group flex flex-col text-left transition-all duration-300 pb-6 border-b ${
                                        isActive ? "border-white/20" : "border-white/5 hover:border-white/10"
                                    }`}
                                >
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className={`text-sm font-semibold tracking-widest transition-colors duration-300 ${
                                            isActive ? "text-emerald-400" : "text-slate-600 group-hover:text-slate-400"
                                        }`}>
                                            {phase.label}
                                        </span>
                                        <h3 className={`text-2xl font-medium tracking-tight transition-colors duration-300 ${
                                            isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300"
                                        }`}>
                                            {phase.title}
                                        </h3>
                                    </div>
                                    {/* Subtitle is fully shown when active */}
                                    <div className={`overflow-hidden transition-all duration-300 ${
                                        isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                                    }`}>
                                        <p className="text-slate-400 font-light mt-2 pl-[2.25rem]">
                                            {phase.subtitle}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right: Active Tab Content (Animated) */}
                    <div className="lg:w-2/3 relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {phases.map(
                                (phase) =>
                                    activePhase === phase.id && (
                                        <motion.div
                                            key={phase.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                        >
                                            {phase.items.map((item, iIndex) => (
                                                <div
                                                    key={iIndex}
                                                    className="flex flex-col p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] transition-all hover:bg-white/[0.04] hover:border-white/[0.10]"
                                                >
                                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                                        <span className="material-symbols-outlined text-slate-400 text-xl">{item.icon}</span>
                                                    </div>
                                                    <h4 className="text-xl font-medium text-white mb-3 tracking-tight">{item.title}</h4>
                                                    <p className="text-slate-400 leading-relaxed font-light text-sm">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
