import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Avatar = ({ initials, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative">
      <div className="h-32 w-32 rounded-full bg-gradient-to-br from-rose-400 to-indigo-400 p-1 shadow-lg">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
          <span className="text-3xl font-semibold bg-gradient-to-br from-rose-600 to-indigo-600 bg-clip-text text-transparent">
            {initials}
          </span>
        </div>
      </div>
      <Sparkles className="absolute -right-2 -top-2 h-6 w-6 text-amber-400" />
    </div>
    <span className="mt-3 text-sm text-slate-600">{label}</span>
  </div>
);

const Couple = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-rose-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-slate-900">The Couple</h2>
        <p className="mt-2 text-center text-slate-600">Two hearts, one rhythm — inspired by our favorite anime and K‑pop moments.</p>

        <div className="mt-10 grid items-center gap-8 sm:grid-cols-[1fr_auto_1fr]">
          <Avatar initials="MM" label="Muhamad Maulana" />

          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <Heart className="h-4 w-4 text-rose-500" />
              <span className="text-slate-700">Forever</span>
            </div>
          </div>

          <Avatar initials="SHF" label="Siti Hani Fauziyyah" />
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white/70 p-6 text-center shadow-sm backdrop-blur">
          <p className="text-slate-700">
            Our story is a playlist of laughter, late‑night talks, and adventures. From binge‑watching anime to
            dancing to K‑pop, we found a love that feels like our favorite chorus — bright, dreamy, and unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Couple;
