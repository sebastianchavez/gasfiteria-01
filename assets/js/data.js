const APP = {
  nombre: 'AquaPro',
  eslogan: 'Gasfitería profesional y academia',
  telefono: '+56 9 1234 5678',
  telefonoFijo: '+56 2 2345 6789',
  whatsapp: '+56912345678',
  email: 'contacto@aquapro.cl',
  direccion: 'Av. Las Industrias 1234, Santiago, Chile',
  horarioAtencion: 'Lun-Vie 08:00-19:00 | Sáb 09:00-14:00',
  redes: {
    facebook: 'https://facebook.com/aquapro',
    instagram: 'https://instagram.com/aquapro',
    youtube: 'https://youtube.com/aquapro',
    linkedin: 'https://linkedin.com/company/aquapro'
  }
};

const NAV_ITEMS = [
  { label: 'Inicio', href: 'index.html' },
  { label: 'Sobre nosotros', href: 'sobre-nosotros.html' },
  { label: 'Servicios', href: 'servicios.html' },
  { label: 'Galería', href: 'galeria.html' },
  { label: 'Precios', href: 'precios.html' },
  { label: 'Academia', href: 'horarios-clases.html' },
  { label: 'Contacto', href: 'contacto.html' }
];

const SERVICIOS = [
  {
    id: 1,
    nombre: 'Destape de cañerías',
    icono: 'destape',
    descripcion: 'Eliminamos obstrucciones en desagües, alcantarillado y cañerías con equipos de alta presión.',
    precioDesde: 29990,
    destacado: true
  },
  {
    id: 2,
    nombre: 'Reparación de fugas',
    icono: 'fuga',
    descripcion: 'Detección y reparación de filtraciones visibles y no visibles con tecnología de ultrasonido.',
    precioDesde: 24990
  },
  {
    id: 3,
    nombre: 'Instalación de artefactos sanitarios',
    icono: 'instalacion',
    descripcion: 'Instalación profesional de WC, lavamanos, tinas, duchas y griferías de todas las marcas.',
    precioDesde: 19990,
    destacado: true
  },
  {
    id: 4,
    nombre: 'Mantención de termas y calefones',
    icono: 'terma',
    descripcion: 'Servicio técnico, limpieza y regulación de termas eléctricas y a gas certificadas.',
    precioDesde: 34990
  },
  {
    id: 5,
    nombre: 'Instalación de bombas de agua',
    icono: 'bomba',
    descripcion: 'Suministro e instalación de bombas presurizadoras y sistemas de elevación.',
    precioDesde: 89990
  },
  {
    id: 6,
    nombre: 'Detección de filtraciones',
    icono: 'deteccion',
    descripcion: 'Localizamos filtraciones ocultas con cámaras termográficas y equipos de ultrasonido.',
    precioDesde: 39990
  },
  {
    id: 7,
    nombre: 'Gasfitería industrial',
    icono: 'industrial',
    descripcion: 'Proyectos industriales, plantas de tratamiento, redes contra incendio y más.',
    precioDesde: 149990,
    destacado: true
  },
  {
    id: 8,
    nombre: 'Mantención preventiva',
    icono: 'redaccion',
    descripcion: 'Planes mensuales y trimestrales para evitar emergencias en tu hogar o empresa.',
    precioDesde: 19990
  },
  {
    id: 9,
    nombre: 'Instalación de cañerías',
    icono: 'tuberia',
    descripcion: 'Diseño e instalación de redes hidráulicas para proyectos nuevos y remodelaciones.',
    precioDesde: 49990
  },
  {
    id: 10,
    nombre: 'Limpieza de alcantarillado',
    icono: 'limpieza',
    descripcion: 'Hidrojet y equipos especializados para limpieza profunda de redes de alcantarillado.',
    precioDesde: 59990
  }
];

