import { Link } from "react-router-dom";
import { Tag } from "./ui.jsx";

export default function ArticleCard({ article }) {
  return (
    <Link
      to={`/articles/${article.slug}`}
      className='flex flex-col rounded-2xl border border-slate-200 p-6 transition hover:border-accent'
    >
      <div className='mb-4 flex items-center gap-3 text-xs text-slate-500'>
        <Tag>{article.category}</Tag>
        {article.readTime}
      </div>
      <h3 className='text-lg font-bold'>{article.title}</h3>
      <p className='mt-2 text-slate-600'>{article.excerpt}</p>
      <div className='mt-auto flex items-center justify-between pt-5 text-sm'>
        <time className='text-slate-400'>{article.date}</time>
        <span className='font-semibold text-accent'>Read</span>
      </div>
    </Link>
  );
}
