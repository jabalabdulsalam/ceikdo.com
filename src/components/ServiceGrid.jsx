import { services } from "../data/portfolio.js";

export default function ServiceGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((s) => (
        <div key={s.title} className="flex flex-col rounded-2xl border border-slate-200 p-6">
          <h3 className="text-lg font-bold">{s.title}</h3>
          <p className="mt-2 text-slate-600">{s.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {s.features.map((f) => <li key={f}>✓ {f}</li>)}
          </ul>
          <p className="mt-auto pt-6 font-bold text-accent">{s.price}</p>
        </div>
      ))}
    </div>
  );
}
