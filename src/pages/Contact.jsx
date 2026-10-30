import { Container } from "../components/ui.jsx";
import { profile } from "../data/portfolio.js";

const steps = [
  {
    number: "01",
    title: "Tell me what you need",
    description:
      "Describe your idea, the problem you want to solve, or the website or system you want to build. Tell me who will use it and what you want to achieve.",
  },
  {
    number: "02",
    title: "We define the scope and approach",
    description:
      "We discuss the features, technology, timeline, and priorities to determine the right approach for your project.",
  },
  {
    number: "03",
    title: "We start with a clear plan",
    description:
      "You receive a clear project plan and estimated timeline. Development then follows the agreed scope until your project is ready to launch.",
  },
];

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "The timeline depends on the project's complexity, features, and requirements. After discussing your needs, I will provide an estimated timeline before development begins.",
  },
  {
    question: "What does the workflow look like?",
    answer:
      "The process typically includes discussing your requirements, defining the scope, planning the design and technology, developing the solution, testing, and deployment.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Maintenance and ongoing support can be discussed based on your project's needs, including bug fixes, updates, and additional features.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "I work with web development technologies and frameworks such as Laravel, PHP, JavaScript, React, and Tailwind CSS, depending on the project requirements.",
  },
  {
    question: "Can you work with clients remotely?",
    answer:
      "Yes. I can collaborate remotely with clients from different cities and countries through online meetings, messaging, and project management tools.",
  },
  {
    question: "How does payment work?",
    answer:
      "Payment terms are agreed upon before development begins. The arrangement can depend on the project scope, milestones, and overall requirements.",
  },
  {
    question: "Do you offer revisions or a warranty?",
    answer:
      "Revision terms and post-launch support are discussed at the beginning of the project so expectations are clear for both parties.",
  },
  {
    question: "Can you migrate an existing website to Laravel?",
    answer:
      "Yes. Existing websites and systems can be assessed for migration or redevelopment. The approach depends on the current technology, data structure, and business requirements.",
  },
];

export default function Contact() {
  const whatsappUrl = profile.whatsapp;
  const emailUrl = `mailto:${profile.email}`;

  return (
    <Container className='pb-24 pt-12 md:pt-20'>
      {/* Hero */}
      <section className='max-w-3xl'>
        <p className='mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent'>
          Get in touch
        </p>

        <h1 className='text-4xl font-bold tracking-tight text-slate-900 md:text-6xl'>
          Let’s build something together
        </h1>

        <p className='mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg'>
          Tell me about the website, application, or information system you want to build. Whether
          you have a new idea, need help improving an existing project, or want to discuss a
          collaboration, I’d be happy to hear from you.
        </p>

        <div className='mt-8 flex flex-wrap gap-3'>
          <a
            href={whatsappUrl}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90'
          >
            WhatsApp
          </a>

          <a
            href={emailUrl}
            className='inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent'
          >
            Email Me
          </a>
        </div>

        <p className='mt-5 text-sm leading-6 text-slate-500'>
          Usually replies within one business day · Available for freelance projects, consulting,
          and collaboration.
        </p>
      </section>

      {/* Project Process */}
      <section className='mt-24'>
        <div className='max-w-2xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-accent'>
            The process
          </p>

          <h2 className='mt-3 text-2xl font-bold text-slate-900 md:text-3xl'>How to get started</h2>

          <p className='mt-3 leading-7 text-slate-600'>
            A straightforward process to turn your idea into a working solution.
          </p>
        </div>

        <div className='mt-10 grid gap-8 md:grid-cols-3'>
          {steps.map((step) => (
            <article key={step.number} className='rounded-2xl border border-slate-200 p-6'>
              <span className='text-sm font-bold text-accent'>{step.number}</span>

              <h3 className='mt-5 text-lg font-semibold text-slate-900'>{step.title}</h3>

              <p className='mt-3 text-sm leading-7 text-slate-600'>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Details */}
      <section className='mt-24'>
        <div className='max-w-2xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-accent'>
            Contact details
          </p>

          <h2 className='mt-3 text-2xl font-bold text-slate-900 md:text-3xl'>
            Let’s start a conversation
          </h2>

          <p className='mt-3 leading-7 text-slate-600'>
            Choose whichever contact method works best for you.
          </p>
        </div>

        <div className='mt-8 grid gap-4 md:grid-cols-3'>
          <a
            href={whatsappUrl}
            target='_blank'
            rel='noreferrer'
            className='rounded-2xl border border-slate-200 p-6 transition hover:border-accent'
          >
            <span className='text-sm text-slate-500'>WhatsApp</span>
            <h3 className='mt-2 font-semibold text-slate-900'>Chat with me</h3>
            <p className='mt-2 text-sm text-slate-600'>
              For quick questions and project discussions.
            </p>
            <span className='mt-5 inline-block text-sm font-semibold text-accent'>
              Start a conversation ↗
            </span>
          </a>

          <a
            href={emailUrl}
            className='rounded-2xl border border-slate-200 p-6 transition hover:border-accent'
          >
            <span className='text-sm text-slate-500'>Email</span>
            <h3 className='mt-2 break-words font-semibold text-slate-900'>{profile.email}</h3>
            <p className='mt-2 text-sm text-slate-600'>
              For project briefs, proposals, and formal inquiries.
            </p>
            <span className='mt-5 inline-block text-sm font-semibold text-accent'>
              Send an email ↗
            </span>
          </a>

          <div className='rounded-2xl border border-slate-200 p-6'>
            <span className='text-sm text-slate-500'>Location</span>
            <h3 className='mt-2 font-semibold text-slate-900'>{profile.location}</h3>
            <p className='mt-2 text-sm leading-6 text-slate-600'>
              Open to remote collaboration with clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='mt-24'>
        <div className='max-w-2xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-accent'>FAQ</p>

          <h2 className='mt-3 text-2xl font-bold text-slate-900 md:text-3xl'>
            Frequently asked questions
          </h2>

          <p className='mt-3 leading-7 text-slate-600'>
            A few things you may want to know before starting a project.
          </p>
        </div>

        <div className='mt-8 divide-y divide-slate-200 border-y border-slate-200'>
          {faqs.map((faq) => (
            <details key={faq.question} className='group py-5'>
              <summary className='flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900'>
                {faq.question}

                <span className='text-xl text-slate-400 transition group-open:rotate-45'>+</span>
              </summary>

              <p className='mt-4 max-w-3xl text-sm leading-7 text-slate-600'>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className='mt-24 rounded-3xl bg-accent px-6 py-10 text-white md:px-12 md:py-14'>
        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-300'>
          Have a project in mind?
        </p>

        <h2 className='mt-4 max-w-2xl text-3xl font-bold md:text-4xl'>
          Let’s turn your idea into something useful.
        </h2>

        <p className='mt-4 max-w-2xl leading-7 text-slate-300'>
          Share your requirements, ask a question, or tell me what you are planning. We can start
          with a simple conversation.
        </p>

        <a
          href={whatsappUrl}
          target='_blank'
          rel='noreferrer'
          className='mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100'
        >
          Discuss Your Project
        </a>
      </section>
    </Container>
  );
}
