export interface Producer {
  id: string;
  name: string;
  community: string;
  region: string;
  category: string;
  craft: string;
  image: string;
  story: string;
  technique: string;
  products: string[];
  contact: {
    phone?: string;
    email?: string;
  };
  tags: string[];
}

export const producers: Producer[] = [
  // Valles Centrales - Barro Negro
  {
    id: 'producer-1',
    name: 'Familia Martínez Cruz',
    community: 'San Bartolo Coyotepec',
    region: 'valles-centrales',
    category: 'barro-ceramica',
    craft: 'Barro Negro',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80',
    story: 'Cuatro generaciones preservando la técnica del barro negro bruñido, una tradición que comenzó con Doña Rosa Real en los años 50.',
    technique: 'Moldeado a mano sin torno, bruñido con cuarzo y cocción en horno subterráneo que le da su característico color negro brillante.',
    products: ['Jarrones decorativos', 'Esculturas', 'Vajillas', 'Figuras zoomorfas'],
    contact: {
      phone: '+52 951 123 4567',
      email: 'martinez.barro@xanda.mx'
    },
    tags: ['Comercio justo', 'Hecho en Oaxaca', 'Trazabilidad']
  },
  {
    id: 'producer-2',
    name: 'Taller García',
    community: 'Santa María Atzompa',
    region: 'valles-centrales',
    category: 'barro-ceramica',
    craft: 'Barro Verde Vidriado',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80',
    story: 'Especialistas en barro verde con esmalte de plomo libre, combinando tradición con innovación sustentable.',
    technique: 'Técnica de alfarería con torno y horno de gas, usando esmaltes ecológicos certificados.',
    products: ['Vajillas completas', 'Macetas decorativas', 'Platos de mole', 'Cazuelas'],
    contact: {
      email: 'taller.garcia@xanda.mx'
    },
    tags: ['Comercio justo', 'Hecho en Oaxaca', 'Trazabilidad', 'Ecológico']
  },

  // Valles Centrales - Textiles
  {
    id: 'producer-3',
    name: 'Cooperativa Mujeres del Valle',
    community: 'Teotitlán del Valle',
    region: 'valles-centrales',
    category: 'textiles-bordados',
    craft: 'Tapetes de Lana',
    image: 'https://images.unsplash.com/photo-1610416225649-bc0c4f1c7e44?w=800&q=80',
    story: 'Veinte tejedoras zapotecas que preservan diseños prehispánicos en telar de pedal con lana teñida naturalmente.',
    technique: 'Telar de pedal con tintes naturales de cochinilla, índigo, musgo y cáscara de nuez.',
    products: ['Tapetes decorativos', 'Cojines', 'Caminos de mesa', 'Sarapes'],
    contact: {
      phone: '+52 951 234 5678',
      email: 'mujeres.valle@xanda.mx'
    },
    tags: ['Comercio justo', 'Hecho en Oaxaca', 'Trazabilidad', 'Colectivo']
  },

  // Istmo - Textiles Bordados
  {
    id: 'producer-4',
    name: 'Taller Ruiz Matus',
    community: 'Juchitán de Zaragoza',
    region: 'istmo',
    category: 'textiles-bordados',
    craft: 'Bordado Istmeño',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    story: 'Maestras bordadoras que crean los icónicos huipiles y enaguas de tehuana con flores de seda.',
    technique: 'Bordado a mano con hilos de seda sobre terciopelo, siguiendo patrones florales tradicionales zapotecos.',
    products: ['Huipiles de tehuana', 'Blusas bordadas', 'Manteles festivos', 'Rebozos'],
    contact: {
      phone: '+52 971 345 6789',
      email: 'ruiz.bordados@xanda.mx'
    },
    tags: ['Comercio justo', 'Hecho en Oaxaca', 'Trazabilidad']
  },

  // Mixteca - Palma
  {
    id: 'producer-5',
    name: 'Don Esteban López',
    community: 'Pinotepa de Don Luis',
    region: 'mixteca',
    category: 'palma-fibras',
    craft: 'Sombreros de Palma',
    image: 'https://images.unsplash.com/photo-1518390968455-7d765fef36fe?w=800&q=80',
    story: 'Maestro palmero con 40 años de experiencia tejiendo sombreros y cestas con palma silvestre.',
    technique: 'Tejido manual de palma seca, técnica transmitida de generación en generación.',
    products: ['Sombreros', 'Petates', 'Canastas', 'Bolsos de mano'],
    contact: {
      email: 'esteban.palma@xanda.mx'
    },
    tags: ['Comercio justo', 'Hecho en Oaxaca', 'Trazabilidad']
  },

  // Sierra Sur - Madera
  {
    id: 'producer-6',
    name: 'Familia Hernández',
    community: 'San Martín Tilcajete',
    region: 'sierra-sur',
    category: 'madera-tallada',
    craft: 'Alebrijes',
    image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=800&q=80',
    story: 'Talladores de alebrijes en madera de copal, famosos por sus diseños fantásticos y colores vibrantes.',
    technique: 'Tallado en madera de copal y pintura con anilinas naturales y sintéticas con diseños geométricos zapotecos.',
    products: ['Alebrijes grandes', 'Figuras pequeñas', 'Esculturas decorativas', 'Animales fantásticos'],
    contact: {
      phone: '+52 951 456 7890',
      email: 'hernandez.alebrijes@xanda.mx'
    },
    tags: ['Comercio justo', 'Hecho en Oaxaca', 'Trazabilidad']
  },

  // Valles Centrales - Gastronomía
  {
    id: 'producer-7',
    name: 'Doña María Velasco',
    community: 'San Pedro Totolápam',
    region: 'valles-centrales',
    category: 'gastronomia',
    craft: 'Mole Artesanal',
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&q=80',
    story: 'Cocinera tradicional especializada en moles oaxaqueños elaborados con recetas familiares de más de 100 años.',
    technique: 'Molienda en metate de ingredientes tostados, siguiendo recetas ancestrales sin conservadores.',
    products: ['Mole negro', 'Mole rojo', 'Mole amarillo', 'Mole verde', 'Pasta de mole'],
    contact: {
      phone: '+52 951 567 8901',
      email: 'maria.moles@xanda.mx'
    },
    tags: ['Comercio justo', 'Hecho en Oaxaca', 'Trazabilidad', 'Orgánico']
  },

  // Istmo - Joyería
  {
    id: 'producer-8',
    name: 'Orfebrería Santiago',
    community: 'Tehuantepec',
    region: 'istmo',
    category: 'joyeria',
    craft: 'Filigrana en Oro',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    story: 'Orfebres especializados en la técnica de filigrana zapoteca, creando las joyas tradicionales del istmo.',
    technique: 'Filigrana en oro de 14k y 18k, técnica que requiere años de aprendizaje y manos expertas.',
    products: ['Collares de monedas', 'Aretes de canasta', 'Anillos', 'Pulseras'],
    contact: {
      phone: '+52 971 678 9012',
      email: 'santiago.oro@xanda.mx'
    },
    tags: ['Comercio justo', 'Hecho en Oaxaca', 'Trazabilidad', 'Oro certificado']
  },
];

export const getProducersByRegion = (regionId: string): Producer[] => {
  return producers.filter(p => p.region === regionId);
};

export const getProducersByCategory = (regionId: string, categoryId: string): Producer[] => {
  return producers.filter(p => p.region === regionId && p.category === categoryId);
};

export const getProducerById = (id: string): Producer | undefined => {
  return producers.find(p => p.id === id);
};
