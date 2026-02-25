"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface CardProps extends HTMLMotionProps<"div"> {
    gradient?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, gradient = false, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className={cn(
                    "rounded-3xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-zinc-950",
                    gradient && "bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-950",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

export { Card };
