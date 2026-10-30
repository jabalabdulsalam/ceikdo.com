import Hero from "../components/Hero.jsx";
import Stack from "../components/Stack.jsx";
import Experience from "../components/Experience.jsx";
import ServiceGrid from "../components/ServiceGrid.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ArticleCard from "../components/ArticleCard.jsx";
import Cta from "../components/Cta.jsx";
import { Section, SectionHeading } from "../components/ui.jsx";
import { articles, projects } from "../data/portfolio.js";
import Education from "../components/Education.jsx";

export default function Home() {
  return (
    <>
      <Hero />

      <Section>
        <SectionHeading
          title='Services & Pricing'
          description='Explore the services I offer to help bring your ideas to life.'
          to='/service'
          linkLabel='View All'
        />
        <ServiceGrid />
      </Section>

      <Stack />

      <Section>
        <SectionHeading
          title='Featured Projects'
          description='A selection of digital solutions and projects I have worked on.'
          to='/projects'
        />
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Experience />

      <Education />

      <Section>
        <SectionHeading
          title='Articles'
          description='Practical insights and lessons learned from building software.'
          to='/articles'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          {articles.slice(0, 3).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </Section>

      <Cta />
    </>
  );
}