const EQUIPO = [
  {
    nombre: 'Carlos Mendoza',
    cargo: 'Director General',
    foto: 'https://i.pravatar.cc/400?img=12',
    bio: 'Ingeniero civil con más de 20 años liderando proyectos de gasfitería industrial y comercial.'
  },
  {
    nombre: 'Ana Rodríguez',
    cargo: 'Jefa de Operaciones',
    foto: 'https://i.pravatar.cc/400?img=47',
    bio: 'Coordinadora logística y de equipos. Especialista en atención al cliente y gestión de emergencias.'
  },
  {
    nombre: 'Miguel Torres',
    cargo: 'Maestro Gasfiter Senior',
    foto: 'https://i.pravatar.cc/400?img=33',
    bio: 'Más de 15 años de experiencia en terreno. Certificación SEC y maestro gasfiter autorizado.'
  },
  {
    nombre: 'Laura Silva',
    cargo: 'Instructora Academia',
    foto: 'https://i.pravatar.cc/400?img=45',
    bio: 'Docente certificada, formadora de nuevas generaciones de gasfiteres profesionales.'
  },
  {
    nombre: 'Roberto Díaz',
    cargo: 'Especialista Industrial',
    foto: 'https://i.pravatar.cc/400?img=68',
    bio: 'Experto en plantas de tratamiento, redes contra incendio y proyectos de gran envergadura.'
  },
  {
    nombre: 'Patricia Vargas',
    cargo: 'Atención al Cliente',
    foto: 'https://i.pravatar.cc/400?img=49',
    bio: 'Primera voz al llamar. Coordina visitas, agendamiento y seguimiento post-servicio.'
  }
];

const TESTIMONIOS = [
  {
    nombre: 'María González',
    cargo: 'Administradora de edificio',
    avatar: 'https://i.pravatar.cc/100?img=5',
    texto: 'Contratamos AquaPro para la mantención completa del edificio. Excelente trabajo, puntualidad y precios justos.',
    rating: 5
  },
  {
    nombre: 'Pedro Ramírez',
    cargo: 'Dueño de restaurante',
    avatar: 'https://i.pravatar.cc/100?img=15',
    texto: 'Resolvieron una fuga grave en mi cocina en menos de 2 horas. Quedé muy conforme con el servicio.',
    rating: 5
  },
  {
    nombre: 'Sofía Castro',
    cargo: 'Estudiante de la academia',
    avatar: 'https://i.pravatar.cc/100?img=23',
    texto: 'El curso de gasfitería básica me cambió la vida. Hoy trabajo como técnico independiente gracias a AquaPro.',
    rating: 5
  },
  {
    nombre: 'Andrés Morales',
    cargo: 'Gerente de operaciones',
    avatar: 'https://i.pravatar.cc/100?img=51',
    texto: 'Servicio corporativo impecable. Profesionalismo, certificados al día y respuesta inmediata ante emergencias.',
    rating: 5
  },
  {
    nombre: 'Valentina Rojas',
    cargo: 'Ama de casa',
    avatar: 'https://i.pravatar.cc/100?img=29',
    texto: 'Llegaron a la hora, me explicaron todo con paciencia y el precio fue el que cotizaron desde el inicio.',
    rating: 5
  }
];

const PLANES = [
  {
    nombre: 'Plan Hogar',
    precio: 29990,
    periodicidad: 'mes',
    descripcion: 'Ideal para viviendas y departamentos.',
    destacado: false,
    caracteristicas: [
      '1 visita de mantención preventiva al mes',
      'Atención prioritaria en emergencias',
      '10% de descuento en servicios adicionales',
      'Diagnóstico gratuito anual',
      'Cobertura de lunes a sábado'
    ]
  },
  {
    nombre: 'Plan Profesional',
    precio: 59990,
    periodicidad: 'mes',
    descripcion: 'Para pequeñas empresas y oficinas.',
    destacado: true,
    caracteristicas: [
      '2 visitas de mantención preventiva al mes',
      'Atención prioritaria 24/7',
      '20% de descuento en servicios adicionales',
      'Diagnóstico y cámaras termográficas',
      'Cobertura extendida fines de semana',
      'Asesoría técnica telefónica'
    ]
  },
  {
    nombre: 'Plan Empresarial',
    precio: 129990,
    periodicidad: 'mes',
    descripcion: 'Solución corporativa integral.',
    destacado: false,
    caracteristicas: [
      'Visitas ilimitadas de mantención',
      'Atención 24/7 con SLA garantizado',
      '30% de descuento en proyectos',
      'Equipos especializados en sitio',
      'Reportes mensuales ejecutivos',
      'Gerente de cuenta dedicado',
      'Cobertura nacional'
    ]
  }
];

