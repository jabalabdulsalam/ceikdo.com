import { Container, PageHeader } from "../components/ui.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/portfolio.js";

export default function Projects() {
  return (
    <>
      <PageHeader
        title='Projects'
        description='Client projects and personal projects I have developed.'
      />
      <Container className='grid gap-6 pb-24 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </Container>
    </>
  );
}
