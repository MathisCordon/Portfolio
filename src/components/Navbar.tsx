const links = [
  { href: '#about', label: 'À PROPOS' },
  { href: '#skills', label: 'COMPÉTENCES' },
  { href: '#projects', label: 'PROJETS' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-6xl mx-auto bg-white rounded-2xl px-6 h-16 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 shrink-0">
            <img src="/logo1.svg" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-sm font-medium tracking-wide">
            PORTFOLIO <strong>MATHIS CORDON</strong>
          </span>
        </div>

        <ul className="hidden md:flex items-center">
          {links.map(({ href, label }, i) => (
            <li key={href} className="flex items-center">
              <a
                href={href}
                className="text-black/60 hover:text-black text-xs font-semibold tracking-wider px-3 transition-colors"
              >
                {label}
              </a>
              {i < links.length - 1 && (
                <span className="text-black/25 text-sm">/</span>
              )}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="border border-black text-black text-xs font-bold tracking-widest px-5 py-2 rounded-lg hover:bg-black hover:text-white transition-colors"
        >
          PARLONS !
        </a>
      </nav>
    </header>
  )
}
