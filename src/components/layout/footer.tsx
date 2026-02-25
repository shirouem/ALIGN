"use client";

export function Footer() {
    return (
        <footer className="w-full bg-[#F5F7F5] py-12 px-6 border-t border-slate-200">
            <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row md:px-12 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold tracking-tight text-slate-900">ALIGN</span>
                </div>
                <div>
                    © 2024 Align Infrastructure Inc. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
                    <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
