// src/routes/PricingPage.tsx
export default function PricingPage() {
  const tiers = [
    { name: 'Basic', price: '₹1,999', features: ['Oil change', 'Basic wash', 'Pickup'] },
    { name: 'Pro', price: '₹4,999', features: ['Full service', 'Interior detail', 'Same‑day'] },
    { name: 'Elite', price: '₹9,999', features: ['Ceramic coat', 'Loaner car', 'Priority support'] },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Pricing</h1>
      <p className="mt-2 text-muted">Transparent, itemized plans</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-xl border border-white/10 bg-card p-6">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="mt-1 text-3xl font-bold">{t.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {t.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <a href="/contact" className="mt-6 inline-block rounded-md bg-accent px-4 py-2 text-black hover:opacity-90">Choose</a>
          </div>
        ))}
      </div>
    </section>
  );
}
