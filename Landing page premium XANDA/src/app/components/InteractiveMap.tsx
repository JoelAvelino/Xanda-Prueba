import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import oaxacaMap from '../../imports/image.png';
import { regions } from '../data/regions';

export function InteractiveMap() {
  const navigate = useNavigate();
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(regionId);
    // Smooth transition before navigation
    setTimeout(() => {
      navigate(`/region/${regionId}`);
      // Scroll to top on navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  return (
    <section className="relative py-32 bg-[#F3F1EB] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4B78A] opacity-5 rounded-full blur-3xl"/>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F4D3A] opacity-5 rounded-full blur-3xl"/>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#0D1B2A] mb-6" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 300,
            letterSpacing: '0.05em'
          }}>
            Ocho Regiones, Infinitas Historias
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-[#C86845] opacity-40"/>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C86845] opacity-40"/>
            <div className="h-px w-16 bg-[#C86845] opacity-40"/>
          </div>
          <p className="text-[#1F4D3A] max-w-2xl mx-auto opacity-70" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            fontWeight: 300,
            lineHeight: 1.8,
            letterSpacing: '0.02em'
          }}>
            Cada región de Oaxaca guarda tradiciones únicas. Explora el mapa y descubre
            a los maestros artesanos que preservan el legado cultural de sus comunidades.
          </p>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Map container with glow effect */}
          <div className="relative bg-white rounded-lg shadow-2xl p-8 md:p-16">
            {/* Gold border accent */}
            <div className="absolute inset-0 border border-[#D4B78A] opacity-20 rounded-lg pointer-events-none"/>
            
            {/* Map image */}
            <div className="relative">
              <img
                src={oaxacaMap}
                alt="Mapa de Oaxaca"
                className="w-full h-auto opacity-90"
              />
              
              {/* Interactive region markers */}
              <div className="absolute inset-0">
                {regions.map((region) => (
                  <motion.button
                    key={region.id}
                    onClick={() => handleRegionClick(region.id)}
                    onMouseEnter={() => setHoveredRegion(region.id)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    className="absolute group cursor-pointer"
                    style={{
                      left: `${region.position.x}%`,
                      top: `${region.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Marker circle */}
                    <div className="relative">
                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#D4B78A]"
                        animate={{
                          scale: hoveredRegion === region.id || selectedRegion === region.id ? [1, 1.5, 1] : 1,
                          opacity: hoveredRegion === region.id || selectedRegion === region.id ? [0.8, 0, 0.8] : 0.3,
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      {/* Main dot */}
                      <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full transition-all duration-300 ${
                        selectedRegion === region.id
                          ? 'bg-[#C86845] shadow-lg shadow-[#C86845]/50'
                          : hoveredRegion === region.id
                          ? 'bg-[#D4B78A] shadow-lg shadow-[#D4B78A]/50'
                          : 'bg-[#1F4D3A] shadow-md'
                      }`}/>
                      
                      {/* Glow effect */}
                      {(hoveredRegion === region.id || selectedRegion === region.id) && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-[#D4B78A] opacity-40 blur-md"
                          initial={{ scale: 0 }}
                          animate={{ scale: 2 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>

                    {/* Region name tooltip */}
                    <AnimatePresence>
                      {(hoveredRegion === region.id || selectedRegion === region.id) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
                        >
                          <div className="relative bg-[#0D1B2A] text-[#D4B78A] px-4 py-2 rounded shadow-xl">
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0D1B2A] rotate-45"/>
                            <span style={{
                              fontFamily: 'Cormorant Garamond, serif',
                              fontSize: '0.95rem',
                              fontWeight: 400,
                              letterSpacing: '0.05em'
                            }}>
                              {region.name}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Map legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1F4D3A]"/>
                <span className="text-[#0D1B2A] opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                  Región
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4B78A]"/>
                <span className="text-[#0D1B2A] opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                  Hover
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C86845]"/>
                <span className="text-[#0D1B2A] opacity-60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                  Seleccionada
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#0D1B2A] opacity-40 uppercase tracking-[0.3em]" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem'
          }}>
            Haz clic en cualquier región para explorar
          </p>
        </motion.div>
      </div>
    </section>
  );
}
