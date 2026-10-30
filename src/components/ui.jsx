import { Link } from "react-router-dom";

export const Container = ({ className = "", ...props }) => (
  <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`} {...props} />
);

export const Tag = ({ children }) => (
  <span className='rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent'>
    {children}
  </span>
);

export function Button({ to, href, variant = "solid", className = "", children, ...rest }) {
  const look =
    variant === "solid"
      ? "bg-accent text-white hover:opacity-90"
      : variant === "light"
        ? "bg-white text-accent hover:bg-accent-soft"
        : "border border-slate-300 text-slate-800 hover:border-accent hover:text-accent";
  const cls = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${look} ${className}`;
  if (!to && !href) {
    throw new Error("Button requires either a `to` or `href` prop.");
  }

  return to ? (
    <Link to={to} className={cls} {...rest}>
      {children}
    </Link>
  ) : (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}

export function SectionHeading({ title, description, to, linkLabel = "View All" }) {
  return (
    <div className='mb-10 flex items-end justify-between gap-6'>
      <div className='max-w-2xl'>
        <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>{title}</h2>
        {description && <p className='mt-2 text-slate-600'>{description}</p>}
      </div>
      {to && (
        <Link to={to} className='shrink-0 text-sm font-semibold text-accent hover:underline'>
          {linkLabel}
        </Link>
      )}
    </div>
  );
}

export const Section = ({ children, className = "" }) => (
  <section className={`border-t border-slate-200 py-20 ${className}`}>
    <Container>{children}</Container>
  </section>
);

export const PageHeader = ({ title, description }) => (
  <Container className='py-16 sm:py-20'>
    <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl'>{title}</h1>
    {description && <p className='mt-4 max-w-2xl text-lg text-slate-600'>{description}</p>}
  </Container>
);
