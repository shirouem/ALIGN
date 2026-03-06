export default function Footer() {
    return (
        <footer className="bg-[#F5F7F5] py-12 px-6 border-t border-slate-200">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold tracking-tight text-slate-900">ALIGN</span>
                </div>

                <div className="text-sm text-slate-500">
                    © {new Date().getFullYear()} Align Infrastructure Inc. All rights reserved.
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">Twitter</a>
                    <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
