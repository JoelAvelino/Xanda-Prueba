import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Phone, Mail, Package } from 'lucide-react';
import { getProducerById } from '../data/producers';
import { getRegionById } from '../data/regions';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProducerDetail() {
  const { producerId } = useParams<{ producerId: string }>();
  const producer = producerId ? getProducerById(producerId) : undefined;
  const region = producer ? getRegionById(producer.region) : undefined;

  if (!producer || !region) {
    return (
      <div className="min-h-screen bg-[#F3F1EB] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[#0D1B2A] mb-4" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2.5rem',
            fontWeight: 300
          }}>
            Productor no encontrado
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
            to={`/region/${producer.region}/${producer.category}`}
            className="inline-flex items-center gap-2 text-[#D4B78A] hover:text-white transition-colors mb-4"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a productores
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

      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <ImageWithFallback
          src={producer.image}
          alt={producer.craft}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-[#0D1B2A]/40 to-transparent"/>

        {/* Tags Overlay */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-3">
              {producer.tags.map(tag => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#1F4D3A] rounded-full shadow-lg"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Producer Info */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name & Location */}
            <div className="mb-12">
              <h2 className="text-[#0D1B2A] mb-4" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 300,
                letterSpacing: '0.05em'
              }}>
                {producer.name}
              </h2>

              <div className="flex flex-wrap items-center gap-6 text-[#1F4D3A] opacity-70 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.125rem',
                    fontWeight: 300
                  }}>
                    {producer.community}, {region.name}
                  </span>
                </div>
              </div>

              <p className="text-[#0D1B2A] text-xl mb-2" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 400,
                letterSpacing: '0.03em'
              }}>
                {producer.craft}
              </p>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-[#D4B78A] opacity-30"/>
              <div className="w-2 h-2 rotate-45 bg-[#C86845] opacity-40"/>
              <div className="h-px flex-1 bg-[#D4B78A] opacity-30"/>
            </div>

            {/* Story */}
            <div className="mb-12">
              <h3 className="text-[#0D1B2A] mb-4" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.75rem',
                fontWeight: 400,
                letterSpacing: '0.03em'
              }}>
                Historia
              </h3>
              <p className="text-[#1F4D3A] opacity-80 leading-relaxed" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.125rem',
                fontWeight: 300,
                lineHeight: 1.8
              }}>
                {producer.story}
              </p>
            </div>

            {/* Technique */}
            <div className="mb-12 bg-[#F3F1EB] p-8 rounded-lg">
              <h3 className="text-[#0D1B2A] mb-4" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.75rem',
                fontWeight: 400,
                letterSpacing: '0.03em'
              }}>
                Técnica Artesanal
              </h3>
              <p className="text-[#1F4D3A] opacity-80 leading-relaxed" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.125rem',
                fontWeight: 300,
                lineHeight: 1.8
              }}>
                {producer.technique}
              </p>
            </div>

            {/* Products */}
            <div className="mb-12">
              <h3 className="text-[#0D1B2A] mb-6" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.75rem',
                fontWeight: 400,
                letterSpacing: '0.03em'
              }}>
                Productos Disponibles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {producer.products.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg border border-[#D4B78A] border-opacity-20"
                  >
                    <Package className="w-5 h-5 text-[#C86845]" />
                    <span className="text-[#0D1B2A]" style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 300
                    }}>
                      {product}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#0D1B2A] p-8 rounded-lg">
              <h3 className="text-[#D4B78A] mb-6" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.75rem',
                fontWeight: 400,
                letterSpacing: '0.03em'
              }}>
                Datos de Contacto
              </h3>

              <div className="space-y-4 mb-8">
                {producer.contact.phone && (
                  <div className="flex items-center gap-3 text-white">
                    <Phone className="w-5 h-5 text-[#D4B78A]" />
                    <a
                      href={`tel:${producer.contact.phone}`}
                      className="hover:text-[#D4B78A] transition-colors"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1rem',
                        fontWeight: 300
                      }}
                    >
                      {producer.contact.phone}
                    </a>
                  </div>
                )}
                {producer.contact.email && (
                  <div className="flex items-center gap-3 text-white">
                    <Mail className="w-5 h-5 text-[#D4B78A]" />
                    <a
                      href={`mailto:${producer.contact.email}`}
                      className="hover:text-[#D4B78A] transition-colors"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1rem',
                        fontWeight: 300
                      }}
                    >
                      {producer.contact.email}
                    </a>
                  </div>
                )}
              </div>

              <button className="w-full md:w-auto px-8 py-4 bg-[#C86845] hover:bg-[#D4B78A] text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em'
                }}>
                  CONTACTAR PRODUCTOR
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F3F1EB] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#1F4D3A] opacity-70 mb-6" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.5rem',
            fontWeight: 300,
            letterSpacing: '0.03em'
          }}>
            Conoce más artesanos de {region.name}
          </p>
          <Link
            to={`/region/${producer.region}`}
            className="inline-flex items-center gap-2 text-[#C86845] hover:text-[#D4B78A] transition-colors"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              fontWeight: 500,
              letterSpacing: '0.05em'
            }}
          >
            EXPLORAR REGIÓN
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
