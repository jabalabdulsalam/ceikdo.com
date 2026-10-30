import { Button, Container } from "./ui.jsx";
import { profile } from "../data/portfolio.js";
import SocialLinks from "./SocialLinks.jsx";

export default function Hero() {
  return (
    <section className='flex min-h-[calc(100svh-4rem)] flex-col'>
      <Container className='grid flex-1 items-center gap-10 py-12 md:grid-cols-2'>
        <div>
          <p className='mb-5 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent'>
            <span className='size-2 rounded-full bg-accent' />
            {profile.status}
          </p>
          <h1 className='text-5xl font-extrabold tracking-tight sm:text-7xl'>{profile.name}</h1>
          <p className='mt-3 text-xl font-semibold text-accent'>{profile.role}</p>
          <p className='mt-5 max-w-xl text-lg leading-relaxed text-slate-600'>{profile.summary}</p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <Button to='/projects'>View Projects</Button>
            <Button to='/contact' variant='outline'>
              Contact Me
            </Button>
          </div>
        </div>
        <img
          src={profile.photo}
          alt={`Foto ${profile.name}`}
          className='mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl bg-accent-soft object-cover md:ml-auto'
        />
      </Container>
      <div className='border-t border-slate-200'>
        <Container className='flex flex-wrap items-center gap-x-6 gap-y-3 py-5 text-sm text-slate-500'>
          <span className='font-medium text-slate-700'>Follow me</span>
          <SocialLinks />
        </Container>
      </div>
    </section>
  );
}
