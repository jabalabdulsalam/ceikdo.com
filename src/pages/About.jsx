import { Container, PageHeader } from "../components/ui.jsx";
import Stack from "../components/Stack.jsx";
import Experience from "../components/Experience.jsx";
import Cta from "../components/Cta.jsx";
import { profile } from "../data/profile.js";

export default function About() {
  return (
    <>
      <PageHeader
        title='Jabal Abdul Salam'
        description={<span className='text-lg'>Full-Stack Web Developer</span>}
      />
      <Container className='grid gap-10 pb-20 md:grid-cols-3'>
        <div className='space-y-5 text-lg leading-relaxed text-slate-600 md:col-span-2'>
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className='text-base text-slate-500'>Based in {profile.location}.</p>
        </div>
      </Container>
      <Stack />
      <Experience />
      <Cta />
    </>
  );
}
