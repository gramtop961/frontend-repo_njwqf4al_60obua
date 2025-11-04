import React, { useEffect, useMemo, useState } from 'react';

const targetDateString = '2025-02-14T09:00:00+07:00'; // Example date (Akad Nikah)

function getTimeLeft(targetDate) {
  const total = targetDate - new Date();
  const seconds = Math.max(0, Math.floor((total / 1000) % 60));
  const minutes = Math.max(0, Math.floor((total / 1000 / 60) % 60));
  const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24));
  const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));
  return { total, days, hours, minutes, seconds };
}

const Countdown = () => {
  const target = useMemo(() => new Date(targetDateString), []);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(target));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-slate-800">Countdown to Our Big Day</h2>
        <p className="mt-2 text-center text-slate-600">Save the date and celebrate with us!</p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-gradient-to-br from-rose-50 to-indigo-50 p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-slate-900">{String(item.value).padStart(2, '0')}</div>
              <div className="mt-1 text-sm uppercase tracking-wider text-slate-500">{item.label}</div>
            </div>
          ))}
        </div>

        {timeLeft.total <= 0 && (
          <p className="mt-6 text-center text-rose-600">The celebration has begun! 🎉</p>
        )}
      </div>
    </section>
  );
};

export default Countdown;
