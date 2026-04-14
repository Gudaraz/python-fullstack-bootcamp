/**
 * app.js
 * Lógica principal de Abyssal Relics.
 * Maneja: carrito (localStorage), contador navbar, renderizado de productos y detalle.
 * NOTA PARA BACKEND: Las funciones de carrito serán reemplazadas por llamadas fetch() a la API REST.
 */

/* ======================================================
   CARRITO — gestión con localStorage
   ====================================================== */

/**
 * Obtiene el carrito actual desde localStorage.
 * @returns {Array} Array de items { id, name, price, qty, image }
 */
function getCart() {
  return JSON.parse(localStorage.getItem("abyssal_cart")) || [];
}

/**
 * Guarda el carrito en localStorage y actualiza el contador del navbar.
 * @param {Array} cart
 */
function saveCart(cart) {
  localStorage.setItem("abyssal_cart", JSON.stringify(cart));
  updateCartBadge(cart);
}

/**
 * Actualiza el badge/contador del carrito en el navbar.
 * @param {Array} cart
 */
function updateCartBadge(cart) {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = totalItems;
  // Mostrar u ocultar el badge
  badge.style.display = totalItems > 0 ? "inline-block" : "none";
}

/**
 * Agrega un producto al carrito o incrementa su cantidad.
 * @param {number} productId
 */
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1,
      image: product.image
    });
  }

  saveCart(cart);
  showToast(`"${product.name}" agregado al carrito`);
}

/**
 * Elimina un item del carrito por su id.
 * @param {number} productId
 */
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

/**
 * Incrementa la cantidad de un item del carrito.
 * @param {number} productId
 */
function incrementQty(productId) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) item.qty += 1;
  saveCart(cart);
  renderCart();
}

/**
 * Decrementa la cantidad de un item. Si llega a 0, lo elimina.
 * @param {number} productId
 */
function decrementQty(productId) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty -= 1;
    if (item.qty <= 0) {
      removeFromCart(productId);
      return;
    }
  }
  saveCart(cart);
  renderCart();
}

/* ======================================================
   TOAST — notificación visual breve
   ====================================================== */

/**
 * Muestra un toast de confirmación en la esquina superior derecha.
 * @param {string} message
 */
function showToast(message) {
  const toastEl = document.getElementById("cart-toast");
  const toastMsg = document.getElementById("toast-message");
  if (!toastEl || !toastMsg) return;
  toastMsg.textContent = message;
  const toast = new bootstrap.Toast(toastEl, { delay: 2500 });
  toast.show();
}

/* ======================================================
   HOME — renderizado de la grilla de productos
   ====================================================== */

/**
 * Renderiza todas las cards de productos en el contenedor #product-grid.
 * NOTA PARA BACKEND: Reemplazar el array `products` por fetch("/api/products")
 */
