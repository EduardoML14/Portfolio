const LINKS = [
  { label: 'sobre', href: '#sobre' },
  { label: 'projetos', href: '#projetos' },
  { label: 'stack', href: '#stack' },
  { label: 'contato', href: '#contato' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-text-dim">
          <span className="text-amber">eduardo</span>@dev:~$
        </a>
        <nav className="flex gap-6 font-mono text-sm text-text-dim">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
