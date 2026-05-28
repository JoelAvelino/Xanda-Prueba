import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Producer {
  id: string;
  name: string;
  community: string;
  category: string;
  image: string;
  region: string;
}

const producersData: Producer[] = [
  {
    id: '1',
    name: 'María López Martínez',
    community: 'Teotitlán del Valle',
    category: 'Textiles',
    image: 'https://images.unsplash.com/photo-1617694820985-a5476fe22722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwYXJ0aXNhbiUyMHdlYXZpbmclMjB0cmFkaXRpb25hbCUyMGNyYWZ0fGVufDF8fHx8MTc3OTk0MDk1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    region: 'valles-centrales'
  },
  {
    id: '2',
    name: 'Arturo Mendoza Cruz',
    community: 'San Bartolo Coyotepec',
    category: 'Barro Negro',
    image: 'https://images.unsplash.com/photo-1630509866847-9c007e59a8ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYXhhY2ElMjBibGFjayUyMHBvdHRlcnklMjBjZXJhbWljJTIwYXJ0aXNhbnxlbnwxfHx8fDE3Nzk5NDA5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    region: 'valles-centrales'
  },
  {
    id: '3',
    name: 'Rosa Hernández García',
    community: 'Santo Tomás Jalieza',
    category: 'Bordados',
    image: 'https://images.unsplash.com/photo-1562869929-bda0650edb1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYXhhY2ElMjBtZXhpY2FuJTIwYXJ0aXNhbiUyMHBvdHRlcnklMjB0ZXh0aWxlfGVufDF8fHx8MTc3OTk0MDk1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    region: 'valles-centrales'
  },
];

interface ProducerShowcaseProps {
  selectedRegion: string | null;
}

export function ProducerShowcase({ selectedRegion }: ProducerShowcaseProps) {
  const filteredProducers = selectedRegion
    ? producersData.filter((p) => p.region === selectedRegion)
    : [];

  if (!selectedRegion || filteredProducers.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#F3F1EB] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-[#0D1B2A] mb-4" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            letterSpacing: '0.03em'
          }}>
            Maestros Artesanos
          </h3>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#C86845] opacity-40"/>
            <div className="w-1 h-1 rotate-45 bg-[#C86845] opacity-40"/>
            <div className="h-px w-12 bg-[#C86845] opacity-40"/>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducers.map((producer, index) => (
            <motion.div
              key={producer.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                {/* Gold accent border */}
                <div className="absolute inset-0 border border-[#D4B78A] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none z-10"/>
                
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F3F1EB]">
                  <ImageWithFallback
                    src={producer.image}
                    alt={producer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-[#0D1B2A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-[#F3F1EB]/95 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                      <span className="text-[#0D1B2A] uppercase tracking-wider" style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.7rem',
                        fontWeight: 500
                      }}>
                        {producer.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-[#0D1B2A] mb-2" style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    letterSpacing: '0.02em'
                  }}>
                    {producer.name}
                  </h4>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4 text-[#C86845]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-[#1F4D3A] opacity-70" style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 300
                    }}>
                      {producer.community}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-[#D4B78A] via-[#D4B78A]/30 to-transparent mb-4"/>

                  {/* CTA Button */}
                  <button className="group/btn w-full relative overflow-hidden py-3 border border-[#0D1B2A]/20 hover:border-[#D4B78A] transition-colors duration-300">
                    <span className="relative text-[#0D1B2A] group-hover/btn:text-[#C86845] uppercase tracking-[0.15em] transition-colors duration-300" style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem',
                      fontWeight: 500
                    }}>
                      Explorar
                    </span>
                    <div className="absolute inset-0 bg-[#D4B78A] opacity-0 group-hover/btn:opacity-5 transition-opacity duration-300"/>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
