import { SocialIcon } from "./icons.jsx";
import { profile } from "../data/profile.js";

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {profile.socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={s.label}
            title={s.label}
            className='text-slate-500 transition hover:text-accent'
          >
            <SocialIcon name={s.label} />
          </a>
        </li>
      ))}
    </ul>
  );
}
