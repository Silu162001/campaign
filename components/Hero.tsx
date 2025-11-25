import React, { useState, useRef } from 'react';
import { ArrowRight, ShieldCheck, Volume2, VolumeX } from 'lucide-react';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToDualAction = () => {
    const element = document.getElementById('dual-action');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative overflow-hidden bg-editorial-cream pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-stone-200 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <Reveal>
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-stone-200">
                <ShieldCheck className="text-editorial-gold w-4 h-4" />
                <span className="text-xs font-bold tracking-widest uppercase text-editorial-slate">
                  Recognised by the European Association of Urology
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-editorial-text leading-tight">
                The Power to <br />
                <span className="italic text-editorial-accent">Prevent.</span>
              </h1>

              <p className="text-lg md:text-xl text-editorial-muted max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Take back control of your well-being. Utipro Plus AF is the clinically-proven,
                non-antibiotic solution for UTI control and recurrence prevention.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={scrollToDualAction}
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-editorial-text rounded-full overflow-hidden transition-all duration-300 hover:bg-editorial-accent shadow-lg hover:shadow-xl"
                >
                  <span>Discover the Dual-Action Difference</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="text-sm text-editorial-muted italic">
                  Compliance assured by clinical data.
                </div>
              </div>
            </div>
          </Reveal>

          {/* Visual Content */}
          <Reveal delay={200}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                  onClick={toggleMute}
                >
                  <source src="/campaign-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

                {/* Mute/Unmute Button */}
                <button
                  onClick={toggleMute}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-editorial-text" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-editorial-accent" />
                  )}
                </button>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Hero;