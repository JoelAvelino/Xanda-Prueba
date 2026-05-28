import { Link } from 'react-router';
import { motion } from 'motion/react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#F3F1EB] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-[#C86845] opacity-40"/>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C86845] opacity-40"/>
          <div className="h-px w-16 bg-[#C86845] opacity-40"/>
        </div>

        <h1 className="text-[#0D1B2A] mb-6" style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 300,
          letterSpacing: '0.05em'
        }}>
          404
        </h1>

        <p className="text-[#1F4D3A] opacity-70 mb-8" style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '1.25rem',
          fontWeight: 300,
          lineHeight: 1.8
        }}>
          Esta página no existe o ha sido movida.
        </p>

        <Link
          to="/"
          className="inline-block px-8 py-4 bg-[#C86845] hover:bg-[#D4B78A] text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.05em'
          }}>
            VOLVER AL INICIO
          </span>
        </Link>

        {/* Decorative pattern */}
        <div className="mt-12 flex justify-center gap-2 opacity-20">
          <div className="w-2 h-2 bg-[#D4B78A] rotate-45"/>
          <div className="w-2 h-2 bg-[#C86845] rotate-45"/>
          <div className="w-2 h-2 bg-[#1F4D3A] rotate-45"/>
        </div>
      </motion.div>
    </div>
  );
}