const PRECIOS_SERVICIOS = [
  { servicio: 'Visita técnica y diagnóstico', precio: 15000, nota: 'Bonificable al aceptar el trabajo' },
  { servicio: 'Destape simple de lavamanos', precio: 24990, nota: 'A domicilio' },
  { servicio: 'Destape de alcantarillado', precio: 59990, nota: 'Con equipo hidrojet' },
  { servicio: 'Reparación de fuga visible', precio: 29990, nota: 'Materiales incluidos' },
  { servicio: 'Detección de fuga oculta', precio: 49990, nota: 'Con equipo especializado' },
  { servicio: 'Cambio de flexible de WC', precio: 19990, nota: 'Materiales incluidos' },
  { servicio: 'Instalación de grifería', precio: 24990, nota: 'Sin artefacto' },
  { servicio: 'Mantención de terma eléctrica', precio: 34990, nota: 'Limpieza y regulación' },
  { servicio: 'Mantención de terma a gas', precio: 44990, nota: 'Incluye certificado SEC' },
  { servicio: 'Instalación de bomba presurizadora', precio: 89990, nota: 'Equipo básico incluido' },
  { servicio: 'Instalación de WC', precio: 34990, nota: 'Sin artefacto' },
  { servicio: 'Cambio de cañería (metro lineal)', precio: 18990, nota: 'Materiales no incluidos' }
];

const CURSOS = [
  {
    id: 1,
    nivel: 'Gasfitería Básica',
    duracion: '4 semanas',
    cupos: 12,
    cuposDisponibles: 4,
    precio: 199990,
    proximoInicio: '15 de noviembre',
    descripcion: 'Aprende los fundamentos de la gasfitería residencial: herramientas, materiales, reparaciones básicas y mantenimiento.',
    temario: [
      'Herramientas y materiales básicos',
      'Sistemas de agua fría y caliente',
      'Reparación de fugas y goteos',
      'Destape de cañerías',
      'Cambio de flexibles y griferías',
      'Mantención preventiva del hogar'
    ]
  },
  {
    id: 2,
    nivel: 'Gasfitería Intermedia',
    duracion: '6 semanas',
    cupos: 10,
    cuposDisponibles: 7,
    precio: 349990,
    proximoInicio: '22 de noviembre',
    descripcion: 'Profundiza en instalaciones completas, termas, bombas y diseño de redes hidráulicas residenciales.',
    temario: [
      'Diseño de redes hidráulicas',
      'Instalación de termas y calefones',
      'Bombas presurizadoras',
      'Sistemas de evacuación',
      'Normativa SEC aplicable',
      'Práctica en terreno supervisada'
    ]
  },
  {
    id: 3,
    nivel: 'Gasfitería Avanzada',
    duracion: '8 semanas',
    cupos: 8,
    cuposDisponibles: 8,
    precio: 549990,
    proximoInicio: '5 de diciembre',
    descripcion: 'Especialízate en proyectos industriales, detección de filtraciones, gasfitería comercial y certificación profesional.',
    temario: [
      'Proyectos industriales y comerciales',
      'Detección de filtraciones ocultas',
      'Redes contra incendio',
      'Plantas de tratamiento',
      'Certificación SEC',
      'Gestión de negocio gasfiter'
    ]
  }
];

const HORARIOS_CLASES = [
  { dia: 'Lunes', manana: null, tarde: '15:00 - 18:00', noche: '19:00 - 22:00' },
  { dia: 'Martes', manana: null, tarde: '15:00 - 18:00', noche: '19:00 - 22:00' },
  { dia: 'Miércoles', manana: null, tarde: '15:00 - 18:00', noche: '19:00 - 22:00' },
  { dia: 'Jueves', manana: null, tarde: '15:00 - 18:00', noche: '19:00 - 22:00' },
  { dia: 'Viernes', manana: null, tarde: '15:00 - 18:00', noche: '19:00 - 22:00' },
  { dia: 'Sábado', manana: '09:00 - 13:00', tarde: null, noche: null },
  { dia: 'Domingo', manana: 'Cerrado', tarde: null, noche: null }
];

const HORARIOS_ATENCLAS = [
  { dia: 'Lunes a Viernes', horario: '08:00 - 19:00' },
  { dia: 'Sábado', horario: '09:00 - 14:00' },
  { dia: 'Domingo', horario: 'Cerrado' },
  { dia: 'Emergencias 24/7', horario: 'Todos los días' }
];

