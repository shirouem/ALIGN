"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";

export function SharedUpside() {
    return (
        <Section theme="light" className="bg-white">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
                {/* Left Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-medium tracking-tight text-black sm:text-5xl lg:text-5xl leading-tight">
                        Aligned Incentives.<br />Shared Upside.
                    </h2>
                    <p className="mt-6 text-lg text-black/60 leading-relaxed mb-10 max-w-md">
                        We don't act like an agency. We act like co-founders. We invest our infrastructure, team, and technology in exchange for a revenue share.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white text-xs font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="font-semibold text-black">No Monthly Retainers</h4>
                                <p className="text-sm text-black/60">We don't charge % retainers. We charge for results.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white text-xs font-bold">
                                2
                            </div>
                            <div>
                                <h4 className="font-semibold text-black">Turnkey Infrastructure</h4>
                                <p className="text-sm text-black/60">We bring the actual code up, driving the vision.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative rounded-3xl border border-black/5 bg-white p-8 shadow-xl"
                >
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-black/50 uppercase tracking-wider">Total Revenue Generated</p>
                            <h3 className="text-4xl font-semibold tracking-tight text-black mt-2">$14,203,000</h3>
                        </div>
                        <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                            + 124%
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="font-medium text-black/70">Q1 Target</span>
                                <span className="font-medium">75%</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "75%" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-black/80"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="font-medium text-black/70">MRR Delta</span>
                                <span className="font-medium text-blue-600">+43%</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "43%" }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                    className="h-full bg-blue-500"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="font-medium text-black/70">Retention</span>
                                <span className="font-medium">92%</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "92%" }}
                                    transition={{ duration: 1, delay: 0.9 }}
                                    className="h-full bg-black/40"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center gap-3 border-t border-black/5 pt-6">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium text-black/60">Partner portal active & syncing.</span>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
