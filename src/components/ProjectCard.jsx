import { useState } from "react";
import { Tag } from "./ui.jsx";
import { TechIcon, hasTechIcon } from "./icons.jsx";

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className='group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg'>
      {/* Project Image */}
      <div className='relative aspect-video overflow-hidden bg-accent-soft'>
        {project.image && !imageError ? (
          <img
            src={project.image}
            alt={`Screenshot ${project.title}`}
            loading='lazy'
            decoding='async'
            onError={() => setImageError(true)}
            className='size-full object-cover object-top transition duration-500 group-hover:scale-105'
          />
        ) : (
          <div className='grid size-full place-items-center text-5xl font-extrabold text-accent/40'>
            {project.title?.charAt(0) ?? "P"}
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className='flex flex-1 flex-col p-6'>
        <p className='text-sm text-slate-500'>
          <span className='font-semibold text-accent'>{project.category}</span>
          <span className='mx-1.5'>/</span>
          {project.period}
        </p>

        <h3 className='mt-2 text-xl font-bold transition-colors group-hover:text-accent'>
          {project.url ? (
            <a
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className='mt-2 text-slate-600'>{project.description}</p>

        {/* Technology Stack */}
        <ul className='mt-auto flex flex-wrap items-center gap-4 pt-5'>
          {project.tech.map((name) =>
            hasTechIcon(name) ? (
              <li key={name} title={name} className='text-slate-500 transition hover:text-accent'>
                <TechIcon name={name} className='size-6' />
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
    </article>
  );
}
