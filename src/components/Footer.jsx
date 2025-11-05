import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#fef3c7]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: '#10b981' }} />
            <span className="text-sm font-semibold text-slate-800">Homi Foods</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#menu" className="hover:text-slate-900">Menu</a>
            <a href="#chefs" className="hover:text-slate-900">Chefs</a>
            <a href="#order" className="hover:text-slate-900">Order</a>
          </nav>
        </div>
        <div className="mt-6 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Homi Foods. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
