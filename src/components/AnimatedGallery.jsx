import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'Anime Street Aesthetic',
  },
  {
    src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=60',
    label: 'Neon Arcade Vibes',
  },
  {
    src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=60',
    label: 'K‑Pop Concert Energy',
  },
  {
    src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=60',
    label: 'Stage & Spotlight',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, type: 'spring', stiffness: 120, damping: 14 } }),
};

const AnimatedGallery = () => {
  return (
    <section className="relative bg-white">
      {/* decorative gradients */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Anime & K‑Pop Showcase</h2>
          <p className="mt-2 text-slate-600">A little preview of the vibes for Maulana & Hani’s celebration.</p>
        </div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              variants={cardVariants}
              custom={i}
              whileHover={{ y: -6, rotate: [-1.5, 1.5, 0], transition: { duration: 0.6 } }}
              className="group overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 to-indigo-50 p-2 shadow-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src={img.src}
                  alt={img.label}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-3 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* floating stickers */}
        <div className="relative mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {["💞", "🎶", "🌸", "✨"].map((emoji, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center justify-center rounded-xl bg-white/70 px-4 py-3 text-lg shadow-sm backdrop-blur"
            >
              <span className="mr-2 text-xl">{emoji}</span>
              <span className="text-slate-700">{i % 2 === 0 ? 'Anime' : 'K‑Pop'}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedGallery;
