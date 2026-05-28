import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { getRegionById } from '../data/regions';
import { categories } from '../data/categories';
import { getProducersByCategory } from '../data/producers';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProducersList() {
  const { regionId, category } = useParams<{ regionId: string; category: string }>();
  const region = regionId ? getRegionById(regionId) : undefined;
  const categoryData = categories.find(c => c.id === category);
  const producers = regionId && category ? getProducersByCategory(regionId, category) : [];

  if (!region || !categoryData) {
    return (
      <div className="min-h-screen bg-[#F3F1EB] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[#0D1B2A] mb-4" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2.5rem',
            fontWeight: 300
          }}>
            Categoría no encontrada
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
            to={`/region/${regionId}`}
            className="inline-flex items-center gap-2 text-[#D4B78A] hover:text-white transition-colors mb-4"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a {region.name}
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

      {/* Category Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="text-6xl mb-6">{categoryData.icon}</div>

            <h2 className="text-[#0D1B2A] mb-4" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 300,
              letterSpacing: '0.05em'
            }}>
              {categoryData.name}
            </h2>

            <p className="text-[#1F4D3A] opacity-70 mb-2" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem',
              fontWeight: 300,
              lineHeight: 1.8
            }}>
              {region.name}
            </p>

            <p className="text-[#0D1B2A] opacity-50" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              fontWeight: 300
            }}>
              {categoryData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Producers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {producers.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#0D1B2A] opacity-60" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.125rem'
              }}>
                Próximamente productores en esta categoría
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {producers.map((producer, index) => (
                <motion.div
                  key={producer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Link
                    to={`/producer/${producer.id}`}
                    className="block group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Producer Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={producer.image}
                        alt={producer.craft}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                    </div>

                    {/* Producer Info */}
                    <div className="p-6">
                      <h3 className="text-[#0D1B2A] mb-2 group-hover:text-[#C86845] transition-colors" style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '1.75rem',
                        fontWeight: 400,
                        letterSpacing: '0.03em'
                      }}>
                        {producer.name}
                      </h3>

                      <div className="flex items-center gap-2 text-[#1F4D3A] opacity-60 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.875rem',
                          fontWeight: 300
                        }}>
                          {producer.community}
                        </span>
                      </div>

                      <p className="text-[#0D1B2A] mb-4" style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: 400
                      }}>
                        {producer.craft}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {producer.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#F3F1EB] text-[#1F4D3A] rounded-full"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '0.7rem',
                              fontWeight: 400,
                              letterSpacing: '0.05em'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-[#D4B78A] group-hover:text-[#C86845] transition-colors">
                        <span style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          letterSpacing: '0.1em'
                        }}>
                          VER PRODUCTOR
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
          )}
        </div>
      </section>
    </div>
  );
}
