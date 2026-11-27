/**
 * Catálogo Oficial de Componentes de Desgaste y Mantenimiento Periódico Automotriz (AutoDash AI)
 * Basado en manuales de servicio de marcas de lujo y alto desempeño (Porsche, Mercedes-AMG, BMW M, Audi, Ferrari, Mazda, Toyota)
 */

export const CATEGORIAS_MANTENIMIENTO = {
  todas: { id: "todas", label: "Todos los Sistemas (19)" },
  electrico: { id: "electrico", label: "Batería AGM & ECU OBD-II" },
  motor: { id: "motor", label: "Motor, Turbo & Filtros" },
  frenos: { id: "frenos", label: "Frenos Cerámicos & Suspensión" },
  transmision: { id: "transmision", label: "Transmisión DCT/ZF & Correas" },
  llantas: { id: "llantas", label: "Neumáticos & Alineación TPMS" },
};

export const COMPONENTES_DESGASTE_OFICIALES = {
  bateria_sistema_carga: {
    id: "bateria_sistema_carga",
    label: "Batería AGM Start-Stop 12V/48V & Alternador (OBD-II)",
    shortLabel: "Batería AGM & Alternador",
    intervalo: 40000,
    alertaPreventivaKm: 3000,
    costoSugerido: 850000,
    categoria: "electrico",
    impacto: "Alimenta la ECU, dirección electroasistida, sistemas ADAS, Start-Stop y pantallas digitales del habitáculo. Sincronizable por puerto OBD-II de 16 pines.",
    icono: "Zap",
    especificacion: "12.6V reposo / 14.2V–14.8V alternador inteligente AGM"
  },
  check_engine_service_ecu: {
    id: "check_engine_service_ecu",
    label: "Check Engine / Escaneo ECU OBD-II 16 Pines & ADAS",
    shortLabel: "Escaneo ECU OBD-II",
    intervalo: 15000,
    alertaPreventivaKm: 1000,
    costoSugerido: 180000,
    categoria: "electrico",
    impacto: "Monitorea códigos DTC de inyección directa, presión de turbo boost, sensores de oxígeno, catalizador, ABS/ESP y cámaras ADAS.",
    icono: "Activity",
    especificacion: "0 Fallas DTC • Puerto OBD-II 16 Pines Bajo Volante"
  },
  aceite_motor: {
    id: "aceite_motor",
    label: "Aceite de Motor Full Sintético (0W-40 / 5W-30)",
    shortLabel: "Aceite Motor Sintético",
    intervalo: 10000,
    alertaPreventivaKm: 800,
    costoSugerido: 420000,
    categoria: "motor",
    impacto: "Lubrica turbocompresores, árboles de levas variables (VANOS/VVT) y anillos de pistón bajo alta exigencia térmica.",
    icono: "Droplet",
    especificacion: "Full Sintético API SP / ACEA C3 / Porsche C40 / MB 229.5"
  },
  filtro_aceite: {
    id: "filtro_aceite",
    label: "Filtro de Aceite OEM & Sello de Cárter",
    shortLabel: "Filtro de Aceite",
    intervalo: 10000,
    alertaPreventivaKm: 800,
    costoSugerido: 85000,
    categoria: "motor",
    impacto: "Retiene micropartículas y protege la presión hidráulica de los tensores de distribución y el eje del turbo.",
    icono: "Filter",
    especificacion: "Cartucho sintético de alto flujo con válvula anti-retorno"
  },
  cadena_lubricacion: {
    id: "cadena_lubricacion",
    label: "Alineación 3D, Balanceo & Rotación de 4 Ruedas",
    shortLabel: "Alineación 3D & Balanceo",
    intervalo: 10000,
    alertaPreventivaKm: 800,
    costoSugerido: 140000,
    categoria: "llantas",
    impacto: "Corrige ángulos de Camber, Caster y Convergencia para evitar desgaste irregular de neumáticos y vibraciones en el volante a alta velocidad.",
    icono: "Crosshair",
    especificacion: "Geometría láser 3D en las 4 ruedas + Calibración TPMS"
  },
  filtro_aire: {
    id: "filtro_aire",
    label: "Filtro de Aire de Motor & Cabina HEPA (Climatizador)",
    shortLabel: "Filtros Motor & Cabina",
    intervalo: 15000,
    alertaPreventivaKm: 1000,
    costoSugerido: 195000,
    categoria: "motor",
    impacto: "Garantiza flujo de oxígeno limpio hacia el turbo/admisión y purifica el aire del climatizador bizona con carbón activado.",
    icono: "Wind",
    especificacion: "Admisión de alto flujo + Cabina HEPA Carbón Activo"
  },
  bujia_encendido: {
    id: "bujia_encendido",
    label: "Juego de Bujías Laser Iridium (x4 / x6 / x8)",
    shortLabel: "Bujías Laser Iridium",
    intervalo: 40000,
    alertaPreventivaKm: 2500,
    costoSugerido: 380000,
    categoria: "motor",
    impacto: "Evita pérdida de potencia (Misfire P0300), protege las bobinas individuales y optimiza el consumo de gasolina Extra/Premium.",
    icono: "Flame",
    especificacion: "Electrodo central de Iridio / Platino de alta energía"
  },
  pastillas_delanteras: {
    id: "pastillas_delanteras",
    label: "Pastillas de Freno Delanteras (Cerámicas / Brembo)",
    shortLabel: "Pastillas Delanteras",
    intervalo: 25000,
    alertaPreventivaKm: 1500,
    costoSugerido: 480000,
    categoria: "frenos",
    impacto: "Soportan el 70% de la fuerza de frenado del vehículo. Incluye sensor electrónico de desgaste para no rayar los discos ventilados.",
    icono: "Disc",
    especificacion: "Compuesto Cerámico Low-Dust / Brembo Performance"
  },
  pastillas_traseras: {
    id: "pastillas_traseras",
    label: "Pastillas de Freno Traseras & Calibración EPB",
    shortLabel: "Pastillas Traseras",
    intervalo: 35000,
    alertaPreventivaKm: 2000,
    costoSugerido: 360000,
    categoria: "frenos",
    impacto: "Estabilizan el chasis en frenadas de emergencia y asisten al control de estabilidad ESP y freno de parqueo electrónico (EPB).",
    icono: "Disc",
    especificacion: "Cerámicas con retracción electrónica vía OBD-II"
  },
  liquido_frenos: {
    id: "liquido_frenos",
    label: "Líquido de Frenos DOT 4 LV / DOT 5.1 (ESP/ABS)",
    shortLabel: "Líquido Frenos DOT 4 LV",
    intervalo: 30000,
    alertaPreventivaKm: 2000,
    costoSugerido: 160000,
    categoria: "frenos",
    impacto: "Baja viscosidad para respuesta instantánea del módulo ABS, Control de Tracción y Torque Vectoring.",
    icono: "Beaker",
    especificacion: "DOT 4 Class 6 Low Viscosity (Punto ebullición > 265°C)"
  },
  llanta_trasera: {
    id: "llanta_trasera",
    label: "Neumáticos Traseros (Eje de Tracción • Par x2)",
    shortLabel: "Neumáticos Traseros (x2)",
    intervalo: 35000,
    alertaPreventivaKm: 2500,
    costoSugerido: 1950000,
    categoria: "llantas",
    impacto: "Transmiten toda la potencia y torque al asfalto. Monitorear testigos TWI (mínimo legal 1.6 mm) y sensores TPMS.",
    icono: "CircleDot",
    especificacion: "Presión recomendada: 36 - 38 PSI en frío (TPMS Activo)"
  },
  llanta_delantera: {
    id: "llanta_delantera",
    label: "Neumáticos Delanteros (Eje Direccional • Par x2)",
    shortLabel: "Neumáticos Delanteros (x2)",
    intervalo: 40000,
    alertaPreventivaKm: 2500,
    costoSugerido: 1850000,
    categoria: "llantas",
    impacto: "Controlan la precisión de giro en curvas de alta Fuerza G y la evacuación de agua contra aquaplaning.",
    icono: "CircleDot",
    especificacion: "Presión recomendada: 35 - 36 PSI en frío (TPMS Activo)"
  },
  kit_arrastre: {
    id: "kit_arrastre",
    label: "Correa de Repartición / Accesorios, Tensor & Poleas",
    shortLabel: "Correa Repartición/Accesorios",
    intervalo: 60000,
    alertaPreventivaKm: 4000,
    costoSugerido: 980000,
    categoria: "transmision",
    impacto: "Sincroniza el motor, alternador, bomba de agua y compresor de aire acondicionado. Su cambio preventivo evita daños catastróficos.",
    icono: "Cog",
    especificacion: "Kit OEM Correa EPDM + Tensor Hidráulico + Rodamientos"
  },
  cauchos_sprocket: {
    id: "cauchos_sprocket",
    label: "Soportes Hidráulicos de Motor & Caja (Silentblocks)",
    shortLabel: "Soportes de Motor & Caja",
    intervalo: 55000,
    alertaPreventivaKm: 3000,
    costoSugerido: 720000,
    categoria: "transmision",
    impacto: "Aíslan la cabina de vibraciones al acelerar o cambiar entre Drive (D) y Reversa (R), manteniendo el confort de auto de lujo.",
    icono: "Layers",
    especificacion: "Soportes hidroelásticos anti-vibración"
  },
  guaya_embrague: {
    id: "guaya_embrague",
    label: "Fluido de Transmisión Automática (PDK / ZF / DSG / CVT)",
    shortLabel: "Aceite Caja Automática",
    intervalo: 50000,
    alertaPreventivaKm: 3000,
    costoSugerido: 950000,
    categoria: "transmision",
    impacto: "Protege el cuerpo de válvulas mecatrónico y los discos de doble embrague para cambios imperceptibles y rápidos con levas en el volante.",
    icono: "GitCommit",
    especificacion: "Fluido Sintético ATF / DCTF + Filtro de Cárter de Caja"
  },
  aceite_suspension: {
    id: "aceite_suspension",
    label: "Amortiguadores Adaptativos & Bieletas de Suspensión",
    shortLabel: "Suspensión Adaptativa",
    intervalo: 60000,
    alertaPreventivaKm: 4000,
    costoSugerido: 1650000,
    categoria: "frenos",
    impacto: "Controla el balanceo de la carrocería en curvas y absorbe imperfecciones del asfalto sin perder firmeza deportiva.",
    icono: "Activity",
    especificacion: "Amortiguadores presurizados a gas / control electrónico"
  },
  cunas_direccion: {
    id: "cunas_direccion",
    label: "Terminales de Dirección Electroasistida, Axiales & Rótulas",
    shortLabel: "Dirección & Rótulas",
    intervalo: 50000,
    alertaPreventivaKm: 3000,
    costoSugerido: 540000,
    categoria: "frenos",
    impacto: "Elimina ruidos secos en baches y holguras en el volante, asegurando respuesta milimétrica del tren delantero.",
    icono: "Crosshair",
    especificacion: "Rótulas y terminales forjados de alta rigidez"
  },
  refrigerante: {
    id: "refrigerante",
    label: "Líquido Refrigerante G12evo / Intercooler & Termostato",
    shortLabel: "Refrigerante G12evo",
    intervalo: 40000,
    alertaPreventivaKm: 2500,
    costoSugerido: 210000,
    categoria: "motor",
    impacto: "Mantiene la temperatura del bloque en 90°C exactos y refrigera el circuito del turbocompresor e intercooler.",
    icono: "Droplets",
    especificacion: "Orgánico OAT / G12evo 50/50 anticorrosivo (-37°C a +135°C)"
  },
  calibracion_valvulas: {
    id: "calibracion_valvulas",
    label: "Limpieza Ultrasónica de Inyectores Directos (GDI/TSI) & Admisión",
    shortLabel: "Inyectores GDI & Turbo",
    intervalo: 30000,
    alertaPreventivaKm: 2000,
    costoSugerido: 320000,
    categoria: "motor",
    impacto: "Pulverización perfecta de alta presión, limpieza de cuerpo de aceleración electrónico y descarbonización de válvulas.",
    icono: "Wrench",
    especificacion: "Calibración de caudal en banco + Reset de adaptaciones ECU"
  }
};
