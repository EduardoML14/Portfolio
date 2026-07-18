import { useEffect, useState } from 'react'

const GREETING = 'whoami'
const TYPE_SPEED_MS = 90

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(GREETING.slice(0, i))
      if (i >= GREETING.length) {
        clearInterval(id)
        setDone(true)
      }
    }, TYPE_SPEED_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pt-20 pb-16">
      <div className="rounded-lg border border-hair bg-surface/60">
        <div className="flex items-center gap-2 border-b border-hair px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-hair-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-hair-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-hair-strong" />
          <span className="ml-2 font-mono text-xs text-text-faint">bash</span>
        </div>
        <div className="px-5 py-8 sm:px-8 sm:py-10">
          <p className="font-mono text-sm text-text-dim sm:text-base">
            <span className="text-amber">eduardo@dev</span>
            <span className="text-text-faint">:~$</span> {typed}
            <span className="cursor-blink">_</span>
          </p>

          <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <img
              src="/eduardo.jpg"
              alt="Foto de Eduardo Moreira Lima"
              className="h-20 w-20 shrink-0 rounded-full border border-hair-strong object-cover sm:h-24 sm:w-24"
            />
            <div>
              <h1 className="font-mono text-3xl leading-tight text-text sm:text-4xl">
                Eduardo Moreira Lima
              </h1>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-text-dim">
                Cursando Ciência da Computação | Analista de Dados | Desenvolvedor | Linux | Python | Power BI | Excel
              </p>
            </div>
          </div>

          {done && (
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
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
          )}
        </div>
      </div>
    </section>
  )
}
