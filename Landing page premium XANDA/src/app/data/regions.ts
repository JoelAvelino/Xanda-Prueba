export interface Region {
  id: string;
  name: string;
  position: { x: number; y: number };
  description: string;
}

export const regions: Region[] = [
  {
    id: 'valles-centrales',
    name: 'Valles Centrales',
    position: { x: 43, y: 57 },
    description: 'Cuna del barro negro y la artesanía tradicional oaxaqueña'
  },
  {
    id: 'sierra-norte',
    name: 'Sierra Norte',
    position: { x: 55, y: 46 },
    description: 'Textiles y bordados de comunidades zapotecas de montaña'
  },
  {
    id: 'sierra-sur',
    name: 'Sierra Sur',
    position: { x: 47, y: 68 },
    description: 'Madera tallada y artesanía en piel de tradición ancestral'
  },
  {
    id: 'mixteca',
    name: 'Mixteca',
    position: { x: 22, y: 32 },
    description: 'Palma y fibras naturales, herencia de cultura milenaria'
  },
  {
    id: 'canada',
    name: 'Cañada',
    position: { x: 39, y: 25 },
    description: 'Cestería y tejidos de palma de alta calidad artesanal'
  },
  {
    id: 'costa',
    name: 'Costa',
    position: { x: 18, y: 78 },
    description: 'Arte decorativo y joyería inspirada en el mar'
  },
  {
    id: 'istmo',
    name: 'Istmo',
    position: { x: 72, y: 62 },
    description: 'Textiles bordados y orfebrería de tradición zapoteca'
  },
  {
    id: 'papaloapan',
    name: 'Papaloapan',
    position: { x: 58, y: 28 },
    description: 'Gastronomía artesanal y productos de la tierra'
  },
];

export const getRegionById = (id: string): Region | undefined => {
  return regions.find(region => region.id === id);
};
