import React from 'react';
import { Heart, Music, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-indigo-100" />

      {/* Animated glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-pink-400/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-400/30 blur-3xl animate-pulse" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center sm:py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-4 py-1 text-sm text-rose-600 backdrop-blur">
          <Sparkles className="h-4 w-4" />
          <span>Anime x K‑Pop Wedding</span>
        </div>

        <h1 className="font-semibold leading-tight text-4xl sm:text-5xl md:text-6xl bg-gradient-to-br from-rose-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
          Muhamad Maulana
          <span className="mx-3 inline-flex align-middle text-rose-500">&</span>
          Siti Hani Fauziyyah
        </h1>

        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-700">
          We joyfully invite you to celebrate our special day filled with love, music, and magic.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-slate-600">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            <Heart className="h-4 w-4 text-rose-500" />
            <span>Forever Begins</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            <Music className="h-4 w-4 text-indigo-500" />
            <span>Anime & K‑Pop Vibes</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            <Star className="h-4 w-4 text-amber-500" />
            <span>Dress Code: Pastel & Sparkle</span>
          </div>
        </div>

        <a href="#details" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 px-6 py-3 text-white shadow-lg transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-300">
          View Details
        </a>
      </div>
    </section>
  );
};

export default Hero;
