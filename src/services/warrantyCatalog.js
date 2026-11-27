/**
 * Catálogo Oficial de Políticas de Garantía Automotriz por Marca y Concesionario (AutoDash AI)
 * Incorpora planes de mantenimiento de:
 * Porsche Center (Autoelite), Mercedes-AMG (Inchcape), BMW M (Autogermana), Audi Sport, Ferrari, Mazda y Toyota.
 */

export const CHECKLIST_DIARIO_ITEMS = [
  { id: "aceite", label: "Nivel de Aceite Sintético & Temp.", detalle: "Sensor digital de nivel en consola (iDrive / MBUX / PCM) o varilla en frío entre Mín y Máx", icono: "Droplet" },
  { id: "presion_llantas", label: "Presión TPMS 4 Neumáticos en Frío", detalle: "Eje Delantero: 35–36 PSI | Eje Trasero: 36–38 PSI monitoreados en las 4 ruedas", icono: "CircleDot" },
  { id: "frenos", label: "Frenos Cerámicos & Freno EPB", detalle: "Pedal firme, 0 testigos de desgaste de pastillas y freno de parqueo electrónico activo", icono: "Disc" },
  { id: "cadena", label: "Alineación, Dirección & Suspensión", detalle: "Volante centrado sin vibraciones y amortiguadores adaptativos sin alertas", icono: "Crosshair" },
  { id: "combustible", label: "Combustible Extra / Premium (Octanaje)", detalle: "Usar gasolina Extra/Premium (95–98 RON) para proteger inyección directa y turbocompresor", icono: "Fuel" },
  { id: "luces_pito", label: "Faros Matrix LED, DRL & Radares ADAS", detalle: "Luces diurnas LED, cámaras 360° y sensores de punto ciego limpios y operativos", icono: "Sun" },
  { id: "acelerador_embrague", label: "Transmisión Automática (PDK / ZF / DSG)", detalle: "Transición suave entre P, R, N y D/S sin tirones y levas en el volante activas", icono: "GitCommit" },
  { id: "espejos", label: "Espejos Electrocrómicos & Climatizador", detalle: "Espejos abatibles calibrados, parabrisas limpio y filtro HEPA bizona óptimo", icono: "Eye" },
];

