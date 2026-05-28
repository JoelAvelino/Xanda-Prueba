export function Footer() {
  return (
    <footer className="relative bg-[#0D1B2A] py-20 overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#D4B78A"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Brand section */}
        <div className="text-center mb-12">
          <h3 className="text-[#D4B78A] mb-4" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            letterSpacing: '0.15em'
          }}>
            XANDA
          </h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#D4B78A] opacity-30"/>
            <div className="w-1.5 h-1.5 rotate-45 border border-[#D4B78A] opacity-30"/>
            <div className="h-px w-16 bg-[#D4B78A] opacity-30"/>
          </div>
          <p className="text-[#F3F1EB] opacity-60 max-w-md mx-auto" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.95rem',
            lineHeight: 1.8,
            letterSpacing: '0.02em'
          }}>
            Conectando tradiciones ancestrales con el mundo moderno
            a través del comercio justo y la trazabilidad.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 */}
          <div className="text-center md:text-left">
            <h4 className="text-[#D4B78A] mb-4 uppercase tracking-widest" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500
            }}>
              Explorar
            </h4>
            <ul className="space-y-3">
              {['Regiones', 'Artesanos', 'Productos', 'Historias'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#F3F1EB] opacity-60 hover:opacity-100 hover:text-[#D4B78A] transition-all duration-300" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem'
                  }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="text-center md:text-left">
            <h4 className="text-[#D4B78A] mb-4 uppercase tracking-widest" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500
            }}>
              Acerca de
            </h4>
            <ul className="space-y-3">
              {['Nuestra Misión', 'Comercio Justo', 'Trazabilidad', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#F3F1EB] opacity-60 hover:opacity-100 hover:text-[#D4B78A] transition-all duration-300" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem'
                  }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center md:text-left">
            <h4 className="text-[#D4B78A] mb-4 uppercase tracking-widest" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500
            }}>
              Comunidad
            </h4>
            <ul className="space-y-3">
              {['Instagram', 'Facebook', 'Newsletter', 'Eventos'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#F3F1EB] opacity-60 hover:opacity-100 hover:text-[#D4B78A] transition-all duration-300" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem'
                  }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4B78A]/20 to-transparent mb-8"/>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F3F1EB] opacity-40 text-center" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem'
          }}>
            © 2026 XANDA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#F3F1EB] opacity-40 hover:opacity-100 hover:text-[#D4B78A] transition-all duration-300" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem'
            }}>
              Privacidad
            </a>
            <a href="#" className="text-[#F3F1EB] opacity-40 hover:opacity-100 hover:text-[#D4B78A] transition-all duration-300" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem'
            }}>
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
