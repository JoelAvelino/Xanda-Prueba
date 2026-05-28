import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { getRegionById } from '../data/regions';
import { categories } from '../data/categories';

export function RegionCatalog() {
  const { regionId } = useParams<{ regionId: string }>();
  const region = regionId ? getRegionById(regionId) : undefined;

  if (!region) {
    return (
      <div className="min-h-screen bg-[#F3F1EB] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[#0D1B2A] mb-4" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2.5rem',
            fontWeight: 300
          }}>
            Región no encontrada
          </h1>
          <Link
            to="/"
            className="text-[#C86845] hover:text-[#D4B78A] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F1EB]">
      {/* Header */}
      <header className="bg-[#0D1B2A] text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#D4B78A] hover:text-white transition-colors mb-4"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al mapa
          </Link>
          <h1 className="text-[#F3F1EB]" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            letterSpacing: '0.05em'
          }}>
            XANDA
          </h1>
        </div>
      </header>

      {/* Region Header */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#C86845] opacity-40"/>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#C86845] opacity-40"/>
              <div className="h-px w-16 bg-[#C86845] opacity-40"/>
            </div>

            <h2 className="text-[#0D1B2A] mb-6" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '0.05em'
            }}>
              Catálogo de {region.name}
            </h2>

            <p className="text-[#1F4D3A] opacity-70 mb-4" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              fontWeight: 300,
              lineHeight: 1.8,
              letterSpacing: '0.02em'
            }}>
              {region.description}
            </p>

            <p className="text-[#0D1B2A] opacity-50" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.7
            }}>
              Explora productores, talleres y mercancía artesanal de esta región.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h3 className="text-[#0D1B2A] text-center mb-4" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 300,
              letterSpacing: '0.05em'
            }}>
              Categorías Artesanales
            </h3>
            <p className="text-center text-[#1F4D3A] opacity-60 uppercase tracking-[0.3em]" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem'
            }}>
              Selecciona una categoría para explorar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link
                  to={`/region/${regionId}/${category.id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#D4B78A] border-opacity-0 hover:border-opacity-30 h-full">
                    {/* Icon */}
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                      {category.icon}
                    </div>

                    {/* Title */}
                    <h4 className="text-[#0D1B2A] mb-3 group-hover:text-[#C86845] transition-colors duration-300" style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                      letterSpacing: '0.03em'
                    }}>
                      {category.name}
                    </h4>

                    {/* Description */}
                    <p className="text-[#1F4D3A] opacity-60 mb-4" style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: 300,
                      lineHeight: 1.6
                    }}>
                      {category.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="flex items-center gap-2 text-[#D4B78A] group-hover:text-[#C86845] transition-colors">
                      <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.8rem',
                        fontWeight: 400,
                        letterSpacing: '0.1em'
                      }}>
                        EXPLORAR
                      </span>
                      <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#0D1B2A] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#D4B78A] opacity-80" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.95rem',
            letterSpacing: '0.05em'
          }}>
            Cada artesanía cuenta una historia de tradición y comercio justo
          </p>
        </div>
      </section>
    </div>
  );
}
