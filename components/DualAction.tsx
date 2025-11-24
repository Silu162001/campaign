import React from 'react';
import { Shield, Droplet, ArrowDown } from 'lucide-react';
import Reveal from './Reveal';

const DualAction: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif text-editorial-text mb-6">
              Two Steps Ahead: <br />
              <span className="italic text-editorial-slate opacity-80">Targeting the Cause, Not Just Symptoms</span>
            </h2>
            <p className="text-lg text-editorial-muted leading-relaxed">
              Unlike single-action supplements, Utipro Plus AF uses a unique dual mode of action, working where UTIs start (the intestine) and where you feel them (the bladder).
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-editorial-accent opacity-20 z-0">
            <ArrowDown size={64} />
          </div>

          {/* Step 1 */}
          <Reveal delay={100}>
            <div className="relative group bg-editorial-bg p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-6 left-8 bg-editorial-slate text-white w-12 h-12 flex items-center justify-center rounded-full font-serif text-xl font-bold shadow-lg">
                1
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-emerald-50 rounded-full text-editorial-accent">
                  <Shield size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-editorial-text mb-4">Block the Source (Intestine)</h3>
                <p className="text-editorial-muted mb-6 leading-relaxed">
                  The majority of recurrent UTIs (up to 90%) originate from bacteria in the intestine.
                  Our <strong>Xyloglucan</strong> ingredient forms a protective, non-digestible film on the intestinal lining.
                </p>
                <div className="bg-white p-4 rounded-xl w-full text-left border border-stone-100">
                  <p className="text-sm text-editorial-slate">
                    <span className="font-bold text-editorial-accent">Scientific Edge:</span> Physically prevents the migration and proliferation of uropathogenic bacteria (like E. coli).
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold tracking-widest uppercase text-editorial-slate opacity-60">
                  Proactive Control
                </div>
              </div>
            </div>
          </Reveal>

          {/* Step 2 */}
          <Reveal delay={300}>
            <div className="relative group bg-editorial-bg p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-6 left-8 bg-editorial-accent text-white w-12 h-12 flex items-center justify-center rounded-full font-serif text-xl font-bold shadow-lg">
                2
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-blue-50 rounded-full text-blue-500">
                  <Droplet size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-editorial-text mb-4">Soothe Symptoms (Bladder)</h3>
                <p className="text-editorial-muted mb-6 leading-relaxed">
                  Ingredients like <strong>Hibiscus and Propolis</strong> work to mildly acidify the urine in the bladder,
                  creating an unfavorable environment for bacteria to grow and multiply.
                </p>
                <div className="bg-white p-4 rounded-xl w-full text-left border border-stone-100">
                  <p className="text-sm text-editorial-slate">
                    <span className="font-bold text-editorial-accent">Fast Action:</span> Improves uncomfortable symptoms quickly, restoring immediate relief and comfort.
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold tracking-widest uppercase text-editorial-slate opacity-60">
                  Immediate Relief
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default DualAction;