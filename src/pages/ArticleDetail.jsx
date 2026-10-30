import { Link, useParams } from "react-router-dom";
import { Container, Tag } from "../components/ui.jsx";
import NotFound from "./NotFound.jsx";
import { articles } from "../data/portfolio.js";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <NotFound />;

  return (
    <Container className='max-w-3xl py-16'>
      {/* Back to Articles */}
      <Link to='/articles' className='text-sm font-semibold text-accent hover:underline'>
        ← Back to Articles
      </Link>

      {/* Article Metadata */}
      <div className='mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-500'>
        <Tag>{article.category}</Tag>
        <time dateTime={article.date}>{article.date}</time>
        <span>·</span>
        <span>{article.readTime}</span>
      </div>

      {/* Article Title */}
      <h1 className='mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>{article.title}</h1>

      {/* Article Excerpt */}
      <p className='mt-5 text-lg leading-relaxed text-slate-600'>{article.excerpt}</p>

      {/* Article Content */}
      <article className='mt-10' itemScope itemType='https://schema.org/Article'>
        <meta itemProp='headline' content={article.title} />
        <meta itemProp='description' content={article.excerpt} />
        {article.content.map((section, index) => (
          <section key={index} className='mb-8'>
            <h2 className='mb-3 text-xl font-bold text-slate-900'>{section.heading}</h2>

            <p className='text-base leading-7 text-slate-600'>{section.body}</p>
          </section>
        ))}
      </article>

      {/* Back to Articles */}
      <div className='mt-12 border-t border-slate-200 pt-6'>
        <Link to='/articles' className='text-sm font-semibold text-accent hover:underline'>
          ← Explore More Articles
        </Link>
      </div>
    </Container>
  );
}
