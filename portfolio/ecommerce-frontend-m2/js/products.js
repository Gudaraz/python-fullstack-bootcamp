/**
 * products.js
 * Fuente de datos central de Abyssal Relics.
 * NOTA PARA BACKEND: Este array refleja la estructura del futuro modelo Product en la API REST.
 * Campos esperados en la BD: id, name, category, price, badge, shortDesc, description, image, stock.
 */

const products = [
  {
    id: 1,
    name: "Cuadro de Vigo de Moldavia",
    category: "Arte Maldito",
    price: 6660,
    badge: "Icónico",
    stock: 1,
    shortDesc: "El original. Exuda slime verde en épocas de alta maldad concentrada.",
    description: "Pintado en el siglo XVI por Vigo el Sombrío, Duque de Moldavia y hechicero supremo. El cuadro exuda una sustancia viscosa verde en períodos de alta concentración maligna. Incluye cubo de slime de cortesía y manual del Dr. Peter Venkman. Advertencia: no colgar frente a bañeras. La empresa no se responsabiliza por posesiones demoníacas de recién nacidos.",
    image: "https://placehold.co/600x420/1a0505/c9a84c?text=Vigo+de+Moldavia"
  },
  {
    id: 2,
    name: "Necronomicón Ex-Mortis",
    category: "Grimorios",
    price: 13000,
    badge: "Peligroso",
    stock: 3,
    shortDesc: "Edición de bolsillo encuadernada en piel humana. No leer en voz alta.",
    description: "El Libro de los Muertos en su edición más compacta. Encuadernado en Naturom Demonto, escrito con tinta de sangre de los Antiguos. Contiene los ritos de Kandar, los conjuros de Kelock y el mapa a las tumbas de los Muertos Vivientes. No leer fragmentos en voz alta en cabañas de montaña. No lo decimos por moda.",
    image: "https://placehold.co/600x420/0a0a1a/c9a84c?text=Necronomicon"
  },
  {
    id: 3,
    name: "Las Nueve Estampas de Aristide Torchia",
    category: "Manuscritos",
    price: 99000,
    badge: "Set Completo",
    stock: 1,
    shortDesc: "Las 9 estampas de Las Nueve Puertas del Reino de las Sombras. ¿O son 8?",
    description: "El juego completo de grabados originales de la edición de Venecia de 1666, impresos por Aristide Torchia antes de su ejecución. Cada estampas contiene claves ocultas para invocar al Señor de las Tinieblas. Coleccionado pacientemente por Dean Corso. Vendemos el set tal como fue reunido. No garantizamos que las 9 sean auténticas. Eso, lector, es parte del juego.",
    image: "https://placehold.co/600x420/0f0a05/c9a84c?text=Nueve+Puertas"
  },
  {
    id: 4,
    name: "Retrato de Dorian Gray",
    category: "Arte Maldito",
    price: 25000,
    badge: "Envejecido",
    stock: 1,
    shortDesc: "Envejece por ti. Incluye marco dorado victoriano. Tú no envejeces.",
    description: "Lienzo original encargado por el joven Dorian Gray, pintado por Basil Hallward bajo la influencia de Lord Henry Wotton. El retrato absorbe todos los efectos del tiempo, el pecado y la degradación moral del propietario. Ideal para quienes desean la eterna juventud sin pagar el precio usual. Nota: el alma sí está incluida en la transacción. Tamaño: 80x120cm.",
    image: "https://placehold.co/600x420/0a1205/c9a84c?text=Dorian+Gray"
  },
  {
    id: 5,
    name: "Pack Mata Vampiros Deluxe",
    category: "Kits de Caza",
    price: 4500,
    badge: "Bestseller",
    stock: 12,
    shortDesc: "Estaca de roble, ajo, agua bendita, crucifijo y guía ilustrada de Van Helsing.",
    description: "El kit completo curado por el Prof. Abraham Van Helsing. Incluye: 1 estaca de roble sagrado tallada a mano, 3 cabezas de ajo de Transilvania, 1 frasco de agua bendita (bendecida por alguien que prefiere el anonimato), 1 crucifijo de plata 925, espejo de mano y la guía ilustrada 'Vampiros: Identificación, Localización y Eliminación' 3ª edición. No incluye capa.",
    image: "https://placehold.co/600x420/1a0505/c9a84c?text=Pack+Vampiros"
  },
  {
    id: 6,
    name: "Puzzle Box de Lemarchand",
    category: "Artefactos",
    price: 8888,
    badge: "Abre con Cuidado",
    stock: 5,
    shortDesc: "Cofre de configuración lemarchiana. Abre dimensiones. Pinhead no está incluido.",
    description: "Construida por Philip Lemarchand en 1784, esta caja de configuración abre portales a dimensiones de placer y dolor indistinguibles entre sí. Fabricada en latón y marfil con patrones geométricos precisos. Una vez abierta, los Cenobitas del Orden del Tormento serán enviados. No ofrecemos política de devoluciones para este producto. Viene con manual de configuración en latín.",
    image: "https://placehold.co/600x420/1a1a0a/c9a84c?text=Puzzle+Box"
  },
  {
    id: 7,
    name: "Kit del Cazador de Fantasmas",
    category: "Kits de Caza",
    price: 12500,
    badge: "Ghostbusters",
    stock: 4,
    shortDesc: "Protopack, trampa, PKE meter. Batería de neutrones no incluida.",
    description: "El equipo completo del Ghostbuster amateur. Incluye: 1 protopack réplica (sin reactor de neutrones activo, por razones legales), 1 trampa de fantasmas con pedal, 1 PKE Meter calibrado para entidades clase III y superiores, radio de mano, 1 frasco de ectoplasma real y el uniforme color caqui. Slimer no viene en la caja pero suele aparecer cerca de la heladera. Garantía: ninguna.",
    image: "https://placehold.co/600x420/051205/c9a84c?text=Kit+Cazafantasmas"
  },
  {
    id: 8,
    name: "Grimorio de las Hermanas Sanderson",
    category: "Grimorios",
    price: 7700,
    badge: "Halloween Special",
    stock: 2,
    shortDesc: "Con ojo auténtico en la tapa y receta del brebaje de niños.",
    description: "El libro de hechizos de Winifred Sanderson, recuperado de Salem, Massachusetts. Encuadernado en cuero con un ojo real incrustado en la tapa (parpadea cuando hay niños cerca). Contiene la receta original del Brebaje de la Vida Eterna, el conjuro de la lengua de gato negro y el hechizo del sueño de los inocentes. Solo abre para brujas con sangre de virgen. O con un cuchillo de cocina.",
    image: "https://placehold.co/600x420/1a0a1a/c9a84c?text=Grimorio+Sanderson"
  },
  {
    id: 9,
    name: "Amuleto Ojo de Agamotto",
    category: "Amuletos",
    price: 3200,
    badge: "Místico",
    stock: 7,
    shortDesc: "Control del tiempo no incluido. La Gema del Tiempo fue devuelta a Kamar-Taj.",
    description: "Réplica auténtica del Ojo de Agamotto, portado originalmente por el Dr. Strange. Elaborado en oro de las Dimensiones Místicas, con cadena de eslabones de Vibranium simbólico. La Gema del Tiempo fue devuelta al santuario de Kamar-Taj (hubo presiones diplomáticas). Aun así, el amuleto emite un brillo esmeraldino en presencia de magia oscura. Funciona como pisapapeles premium.",
    image: "https://placehold.co/600x420/0a1a0a/c9a84c?text=Ojo+de+Agamotto"
  },
  {
    id: 10,
    name: "Vela de Cera de Ballena Espectral",
    category: "Miscelánea Oscura",
    price: 1500,
    badge: "300 Años",
    stock: 20,
    shortDesc: "Arde durante 300 años. Ideal para pactos de larga duración.",
    description: "Fabricada con cera extraída de ballenas que murieron en aguas malditas del Triángulo de las Bermudas. La llama no se apaga con el viento, la lluvia ni el apocalipsis. Ideal para rituales de larga duración, pactos demoníacos de varios siglos o simplemente para quienes odian cambiar velas. Aroma: azufre y vainilla. Disponible en negro, negro más oscuro y negro absoluto.",
    image: "https://placehold.co/600x420/0a0a05/c9a84c?text=Vela+Espectral"
  },
  {
    id: 11,
    name: "Mano de Gloria",
    category: "Artefactos",
    price: 5500,
    badge: "Raro",
    stock: 3,
    shortDesc: "Mano de ladrón ahorcado. Vela incluida. El ladrón no sobrevivió la extracción.",
    description: "Talismán tradicional de los ladrones medievales europeos. Fabricada con la mano derecha de un ladrón ejecutado en horca, conservada en sal y hierbas durante 9 noches de luna nueva. La vela colocada entre los dedos congela a todos los habitantes de la casa mientras arde. Útil para robos, visitas incómodas o simplemente para tener paz y silencio. Certificado de defunción incluido.",
    image: "https://placehold.co/600x420/1a0a05/c9a84c?text=Mano+de+Gloria"
  },
  {
    id: 12,
    name: "Reloj de Arena con Tiempo Robado",
    category: "Artefactos",
    price: 9999,
    badge: "47 Minutos",
    stock: 6,
    shortDesc: "Contiene exactamente 47 minutos de tiempo robado a personas que se aburrían.",
    description: "Un reloj de arena inusual: la arena no es arena. Son 47 minutos de tiempo real, extraídos durante reuniones de trabajo aburridas, clases de historia medieval y filas de banco entre 1987 y 2003. Al invertirlo, revives esos 47 minutos como si fueran tuyos. Advertencia: los recuerdos no son de alta calidad. Marco de plata negra con grabados rúnicos. Funciona también como reloj de arena convencional.",
    image: "https://placehold.co/600x420/0f0f1a/c9a84c?text=Reloj+de+Arena"
  }
];
