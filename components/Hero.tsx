import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Lock, Search, FileX } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-[-1]">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
         <div className="absolute top-20 right-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl mix-blend-multiply animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">Trusted by 2,000+ Creators</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Protect Your Content. <br />
              <span className="gradient-text">Own Your Brand.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Mistral scans the web for stolen content, removes leaks, and protects your income with continuous DMCA enforcement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Free Leak Scan <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                How It Works
              </Button>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-2">
                <p className="text-sm font-medium text-slate-500">
                    Free for 7 days. Then $100/month.
                </p>
                <div className="hidden lg:block w-1 h-1 bg-slate-300 rounded-full"></div>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> No card required</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Cancel anytime</span>
                </div>
            </div>
          </div>

          {/* Animation Section */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
              {/* Fake Browser Header */}
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-4 bg-white px-3 py-1 rounded-md text-xs text-slate-400 flex-1 border border-slate-100 flex items-center gap-2">
                  <Lock className="w-3 h-3" /> secure-scan.mistral.com
                </div>
              </div>

              {/* Scanning Content */}
              <div className="p-6 relative min-h-[300px] flex flex-col justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(241,245,249,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(241,245,249,0.4)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                
                {/* Scanner Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.5)] z-20 animate-[scan_3s_ease-in-out_infinite]"></div>

                {/* Floating Elements */}
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 animate-pulse">
                    <div className="p-2 bg-red-50 rounded-lg text-red-500"><FileX className="w-5 h-5"/></div>
                    <div>
                      <div className="h-2 w-16 bg-slate-200 rounded mb-1.5"></div>
                      <div className="h-2 w-10 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 opacity-50">
                    <div className="p-2 bg-slate-50 rounded-lg text-slate-400"><Search className="w-5 h-5"/></div>
                     <div>
                      <div className="h-2 w-20 bg-slate-200 rounded mb-1.5"></div>
                      <div className="h-2 w-12 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 opacity-75">
                    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-500"><Shield className="w-5 h-5"/></div>
                     <div>
                      <div className="h-2 w-14 bg-slate-200 rounded mb-1.5"></div>
                      <div className="h-2 w-24 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                   <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 animate-pulse delay-75">
                    <div className="p-2 bg-red-50 rounded-lg text-red-500"><FileX className="w-5 h-5"/></div>
                     <div>
                      <div className="h-2 w-18 bg-slate-200 rounded mb-1.5"></div>
                      <div className="h-2 w-8 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-0 right-0 text-center">
                   <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      Scanning for Leaks...
                   </span>
                </div>
              </div>
            </div>
            {/* Glow behind */}
            <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl -z-10 rounded-full"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Hero;