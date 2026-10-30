import { Section, SectionHeading } from "./ui.jsx";
import { education } from "../data/portfolio.js";

export default function Education() {
  return (
    <Section>
      <SectionHeading
        title='Education'
        description='Education that has shaped the way I build systems.'
      />
      <ol className='space-y-10 border-l border-slate-200 pl-7'>
        {education.map((e) => (
          <li key={e.degree} className='relative'>
            <span className='absolute -left-[2.1rem] top-1.5 size-3 rounded-full border-2 border-accent bg-white' />
            <p className='text-sm font-medium text-accent'>{e.period}</p>
            <h3 className='mt-1 text-lg font-bold'>{e.degree}</h3>
            <p className='text-sm text-slate-500'>{e.institution}</p>
            <p className='mt-3 max-w-2xl text-slate-600'>{e.summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
