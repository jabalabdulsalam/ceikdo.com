import { Section, SectionHeading, Tag } from "./ui.jsx";
import { TechIcon, hasTechIcon } from "./icons.jsx";
import { stack } from "../data/portfolio.js";

export default function Stack() {
  return (
    <Section>
      <SectionHeading
        title='Technologies I Use'
        description='The technology stack I use for professional projects'
      />

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {stack.map((g) => (
          <div key={g.group} className='rounded-2xl border border-slate-200 p-6'>
            <h3 className='font-semibold'>{g.group}</h3>

            <ul className='mt-5 flex flex-wrap items-center gap-5'>
              {g.items.map((name) =>
                hasTechIcon(name) ? (
                  <li
                    key={name}
                    title={name}
                    className='text-slate-500 transition hover:text-accent'
                  >
                    <TechIcon name={name} className='size-8' />
                    <span className='sr-only'>{name}</span>
                  </li>
                ) : (
                  <li key={name}>
                    <Tag>{name}</Tag>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
