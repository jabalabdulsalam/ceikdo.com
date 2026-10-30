import { Button, Section } from "./ui.jsx";
import { cta, profile } from "../data/portfolio.js";

export default function Cta() {
  return (
    <Section>
      <div className="rounded-3xl bg-accent px-8 py-14 text-white sm:px-14">
        <p className="text-sm font-semibold opacity-80">{profile.status}</p>
        <h2 className="mt-2 max-w-xl text-3xl font-bold sm:text-4xl">{cta.title}</h2>
        <p className="mt-4 max-w-xl opacity-90">{cta.text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`mailto:${profile.email}`} variant="light">{profile.email}</Button>
          <Button href={profile.whatsapp} variant="outline" className="border-white/60 text-white hover:border-white hover:text-white">WhatsApp</Button>
        </div>
      </div>
    </Section>
  );
}
