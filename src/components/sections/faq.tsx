"use client";

import { Section } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is the requirement to join?",
        answer: "Participants must have an engaged following or network with >$1000 MRR potential. We specialize in scaling existing traction rather than starting from zero.",
    },
    {
        question: "Do you take equity?",
        answer: "Generally no. We operate on a revenue share model of the growth we generate, aligning our incentives with yours.",
    },
    {
        question: "How long is the setup process?",
        answer: "Our initial infrastructure audit and implementation generally takes 2-4 weeks before full launch.",
    },
    {
        question: "Can I keep my existing team?",
        answer: "Yes. We layer our infrastructure on top of your existing operations. We don't replace, we amplify.",
    },
];

export function Faq() {
    return (
        <Section theme="dark" className="border-t border-white/10" id="faqs">
            <div className="mx-auto max-w-3xl pt-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center text-3xl font-medium tracking-tight text-white sm:text-4xl"
                >
                    Frequently Asked Questions
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Accordion items={faqs} />
                </motion.div>
            </div>
        </Section>
    );
}
