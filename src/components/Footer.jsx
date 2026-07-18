export default function Footer() {
  return (
    <footer id="contato" className="mx-auto max-w-4xl px-6 pb-10 pt-6">
      <div className="rounded-lg border border-hair bg-surface/60 p-6">
        <h2 className="mt-2 text-xl font-medium text-text">Vamos conversar?</h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-text-dim">
          Aberto a trocar ideia sobre projetos, oportunidades ou open-source.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 font-mono text-sm">
          <a
            href="mailto:limaedu.contato@gmail.com"
            className="rounded-md border border-hair-strong px-4 py-2 text-text-dim transition-colors hover:border-amber hover:text-amber"
          >
            email ↗
          </a>
          <a
            href="https://github.com/EduardoML14"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-hair-strong px-4 py-2 text-text-dim transition-colors hover:border-amber hover:text-amber"
          >
            github ↗
          </a>
          <a
            href="https://www.linkedin.com/in/eduardomoreiralima/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-hair-strong px-4 py-2 text-text-dim transition-colors hover:border-amber hover:text-amber"
          >
            linkedin ↗
          </a>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-md bg-surface-2 px-4 py-2 font-mono text-xs text-text-faint">
        <span>
          <span className="text-amber">●</span> online
        </span>
        <span>react + vite + tailwind</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
