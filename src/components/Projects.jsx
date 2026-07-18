const PROJECTS = [
  {
    path: '~/projetos/stock-supermarket',
    title: 'Stock-SuperMarket',
    description: 'Sistema de gestão de estoque para loja, em Python.',
    tags: ['Python'],
    href: 'https://github.com/EduardoML14/Stock-SuperMarket',
  },
  {
    path: '~/projetos/idonate',
    title: 'iDonate',
    description: 'Plataforma web de doação de alimentos, em Laravel. Projeto academico',
    tags: ['Laravel', 'PHP'],
    href: 'https://github.com/HanryLedoux/iDonate',
  },
  {
    path: '~/projetos/API-Mercado-Livre',
    title: 'API-Mercado-Livre',
    description: 'API em Python que cada script resolve uma necessidade específica.',
    tags: ['Python', 'API'],
    href: 'https://github.com/EduardoML14/API-Mercado-Livre',
  },
  {
    path: '~/projetos/visitas-api-ml',
    title: 'Visitas-API-ML',
    description: 'API em Python que traz as visitas de uma conta do Mercado Livre.',
    tags: ['Python', 'API'],
    href: 'https://github.com/EduardoML14/Visitas-API-ML',
  },
]

function ProjectCard({ project }) {
  const Wrapper = project.href ? 'a' : 'div'
  const wrapperProps = project.href
    ? { href: project.href, target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col rounded-lg border border-hair bg-surface/50 p-5 transition-colors hover:border-hair-strong"
    >
      <p className="font-mono text-xs text-text-faint">{project.path}</p>
      <h3 className="mt-3 text-base font-medium text-text">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-dim">
        {project.description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2 font-mono text-xs text-text-faint">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded border border-hair px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
        {project.href && (
          <span className="font-mono text-xs text-text-faint transition-colors group-hover:text-amber">
            abrir ↗
          </span>
        )}
      </div>
    </Wrapper>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-mono text-sm text-text-faint">// projetos</p>
      <h2 className="mt-2 text-2xl font-medium text-text">O que venho construindo</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