function renderProductGrid() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = products.map(product => `
    <article class="col-12 col-sm-6 col-lg-4">
      <div class="card h-100 product-card">
        <div class="card-img-wrapper">
          <img
            src="${product.image}"
            class="card-img-top product-img"
            alt="${product.name}"
            loading="lazy"
          />
          <span class="badge badge-overlay">${product.badge}</span>
        </div>
        <div class="card-body d-flex flex-column">
          <span class="product-category">${product.category}</span>
          <h2 class="card-title product-title">${product.name}</h2>
          <p class="card-text product-short-desc flex-grow-1">${product.shortDesc}</p>
          <div class="product-price mt-2">$${product.price.toLocaleString("es-CL")}</div>
        </div>
        <div class="card-footer d-flex gap-2">
          <a href="product.html?id=${product.id}" class="btn btn-outline-gold flex-grow-1">
            Ver más
          </a>
          <button
            class="btn btn-gold"
            onclick="addToCart(${product.id})"
            aria-label="Agregar ${product.name} al carrito"
          >
            <i class="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

/* ======================================================
   DETALLE DE PRODUCTO
   ====================================================== */

/**
 * Renderiza la página de detalle leyendo el parámetro ?id= de la URL.
 * NOTA PARA BACKEND: Reemplazar por fetch(`/api/products/${id}`)
 */
function renderProductDetail() {
  const detailContainer = document.getElementById("product-detail");
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const product = products.find(p => p.id === id);

  if (!product) {
    detailContainer.innerHTML = `
      <div class="col-12 text-center py-5">
        <h2 class="text-gold">Reliquia no encontrada</h2>
        <p class="text-muted">El artefacto que buscas se ha perdido en el abismo.</p>
        <a href="index.html" class="btn btn-gold mt-3">Volver al Catálogo</a>
      </div>
    `;
    return;
  }

  // Actualizar el <title> de la página
  document.title = `${product.name} — Abyssal Relics`;

  detailContainer.innerHTML = `
    <div class="col-12 col-md-6">
      <div class="detail-img-wrapper">
        <img src="${product.image}" alt="${product.name}" class="img-fluid detail-img" />
        <span class="badge badge-detail">${product.badge}</span>
      </div>
    </div>
    <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
      <span class="product-category mb-2">${product.category}</span>
      <h1 class="detail-title">${product.name}</h1>
      <p class="detail-desc">${product.description}</p>
      <div class="detail-meta d-flex align-items-center gap-3 mb-4">
        <span class="detail-price">$${product.price.toLocaleString("es-CL")}</span>
        <span class="stock-info">
          <i class="bi bi-box-seam"></i> ${product.stock} en stock
        </span>
      </div>
      <div class="d-flex gap-3">
        <button
          class="btn btn-gold btn-lg flex-grow-1"
          onclick="addToCart(${product.id})"
        >
          <i class="bi bi-cart-plus me-2"></i>Agregar al Carrito
        </button>
        <a href="index.html" class="btn btn-outline-gold btn-lg">
          <i class="bi bi-arrow-left"></i>
        </a>
      </div>
    </div>
  `;
}

/* ======================================================
   CARRITO — renderizado de la página cart.html
   ====================================================== */

/**
 * Renderiza el contenido de la página del carrito.
 * NOTA PARA BACKEND: En el futuro, el carrito será persistido en sesión/BD del servidor.
 */
function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  const cartSummary = document.getElementById("cart-summary");
  if (!cartContainer) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-cart-x empty-cart-icon"></i>
        <h3 class="mt-3 text-gold">Tu carrito está vacío</h3>
        <p class="text-muted">Los espíritus aún no han elegido sus reliquias.</p>
        <a href="index.html" class="btn btn-gold mt-3">Explorar Catálogo</a>
      </div>
    `;
    if (cartSummary) cartSummary.style.display = "none";
    return;
  }

  // Renderizar items
  cartContainer.innerHTML = cart.map(item => `
    <article class="col-12">
      <div class="cart-item d-flex align-items-center gap-3">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="flex-grow-1">
          <h3 class="cart-item-name">${item.name}</h3>
          <span class="cart-item-price">$${item.price.toLocaleString("es-CL")} c/u</span>
        </div>
        <div class="qty-controls d-flex align-items-center gap-2">
          <button class="btn btn-qty" onclick="decrementQty(${item.id})" aria-label="Disminuir cantidad">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="btn btn-qty" onclick="incrementQty(${item.id})" aria-label="Aumentar cantidad">+</button>
        </div>
        <span class="cart-item-subtotal">$${(item.price * item.qty).toLocaleString("es-CL")}</span>
        <button
          class="btn btn-remove"
          onclick="removeFromCart(${item.id}); renderCart();"
          aria-label="Eliminar ${item.name}"
        >
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    </article>
  `).join("");

  // Calcular total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  if (cartSummary) {
    cartSummary.style.display = "block";
    cartSummary.innerHTML = `
      <div class="summary-box">
        <h3 class="summary-title">Resumen del Pedido</h3>
        <div class="summary-row">
          <span>Productos (${totalItems})</span>
          <span>$${total.toLocaleString("es-CL")}</span>
        </div>
        <div class="summary-row">
          <span>Envío desde el Más Allá</span>
          <span class="text-gold">Gratis</span>
        </div>
        <hr class="summary-divider" />
        <div class="summary-row summary-total">
          <span>Total</span>
          <span>$${total.toLocaleString("es-CL")}</span>
        </div>
        <button class="btn btn-gold w-100 mt-3" onclick="showToast('¡Pedido enviado al abismo! Llegará en 3 a 5 lunas.')">
          Finalizar Compra
        </button>
        <button class="btn btn-outline-danger w-100 mt-2" onclick="clearCart()">
          Vaciar Carrito
        </button>
      </div>
    `;
  }
}

/**
 * Vacía el carrito completamente.
 */
function clearCart() {
  saveCart([]);
  renderCart();
}

/* ======================================================
   INICIALIZACIÓN
   ====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Actualizar badge al cargar cualquier página
  updateCartBadge(getCart());

  // Renderizar según la página actual
  renderProductGrid();
  renderProductDetail();
  renderCart();
});
