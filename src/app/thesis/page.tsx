"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Helper for FadeIn Viewports
const FadeInBlock = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-5%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`py-12 md:py-20 w-full flex flex-col items-center justify-center text-center px-4 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Subtle Network Animation for "The Reality"
const NetworkAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-30">
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-emerald-500/50"
            initial={{
              x: Math.random() * 300 - 150,
              y: Math.random() * 300 - 150,
            }}
            animate={{
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.div
          className="absolute inset-0 border border-emerald-500/10 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-[20%] border border-emerald-500/20 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

// Subtle Flow Loop Animation for "The Loop"
const FlowLoopAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border border-dashed border-emerald-500/30"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full blur-[2px]"
            style={{
              transformOrigin: "0 300px", // md size origin would technically be 300, keeping it approximate
              transform: `rotate(${i * 72}deg) translateY(-150px)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default function ThesisPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-background-dark text-slate-300 font-light selection:bg-emerald-500/30" ref={containerRef}>
      <Header />

      <main className="flex flex-col w-full">
        
        {/* HERO */}
        <FadeInBlock className="pt-20">
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8 text-white">
            Our Thesis<span className="text-emerald-600">.</span>
          </h1>
          <p className="text-2xl md:text-4xl max-w-4xl text-slate-400 leading-tight">
            ALIGN turns revenue generation into a closed, self-optimizing loop.
          </p>
        </FadeInBlock>

        {/* THE PROBLEM */}
        <FadeInBlock>
          <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-8">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-medium text-white max-w-3xl leading-tight">
            Growth today is fragmented.
          </h2>
        </FadeInBlock>

        <FadeInBlock>
          <div className="flex flex-col gap-6 text-2xl md:text-4xl text-slate-400 max-w-3xl">
            <p>creators are managed individually</p>
            <p>attribution is shallow and misleading</p>
            <p>execution is manual and reactive</p>
          </div>
        </FadeInBlock>

        <FadeInBlock>
          <p className="text-3xl md:text-5xl font-medium text-white max-w-4xl leading-tight">
            Revenue is treated as isolated events, not a system.
          </p>
        </FadeInBlock>

        {/* THE REALITY */}
        <div className="relative">
          <NetworkAnimation />
          <FadeInBlock>
            <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-8">The Reality</span>
            <div className="flex flex-col gap-4 text-3xl md:text-5xl font-medium text-white max-w-4xl leading-tight">
              <p>Revenue does not come from individuals.</p>
              <p>It emerges from networks of influence.</p>
            </div>
          </FadeInBlock>

          <FadeInBlock>
            <div className="flex flex-col gap-6 text-2xl md:text-4xl text-emerald-500/90 max-w-3xl">
              <p>some create demand</p>
              <p>some amplify</p>
              <p>some convert</p>
            </div>
          </FadeInBlock>

          <FadeInBlock>
            <p className="text-3xl md:text-5xl font-medium text-white max-w-4xl leading-tight">
              Performance is driven by interactions, not participants.
            </p>
          </FadeInBlock>
        </div>

        {/* THE GAP */}
        <FadeInBlock>
          <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-8">The Gap</span>
          <h2 className="text-4xl md:text-5xl font-medium text-white max-w-3xl leading-tight">
            No existing system operates at this level.
          </h2>
        </FadeInBlock>

        <FadeInBlock>
          <div className="grid grid-cols-1 gap-8 text-xl md:text-3xl text-slate-400 max-w-3xl text-left mx-auto">
            <div className="flex gap-4">
              <span className="text-slate-600">→</span >
              <p><strong className="text-white font-medium">marketplaces</strong> : discovery only</p>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600">→</span >
              <p><strong className="text-white font-medium">attribution tools</strong> : backward-looking</p>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600">→</span >
              <p><strong className="text-white font-medium">agencies</strong> : manual execution</p>
            </div>
          </div>
        </FadeInBlock>

        <FadeInBlock>
          <p className="text-3xl md:text-5xl font-medium text-white max-w-4xl leading-tight">
            None simulate, execute, and optimize growth as a system.
          </p>
        </FadeInBlock>

        {/* THE ALIGN MODEL */}
        <FadeInBlock>
          <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-8">The ALIGN Model</span>
          <h2 className="text-4xl md:text-5xl font-medium text-white max-w-3xl leading-tight">
            Growth can be computed and optimized.
          </h2>
        </FadeInBlock>

        <FadeInBlock>
          <div className="flex flex-col gap-6 max-w-4xl">
            <h3 className="text-xl md:text-2xl font-medium text-emerald-500 tracking-wide uppercase">Deterministic Core</h3>
            <p className="text-2xl md:text-4xl text-white">Revenue, attribution, and payouts are resolved from source data.</p>
            <p className="text-xl md:text-3xl text-slate-500">Ground truth is fixed.</p>
          </div>
        </FadeInBlock>

        <FadeInBlock>
          <div className="flex flex-col gap-6 max-w-4xl">
            <h3 className="text-xl md:text-2xl font-medium text-emerald-500 tracking-wide uppercase">Network Intelligence</h3>
            <p className="text-2xl md:text-4xl text-white">The system learns how influence flows.</p>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
              who drives demand vs conversion <br/>
              which creators amplify others <br/>
              which combinations outperform
            </p>
          </div>
        </FadeInBlock>

        <FadeInBlock>
          <p className="text-3xl md:text-5xl font-medium text-white max-w-4xl leading-tight">
            Value is modeled at the network level.
          </p>
        </FadeInBlock>

        <FadeInBlock>
          <div className="flex flex-col gap-6 max-w-4xl">
            <h3 className="text-xl md:text-2xl font-medium text-emerald-500 tracking-wide uppercase">Execution Layer</h3>
            <p className="text-2xl md:text-4xl text-white">The system continuously reallocates distribution.</p>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
              scales what works <br/>
              tests new participants <br/>
              reduces inefficiency
            </p>
          </div>
        </FadeInBlock>

        <FadeInBlock>
          <p className="text-3xl md:text-5xl font-medium text-white max-w-4xl leading-tight">
            Execution adapts. Revenue does not.
          </p>
        </FadeInBlock>

        {/* THE LOOP */}
        <div className="relative">
          <FlowLoopAnimation />
          <FadeInBlock>
            <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-8">The Loop</span>
            <h2 className="text-4xl md:text-5xl font-medium text-white max-w-3xl leading-tight">
              A closed system replaces manual iteration.
            </h2>
          </FadeInBlock>

          <FadeInBlock>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xl md:text-3xl text-slate-300 max-w-5xl">
              <span>Simulation</span>
              <span className="text-emerald-500">→</span>
              <span>Deployment</span>
              <span className="text-emerald-500">→</span>
              <span>Real-time feedback</span>
              <span className="text-emerald-500">→</span>
              <span>Optimization</span>
              <span className="text-emerald-500">→</span>
              <span>Learning</span>
            </div>
          </FadeInBlock>

          <FadeInBlock>
            <p className="text-3xl md:text-5xl font-medium text-white max-w-4xl leading-tight">
              Every cycle improves the next.
            </p>
          </FadeInBlock>
        </div>

        {/* WHAT THIS ENABLES */}
        <FadeInBlock>
          <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-8">What This Enables</span>
          <h4 className="text-3xl md:text-5xl text-white font-medium mb-4">Predict Before You Deploy</h4>
          <p className="text-xl md:text-3xl text-slate-400">Simulate expected outcomes and configurations.</p>
        </FadeInBlock>

        <FadeInBlock>
          <h4 className="text-3xl md:text-5xl text-white font-medium mb-4">Autonomous Execution</h4>
          <p className="text-xl md:text-3xl text-slate-400">No manual campaign management.<br/>The system continuously optimizes.</p>
        </FadeInBlock>

        <FadeInBlock>
          <h4 className="text-3xl md:text-5xl text-white font-medium mb-4">Real-Time Visibility</h4>
          <p className="text-xl md:text-3xl text-slate-400">Revenue and attribution update as they happen.</p>
        </FadeInBlock>

        <FadeInBlock>
          <h4 className="text-3xl md:text-5xl text-white font-medium mb-4">Compounding Intelligence</h4>
          <p className="text-xl md:text-3xl text-slate-400">Each campaign improves future performance.</p>
        </FadeInBlock>

        {/* THE SHIFT */}
        <FadeInBlock>
           <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-8">The Shift</span>
           <div className="flex flex-col gap-4 text-center max-w-4xl w-full">
              <div className="text-2xl md:text-4xl">
                <span className="text-slate-500 line-through decoration-slate-600/50">Run campaigns</span>
                <span className="mx-4 text-emerald-600">→</span>
                <span className="text-white">Configure systems</span>
              </div>
           </div>
        </FadeInBlock>

        <FadeInBlock>
           <div className="flex flex-col gap-4 text-center max-w-4xl w-full">
              <div className="text-2xl md:text-4xl">
                <span className="text-slate-500 line-through decoration-slate-600/50">Manage creators</span>
                <span className="mx-4 text-emerald-600">→</span>
                <span className="text-white">Operate networks</span>
              </div>
           </div>
        </FadeInBlock>

        <FadeInBlock>
           <div className="flex flex-col gap-4 text-center max-w-4xl w-full">
              <div className="text-2xl md:text-4xl">
                <span className="text-slate-500 line-through decoration-slate-600/50">Analyze after</span>
                <span className="mx-4 text-emerald-600">→</span>
                <span className="text-white">Simulate before</span>
              </div>
           </div>
        </FadeInBlock>

        <FadeInBlock>
           <div className="flex flex-col gap-4 text-center max-w-4xl w-full">
              <div className="text-2xl md:text-4xl">
                <span className="text-slate-500 line-through decoration-slate-600/50">Manual optimization</span>
                <span className="mx-4 text-emerald-600">→</span>
                <span className="text-white">Continuous optimization</span>
              </div>
           </div>
        </FadeInBlock>

        {/* WHY NOW */}
        <FadeInBlock>
          <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-8">Why Now</span>
          <p className="text-3xl md:text-5xl text-white">revenue data is programmatically accessible</p>
        </FadeInBlock>
        
        <FadeInBlock>
          <p className="text-3xl md:text-5xl text-white">creator ecosystems are large and interconnected</p>
        </FadeInBlock>

        <FadeInBlock>
          <p className="text-3xl md:text-5xl text-white">real-time systems are feasible</p>
        </FadeInBlock>

        <FadeInBlock>
          <p className="text-3xl md:text-5xl text-white">constrained agents enable safe automation</p>
        </FadeInBlock>

        {/* FINAL */}
        <FadeInBlock className="bg-emerald-900/10 border-t border-emerald-500/10">
          <p className="text-4xl md:text-6xl font-medium text-white max-w-5xl leading-tight">
            ALIGN replaces campaigns with a <span className="text-emerald-500">system that runs itself.</span>
          </p>
        </FadeInBlock>

      </main>

      <Footer />
    </div>
  );
}
