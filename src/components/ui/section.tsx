"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface SectionProps extends Omit<HTMLMotionProps<"section">, "children"> {
    theme?: "dark" | "light";
    container?: boolean;
    children?: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, theme = "dark", container = true, children, ...props }, ref) => {
        return (
            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn(
                    "w-full py-20 md:py-32",
                    theme === "dark" ? "bg-black text-white" : "bg-[#f9f9f9] text-black",
                    className
                )}
                {...props}
            >
                <div className={cn(container && "container mx-auto px-6 md:px-12 max-w-7xl")}>
                    {children}
                </div>
            </motion.section>
        );
    }
);
Section.displayName = "Section";

export { Section };
