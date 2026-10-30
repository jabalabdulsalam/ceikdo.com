import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Container } from "./ui.jsx";
import { profile } from "../data/portfolio.js";
import SocialLinks from "./SocialLinks.jsx";

const nav = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/service", label: "Service" },
  { to: "/articles", label: "Articles" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition hover:text-accent ${isActive ? "text-accent" : "text-slate-600"}`;

function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [pathname]);

  return (
    <header className='sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur'>
      <Container className='flex h-16 items-center justify-between gap-4'>
        {/* Logo / Nama */}
        <Link to='/' className='flex min-w-0 items-center gap-2.5 font-bold'>
          <span className='grid size-8 shrink-0 place-items-center rounded-lg bg-accent text-sm text-white'>
            {profile.name[0]}
          </span>
          <span className='truncate'>{profile.name}</span>
        </Link>

        {/* Navigasi Desktop */}
        <nav className='hidden items-center gap-8 md:flex'>
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Tombol Desktop dan Burger Menu Mobile */}
        <div className='flex shrink-0 items-center gap-3'>
          {/* Contact Me: WhatsApp di Desktop */}
          <a
            href={profile.whatsapp}
            target='_blank'
            rel='noopener noreferrer'
            className='hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 md:inline-flex'
          >
            Contact Me
          </a>

          {/* Burger Menu Mobile */}
          <button
            type='button'
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls='mobile-navigation'
            onClick={() => setOpen((previous) => !previous)}
            className='rounded-lg border border-slate-200 px-3 py-2 text-slate-700 transition hover:bg-slate-100 md:hidden'
          >
            {open ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
              >
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
              >
                <path d='M4 6h16' />
                <path d='M4 12h16' />
                <path d='M4 18h16' />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Dropdown Menu Mobile */}
      {open && (
        <nav
          id='mobile-navigation'
          aria-label='Mobile navigation'
          className='border-t border-slate-200 bg-white md:hidden'
        >
          <Container className='flex flex-col gap-4 py-4'>
            {nav
              .filter((n) => n.to !== "/contact")
              .map((n) => (
                <NavLink key={n.to} to={n.to} className={linkClass} onClick={() => setOpen(false)}>
                  {n.label}
                </NavLink>
              ))}

            {/* Contact Me: WhatsApp di Mobile */}
            <a
              href={profile.whatsapp}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex w-fit rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90'
              onClick={() => setOpen(false)}
            >
              Contact Me
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-slate-50'>
      <Container className='grid gap-10 py-14 md:grid-cols-3'>
        {/* Informasi Profil */}
        <div>
          <p className='font-bold'>{profile.name}</p>
          <p className='mt-2 text-sm text-slate-600'>
            {profile.role}, based in {profile.location}.
          </p>
        </div>

        {/* Informasi Kontak */}
        <div>
          <p className='text-sm font-semibold'>Contact</p>
          <ul className='mt-3 space-y-2 text-sm text-slate-600'>
            <li>
              <a href={`mailto:${profile.email}`} className='hover:text-accent'>
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.whatsapp}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-accent'
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <p className='text-sm font-semibold'>Links</p>
          <SocialLinks className='mt-3' />
        </div>
      </Container>

      {/* Copyright */}
      <Container className='border-t border-slate-200 py-5 text-xs text-slate-500'>
        © {new Date().getFullYear()} {profile.name}. Built with React Router and Tailwind CSS.
      </Container>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className='flex min-h-svh flex-col'>
      <Header />

      <main className='flex-1'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
