# XANDA - Plataforma de Comercio Justo de Oaxaca

Marketplace premium de productores artesanales de Oaxaca con trazabilidad completa.

## 🎨 Características Implementadas

### ✅ Navegación Completa
- **Página principal (Home)**: Hero section, mapa interactivo, secciones culturales y footer
- **Catálogo por Región**: 8 regiones de Oaxaca con categorías artesanales
- **Lista de Productores**: Filtrado por región y categoría
- **Ficha de Productor**: Información detallada, historia, técnicas y contacto
- **Página 404**: Experiencia de error elegante

### ✅ Mapa Interactivo de Oaxaca
- 8 regiones clickeables con posiciones precisas:
  - Valles Centrales
  - Sierra Norte
  - Sierra Sur
  - Mixteca
  - Cañada
  - Costa
  - Istmo
  - Papaloapan
- Estados visuales: normal, hover (dorado) y seleccionado (terracota)
- Tooltips elegantes con nombres de regiones
- Navegación directa a catálogo de cada región

### ✅ Sistema de Categorías
8 categorías artesanales implementadas:
1. 🏺 Barro y cerámica
2. 🧵 Textiles y bordados
3. 🌿 Palma y fibras naturales
4. 💎 Joyería artesanal
5. 🪵 Madera tallada
6. 🌶️ Gastronomía local
7. 👜 Piel y accesorios
8. 🎨 Arte decorativo

### ✅ Sistema de Productores
- 8 productores de ejemplo con datos reales
- Información completa: historia, técnicas, productos, contacto
- Etiquetas: "Comercio justo", "Hecho en Oaxaca", "Trazabilidad"
- Imágenes de alta calidad desde Unsplash
- Sistema de contacto (teléfono y email)

## 🎨 Paleta de Colores

```css
Azul noche:    #0D1B2A  (fondos oscuros, textos principales)
Dorado suave:  #D4B78A  (acentos, hover states)
Terracota:     #C86845  (CTAs, selecciones)
Marfil:        #F3F1EB  (fondos claros, backgrounds)
Verde profundo: #1F4D3A (textos secundarios, detalles)
```

## 📐 Tipografía

- **Títulos**: Cormorant Garamond (serif elegante)
- **Textos**: Inter (sans serif limpia)

## 🛣️ Flujo de Navegación

```
Inicio (Mapa de Oaxaca)
  ↓
Seleccionar Región
  ↓
Catálogo de [Región]
  ↓
Seleccionar Categoría
  ↓
Lista de Productores
  ↓
Seleccionar Productor
  ↓
Ficha del Productor
```

## 🔧 Tecnologías

- **React 18.3** con TypeScript
- **React Router 7** (Data Router pattern)
- **Motion (Framer Motion)** para animaciones
- **Tailwind CSS v4** para estilos
- **Lucide React** para iconos
- **Vite** como build tool

## 📱 Diseño Responsive

- **Desktop**: Grid de 4 columnas para categorías, 3 para productores
- **Tablet**: Grid de 2 columnas adaptativo
- **Mobile**: Diseño de columna única con tipografía fluida

## 🎭 Estética Visual

- Lujo artesanal mexicano
- Patrones geométricos oaxaqueños
- Sombras suaves y elegantes
- Diseño tipo museo/editorial premium
- Mucho espacio en blanco
- Navegación clara y moderna
- Transiciones suaves (300-700ms)
- Efectos hover con transformaciones

## 📂 Estructura del Proyecto

```
src/app/
├── App.tsx                 # RouterProvider principal
├── routes.tsx              # Configuración de rutas
├── components/
│   ├── Hero.tsx
│   ├── InteractiveMap.tsx  # Mapa con navegación
│   ├── CultureSection.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── pages/
│   ├── Home.tsx            # Página principal
│   ├── RegionCatalog.tsx   # Catálogo por región
│   ├── ProducersList.tsx   # Lista de productores
│   ├── ProducerDetail.tsx  # Ficha individual
│   └── NotFound.tsx        # Página 404
└── data/
    ├── regions.ts          # 8 regiones de Oaxaca
    ├── categories.ts       # 8 categorías artesanales
    └── producers.ts        # Datos de productores
```

## 🚀 Próximas Mejoras Sugeridas

1. **Backend Integration**: Conectar con API de Supabase para datos dinámicos
2. **Búsqueda y Filtros**: Añadir búsqueda por nombre, región, categoría
3. **Carrito de Compras**: Sistema de pedidos y checkout
4. **Autenticación**: Login para productores y compradores
5. **Dashboard de Productor**: Panel para gestionar productos
6. **Galería de Productos**: Múltiples imágenes por productor
7. **Reviews y Ratings**: Sistema de calificaciones
8. **Blog/Historias**: Contenido editorial sobre artesanos
9. **Multiidioma**: Español/Inglés
10. **PWA**: Experiencia como app nativa

## 🎯 Filosofía de Diseño

> "Cada artesanía cuenta una historia de tradición y comercio justo"

El diseño refleja:
- **Respeto por la tradición**: Colores tierra y patrones geométricos
- **Calidad premium**: Espaciado generoso, tipografía elegante
- **Transparencia**: Énfasis en trazabilidad y comercio justo
- **Conexión cultural**: Celebración de las 8 regiones de Oaxaca

---

Desarrollado con ❤️ para los artesanos de Oaxaca
