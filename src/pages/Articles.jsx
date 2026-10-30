import { Container, PageHeader } from "../components/ui.jsx";
import ArticleCard from "../components/ArticleCard.jsx";
import { articles } from "../data/portfolio.js";

export default function Articles() {
  return (
    <>
      <PageHeader
        title='Articles'
        description='Practical insights and lessons learned from web development, software engineering, and artificial intelligence.'
      />

      <Container className='grid gap-6 pb-24 md:grid-cols-2 lg:grid-cols-3'>
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </Container>
    </>
  );
}
