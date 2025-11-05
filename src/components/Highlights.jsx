import React from 'react';
import { Leaf, ShieldCheck, Truck } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Wholesome Ingredients',
    text: 'Locally sourced produce, cooked the homi way — fresh, clean, and nutritious.',
  },
  {
    icon: ShieldCheck,
    title: 'Chef Vetted',
    text: 'Every chef is verified for quality, hygiene, and consistency.',
  },
  {
    icon: Truck,
    title: 'Same-Day Delivery',
    text: 'Meals reach you warm and right on time, every single day.',
  },
];

export default function Highlights() {
  return (
    <section className="bg-[#fef3c7] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Why Homi?</h2>
          <p className="mt-2 text-slate-600">Healthy comfort food with a warm, homemade touch.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5"
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl"
                  style={{ backgroundColor: '#10b981' }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
