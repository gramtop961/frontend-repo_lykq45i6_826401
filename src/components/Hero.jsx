import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#fef3c7]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ShS6h2HOKd20s1py/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil for readability (doesn't block scene interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-[#fef3c7]/60 to-[#fef3c7]" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center space-x-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#10b981' }} />
          <span className="text-sm font-medium text-emerald-700">Homi Foods</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#0f172a] sm:text-5xl md:text-6xl">
          Fresh, Homemade Goodness
          <br />
          <span style={{ color: '#10b981' }}>Delivered Daily</span>
        </h1>

        <p className="mt-4 max-w-2xl text-base text-slate-700 sm:text-lg">
          Nutritious, home-cooked meals crafted by local chefs. Simple, warm, and always fresh.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="rounded-full px-6 py-3 text-base font-semibold text-white shadow-md transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ backgroundColor: '#f97316', boxShadow: '0 10px 20px -10px rgba(249, 115, 22, 0.6)' }}
          >
            Explore Today’s Menu
          </a>
          <a
            href="#chefs"
            className="rounded-full border px-6 py-3 text-base font-semibold text-slate-800 transition-colors hover:bg-white/70"
            style={{ borderColor: '#10b981', color: '#0f172a', backgroundColor: 'rgba(255,255,255,0.7)' }}
          >
            Become a Chef
          </a>
        </div>
      </div>
    </section>
  );
}
