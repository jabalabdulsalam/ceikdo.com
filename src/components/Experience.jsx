import { Section, SectionHeading } from "./ui.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <Section>
      <SectionHeading
        title='Experience'
        description='My professional journey in government service and web development, combining technical expertise with practical experience to build effective digital solutions.'
      />
      <ol className='space-y-10 border-l border-slate-200 pl-7'>
        {experience.map((e) => (
          <li key={e.title} className='relative'>
            <span className='absolute -left-[2.1rem] top-1.5 size-3 rounded-full border-2 border-accent bg-white' />
            <p className='text-sm font-medium text-accent'>{e.period}</p>
            <h3 className='mt-1 text-lg font-bold'>{e.title}</h3>
            <p className='text-sm text-slate-500'>{e.place}</p>
            <p className='mt-3 max-w-2xl text-slate-600'>{e.summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