const GALERIA = [
  { id: 1, img: 'https://picsum.photos/seed/caneria1/800/600', titulo: 'Reparación de cañería', categoria: 'residencial' },
  { id: 2, img: 'https://picsum.photos/seed/bano1/800/600', titulo: 'Instalación de baño', categoria: 'residencial' },
  { id: 3, img: 'https://picsum.photos/seed/industria1/800/600', titulo: 'Mantención industrial', categoria: 'industrial' },
  { id: 4, img: 'https://picsum.photos/seed/terma1/800/600', titulo: 'Terma instalada', categoria: 'residencial' },
  { id: 5, img: 'https://picsum.photos/seed/local1/800/600', titulo: 'Local comercial', categoria: 'comercial' },
  { id: 6, img: 'https://picsum.photos/seed/sistema1/800/600', titulo: 'Sistema industrial', categoria: 'industrial' },
  { id: 7, img: 'https://picsum.photos/seed/cocina1/800/600', titulo: 'Cocina remodelada', categoria: 'residencial' },
  { id: 8, img: 'https://picsum.photos/seed/restaurante1/800/600', titulo: 'Restaurante', categoria: 'comercial' },
  { id: 9, img: 'https://picsum.photos/seed/antes1/800/600', titulo: 'Antes - Baño antiguo', categoria: 'antes-despues' },
  { id: 10, img: 'https://picsum.photos/seed/despues1/800/600', titulo: 'Después - Baño moderno', categoria: 'antes-despues' },
  { id: 11, img: 'https://picsum.photos/seed/hotel1/800/600', titulo: 'Hotel boutique', categoria: 'comercial' },
  { id: 12, img: 'https://picsum.photos/seed/edificio1/800/600', titulo: 'Edificio corporativo', categoria: 'comercial' }
];

const PROCESO = [
  { num: 1, titulo: 'Diagnóstico', descripcion: 'Evaluamos el problema en terreno o por foto para darte un presupuesto claro.' },
  { num: 2, titulo: 'Cotización', descripcion: 'Enviamos una cotización detallada sin sorpresas, con tiempos y materiales.' },
  { num: 3, titulo: 'Ejecución', descripcion: 'Nuestro equipo certificado ejecuta el trabajo con materiales de calidad.' },
  { num: 4, titulo: 'Garantía', descripcion: 'Respaldamos cada trabajo con garantía escrita y seguimiento post-servicio.' }
];

const ESTADISTICAS = [
  { num: 18, sufijo: '+', label: 'Años de experiencia' },
  { num: 12500, sufijo: '+', label: 'Clientes satisfechos' },
  { num: 8500, sufijo: '+', label: 'Proyectos realizados' },
  { num: 450, sufijo: '+', label: 'Alumnos formados' }
];

const CERTIFICACIONES = [
  'SEC - Superintendencia de Servicios',
  'Norma Chilena NCh 4/2000',
  'ISO 9001 Calidad',
  'ISO 14001 Medio Ambiente',
  'ACHIGA Asociación Gremial',
  'Mutual de Seguridad'
];

const FAQ = [
  {
    pregunta: '¿Cuáles son los medios de pago aceptados?',
    respuesta: 'Aceptamos efectivo, transferencia bancaria, tarjetas de débito y crédito, y pagos con cheques al día. Para proyectos grandes ofrecemos financiamiento.'
  },
  {
    pregunta: '¿Las cotizaciones tienen costo?',
    respuesta: 'La visita técnica y diagnóstico tiene un costo mínimo que se bonifica completamente al aceptar el trabajo. Para proyectos sobre $200.000 el diagnóstico es gratuito.'
  },
  {
    pregunta: '¿Qué garantía tienen sus trabajos?',
    respuesta: 'Todos nuestros trabajos cuentan con garantía escrita de 6 meses para mano de obra y la garantía oficial del fabricante para materiales. En el Plan Profesional y Empresarial la garantía se extiende a 12 meses.'
  },
  {
    pregunta: '¿Atienden emergencias fuera de horario?',
    respuesta: 'Sí, contamos con servicio de emergencias 24/7 para clientes con planes contratados. Para clientes puntuales, atendemos urgencias fuera de horario con un recargo del 30%.'
  },
  {
    pregunta: '¿Trabajan con seguros?',
    respuesta: 'Sí, somos proveedores autorizados de las principales aseguradoras del país. Emitimos toda la documentación necesaria para reembolsos.'
  },
  {
    pregunta: '¿Cuánto demora un trabajo típico?',
    respuesta: 'Una reparación simple (destape, flexible, grifería) toma entre 30 minutos y 2 horas. Trabajos más complejos como instalación de termas o cañerías pueden tomar entre 4 y 8 horas.'
  }
];

window.APP_DATA = {
  APP, NAV_ITEMS, SERVICIOS, EQUIPO, TESTIMONIOS,
  PLANES, PRECIOS_SERVICIOS, CURSOS, HORARIOS_CLASES,
  HORARIOS_ATENCLAS, GALERIA, PROCESO, ESTADISTICAS,
  CERTIFICACIONES, FAQ
};