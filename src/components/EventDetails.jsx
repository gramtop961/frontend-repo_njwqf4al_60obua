import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const DetailCard = ({ title, date, time, venue, address, mapUrl }) => (
  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <div className="mt-4 space-y-2 text-slate-700">
      <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-rose-500" /><span>{date}</span></div>
      <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-indigo-500" /><span>{time}</span></div>
      <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-amber-500" /><span><span className="font-medium">{venue}</span><br />{address}</span></div>
    </div>
    {mapUrl && (
      <a
        href={mapUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 px-4 py-2 text-sm text-white shadow transition hover:scale-[1.02]"
      >
        Open in Google Maps
      </a>
    )}
  </div>
);

const EventDetails = () => {
  return (
    <section id="details" className="relative bg-gradient-to-b from-rose-50 to-indigo-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-slate-900">Wedding Details</h2>
        <p className="mt-2 text-center text-slate-600">We can’t wait to celebrate with you. Here’s the plan.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <DetailCard
            title="Akad Nikah"
            date="Friday, 14 February 2025"
            time="09:00 AM — 10:30 AM"
            venue="Masjid Al‑Hikmah"
            address="Jl. Kebahagiaan No. 10, Bandung"
            mapUrl="https://maps.google.com/?q=Masjid+Al-Hikmah+Bandung"
          />
          <DetailCard
            title="Resepsi"
            date="Friday, 14 February 2025"
            time="11:30 AM — 02:00 PM"
            venue="Gedung Harmoni"
            address="Jl. Kenangan Indah No. 21, Bandung"
            mapUrl="https://maps.google.com/?q=Gedung+Harmoni+Bandung"
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Maulana%20%26%20Hani%2C%20saya%20akan%20hadir%20di%20acara%20pernikahan!"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 px-6 py-3 text-white shadow-lg transition hover:scale-[1.02]"
          >
            RSVP via WhatsApp
          </a>
          <p className="mt-3 text-sm text-slate-600">Kirim konfirmasi kehadiran Anda melalui WhatsApp.</p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
