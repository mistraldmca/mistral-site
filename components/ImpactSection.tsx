import React from 'react';
import { Trophy, Facebook, Instagram, Send, Gamepad2, Youtube, Clock, CheckCircle, Ban } from 'lucide-react';

const ImpactSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0A1F] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/30 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/30 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Control What Stays. Delete What Doesn't.
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Every stolen photo, fake account and illegal upload—gone. <br className="hidden md:block" />
                    Mistral fights back while you focus on creating.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column Group */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    {/* 75M Sites Card */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        
                        <div className="mb-8 relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">75M Sites</h3>
                            <p className="text-slate-300 text-sm font-medium">scanned daily</p>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-3 md:gap-4 relative z-10">
                           {/* Social Icons */}
                           {[
                             { bg: 'bg-[#1877F2]', icon: <Facebook className="text-white w-6 h-6 fill-white"/> },
                             { bg: 'bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4]', icon: <Instagram className="text-white w-6 h-6"/> },
                             { bg: 'bg-[#2AABEE]', icon: <Send className="text-white w-6 h-6 -ml-0.5 mt-0.5 -rotate-12 fill-white"/> }, 
                             { bg: 'bg-black', icon: <span className="text-white text-xl font-bold">𝕏</span> },
                             { bg: 'bg-[#4285F4]', icon: <svg viewBox="0 0 24 24" className="text-white w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/></svg> },
                             { bg: 'bg-black', icon: <svg viewBox="0 0 24 24" className="text-white w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg> },
                             { bg: 'bg-[#5865F2]', icon: <Gamepad2 className="text-white w-6 h-6 fill-white"/> },
                             { bg: 'bg-[#FF0000]', icon: <Youtube className="text-white w-6 h-6 fill-white"/> },
                           ].map((item, i) => (
                             <div key={i} className={`${item.bg} aspect-square rounded-2xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 border border-white/5`}>
                                {item.icon}
                             </div>
                           ))}
                        </div>
                    </div>

                    {/* Sub-row: 98% & Trusted */}
                    <div className="grid grid-cols-1 sm:grid-cols-7 gap-6">
                        {/* 98% Success */}
                        <div className="sm:col-span-3 bg-gradient-to-br from-[#FF8080] to-[#FF5C5C] rounded-3xl p-6 relative overflow-hidden shadow-lg shadow-red-900/20 group">
                             {/* Decorative Circular Progress */}
                             <div className="absolute right-[-20px] md:right-[-10px] top-1/2 -translate-y-1/2 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-125 md:scale-100">
                                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" className="text-white/30" />
                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="white" strokeWidth="3" strokeDasharray="98, 100" className="drop-shadow-md" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <CheckCircle className="w-10 h-10 text-white" />
                                </div>
                             </div>

                             <div className="relative z-10 h-full flex flex-col justify-center">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">98%</h3>
                                <p className="text-white/95 font-medium text-sm leading-tight max-w-[100px]">takedown success rate.</p>
                             </div>
                        </div>

                        {/* Trusted By */}
                        <div className="sm:col-span-4 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] rounded-3xl p-6 flex flex-col justify-center min-h-[180px] relative overflow-hidden shadow-lg shadow-indigo-900/20">
                            <div className="relative z-10">
                                <p className="text-white/80 text-[10px] uppercase font-bold tracking-wider mb-2">Trusted by</p>
                                <h3 className="text-2xl font-bold text-white mb-4">+2,000 creators</h3>
                                <div className="flex -space-x-3 mb-3">
                                    {[1,2,3,4,5].map((_, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#7C3AED] bg-slate-200 overflow-hidden relative">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 25}`} alt="Creator" className="w-full h-full object-cover"/>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-indigo-100 text-[11px] leading-tight max-w-xs">protecting top creators, agencies and celebrities.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column Group: Revenue */}
                <div className="lg:col-span-5">
                    <div className="bg-[#1E1C2E] rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col h-full shadow-2xl">
                        <div className="relative z-10 mb-8">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Up to 60%</h3>
                            <p className="text-slate-400 text-sm">revenue increase on subscription sites.</p>
                        </div>
                        
                        {/* Mock Dashboard UI */}
                        <div className="flex-grow bg-white rounded-t-2xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)] p-5 overflow-hidden relative transform translate-y-2">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">All time</div>
                                    <div className="text-slate-900 font-bold text-sm flex items-center gap-2">
                                        Mistral Activated 
                                        <div className="w-4 h-4 rounded-full border-2 border-purple-600 border-t-transparent animate-spin"></div>
                                    </div>
                                </div>
                                <div className="text-green-600 text-xs font-bold bg-green-100 px-2 py-1 rounded-md border border-green-200">+ $24k</div>
                            </div>
                            
                            {/* Chart Area */}
                            <div className="relative h-40 w-full mb-6">
                                {/* Simple SVG Chart */}
                                 <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                    {/* Grid Lines */}
                                    <line x1="0" y1="0" x2="100" y2="0" stroke="#f1f5f9" strokeWidth="0.5" />
                                    <line x1="0" y1="10" x2="100" y2="10" stroke="#f1f5f9" strokeWidth="0.5" />
                                    <line x1="0" y1="20" x2="100" y2="20" stroke="#f1f5f9" strokeWidth="0.5" />
                                    <line x1="0" y1="30" x2="100" y2="30" stroke="#f1f5f9" strokeWidth="0.5" />

                                    {/* Chart Line */}
                                    <path d="M0 35 C 15 35, 25 32, 35 28 C 45 24, 55 26, 65 15 C 75 4, 85 8, 100 2" fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                                    <path d="M0 35 C 15 35, 25 32, 35 28 C 45 24, 55 26, 65 15 C 75 4, 85 8, 100 2 V 45 H 0 Z" fill="url(#gradient)" opacity="0.15" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#8B5CF6"/>
                                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                                        </linearGradient>
                                    </defs>
                                 </svg>
                                 
                                 {/* Dashed line for activation */}
                                 <div className="absolute top-0 bottom-0 left-[65%] w-px border-l border-dashed border-red-400/60"></div>
                                 <div className="absolute -top-3 left-[65%] -translate-x-1/2 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap z-10">
                                     Activated
                                 </div>
                                 <div className="absolute top-[38%] left-[65%] -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
                            </div>

                             {/* Mock Data Rows */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-xs pb-3 border-b border-slate-50">
                                    <span className="text-slate-500 flex items-center gap-2 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-blue-400"></div> Subscriptions
                                    </span>
                                    <span className="font-bold text-slate-700">$42,388.26</span>
                                </div>
                                 <div className="flex justify-between items-center text-xs pb-1">
                                    <span className="text-slate-500 flex items-center gap-2 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div> Tips
                                    </span>
                                    <span className="font-bold text-slate-700">$16,578.94</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Ranked #1 */}
                    <div className="md:col-span-5 bg-gradient-to-r from-[#3B82F6] to-[#4F46E5] rounded-3xl p-6 relative overflow-hidden flex items-center justify-between min-h-[160px] shadow-lg shadow-blue-900/20">
                        <div className="relative z-10 max-w-[60%]">
                            <h3 className="text-3xl font-bold text-white mb-1">Ranked #1</h3>
                            <p className="text-blue-100 text-sm font-medium">removal rate by Google</p>
                        </div>
                        <div className="absolute right-[-10px] bottom-[-20px] w-32 h-32 flex items-center justify-center transform rotate-12 filter drop-shadow-2xl">
                             <Trophy className="text-[#FFD700] w-full h-full fill-[#FFD700]" strokeWidth={1} />
                        </div>
                    </div>

                    {/* 1 Billion */}
                    <div className="md:col-span-4 bg-gradient-to-br from-[#F472B6] to-[#E11D48] rounded-3xl p-6 relative overflow-hidden shadow-lg shadow-pink-900/20 group flex flex-col justify-center min-h-[160px]">
                        {/* Decorative Ban/Remove Icons */}
                        <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                            <Ban className="w-48 h-48 text-white" strokeWidth={1} />
                        </div>
                        <div className="absolute right-8 top-8 w-2 h-2 bg-white rounded-full animate-ping opacity-60"></div>
                        <div className="absolute right-12 bottom-12 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-700 opacity-60"></div>

                        <h3 className="text-4xl font-bold text-white mb-2 relative z-10">1 billion</h3>
                        <p className="text-white/95 text-sm font-medium relative z-10 max-w-[200px]">removals of impersonations, leaks and fake profiles.</p>
                    </div>

                    {/* 24/7 Scanning */}
                    <div className="md:col-span-3 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-3xl p-6 flex flex-col justify-center items-center text-center min-h-[160px] shadow-lg shadow-purple-900/20 relative overflow-hidden group">
                         <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                         <div className="bg-white/20 p-3 rounded-full mb-3 backdrop-blur-sm">
                            <Clock className="w-8 h-8 text-white" />
                         </div>
                         <h3 className="text-3xl font-bold text-white mb-1">24/7</h3>
                         <p className="text-white/80 text-sm font-medium">scanning</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default ImpactSection;