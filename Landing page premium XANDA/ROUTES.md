# 🗺️ XANDA - Mapa de Rutas Implementadas

## Estructura de Navegación

```
┌─────────────────────────────────────────────────────────────┐
│                      PÁGINA PRINCIPAL                        │
│                         / (Home)                             │
│  ┌────────────────────────────────────────────────────┐     │
│  │  • Hero Section con logo XANDA                     │     │
│  │  • Mapa Interactivo de las 8 Regiones de Oaxaca   │     │
│  │  • Sección Cultural                                │     │
│  │  • Footer                                          │     │
│  └────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                              ↓
                    [Click en una región]
                              ↓
┌─────────────────────────────────────────────────────────────┐
│              CATÁLOGO POR REGIÓN                             │
│          /region/:regionId                                   │
│  ┌────────────────────────────────────────────────────┐     │
│  │  Ejemplos de URLs:                                 │     │
│  │  • /region/valles-centrales                        │     │
│  │  • /region/istmo                                   │     │
│  │  • /region/mixteca                                 │     │
│  │                                                     │     │
│  │  Contenido:                                        │     │
│  │  • Header con navegación                           │     │
│  │  • Descripción de la región                        │     │
│  │  • Grid de 8 categorías artesanales               │     │
│  └────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                              ↓
                  [Click en una categoría]
                              ↓
┌─────────────────────────────────────────────────────────────┐
│              LISTA DE PRODUCTORES                            │
│          /region/:regionId/:category                         │
│  ┌────────────────────────────────────────────────────┐     │
│  │  Ejemplos de URLs:                                 │     │
│  │  • /region/valles-centrales/barro-ceramica        │     │
│  │  • /region/istmo/textiles-bordados                │     │
│  │  • /region/mixteca/palma-fibras                   │     │
│  │                                                     │     │
│  │  Contenido:                                        │     │
│  │  • Header con navegación                           │     │
│  │  • Icono y descripción de categoría               │     │
│  │  • Cards de productores con:                      │     │
│  │    - Imagen del producto/taller                   │     │
│  │    - Nombre del productor                         │     │
│  │    - Comunidad                                     │     │
│  │    - Tipo de artesanía                            │     │
│  │    - Tags (Comercio justo, Trazabilidad, etc.)   │     │
│  └────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                              ↓
                  [Click en un productor]
                              ↓
┌─────────────────────────────────────────────────────────────┐
│              FICHA DEL PRODUCTOR                             │
│          /producer/:producerId                               │
│  ┌────────────────────────────────────────────────────┐     │
│  │  Ejemplos de URLs:                                 │     │
│  │  • /producer/producer-1                            │     │
│  │  • /producer/producer-4                            │     │
│  │                                                     │     │
│  │  Contenido:                                        │     │
│  │  • Hero con imagen principal                      │     │
│  │  • Nombre y ubicación                             │     │
│  │  • Historia del productor                         │     │
│  │  • Técnica artesanal                              │     │
│  │  • Lista de productos disponibles                 │     │
│  │  • Datos de contacto (teléfono/email)            │     │
│  │  • Botón "Contactar productor"                    │     │
│  │  • CTA para explorar más de la región            │     │
│  └────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              PÁGINA 404 - NO ENCONTRADO                      │
│          /* (cualquier ruta no definida)                     │
│  ┌────────────────────────────────────────────────────┐     │
│  │  • Mensaje elegante de error                       │     │
│  │  • Botón para volver al inicio                     │     │
│  │  • Diseño coherente con la marca                   │     │
│  └────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

## 🎨 Regiones Implementadas

| ID | Nombre | Posición en Mapa | Descripción |
|---|---|---|---|
| `valles-centrales` | Valles Centrales | Centro (48%, 50%) | Barro negro y artesanía tradicional |
| `sierra-norte` | Sierra Norte | Norte-Centro (52%, 28%) | Textiles zapotecos de montaña |
| `sierra-sur` | Sierra Sur | Sur (42%, 68%) | Madera tallada ancestral |
| `mixteca` | Mixteca | Noroeste (22%, 32%) | Palma y fibras naturales |
| `canada` | Cañada | Centro-Norte (38%, 38%) | Cestería y tejidos de palma |
| `costa` | Costa | Suroeste (18%, 78%) | Arte decorativo y joyería |
| `istmo` | Istmo | Sureste (72%, 62%) | Bordados y orfebrería zapoteca |
| `papaloapan` | Papaloapan | Este (68%, 38%) | Gastronomía artesanal |

## 📦 Categorías por Región

Cada región tiene acceso a 8 categorías:

1. **Barro y cerámica** (`barro-ceramica`) 🏺
2. **Textiles y bordados** (`textiles-bordados`) 🧵
3. **Palma y fibras naturales** (`palma-fibras`) 🌿
4. **Joyería artesanal** (`joyeria`) 💎
5. **Madera tallada** (`madera-tallada`) 🪵
6. **Gastronomía local** (`gastronomia`) 🌶️
7. **Piel y accesorios** (`piel-accesorios`) 👜
8. **Arte decorativo** (`arte-decorativo`) 🎨

## 👥 Productores de Ejemplo

8 productores implementados con datos completos:

| ID | Nombre | Región | Categoría | Comunidad |
|---|---|---|---|---|
| `producer-1` | Familia Martínez Cruz | Valles Centrales | Barro Negro | San Bartolo Coyotepec |
| `producer-2` | Taller García | Valles Centrales | Barro Verde | Santa María Atzompa |
| `producer-3` | Cooperativa Mujeres del Valle | Valles Centrales | Tapetes de Lana | Teotitlán del Valle |
| `producer-4` | Taller Ruiz Matus | Istmo | Bordado Istmeño | Juchitán de Zaragoza |
| `producer-5` | Don Esteban López | Mixteca | Sombreros de Palma | Pinotepa de Don Luis |
| `producer-6` | Familia Hernández | Sierra Sur | Alebrijes | San Martín Tilcajete |
| `producer-7` | Doña María Velasco | Valles Centrales | Mole Artesanal | San Pedro Totolápam |
| `producer-8` | Orfebrería Santiago | Istmo | Filigrana en Oro | Tehuantepec |

## 🔄 Flujo de Usuario Completo

```
1. Usuario llega a XANDA (/)
2. Ve el mapa de Oaxaca con 8 regiones
3. Hace hover → punto se vuelve dorado + tooltip
4. Click en región → navegación a /region/[id]
5. Ve 8 categorías artesanales
6. Click en categoría → /region/[id]/[category]
7. Ve lista de productores de esa región+categoría
8. Click en productor → /producer/[id]
9. Ve ficha completa con:
   - Historia
   - Técnica
   - Productos
   - Contacto
10. Puede contactar o volver a explorar
```

## 🎯 Estados Visuales del Mapa

- **Normal**: Punto verde oscuro (#1F4D3A)
- **Hover**: Punto dorado (#D4B78A) + tooltip + animación de pulso
- **Seleccionado**: Punto terracota (#C86845) + sombra
- **Transición**: 300ms smooth antes de navegar

## 📱 Responsive Design

- **Desktop**: Grid 4 columnas (categorías), 3 columnas (productores)
- **Tablet**: Grid 2 columnas adaptativo
- **Mobile**: Columna única, tipografía fluida con clamp()

---

✨ **Todas las rutas implementadas y funcionales**
🎨 **Diseño premium coherente en todas las páginas**
🗺️ **Navegación intuitiva y fluida**
