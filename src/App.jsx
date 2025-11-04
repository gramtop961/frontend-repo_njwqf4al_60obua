import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Couple from './components/Couple';
import EventDetails from './components/EventDetails';

const App = () => {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Hero />
      <Countdown />
      <Couple />
      <EventDetails />

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Muhamad Maulana & Siti Hani Fauziyyah — With love, anime & K‑pop vibes.
        </div>
      </footer>
    </div>
  );
};

export default App;
