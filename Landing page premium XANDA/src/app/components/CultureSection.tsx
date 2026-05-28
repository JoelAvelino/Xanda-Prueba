import { motion } from 'motion/react';

export function CultureSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="zapotec-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 L100 50 L50 100 L0 50 Z M50 25 L75 50 L50 75 L25 50 Z" 
                    fill="none" 
                    stroke="#C86845" 
                    strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="2" fill="#1F4D3A"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zapotec-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <div className="inline-block px-4 py-1.5 border border-[#C86845]/30 rounded-full mb-6">
                <span className="text-[#C86845] uppercase tracking-[0.2em]" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 500
                }}>
                  Comercio Justo
                </span>
              </div>
            </div>

            <h2 className="text-[#0D1B2A] mb-6" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              letterSpacing: '0.02em',
              lineHeight: 1.2
            }}>
              Trazabilidad y Autenticidad
            </h2>

            <div className="h-px w-24 bg-gradient-to-r from-[#D4B78A] to-transparent mb-8"/>

            <p className="text-[#1F4D3A] mb-6 leading-relaxed opacity-80" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.05rem',
              lineHeight: 1.8
            }}>
              Cada pieza en XANDA cuenta su propia historia. Desde el artesano que la creó
              hasta la comunidad que preserva estas técnicas milenarias.
            </p>

            <p className="text-[#1F4D3A] mb-8 leading-relaxed opacity-70" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: 1.8
            }}>
              Garantizamos precios justos, transparencia total y la preservación de las
              tradiciones zapotecas y mixtecas para las futuras generaciones.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { number: '8', label: 'Regiones' },
                { number: '150+', label: 'Artesanos' },
                { number: '100%', label: 'Trazable' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-[#C86845] mb-2" style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2.5rem',
                    fontWeight: 400
                  }}>
                    {stat.number}
                  </div>
                  <div className="text-[#0D1B2A] opacity-60 uppercase tracking-wider" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.75rem'
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="group relative px-8 py-4 overflow-hidden border border-[#0D1B2A]/20 hover:border-[#D4B78A] transition-all duration-300">
              <div className="absolute inset-0 bg-[#D4B78A] opacity-0 group-hover:opacity-5 transition-opacity duration-300"/>
              <span className="relative text-[#0D1B2A] group-hover:text-[#C86845] uppercase tracking-[0.15em] transition-colors duration-300" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 500
              }}>
                Conoce Nuestra Misión
              </span>
            </button>
          </motion.div>

          {/* Right content - Visual elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main decorative box */}
              <div className="relative bg-gradient-to-br from-[#F3F1EB] to-[#D4B78A]/10 p-12 rounded-sm">
                {/* Gold border accent */}
                <div className="absolute inset-0 border-2 border-[#D4B78A] opacity-20 rounded-sm"/>
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#D4B78A] opacity-10 rounded-sm"/>

                {/* Content boxes */}
                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      ),
                      title: 'Origen Verificado',
                      desc: 'Cada pieza con certificado de autenticidad'
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                        </svg>
                      ),
                      title: 'Precio Justo',
                      desc: 'Compensación directa al artesano'
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
                        </svg>
                      ),
                      title: 'Tradición Viva',
                      desc: 'Preservando técnicas ancestrales'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-4 bg-white p-5 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C86845]/10 flex items-center justify-center text-[#C86845]">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-[#0D1B2A] mb-1" style={{
                          fontFamily: 'Cormorant Garamond, serif',
                          fontSize: '1.25rem',
                          fontWeight: 500
                        }}>
                          {item.title}
                        </h4>
                        <p className="text-[#1F4D3A] opacity-70" style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.9rem'
                        }}>
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#C86845] opacity-30"/>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#C86845] opacity-30"/>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 border border-[#D4B78A] opacity-20 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#1F4D3A] opacity-5 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
