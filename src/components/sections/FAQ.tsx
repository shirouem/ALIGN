"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        question: "What is the requirement to join?",
        answer: "We typically work with creators who have >100k engaged followers or founders with >$500k ARR."
    },
    {
        question: "Do you take equity?",
        answer: "Generally no. We operate on a revenue share model of the uplift we generate, aligning our cash flow with yours."
    },
    {
        question: "How long is the setup process?",
        answer: "Our initial infrastructure audit and implementation phase typically takes 2-4 weeks before full launch."
    },
    {
        question: "Can I keep my existing team?",
        answer: "Yes. We layer our infrastructure on top of your existing operations. We don't replace; we amplify."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black py-32 px-6 lg:px-8 text-white border-t border-white/10">
            <div className="mx-auto max-w-3xl">
                <motion.h2
                    className="text-3xl font-medium mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="divide-y divide-white/10 border-t border-b border-white/10">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="py-6 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex justify-between items-center group">
                                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-slate-300 transition-colors">
                                    {faq.question}
                                </h3>
                                <motion.span
                                    className="material-symbols-outlined text-slate-500"
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    expand_more
                                </motion.span>
                            </div>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-slate-400 font-light mt-2 pb-2">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