export const OFFICIAL_WARRANTY_POLICIES = {
  PORSCHE: {
    distribuidor: "AUTOELITE PORSCHE CENTER",
    distribuidorCorto: "Porsche Center",
    mesesGarantia: 48,
    kmGarantia: 50000,
    toleranciaKm: 500,
    toleranciaDias: 30,
    descripcionReglas: "Tolerancia oficial de +/- 500 km o 30 días. Uso obligatorio de lubricante Mobil 1 ESP X3 0W-40 con homologación Porsche C40.",
    reglasDeOro: [
      {
        id: "tolerancia_kilometraje",
        titulo: "Respetar la Ventana de Mantenimiento (+/- 500 KM)",
        nivel: "critico",
        detalle: "Porsche Center exige realizar el mantenimiento anual o cada 10.000 km dentro del margen de +/- 500 km para conservar la cobertura Porsche Approved."
      },
      {
        id: "aceite_c40",
        titulo: "Uso Exclusivo de Aceite Mobil 1 ESP X3 0W-40 (Norma Porsche C40)",
        nivel: "critico",
        detalle: "Los motores Boxer y Turbo de alta compresión exigen lubricante sintético con aprobación Porsche C40 / A40."
      },
      {
        id: "electronica_obd",
        titulo: "Prohibido Reprogramar ECU (Stage 1/2) en Garantía",
        nivel: "critico",
        detalle: "El escáner oficial PIWIS 4 detecta alteraciones en mapas de presión de turbo o corte de inyección (código TD1), anulando la garantía del tren motriz."
      },
      {
        id: "grua_cama_baja",
        titulo: "Transporte Exclusivo en Grúa de Cama Baja (Plataforma)",
        nivel: "advertencia",
        detalle: "Nunca remolcar el vehículo con las ruedas apoyadas en el asfalto; esto daña irreversiblemente la caja PDK y el sistema de tracción."
      }
    ],
    revisiones: [
      {
        numero: 1,
        km: 10000,
        manoDeObra: "INCLUIDA",
        tiempoEstHoras: 2.5,
        descripcion: "1ª Revisión Oficial (10.000 KM / 1 Año) • Oil & Inspection Service",
        descripcionManoObra: "Incluida en plan Porsche Care / Mantenimiento Programado",
        chequeos: [
          "Cambio de aceite Mobil 1 ESP X3 0W-40 (Norma Porsche C40) y filtro original",
          "Diagnóstico electrónico completo con escáner Porsche PIWIS 4 en puerto OBD-II",
          "Inspección de pastillas y discos cerámicos PCCB / Brembo",
          "Calibración de sensores TPMS en las 4 ruedas y torque de pernos/Center-Lock",
          "Reinicio de intervalo de servicio en el clúster digital PCM"
        ],
        cambiosObligatorios: ["Aceite Mobil 1 0W-40 Porsche C40", "Filtro de Aceite OEM", "Arandela de Cárter"]
      },
      {
        numero: 2,
        km: 20000,
        manoDeObra: "PAGADA",
        tiempoEstHoras: 3.5,
        descripcion: "2ª Revisión Oficial (20.000 KM / 2 Años) • Intermediate Maintenance",
        descripcionManoObra: "Servicio intermedio en Porsche Center autorizado",
        chequeos: [
          "Cambio de aceite Mobil 1 0W-40 y filtro de aceite",
          "Reemplazo de filtro de polen de cabina con carbón activado HEPA",
          "Reemplazo de líquido de frenos DOT 4 LV de alto punto de ebullición",
          "Alineación 3D de 4 ruedas y balanceo dinámico",
          "Verificación de batería AGM 12V y sistema de carga"
        ],
        cambiosObligatorios: ["Aceite Mobil 1 0W-40", "Filtro de Aceite", "Filtro Cabina HEPA", "Líquido de Frenos DOT 4 LV"]
      },
      {
        numero: 3,
        km: 30000,
        manoDeObra: "PAGADA",
        tiempoEstHoras: 3.0,
        descripcion: "3ª Revisión Oficial (30.000 KM / 3 Años) • Performance & Spark Service",
        descripcionManoObra: "Servicio oficial en concesionario autorizado",
        chequeos: [
          "Cambio de aceite Mobil 1 0W-40 y filtro de aceite",
          "Reemplazo de juego de bujías Bosch Laser Platinum",
          "Reemplazo de filtros de admisión de aire de autor",
          "Inspección de brazos de suspensión adaptativa PASM y soportes de autor"
        ],
        cambiosObligatorios: ["Juego Bujías Laser Platinum", "Filtros de Aire Motor", "Aceite Mobil 1 0W-40", "Filtro Aceite"]
      },
      {
        numero: 4,
        km: 40000,
        manoDeObra: "PAGADA",
        tiempoEstHoras: 4.5,
        descripcion: "4ª Revisión Oficial (40.000 KM / 4 Años) • Gran Servicio Mayor PDK & Fluidos",
        descripcionManoObra: "Gran servicio mayor de transmisión y tren motriz",
        chequeos: [
          "Cambio de fluido de transmisión de doble embrague PDK y filtro de caja",
          "Cambio de aceite de autor Mobil 1 0W-40 y todos los filtros",
          "Reemplazo de líquido de frenos y revisión de correa de accesorios",
          "Alineación 3D, rotación/inspección TWI de neumáticos Michelin Pilot Sport"
        ],
        cambiosObligatorios: ["Fluido Caja PDK", "Aceite Motor 0W-40", "Filtro Cabina HEPA", "Líquido Frenos DOT 4 LV"]
      },
      {
        numero: 5,
        km: 50000,
        manoDeObra: "PAGADA",
        tiempoEstHoras: 3.0,
        descripcion: "5ª Revisión Oficial (50.000 KM) • Auditoría Porsche Approved",
        descripcionManoObra: "Revisión de cierre y extensión de garantía Porsche Approved (111 puntos)",
        chequeos: [
          "Inspección certificada de 111 puntos Porsche Approved",
          "Cambio de aceite sintético y filtro",
          "Prueba de compresión, telemetría OBD-II y actualización de módulos PCM"
        ],
        cambiosObligatorios: ["Aceite Mobil 1 0W-40", "Filtro de Aceite"]
      }
    ]
  },

  "MERCEDES-AMG": {
    distribuidor: "INCHCAPE / MERCEDES-BENZ AMG CENTER",
    distribuidorCorto: "Mercedes-AMG",
    mesesGarantia: 60,
    kmGarantia: 50000,
    toleranciaKm: 500,
    toleranciaDias: 30,
    descripcionReglas: "Garantía oficial de 5 años o 50.000 km. Alternancia entre Service A (10.000 km) y Service B (20.000 km) asistida por ASSYST PLUS.",
    reglasDeOro: [
      {
        id: "assyst_plus",
        titulo: "Atender el Asistente ASSYST PLUS en Pantalla MBUX",
        nivel: "critico",
        detalle: "Acudir al taller autorizado dentro de los 500 km posteriores al aviso de Service A o Service B en el cuadro de instrumentos MBUX."
      },
      {
        id: "lubricante_amg",
        titulo: "Lubricante Sintético Norma MB 229.5 / 229.52 (0W-40)",
        nivel: "critico",
        detalle: "Los motores AMG Handcrafted Biturbo requieren estrictamente aceite aprobado bajo especificación MB 229.5/229.52."
      }
    ],
    revisiones: [
      {
        numero: 1,
        km: 10000,
        manoDeObra: "PAGADA",
        tiempoEstHoras: 2.5,
        descripcion: "1ª Revisión (10.000 KM) • Mercedes-AMG Service A",
        descripcionManoObra: "Mantenimiento Service A oficial",
        chequeos: ["Cambio de aceite AMG 0W-40 MB 229.5", "Cambio filtro de aceite", "Diagnóstico XENTRY OBD-II", "Inspección de frenos y TPMS"],
        cambiosObligatorios: ["Aceite AMG 0W-40", "Filtro de Aceite"]
      },
      {
        numero: 2,
        km: 20000,
        manoDeObra: "PAGADA",
        tiempoEstHoras: 3.5,
        descripcion: "2ª Revisión (20.000 KM) • Mercedes-AMG Service B",
        descripcionManoObra: "Mantenimiento mayor Service B",
        chequeos: ["Cambio aceite AMG 0W-40", "Filtro climatizador Thermotronic HEPA", "Cambio líquido de frenos DOT 4+", "Alineación 4MATIC+"],
        cambiosObligatorios: ["Aceite AMG 0W-40", "Filtro Cabina HEPA", "Líquido de Frenos DOT 4+"]
      },
      {
        numero: 3,
        km: 30000,
        manoDeObra: "PAGADA",
        tiempoEstHoras: 2.5,
        descripcion: "3ª Revisión (30.000 KM) • Service A & Admisión Biturbo",
        descripcionManoObra: "Servicio oficial AMG",
        chequeos: ["Cambio aceite y filtro", "Filtros de aire de admisión V8/Inline-6", "Escaneo de módulos ADAS Distronic"],
        cambiosObligatorios: ["Aceite AMG 0W-40", "Filtros Admisión Aire"]
      },
      {
        numero: 4,
        km: 40000,
        manoDeObra: "PAGADA",
        tiempoEstHoras: 4.5,
        descripcion: "4ª Revisión (40.000 KM) • Service B Mayor & Caja AMG SPEEDSHIFT",
        descripcionManoObra: "Servicio mayor de transmisión y bujías",
        chequeos: ["Cambio de bujías Laser Iridium", "Fluido transmisión AMG Speedshift MCT 9G", "Líquido de frenos y diferencial"],
        cambiosObligatorios: ["Bujías AMG", "Fluido Caja 9G-DCT", "Aceite Motor 0W-40"]
      },
      {
        numero: 5,
        km: 50000,
        manoDeObra: "PAGADA",
        tiempoEstHoras: 2.5,
        descripcion: "5ª Revisión (50.000 KM) • Cierre Garantía 5 Años",
        descripcionManoObra: "Inspección integral de fin de garantía",
        chequeos: ["Cambio aceite AMG 0W-40", "Auditoría electrónica XENTRY completa", "Certificación de tren motriz"],
        cambiosObligatorios: ["Aceite AMG 0W-40", "Filtro de Aceite"]
      }
    ]
  },

  BMW: {
    distribuidor: "AUTOGERMANA / BMW M CERTIFIED",
    distribuidorCorto: "Autogermana BMW",
    mesesGarantia: 36,
    kmGarantia: 60000,
    toleranciaKm: 500,
    toleranciaDias: 30,
    descripcionReglas: "Incluye BMW Service Inclusive (5 años / 60.000 km). Mantenimiento guiado por telemetría CBS (Condition Based Service) en pantalla iDrive.",
    reglasDeOro: [
      {
        id: "bmw_twinpower",
        titulo: "Lubricante Oficial BMW TwinPower Turbo LL-01 / LL-04",
        nivel: "critico",
        detalle: "Exigido para motores S58 / B58 TwinPower Turbo y sistemas VANOS."
      }
    ],
    revisiones: [
      {
        numero: 1,
        km: 10000,
        manoDeObra: "INCLUIDA",
        tiempoEstHoras: 2.0,
        descripcion: "1ª Revisión (10.000 KM) • BMW Service Inclusive CBS",
        descripcionManoObra: "Incluida sin costo en BMW Service Inclusive",
        chequeos: ["Cambio aceite BMW TwinPower Turbo 0W-30", "Filtro de aceite", "Microfiltro de cabina", "Diagnóstico ISTA OBD-II"],
        cambiosObligatorios: ["Aceite BMW TwinPower 0W-30", "Filtro Aceite BMW", "Microfiltro Cabina"]
      },
      {
        numero: 2,
        km: 20000,
        manoDeObra: "INCLUIDA",
        tiempoEstHoras: 2.5,
        descripcion: "2ª Revisión (20.000 KM) • Servicio CBS & Frenos M Compound",
        descripcionManoObra: "Incluida en BMW Service Inclusive",
        chequeos: ["Cambio aceite y filtro", "Líquido de frenos BMW DOT 4 LV", "Alineación xDrive y balanceo"],
        cambiosObligatorios: ["Aceite BMW 0W-30", "Líquido Frenos DOT 4 LV"]
      },
      {
        numero: 3,
        km: 30000,
        manoDeObra: "INCLUIDA",
        tiempoEstHoras: 3.0,
        descripcion: "3ª Revisión (30.000 KM) • Bujías & Admisión TwinPower Turbo",
        descripcionManoObra: "Incluida en BMW Service Inclusive",
        chequeos: ["Cambio juego 6 bujías High Power", "Filtro de aire de admisión", "Aceite motor y diferencial M"],
        cambiosObligatorios: ["Bujías BMW M", "Filtro Aire", "Aceite BMW 0W-30"]
      },
      {
        numero: 4,
        km: 40000,
        manoDeObra: "INCLUIDA",
        tiempoEstHoras: 3.5,
        descripcion: "4ª Revisión (40.000 KM) • Chequeo Mayor Vehículo (Vehicle Check)",
        descripcionManoObra: "Incluida en BMW Service Inclusive",
        chequeos: ["Vehicle Check completo", "Cambio aceite y todos los filtros", "Líquido de frenos y suspensión M adaptativa"],
        cambiosObligatorios: ["Aceite BMW 0W-30", "Microfiltro Cabina", "Líquido Frenos"]
      }
    ]
  }
};

