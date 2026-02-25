"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Layers, Box } from "lucide-react"; // Placeholders for icons

export function Economy() {
    return (
        <Section theme="dark" className="bg-zinc-950">
            <div className="grid gap-12 lg:grid-cols-2">
                {/* Left Text */}
                <div className="flex flex-col justify-center">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-medium tracking-tight text-white sm:text-5xl"
                    >
                        The modern economy is split.
                        <br />
                        <span className="text-white/40">Owning attention vs owning the product.</span>
                    </motion.h2>
                </div>

                {/* Right Chart Visualization - Simplified Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-end justify-center"
                >
                    <div className="flex w-full max-w-sm items-end gap-2 border-b border-white/10 pb-4">
                        {/* Mock Bars */}
                        <div className="h-12 w-8 bg-white/20 rounded-t-sm"></div>
                        <div className="h-20 w-8 bg-white/40 rounded-t-sm"></div>
                        <div className="h-32 w-8 bg-white/60 rounded-t-sm"></div>
                        <div className="h-40 w-8 bg-white rounded-t-sm"></div>
                        <div className="ml-auto flex items-end gap-2">
                            <div className="h-6 w-8 bg-red-500/20 rounded-t-sm"></div>
                            <div className="h-4 w-8 bg-red-500 rounded-t-sm"></div>
                        </div>
                    </div>
                    <div className="flex w-full max-w-sm justify-between pt-2 text-xs font-mono text-white/50 uppercase">
                        <span>Reach</span>
                        <span>Sub</span>
                        <span>Expire</span>
                        <span>Lim</span>
                    </div>
                </motion.div>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2">
                {/* Card 1 */}
                <Card className="bg-zinc-900 border-white/5">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/60">
                        <Layers size={24} />
                    </div>
                    <h3 className="mb-3 text-xl font-medium text-white">Distribution without infrastructure</h3>
                    <p className="text-sm text-balance text-white/60 leading-relaxed">
                        Creators have massive reach but lack the operational backbone. They leave millions on the table relying on simple sponsorships.
                    </p>
                </Card>

                {/* Card 2 */}
                <Card className="bg-zinc-900 border-white/5">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/60">
                        <Box size={24} />
                    </div>
                    <h3 className="mb-3 text-xl font-medium text-white">Product without Distribution</h3>
                    <p className="text-sm text-balance text-white/60 leading-relaxed">
                        Founders build incredible systems but struggle to break through the noise. CAC skyrockets without organic reach.
                    </p>
                </Card>
            </div>
        </Section>
    );
}
