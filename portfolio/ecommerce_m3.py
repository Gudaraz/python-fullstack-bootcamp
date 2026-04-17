# =============================================================================
# archivo: ecommerce_m3.py
# propósito: Simular un ecommerce básico con menú, carrito, búsqueda y funciones
# =============================================================================

# --- 1. FUNCIÓN: Mostrar catálogo ---
# Recibe la lista de productos y los imprime en formato tabla.
def mostrar_catalogo(catalogo):
    print("\n📦 CATÁLOGO DE PRODUCTOS")
    print("-" * 50)
    for producto in catalogo:
        print(
            f"ID: {producto['id']} | {producto['nombre']} | {producto['categoria']} | ${producto['precio']}")
    print("-" * 50)

# --- 2. FUNCIÓN: Buscar productos ---
# Recibe catálogo y término de búsqueda. Retorna lista de coincidencias.


def buscar_productos(catalogo, termino):
    resultados = []
    for producto in catalogo:
        # Búsqueda case-insensitive por nombre o categoría
        if termino.lower() in producto["nombre"].lower() or termino.lower() in producto["categoria"].lower():
            resultados.append(producto)
    return resultados

# --- 3. FUNCIÓN: Calcular total (cumple requisito: recibe parámetros y retorna valor) ---
# Recibe el carrito, calcula y retorna el monto total.


def calcular_total(carrito):
    total = 0.0
    for item in carrito:
        total += item["precio"] * item["cantidad"]
    return total

# --- 4. FUNCIÓN: Agregar al carrito ---
# Recibe catálogo y carrito. Valida ID y cantidad, y modifica el carrito.


def agregar_al_carrito(catalogo, carrito):
    mostrar_catalogo(catalogo)

    # Validación básica de entrada
    id_busqueda = int(input("Ingrese el ID del producto: "))
    cantidad = int(input("Ingrese la cantidad a agregar: "))

    if cantidad <= 0:
        print("❌ Error: La cantidad debe ser mayor a 0.")
        return

    # Buscar producto en catálogo por ID
    producto_encontrado = None
    for prod in catalogo:
        if prod["id"] == id_busqueda:
            producto_encontrado = prod
            break

    if producto_encontrado is None:
        print("❌ Error: ID no encontrado en el catálogo.")
        return

    # Si ya existe en el carrito, sumamos cantidad. Si no, lo agregamos nuevo.
    for item in carrito:
        if item["id"] == id_busqueda:
            item["cantidad"] += cantidad
            print(
                f"✅ Se actualizaron {cantidad} unidades de '{producto_encontrado['nombre']}' en el carrito.")
            return

    carrito.append({
        "id": producto_encontrado["id"],
        "nombre": producto_encontrado["nombre"],
        "precio": producto_encontrado["precio"],
        "cantidad": cantidad
    })
    print(
        f"✅ {cantidad} x '{producto_encontrado['nombre']}' agregado(s) al carrito.")

# --- 5. FUNCIÓN: Mostrar carrito y total ---
# Recibe carrito, imprime detalle y usa calcular_total() para mostrar el monto final.


def mostrar_carrito(carrito):
    if len(carrito) == 0:
        print("\n🛒 El carrito está vacío. Agrega productos desde la opción 3.")
        return

    total = calcular_total(carrito)
    print("\n🛒 DETALLE DEL CARRITO")
    print("-" * 65)
    print(f"{'ID':<5} {'Producto':<20} {'Cant':<5} {'Precio U.':<10} {'Subtotal':<10}")
    print("-" * 65)

    for item in carrito:
        subtotal = item["precio"] * item["cantidad"]
        print(
            f"{item['id']:<5} {item['nombre']:<20} {item['cantidad']:<5} ${item['precio']:<9} ${subtotal:<9}")

    print("-" * 65)
    print(f"💰 TOTAL A PAGAR: ${total:.2f}\n")

# --- 6. FUNCIÓN: Vaciar carrito ---
# Limpia la lista y confirma la acción.


def vaciar_carrito(carrito):
    carrito.clear()
    print("🗑️ El carrito ha sido vaciado correctamente.")

# =============================================================================
# PUNTO DE ENTRADA PRINCIPAL
# =============================================================================


def main():
    # Catálogo inicial (lista de diccionarios)
    catalogo = [
        {"id": 1, "nombre": "Camiseta", "categoria": "ropa", "precio": 15000},
        {"id": 2, "nombre": "Jeans", "categoria": "ropa", "precio": 35000},
        {"id": 3, "nombre": "Laptop", "categoria": "tecnologia", "precio": 850000},
        {"id": 4, "nombre": "Mouse", "categoria": "tecnologia", "precio": 12000},
        {"id": 5, "nombre": "Sartén", "categoria": "hogar", "precio": 22000},
        {"id": 6, "nombre": "Cafetera", "categoria": "hogar", "precio": 45000}
    ]

    # Carrito en memoria (lista vacía inicialmente)
    carrito = []

    # Ciclo principal del menú
    while True:
        print("\n🛍️ Bienvenido/a a tu Ecommerce")
        print("1) Ver catálogo de productos")
        print("2) Buscar producto por nombre o categoría")
        print("3) Agregar producto al carrito")
        print("4) Ver carrito y total")
        print("5) Vaciar carrito")
        print("0) Salir")

        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            mostrar_catalogo(catalogo)
        elif opcion == "2":
            termino = input("Ingrese nombre o categoría a buscar: ")
            coincidencias = buscar_productos(catalogo, termino)
            if len(coincidencias) > 0:
                print(f"\n🔍 Se encontraron {len(coincidencias)} producto(s):")
                mostrar_catalogo(coincidencias)
            else:
                print("⚠️ No se encontraron productos con ese criterio.")
        elif opcion == "3":
            agregar_al_carrito(catalogo, carrito)
        elif opcion == "4":
            mostrar_carrito(carrito)
        elif opcion == "5":
            vaciar_carrito(carrito)
        elif opcion == "0":
            print("👋 ¡Gracias por visitar tu Ecommerce. Hasta pronto!")
            break
        else:
            print("❌ Opción inválida. Intente nuevamente.")


# Ejecutar programa
if __name__ == "__main__":
    main()