// Alias de compatibilidad para cualquier marca automotriz o registro previo
OFFICIAL_WARRANTY_POLICIES.FERRARI = {
  ...OFFICIAL_WARRANTY_POLICIES.PORSCHE,
  distribuidor: "FERRARI OFFICIAL ATELIER",
  distribuidorCorto: "Ferrari Atelier",
  mesesGarantia: 84,
  kmGarantia: 70000,
  descripcionReglas: "Programa Ferrari Genuine Maintenance de 7 años incluido con revisiones cada 10.000 km o 1 año."
};
OFFICIAL_WARRANTY_POLICIES.AUDI = {
  ...OFFICIAL_WARRANTY_POLICIES["MERCEDES-AMG"],
  distribuidor: "PORSCHE COLOMBIA / AUDI SPORT CENTER",
  distribuidorCorto: "Audi Center"
};
OFFICIAL_WARRANTY_POLICIES.MAZDA = {
  ...OFFICIAL_WARRANTY_POLICIES.BMW,
  distribuidor: "MAZDA DE COLOMBIA / CONCESIONARIO SIGNATURE",
  distribuidorCorto: "Mazda Oficial"
};
OFFICIAL_WARRANTY_POLICIES.TOYOTA = {
  ...OFFICIAL_WARRANTY_POLICIES.BMW,
  distribuidor: "AUTOMOTORES TOYOTA / GAZOO RACING",
  distribuidorCorto: "Toyota Oficial",
  mesesGarantia: 60,
  kmGarantia: 120000
};
OFFICIAL_WARRANTY_POLICIES.TVS = OFFICIAL_WARRANTY_POLICIES.PORSCHE;
OFFICIAL_WARRANTY_POLICIES.YAMAHA = OFFICIAL_WARRANTY_POLICIES["MERCEDES-AMG"];
OFFICIAL_WARRANTY_POLICIES.KTM = OFFICIAL_WARRANTY_POLICIES.BMW;
OFFICIAL_WARRANTY_POLICIES.BAJAJ = OFFICIAL_WARRANTY_POLICIES.AUDI;
OFFICIAL_WARRANTY_POLICIES.HONDA = OFFICIAL_WARRANTY_POLICIES.TOYOTA;

