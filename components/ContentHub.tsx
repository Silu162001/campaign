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
                  <h3 className="text-2xl font-serif font-bold text-editorial-text">The Evidence Builder</h3>
                  <p className="text-editorial-muted">Targeting Females 25-40: Visualizing the Science</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  {/* Competitors Card */}
                  <div className="relative bg-gradient-to-br from-stone-100 to-stone-50 p-8 rounded-2xl border-2 border-stone-200 h-full flex flex-col overflow-hidden">
                    {/* Warning Badge */}
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Limited
                    </div>

                    <h4 className="font-bold text-stone-600 mb-6 text-center uppercase tracking-widest text-sm flex items-center justify-center space-x-2">
                      <span className="text-2xl">⚠️</span>
                      <span>Competitors</span>
                    </h4>

                    <div className="flex-grow flex flex-col justify-center items-center space-y-6 text-center">
                      {/* Single Action Visual */}
                      <div className="relative">
                        <div className="w-32 h-32 bg-stone-300/50 rounded-2xl flex items-center justify-center border-2 border-dashed border-stone-400">
                          <div className="text-center">
                            <div className="text-3xl mb-1">🛡️</div>
                            <p className="text-xs font-bold text-stone-600 uppercase">Single<br />Action</p>
                          </div>
                        </div>
                        {/* X mark indicator */}
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                          ✕
                        </div>
                      </div>

                      {/* Limitations */}
                      <div className="space-y-3 max-w-xs">
                        <div className="flex items-start space-x-2 text-left bg-white/60 p-3 rounded-lg">
                          <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✕</span>
                          <p className="text-sm text-stone-700 font-medium">Limited to Bladder only</p>
                        </div>
                        <div className="flex items-start space-x-2 text-left bg-white/60 p-3 rounded-lg">
                          <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✕</span>
                          <p className="text-sm text-stone-700 font-medium">Does not stop bacterial migration</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Utipro Plus AF Card */}
                  <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl border-2 border-editorial-accent h-full flex flex-col overflow-hidden shadow-lg">
                    {/* Premium Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-editorial-accent to-rose-400 text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-md">
                      ⭐ Dual Action
                    </div>

                    <h4 className="font-bold text-editorial-accent mb-6 text-center uppercase tracking-widest text-sm flex items-center justify-center space-x-2">
                      <span className="text-2xl">✨</span>
                      <span>Utipro Plus AF</span>
                    </h4>

                    <div className="flex-grow space-y-5">
                      {/* Action 1 */}
                      <div className="bg-white p-5 rounded-xl shadow-md border border-rose-100 transform hover:scale-105 transition-transform duration-200">
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
                      <div className="bg-white p-5 rounded-xl shadow-md border border-rose-100 transform hover:scale-105 transition-transform duration-200">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 bg-gradient-to-br from-editorial-accent to-rose-400 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
                            2
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-xl">🔬</span>
                              <p className="font-bold text-editorial-text text-lg">Bladder Defense</p>
                              <span className="text-green-500 font-bold ml-auto">✓</span>
                            </div>
                            <p className="text-sm text-editorial-muted leading-relaxed">
                              <span className="font-semibold">Hibiscus/Propolis</span> acidify urine environment
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Clinical Proof Badge */}
                    <div className="mt-6 bg-gradient-to-r from-editorial-accent to-rose-400 text-white p-4 rounded-xl text-center shadow-md">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-xl">✓</span>
                        <p className="text-sm font-bold uppercase tracking-wide">Clinically Proven Results</p>
                      </div>
                      <p className="text-xs mt-1 opacity-90">Significant Reduction in Recurrence</p>
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

                {/* Asset A: TikTok */}
                <div className="bg-stone-900 rounded-xl overflow-hidden text-white relative h-[400px]">
                  <img src="https://picsum.photos/400/800" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="TikTok BG" />
                  <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                    <div className="bg-black/50 p-2 rounded mb-2 w-fit">
                      <p className="text-sm font-bold">Are UTIs ruining your student life?</p>
                    </div>
                    <p className="text-xs mb-4">Check the Prevention Hub 🔗</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl">🎵</span>
                      <div className="bg-editorial-accent px-4 py-1 rounded-full text-xs font-bold">Shop</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded">TikTok / Reels</span>
                  </div>
                </div>

                {/* Asset B: Insta Carousel */}
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden h-[400px] flex flex-col">
                  <div className="h-2/3 bg-rose-50 flex items-center justify-center p-4 text-center">
                    <h3 className="font-serif text-2xl text-editorial-text">3 Steps to U-Turn Recurrence</h3>
                  </div>
                  <div className="p-4 bg-white flex-grow flex flex-col justify-between">
                    <div className="flex justify-center space-x-1 mb-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                    </div>
                    <div className="flex items-center text-editorial-text font-bold text-sm">
                      <Instagram size={16} className="mr-2" /> utipro_ie
                    </div>
                  </div>
                </div>

                {/* Asset C: FB Poll */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 h-[400px] flex flex-col">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                    <div className="text-xs">
                      <p className="font-bold">Utipro Plus AF</p>
                      <p className="text-gray-500">Sponsored</p>
                    </div>
                  </div>
                  <p className="text-sm font-bold mb-4">What is your biggest concern about UTIs?</p>
                  <div className="space-y-2 flex-grow">
                    <div className="bg-white p-3 rounded border border-blue-200 text-sm">A) Frequency</div>
                    <div className="bg-white p-3 rounded border border-blue-200 text-sm">B) Pain</div>
                    <div className="bg-white p-3 rounded border border-blue-200 text-sm">C) Antibiotic Use</div>
                  </div>
                  <div className="mt-4 flex justify-between text-gray-500 text-xs">
                    <span>1.2K Votes</span>
                    <span>Like • Comment</span>
                  </div>
                </div>

                {/* Asset D: Partner Post */}
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden h-[400px] flex flex-col">
                  <img src="https://picsum.photos/401/400" className="h-1/2 object-cover" alt="Couple" />
                  <div className="p-4">
                    <p className="text-sm font-serif italic mb-2">"Supporting her health is simple."</p>
                    <p className="text-xs text-stone-500 mb-4">Find the right prevention.</p>
                    <button className="w-full bg-editorial-text text-white py-2 rounded text-xs font-bold uppercase">Learn More</button>
                  </div>
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