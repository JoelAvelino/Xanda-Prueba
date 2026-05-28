export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'barro-ceramica',
    name: 'Barro y cerámica',
    description: 'Piezas únicas moldeadas a mano con técnicas ancestrales',
    icon: '🏺'
  },
  {
    id: 'textiles-bordados',
    name: 'Textiles y bordados',
    description: 'Tejidos en telar de pedal y bordados tradicionales',
    icon: '🧵'
  },
  {
    id: 'palma-fibras',
    name: 'Palma y fibras naturales',
    description: 'Cestería y tejidos de palma, tule y carrizo',
    icon: '🌿'
  },
  {
    id: 'joyeria',
    name: 'Joyería artesanal',
    description: 'Orfebrería en plata, oro y filigrana zapoteca',
    icon: '💎'
  },
  {
    id: 'madera-tallada',
    name: 'Madera tallada',
    description: 'Alebrijes, máscaras y esculturas en copal y cedro',
    icon: '🪵'
  },
  {
    id: 'gastronomia',
    name: 'Gastronomía local',
    description: 'Moles, chocolate, mezcal y productos artesanales',
    icon: '🌶️'
  },
  {
    id: 'piel-accesorios',
    name: 'Piel y accesorios',
    description: 'Bolsos, cinturones y carteras de piel curtida a mano',
    icon: '👜'
  },
  {
    id: 'arte-decorativo',
    name: 'Arte decorativo',
    description: 'Pinturas, murales y objetos decorativos únicos',
    icon: '🎨'
  },
];
