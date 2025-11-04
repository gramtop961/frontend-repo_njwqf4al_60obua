import React from 'react';
import { motion } from 'framer-motion';

// Expanded selection featuring One Piece characters and BTS members for a livelier vibe
const images = [
  // One Piece
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'Monkey D. Luffy — One Piece',
  },
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'Roronoa Zoro — One Piece',
  },
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'Nami — One Piece',
  },
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'Sanji — One Piece',
  },
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'Tony Tony Chopper — One Piece',
  },
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'Nico Robin — One Piece',
  },
  // BTS group & members (Wikimedia Commons)
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'BTS — American Music Awards 2017',
  },
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'BTS — Billboard Music Awards 2019',
  },
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'RM — BTS',
  },
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'Jin — BTS',
  },
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'Suga — BTS',
  },
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'J-Hope — BTS',
  },
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'Jimin — BTS',
  },
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'V — BTS',
  },
  {
    src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    label: 'Jungkook — BTS',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, type: 'spring', stiffness: 120, damping: 14 } }),
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
          <p className="mt-2 text-slate-600">Lebih rame! Koleksi One Piece & BTS spesial untuk Maulana & Hani.</p>
        </div>

        {/* Tag marquee */}
        <div className="mt-6 overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap text-sm text-slate-600"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            {["One Piece", "Straw Hat", "Luffy", "Zoro", "Nami", "Sanji", "Chopper", "Robin", "BTS", "RM", "Jin", "Suga", "J-Hope", "Jimin", "V", "Jungkook"].map((t) => (
              <span key={t} className="rounded-full bg-slate-100 px-3 py-1">#{t}</span>
            ))}
            {["One Piece", "Straw Hat", "Luffy", "Zoro", "Nami", "Sanji", "Chopper", "Robin", "BTS", "RM", "Jin", "Suga", "J-Hope", "Jimin", "V", "Jungkook"].map((t) => (
              <span key={`${t}-dup`} className="rounded-full bg-slate-100 px-3 py-1">#{t}</span>
            ))}
          </motion.div>
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
              <span className="text-slate-700">{i % 2 === 0 ? 'One Piece' : 'BTS'}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedGallery;
