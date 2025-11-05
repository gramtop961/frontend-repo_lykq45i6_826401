import React from 'react';

const items = [
  {
    name: 'Lemon Herb Chicken Bowl',
    desc: 'Free-range chicken, quinoa, roasted veggies, lemon zest.',
    price: 12.5,
    tag: 'High Protein',
  },
  {
    name: 'Hearty Veggie Stew',
    desc: 'Seasonal vegetables simmered in a rich tomato base.',
    price: 10.0,
    tag: 'Vegan',
  },
  {
    name: 'Turmeric Lentil Daal',
    desc: 'Comforting homemade daal with basmati rice and pickle.',
    price: 9.5,
    tag: 'Gluten Free',
  },
];

export default function DailyMenu() {
  return (
    <section id="menu" className="bg-[#fef3c7] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Today’s Menu</h2>
            <p className="mt-2 text-slate-600">Healthy, homemade dishes prepared fresh this morning.</p>
          </div>
          <a
            href="#order"
            className="hidden rounded-full px-5 py-2 text-sm font-semibold text-white md:inline-block"
            style={{ backgroundColor: '#f97316' }}
          >
            Quick Order
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="group rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium text-white"
                  style={{ backgroundColor: '#10b981' }}
                >
                  {item.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">${item.price.toFixed(2)}</span>
                <button
                  className="rounded-full px-4 py-2 text-sm font-semibold text-white"
                  style={{ backgroundColor: '#f97316' }}
                >
                  Add to Order
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
