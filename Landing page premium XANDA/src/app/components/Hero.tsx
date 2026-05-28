import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D1B2A]">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="artisan-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M0 40 L40 0 L80 40 L40 80 Z" fill="none" stroke="#D4B78A" strokeWidth="0.5"/>
              <circle cx="40" cy="40" r="3" fill="#D4B78A"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#artisan-pattern)" />
        </svg>
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4B78A] to-transparent opacity-30"/>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4B78A] to-transparent opacity-30"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Logo/Brand */}
          <div className="mb-12">
            <h1 className="text-[#D4B78A] mb-4" style={{ 
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(4rem, 12vw, 9rem)',
              fontWeight: 300,
              letterSpacing: '0.15em',
              lineHeight: 1
            }}>
              XANDA
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-[#D4B78A] opacity-50"/>
              <div className="w-2 h-2 rotate-45 border border-[#D4B78A] opacity-50"/>
              <div className="h-px w-20 bg-[#D4B78A] opacity-50"/>
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[#F3F1EB] mb-16 max-w-3xl mx-auto"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.02em'
            }}
          >
            Artesanías con origen, cultura y comercio justo
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[#D4B78A] max-w-2xl mx-auto mb-12 opacity-80"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              fontWeight: 300,
              lineHeight: 1.8,
              letterSpacing: '0.05em'
            }}
          >
            Descubre el legado de las culturas zapoteca y mixteca a través de piezas únicas,
            creadas con técnicas ancestrales por maestros artesanos de Oaxaca.
          </motion.p>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[#D4B78A] text-xs uppercase tracking-widest opacity-60" style={{
              fontFamily: 'Inter, sans-serif'
            }}>
              Descubre
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-[#D4B78A] to-transparent"/>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
