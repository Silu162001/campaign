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
                  <h3 className="text-2xl font-serif font-bold text-editorial-text">5 Ways to Take Care of Yourself</h3>
                  <p className="text-editorial-muted">Essential Self-Care Tips for UTI Prevention</p>
                </div>

                <div className="flex justify-center">
                  <div className="max-w-4xl w-full">
                    <img
                      src="/self-care-infographic.png"
                      alt="5 Ways to Take Care of Yourself - UTI Prevention Infographic"
                      className="w-full h-auto rounded-2xl shadow-xl border-4 border-white"
                    />
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