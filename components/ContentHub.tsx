import React, { useState, useRef } from 'react';
import { Play, FileText, Smartphone, Instagram, Facebook, ArrowDown, Volume2, VolumeX } from 'lucide-react';
import Reveal from './Reveal';

type Tab = 'infographic' | 'video' | 'social';

const ContentHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('infographic');
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  return (
    <section className="py-24 bg-editorial-cream border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-editorial-text mb-4">Our Campaign Assets</h2>
            <p className="text-editorial-muted">From Awareness to Action: Tailored content for every stage.</p>
          </div>
        </Reveal>

        {/* Tab Navigation */}
        <Reveal delay={200}>
          <div className="flex justify-center mb-12 space-x-2 sm:space-x-8">
            <button
              onClick={() => setActiveTab('infographic')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'infographic' ? 'bg-editorial-text text-white shadow-lg' : 'bg-white text-editorial-muted hover:bg-stone-100'}`}
            >
              <FileText size={18} />
              <span className="font-medium">Infographic</span>
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'video' ? 'bg-editorial-text text-white shadow-lg' : 'bg-white text-editorial-muted hover:bg-stone-100'}`}
            >
              <Play size={18} />
              <span className="font-medium">Video Concept</span>
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'social' ? 'bg-editorial-text text-white shadow-lg' : 'bg-white text-editorial-muted hover:bg-stone-100'}`}
            >
              <Smartphone size={18} />
              <span className="font-medium">Social Media</span>
            </button>
          </div>
        </Reveal>

        {/* Content Area */}
        <Reveal delay={300}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl min-h-[500px]">

            {/* INFOGRAPHIC VIEW */}
            {activeTab === 'infographic' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-editorial-text">The Power to Prevent</h3>
                  <p className="text-editorial-muted">Evidence-Based, Non-Antibiotic Solution</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  {/* Competitors Card */}
                  <div className="relative bg-gradient-to-br from-stone-100 to-stone-50 p-8 rounded-2xl border-2 border-stone-200 h-full flex flex-col overflow-hidden">
                    {/* Warning Badge */}
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Limited Action
                    </div>

                    <h4 className="font-bold text-stone-600 mb-6 text-center uppercase tracking-widest text-sm flex items-center justify-center space-x-2">
                      <span className="text-2xl">⚠️</span>
                      <span>Other Solutions</span>
                    </h4>

                    <div className="flex-grow flex flex-col justify-center items-center space-y-4 text-center">
                      {/* Single Action Visual */}
                      <div className="relative mb-4">
                        <div className="w-32 h-32 bg-stone-300/50 rounded-2xl flex items-center justify-center border-2 border-dashed border-stone-400">
                          <div className="text-center">
                            <div className="text-3xl mb-1">🩺</div>
                            <p className="text-xs font-bold text-stone-600 uppercase">Single<br />Action</p>
                          </div>
                        </div>
                      </div>

                      {/* Competitor Types */}
                      <div className="space-y-3 max-w-xs w-full">
                        <div className="bg-white/80 p-3 rounded-lg border border-stone-300 relative overflow-hidden">
                          <div className="absolute top-0 right-0 bg-stone-200 text-[10px] px-2 py-0.5 text-stone-600 font-bold rounded-bl">
                            Food Supplement
                          </div>
                          <p className="text-sm font-bold text-stone-700">D-Mannose</p>
                          <p className="text-xs text-stone-500 mt-1">Bladder only</p>
                        </div>
                        <div className="bg-white/80 p-3 rounded-lg border border-stone-300 relative overflow-hidden">
                          <div className="absolute top-0 right-0 bg-stone-200 text-[10px] px-2 py-0.5 text-stone-600 font-bold rounded-bl">
                            Food Supplement
                          </div>
                          <p className="text-sm font-bold text-stone-700">Cranberry Supplements</p>
                          <p className="text-xs text-stone-500 mt-1">Limited clinical evidence</p>
                        </div>
                      </div>

                      {/* Key Limitation */}
                      <div className="mt-4 bg-red-50 p-4 rounded-lg border border-red-200 max-w-xs">
                        <div className="flex items-start space-x-2">
                          <span className="text-red-500 font-bold flex-shrink-0 mt-0.5 text-lg">✕</span>
                          <p className="text-sm text-red-700 font-medium text-left">Does not stop bacterial migration from intestine</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Utipro Plus AF Card */}
                  <div className="relative bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border-2 border-editorial-accent h-full flex flex-col overflow-hidden shadow-lg">
                    {/* Premium Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-editorial-accent to-emerald-400 text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-md">
                      ⭐ Dual Action
                    </div>

                    <h4 className="font-bold text-editorial-accent mb-6 text-center uppercase tracking-widest text-sm flex items-center justify-center space-x-2">
                      <span className="text-2xl">✨</span>
                      <span>Utipro Plus AF</span>
                    </h4>

                    <div className="flex-grow space-y-5">
                      {/* Action 1 */}
                      <div className="bg-white p-5 rounded-xl shadow-md border border-emerald-100 transform hover:scale-105 transition-transform duration-200">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 bg-gradient-to-br from-editorial-slate to-stone-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
                            1
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-xl">🛡️</span>
                              <p className="font-bold text-editorial-text text-lg">Intestine Shield</p>
                              <span className="text-green-500 font-bold ml-auto">✓</span>
                            </div>
                            <p className="text-sm text-editorial-muted leading-relaxed">
                              <span className="font-semibold">Xyloglucan Film</span> blocks E. coli migration
                            </p>
                            <p className="text-xs text-editorial-accent mt-1 font-semibold">
                              Source of 90% of uncomplicated UTIs
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Arrow Connector */}
                      <div className="flex justify-center">
                        <div className="bg-editorial-accent/10 rounded-full p-2">
                          <ArrowDown className="text-editorial-accent w-6 h-6" strokeWidth={3} />
                        </div>
                      </div>

                      {/* Action 2 */}
                      <div className="bg-white p-5 rounded-xl shadow-md border border-emerald-100 transform hover:scale-105 transition-transform duration-200">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 bg-gradient-to-br from-editorial-accent to-emerald-400 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
                            2
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-xl">🔬</span>
                              <p className="font-bold text-editorial-text text-lg">Bladder Defense</p>
                              <span className="text-green-500 font-bold ml-auto">✓</span>
                            </div>
                            <p className="text-sm text-editorial-muted leading-relaxed">
                              <span className="font-semibold">Hibiscus/Propolis</span> acidify urine for symptom relief
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Medical Device Badge */}
                    <div className="mt-6 bg-gradient-to-r from-editorial-accent to-emerald-400 text-white p-4 rounded-xl text-center shadow-md">
                      <div className="flex items-center justify-center space-x-2 mb-1">
                        <span className="text-xl">🏥</span>
                        <p className="text-sm font-bold uppercase tracking-wide">European Medical Device</p>
                      </div>
                      <p className="text-xs opacity-90">EAU Recognised | HPRA Compliant</p>
                    </div>

                    {/* Antibiotic-Sparing */}
                    <div className="mt-3 bg-emerald-100 p-3 rounded-lg border border-emerald-200">
                      <p className="text-xs text-center font-semibold text-emerald-800">
                        ✓ Antibiotic-Sparing Solution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIDEO VIEW */}
            {activeTab === 'video' && (
              <div className="max-w-3xl mx-auto animate-fadeIn">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-editorial-text">"The Normaliser"</h3>
                  <p className="text-editorial-muted">Targeting 18-24s: "It's common. It's controllable."</p>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full aspect-video object-cover cursor-pointer"
                    onClick={toggleVideoMute}
                  >
                    <source src="/campaign-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleVideoMute}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                    aria-label={isVideoMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isVideoMuted ? (
                      <VolumeX className="w-5 h-5 text-editorial-text" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-editorial-accent" />
                    )}
                  </button>
                </div>

                <div className="mt-8 bg-stone-50 p-6 rounded-lg font-mono text-sm text-editorial-slate border border-stone-200">
                  <p className="font-bold mb-2">SCRIPT PREVIEW:</p>
                  <p className="mb-4">[VISUAL]: Montage of diverse young women in university settings, looking uncomfortable/annoyed.</p>
                  <p className="mb-4">[VOICEOVER]: "It's that feeling. Again. The pause on your plans. The hesitation."</p>
                  <p className="mb-4">[VISUAL]: Cut to a student pulling Utipro Plus AF from her bag. She looks relieved, confident.</p>
                  <p className="mb-4">[VOICEOVER]: "But it doesn't have to rule your life. Utipro Plus AF. Prevents the recurrence. Stops the shame."</p>
                  <p className="italic text-editorial-accent">Tagline: The Power to Prevent.</p>
                </div>
              </div>
            )}

            {/* SOCIAL VIEW */}
            {activeTab === 'social' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">

                {/* Asset A: Social Media Ad 1 */}
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden h-[400px] group cursor-pointer">
                  <img
                    src="/social-ad-1.png"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-95"
                    alt="Utipro Plus AF Social Media Campaign"
                  />
                </div>

                {/* Asset B: Social Media Ad 2 */}
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden h-[400px] group cursor-pointer">
                  <img
                    src="/social-ad-2.png"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-95"
                    alt="Utipro Plus AF Social Campaign"
                  />
                </div>

                {/* Asset C: Video Ad */}
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden h-[400px] group cursor-pointer">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-95"
                  >
                    <source src="/social-ad-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Asset D: Pink Social Media Ad */}
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden h-[400px] group cursor-pointer">
                  <img
                    src="/social-ad-pink.png"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-95"
                    alt="Utipro Plus AF Social Media Ad - Recurrent UTIs Campaign"
                  />
                </div>

              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContentHub;