const GROUPS = [
  { label: 'linguagens', items: ['Python', 'JavaScript', 'Java'] },
  { label: 'backend', items: ['API', 'FastAPI', 'Laravel', 'React'] },
  { label: 'dados', items: ['SQLite', 'PostgreSQL', 'MySQL', 'NoSQL'] },
  { label: 'análise', items: ['Power BI', 'Excel', 'Artificial Intelligence'] },
  { label: 'infra', items: ['Linux', 'Git'] },
]

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="mt-2 text-2xl font-medium text-text">Tecnologias</h2>

      <div className="mt-8 divide-y divide-hair rounded-lg border border-hair">
        {GROUPS.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:gap-8"
          >
            <span className="w-28 shrink-0 font-mono text-xs text-text-faint">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-hair bg-surface-2 px-2.5 py-1 text-sm text-text-dim"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
