# Abyssal Relics — E-commerce Frontend

> Tienda de antigüedades malditas, grimorios, artefactos sobrenaturales y reliquias del más allá.

🔗 **Repositorio GitHub:** `https://github.com/gudaraz/ecommerce-frontend-m2`


---

## Índice

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Estructura de Archivos](#estructura-de-archivos)
4. [Instrucciones de Uso](#instrucciones-de-uso)
5. [Páginas y Funcionalidades](#páginas-y-funcionalidades)
6. [Modelo de Datos (Products)](#modelo-de-datos-products)
7. [Lógica del Carrito](#lógica-del-carrito)
8. [Hoja de Ruta hacia el Backend](#hoja-de-ruta-hacia-el-backend)
9. [Convenciones de Commits Git](#convenciones-de-commits-git)
10. [Criterios de Evaluación Cubiertos](#criterios-de-evaluación-cubiertos)

---

## Descripción del Proyecto

**Abyssal Relics** es el MVP del frontend de una tienda de comercio electrónico temática, desarrollado como entregable del Módulo 2 del curso. La tienda vende artefactos sobrenaturales ficticios con referencias a cultura pop oscura (El Nombre de la Rosa, Cazafantasmas, Hellraiser, Las Nueve Puertas, El Retrato de Dorian Gray, El Necronomicón, etc.).

El proyecto implementa las tres páginas obligatorias del alcance MVP más una página de contacto opcional, usando HTML5 semántico, Bootstrap 5 y JavaScript vanilla.

---

## Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| HTML5 | — | Estructura semántica de páginas |
| CSS3 | — | Estilos personalizados (dark theme) |
| Bootstrap | 5.3.3 (CDN) | Grid, navbar, cards, badges, toasts |
| Bootstrap Icons | 1.11.3 (CDN) | Iconografía |
| Google Fonts | — | Cinzel (display) + EB Garamond (body) |
| JavaScript | ES6+ (vanilla) | DOM, eventos, arrays, localStorage |
| localStorage | — | Persistencia del carrito en el navegador |

Sin dependencias de Node.js ni herramientas de build. El proyecto corre directamente en un navegador abriendo `index.html`.

---

## Estructura de Archivos

```
ecommerce-frontend-m2/
│
├── index.html          # Home — Catálogo con grilla de productos
├── product.html        # Detalle de producto (lee ?id= de la URL)
├── cart.html           # Carrito de compras
├── contact.html        # Página de contacto (opcional)
│
├── css/
│   └── styles.css      # Estilos personalizados (dark theme, variables CSS)
│
├── js/
│   ├── products.js     # Array de productos (fuente de datos del frontend)
│   └── app.js          # Lógica: carrito, renderizado, DOM, eventos
│
└── README.md           # Este archivo
```

---

## Instrucciones de Uso

### Abrir localmente

1. Descomprime el archivo `.zip` del proyecto.
2. Abre `index.html` directamente en un navegador (Chrome, Firefox, Edge).
3. No requiere servidor local ni instalación de dependencias.

> **Nota:** Para que `localStorage` funcione correctamente en algunos navegadores (Safari), puede ser necesario servir los archivos desde un servidor local. Puedes usar la extensión Live Server de VS Code o ejecutar `python3 -m http.server` en la carpeta del proyecto.

### Navegar el sitio

- **Home (`index.html`):** Explora el catálogo de 12 reliquias.
- **Detalle:** Haz clic en "Ver más" en cualquier card.
- **Carrito:** Haz clic en "Agregar al carrito" (desde Home o Detalle). El badge del navbar se actualiza en tiempo real. Ve al carrito con el ícono del navbar.
- **Contacto:** Formulario de contacto con validación básica (simulado).

---

## Páginas y Funcionalidades

### `index.html` — Catálogo (Home)

- Hero con título e introducción de la tienda.
- Grilla responsiva de 12 productos generada dinámicamente desde el array `products[]` en `products.js`.
- Cada card muestra: imagen, categoría, nombre, descripción corta, precio, badge y dos botones ("Ver más" y "Agregar al carrito").
- Navbar sticky con badge de cantidad del carrito, actualizado en tiempo real.
- Toast de confirmación al agregar un producto.

### `product.html` — Detalle de Producto

- Lee el parámetro `?id=` de la URL para identificar el producto.
- Muestra: imagen, categoría, nombre, descripción completa, precio, stock disponible.
- Botón "Agregar al carrito" con confirmación por toast.
- Breadcrumb de navegación.
- Si el `id` no corresponde a ningún producto, muestra un mensaje de error con enlace al catálogo.

### `cart.html` — Carrito

- Lista todos los items del carrito desde `localStorage`.
- Controles de cantidad (+ / -) que recalculan el subtotal en tiempo real.
- Botón de eliminar por item.
- Panel de resumen del pedido con total calculado.
- Botón para vaciar el carrito completo.
- Estado vacío con mensaje y enlace al catálogo.

### `contact.html` — Contacto (opcional)

- Formulario con campos: nombre, email, asunto (select) y mensaje.
- Validación básica con JavaScript: verifica campos obligatorios.
- Simula envío exitoso con feedback visual.
- Datos de contacto ficticios de la tienda.

---

## Modelo de Datos (Products)

Cada producto en el array `products[]` de `js/products.js` tiene la siguiente estructura:

```javascript
{
  id:          Number,   // Identificador único (entero positivo)
  name:        String,   // Nombre del producto
  category:    String,   // Categoría (ej: "Grimorios", "Arte Maldito")
  price:       Number,   // Precio en CLP (entero, sin decimales)
  badge:       String,   // Etiqueta especial (ej: "Maldito", "Bestseller")
  stock:       Number,   // Unidades disponibles
  shortDesc:   String,   // Descripción corta (para cards del catálogo)
  description: String,   // Descripción completa (para página de detalle)
  image:       String    // URL de la imagen del producto
}
```

### Categorías actuales

- `Arte Maldito`
- `Grimorios`
- `Manuscritos`
- `Kits de Caza`
- `Artefactos`
- `Amuletos`
- `Miscelánea Oscura`

---

## Lógica del Carrito

El carrito se almacena en `localStorage` con la clave `abyssal_cart`. Cada item del carrito tiene:

```javascript
{
  id:    Number,   // id del producto
  name:  String,   // nombre del producto
  price: Number,   // precio unitario
  qty:   Number,   // cantidad
  image: String    // URL de imagen
}
```

### Funciones principales (`js/app.js`)

| Función | Descripción |
|---|---|
| `getCart()` | Lee el carrito desde `localStorage` |
| `saveCart(cart)` | Guarda el carrito y actualiza el badge |
| `updateCartBadge(cart)` | Actualiza el contador en el navbar |
| `addToCart(productId)` | Agrega un item o incrementa su cantidad |
| `removeFromCart(productId)` | Elimina un item del carrito |
| `incrementQty(productId)` | Aumenta la cantidad de un item |
| `decrementQty(productId)` | Reduce la cantidad (elimina si llega a 0) |
| `clearCart()` | Vacía el carrito completo |
| `renderProductGrid()` | Genera las cards del catálogo en el DOM |
| `renderProductDetail()` | Genera el detalle de un producto en el DOM |
| `renderCart()` | Genera la lista de items del carrito en el DOM |
| `showToast(message)` | Muestra una notificación breve |

---

## Hoja de Ruta hacia el Backend

> Esta sección documenta cómo este frontend se conectará a la API REST del Módulo 3.

### Endpoints esperados

A continuación se listan las operaciones que actualmente se hacen en frontend con datos locales y que deberán ser reemplazadas por llamadas `fetch()` a una API REST:

#### Productos

```
GET    /api/products           → Reemplaza: el array products[]
GET    /api/products/:id       → Reemplaza: products.find(p => p.id === id)
GET    /api/products?category= → Filtrado por categoría (funcionalidad futura)
```

#### Carrito / Sesión

```
POST   /api/cart               → Reemplaza: addToCart() + localStorage
GET    /api/cart               → Reemplaza: getCart() desde localStorage
PUT    /api/cart/:productId    → Reemplaza: incrementQty() / decrementQty()
DELETE /api/cart/:productId    → Reemplaza: removeFromCart()
DELETE /api/cart               → Reemplaza: clearCart()
```

#### Pedidos

```
POST   /api/orders             → Reemplaza: botón "Finalizar Compra" simulado
GET    /api/orders/:id         → Vista de confirmación de pedido (futura)
```

#### Contacto

```
POST   /api/contact            → Reemplaza: simulación en contact.html
```

### Cambios de código necesarios para la integración

1. **`js/products.js`:** Eliminar el array estático. Crear una función `fetchProducts()` que llame a `GET /api/products`.
2. **`js/app.js`:** Reemplazar todas las operaciones sobre `localStorage` por llamadas `fetch()` a los endpoints del carrito. Agregar manejo de errores HTTP.
3. **Autenticación:** Agregar headers `Authorization: Bearer <token>` a las llamadas del carrito y pedidos.
4. **`product.html`:** `renderProductDetail()` hará `fetch(/api/products/${id})` en vez de buscar en array local.

### Modelo de BD sugerido (referencia)

```sql
-- Tabla: products
CREATE TABLE products (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        VARCHAR(255) NOT NULL,
  category    VARCHAR(100),
  price       INTEGER NOT NULL,           -- En CLP, sin decimales
  badge       VARCHAR(50),
  stock       INTEGER DEFAULT 0,
  short_desc  TEXT,
  description TEXT,
  image_url   VARCHAR(500),
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: cart_items (si el carrito se persiste en el servidor)
CREATE TABLE cart_items (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id  VARCHAR(100) NOT NULL,      -- o user_id si hay autenticación
  product_id  INTEGER REFERENCES products(id),
  qty         INTEGER DEFAULT 1,
  added_at    DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## Convenciones de Commits Git

El repositorio debe tener **mínimo 3 commits** con mensajes descriptivos. Se sugiere esta secuencia:

```
feat: estructura inicial del proyecto y configuración de Bootstrap
feat: catálogo de productos con cards y grilla responsiva
feat: lógica del carrito con localStorage y contador en navbar
feat: página de detalle de producto con renderizado dinámico
feat: página de carrito con controles de cantidad y resumen
feat: página de contacto con formulario y validación
docs: README con documentación completa y hoja de ruta backend
```

---

## Criterios de Evaluación Cubiertos

| Criterio | Implementación |
|---|---|
| **HTML5 semántico** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` en todas las páginas |
| **Bootstrap – grid y utilidades** | Contenedores, filas, columnas responsivas (`col-12 col-sm-6 col-lg-4`), utilidades de spacing, display y tipografía |
| **Bootstrap – componentes** | Navbar, Card, Button, Badge, Toast |
| **Responsive** | Layout mobile-first estable en ≤420px y ≥1024px; breakpoints `sm`, `lg` |
| **JS – interacción y carrito** | `querySelector`, eventos `click`, funciones, arrays con `.find()`, `.map()`, `.filter()`, `.reduce()`, `localStorage` |
| **Contador de carrito** | Actualización en tiempo real en navbar badge en todas las páginas |
| **Navegación** | Navbar con `active` en página actual, links a Home, Carrito y Contacto, breadcrumb en detalle |
| **Detalle de producto** | Accesible desde Home con enlace `?id=`, renderizado dinámico |
| **Calidad de código** | Archivos separados por responsabilidad, nombres coherentes, comentarios JSDoc, CSS con variables |
| **Git/GitHub** | ≥3 commits atómicos con mensajes descriptivos, repo público, README completo con enlace |

---

*Proyecto desarrollado para el Módulo 2 – E-commerce Frontend.*