export function getOfficialWarrantyPolicy(brand = "PORSCHE") {
  const normalized = String(brand || "").trim().toUpperCase();

  if (OFFICIAL_WARRANTY_POLICIES[normalized]) {
    return OFFICIAL_WARRANTY_POLICIES[normalized];
  }

  for (const [key, policy] of Object.entries(OFFICIAL_WARRANTY_POLICIES)) {
    if (normalized.includes(key)) {
      return policy;
    }
  }

  return {
    ...OFFICIAL_WARRANTY_POLICIES.PORSCHE,
    distribuidor: `${normalized} CONCESIONARIO AUTORIZADO`,
    distribuidorCorto: normalized
  };
}

export function computeWarrantyState(bike, currentOdometer = 0) {
  const brand = bike?.config?.bikeIdentity?.brand || "PORSCHE";
  const defaultPolicy = getOfficialWarrantyPolicy(brand);

  const customGarantia = bike?.hojaDeVida?.garantia || {};
  const isEnabled = customGarantia.enabled !== false;

  const distribuidor = customGarantia.distribuidor || defaultPolicy.distribuidor;
  const distribuidorCorto = customGarantia.distribuidorCorto || defaultPolicy.distribuidorCorto;
  const mesesGarantia = Number(customGarantia.mesesGarantia) || defaultPolicy.mesesGarantia;
  const kmGarantia = Number(customGarantia.kmGarantia) || defaultPolicy.kmGarantia;
  const toleranciaKm = Number(customGarantia.toleranciaKm) || defaultPolicy.toleranciaKm;
  const ritmoKmDia = Number(customGarantia.ritmoKmDia) || 45;

  const revisionesConfig = (Array.isArray(customGarantia.revisiones) && customGarantia.revisiones.length > 0)
    ? customGarantia.revisiones
    : defaultPolicy.revisiones;

  const completedNumbers = new Set(
    Array.isArray(customGarantia.completadas) ? customGarantia.completadas.map(Number) : []
  );

  const totalRevisiones = revisionesConfig.length;
  const completadasCount = completedNumbers.size;

  const nextRev = revisionesConfig.find((r) => !completedNumbers.has(r.numero)) || null;

  let status = "PROGRAMADA";
  let distanciaRestante = 0;
  let diasRestantes = 0;
  let ventanaMin = 0;
  let ventanaMax = 0;
  let fechaEstimada = "";
  let isPeligroVencida = false;
  let isEnVentana = false;

  const isKmExceeded = kmGarantia < 900000 && currentOdometer > kmGarantia;

  if (!isEnabled) {
    status = "DESACTIVADA";
  } else if (!nextRev || completadasCount === totalRevisiones) {
    status = "COMPLETADA";
  } else if (isKmExceeded) {
    status = "VENCIDA_KILOMETRAJE";
  } else {
    ventanaMin = Math.max(0, nextRev.km - toleranciaKm);
    ventanaMax = nextRev.km + toleranciaKm;
    distanciaRestante = Math.max(0, nextRev.km - currentOdometer);

    diasRestantes = Math.max(0, Math.ceil(distanciaRestante / ritmoKmDia));
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + diasRestantes);
    fechaEstimada = targetDate.toLocaleDateString('es-ES', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });

    if (currentOdometer > ventanaMax) {
      status = "EN_RIESGO";
      isPeligroVencida = true;
    } else if (currentOdometer >= ventanaMin && currentOdometer <= ventanaMax) {
      status = "EN_VENTANA";
      isEnVentana = true;
    } else if (distanciaRestante <= 600) {
      status = "URGENTE";
    } else {
      status = "PROGRAMADA";
    }
  }

  return {
    isEnabled,
    distribuidor,
    distribuidorCorto,
    mesesGarantia,
    kmGarantia,
    toleranciaKm,
    ritmoKmDia,
    reglasDeOro: defaultPolicy.reglasDeOro,
    descripcionReglas: defaultPolicy.descripcionReglas,
    revisiones: revisionesConfig,
    completedNumbers: Array.from(completedNumbers),
    completadasCount,
    totalRevisiones,
    nextRev,
    status,
    isPeligroVencida,
    isEnVentana,
    distanciaRestante,
    diasRestantes,
    fechaEstimada,
    ventanaMin,
    ventanaMax
  };
}
