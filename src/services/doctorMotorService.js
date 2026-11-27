/**
 * AutoDash AI — Doctor Auto IA (Diagnóstico Mecánico y Electrónico Automotriz por Síntoma o Sonido)
 * Ayuda al conductor a saber exactamente qué tiene su automóvil, si es seguro seguir conduciendo
 * y cuánto es el precio justo de reparación para evitar cobros abusivos en talleres.
 */

export const QUICK_MECHANICAL_SYMPTOMS = [
  {
    id: 'valve_chain_rattle',
    badge: '🔊 Ruido Metálico en Motor / Arranque en Frío',
    symptom: 'Al encender el auto en frío suena un traqueteo metálico durante 3 a 5 segundos o un tic-tic en la parte alta del motor.',
    diagnosisTitle: 'Actuador de Árbol de Levas Variable (VANOS / VVT), Tensor Hidráulico o Bomba de Alta Presión GDI',
    urgencyLevel: 'PRECAUCIÓN MEDIA — ESCANEAR PRESIÓN DE ACEITE',
    canRideSafely: 'PUEDES CONDUCIR A BAJAS RPM HASTA EL CENTRO DE SERVICIO',
    estimatedCostCOP: '$280.000 – $950.000 COP (US$70 – US$240)',
    technicalExplanation: 'En motores de inyección directa turboalimentados (Porsche, Mercedes-AMG, BMW TwinPower, Audi TFSI, Mazda Skyactiv), un tic-tic constante al ralentí suele ser normal de la bomba de alta presión GDI. Sin embargo, si suena un traqueteo fuerte en los primeros segundos en frío, indica descarga del tensor hidráulico o solenoide VANOS/VVT sucio.',
    mechanicChecklist: [
      'Pide escanear por OBD-II códigos de correlación de árbol de levas (P0011 / P0016) antes de desarmar.',
      'Verifica que el aceite sea 100% Sintético en la viscosidad exacta (0W-40 / 5W-30) y que el filtro sea OEM con válvula anti-retorno.',
      'Revisa la limpieza de los solenoides VVT/VANOS antes de autorizar cambio de distribución.'
    ]
  },
  {
    id: 'hard_gearbox',
    badge: '⚙️ Tirón o Golpe en Caja Automática (PDK / DSG / ZF)',
    symptom: 'Siento un golpe o tirón brusco al pasar de P a D/R o cuando la caja automática reduce de 3ª a 2ª en tráfico lento.',
    diagnosisTitle: 'Adaptación Mecatrónica Descalibrada, Fluido ATF/DCTF Degradado o Soporte Hidráulico de Caja',
    urgencyLevel: 'PRECAUCIÓN MEDIA — CALIBRACIÓN O MANTENIMIENTO DE CAJA',
    canRideSafely: 'SÍ PUEDES CONDUCIR EN MODO COMFORT • EVITA LAUNCH CONTROL',
    estimatedCostCOP: '$450.000 – $1.350.000 COP (US$110 – US$340)',
    technicalExplanation: 'En cajas de doble embrague (PDK, DSG, S-Tronic, AMG Speedshift) o convertidor ZF 8HP, el 80% de los tirones a baja velocidad NO significan daño interno de la caja: se corrigen realizando el cambio de fluido ATF/DCTF con filtro y ejecutando la "Adaptación Básica de Embragues" por escáner OBD-II, o reemplazando el soporte hidráulico inferior (Dogbone).',
    mechanicChecklist: [
      'Solicita primero una recalibración de puntos de acople (Kiss-Point Adaptation) con escáner oficial y revisa la temperatura del fluido.',
      'Inspecciona los soportes hidráulicos de autor y caja (si están vencidos, golpean al pasar de D a R).',
      'Si el auto superó los 50.000 km sin cambio de aceite de transmisión, programa el servicio con fluido homologado.'
    ]
  },
  {
    id: 'power_loss_jerk',
    badge: '⚡ Pérdida de Turbo Boost / Testigo Check Engine',
    symptom: 'El auto pierde empuje al pisar el acelerador a fondo, tironea bajo carga de turbo o se encendió el testigo Check Engine / Drivetrain.',
    diagnosisTitle: 'Falla en Bobina de Encendido / Bujía Iridium (Misfire), Válvula Diverter del Turbo o Fuga en Boost Pipe',
    urgencyLevel: 'PRECAUCIÓN ALTA — MODO PROTECCIÓN (LIMP MODE)',
    canRideSafely: 'CONDUCE SUAVE SIN EXIGIR EL TURBO HASTA ESCANEAR OBD-II',
    estimatedCostCOP: '$240.000 – $780.000 COP (US$60 – US$195)',
    technicalExplanation: 'Cuando un motor turbo tironea exactamente al subir la presión de boost (2.500 – 4.500 RPM), casi siempre se trata de pérdida de chispa bajo presión en una bobina/bujía (códigos P0301–P0306) o una fuga de presión en la válvula Diverter (DV) / manguera del intercooler (código P0299 Underboost).',
    mechanicChecklist: [
      'Conecta tu escáner OBD-II de 16 pines en la pestaña "Enlace Tablero & OBD-II" para leer el código DTC exacto.',
      'Si marca Misfire en un cilindro específico (ej. P0303), intercambia la bobina del cilindro 3 al 1 para confirmar si es solo la bobina antes de cambiar inyectores.',
      'Revisa las abrazaderas de carga del intercooler (Charge Pipe) y la válvula Diverter.'
    ]
  },
  {
    id: 'brake_squeal_vibe',
    badge: '🛑 Vibración en el Volante al Frenar o Chillido',
    symptom: 'Cuando freno a más de 80 km/h siento que el volante vibra, o los frenos emiten un chillido agudo al llegar a un semáforo.',
    diagnosisTitle: 'Alabeo Térmico en Discos Delanteros o Pastillas Cerámicas / Brembo en Límite de Sensor',
    urgencyLevel: 'PRIORIDAD ALTA — SEGURIDAD ACTIVA DE FRENADO',
    canRideSafely: 'EVITA FRENADAS BRUSCAS A ALTA VELOCIDAD HASTA REVISAR DISCOS',
    estimatedCostCOP: '$380.000 – $1.200.000 COP (US$95 – US$300)',
    technicalExplanation: 'En frenos de alto desempeño (Brembo / M Compound / AMG), un ligero chillido en frío es normal por el compuesto cerámico/metálico. Pero si el volante tiembla al tocar el pedal de freno, los discos delanteros sufrieron alabeo térmico (por lavar el auto con los discos calientes) o los bujes de tijera delantera tienen holgura.',
    mechanicChecklist: [
      'Pide medir la desviación lateral del disco con comparador de carátula y el espesor mínimo en milímetros grabado en el borde del rotor.',
      'Revisa el cable del sensor electrónico de desgaste de pastillas y purga con líquido DOT 4 LV.',
      'Nunca permitas lavar los rines con agua fría inmediatamente después de conducción deportiva.'
    ]
  },
  {
    id: 'chain_clunk',
    badge: '🛞 Vibración a +100 km/h o Golpe en Suspensión',
    symptom: 'El volante vibra entre 100 y 130 km/h en autopista, el auto hala hacia un lado o suena un golpe seco al pasar por un bache.',
    diagnosisTitle: 'Desbalanceo Dinámico de Rines / Alineación 3D, Bieleta de Barra Estabilizadora o Rin Sentido',
    urgencyLevel: 'PRECAUCIÓN MEDIA — SERVITECA 3D & SUSPENSIÓN',
    canRideSafely: 'VERIFICA PRESIÓN TPMS (36 PSI) Y AGENDA ALINEACIÓN Y BALANCEO',
    estimatedCostCOP: '$140.000 – $480.000 COP (US$35 – US$120)',
    technicalExplanation: 'En autos con rines de 18" a 21" y neumáticos de perfil bajo, una vibración que aparece exactamente entre 100 y 120 km/h es señal clásica de pérdida de una pesa de balanceo o leve deformación interna del rin. Si suena un golpe seco en baches a baja velocidad, suele ser una bieleta de barra estabilizadora o soporte superior (Strut Mount).',
    mechanicChecklist: [
      'Realiza balanceo computarizado Road-Force en las 4 ruedas y alineación láser 3D.',
      'Pide revisar que ningún rin tenga golpe en la pestaña interna y verifica las bieletas de barra estabilizadora.'
    ]
  },
  {
    id: 'weak_battery_start',
    badge: '🔋 Falla Start-Stop / Alerta Batería 12V AGM',
    symptom: 'Aparece aviso de "Batería 12V Baja — Encender Motor", el sistema Start-Stop dejó de activarse o se reinician ajustes de cabina.',
    diagnosisTitle: 'Batería Principal AGM / Auxiliar Con Capacidad Degradada (<12.2V) o Falta de Registro IBS',
    urgencyLevel: 'PRECAUCIÓN MEDIA — RIESGO DE DESVARE ELECTRÓNICO',
    canRideSafely: 'MIDE VOLTAJE DE ALTERNADOR (14.2V – 14.8V EN MARCHA)',
    estimatedCostCOP: '$750.000 – $1.250.000 COP si requiere Batería AGM nueva codificada',
    technicalExplanation: 'Los automóviles modernos de lujo cuentan con sensor inteligente de batería (IBS) en el borne negativo. Cuando la salud de la batería AGM cae del 70%, el auto desactiva primero el Start-Stop y el modo planeo para priorizar el arranque. Al instalar una batería AGM nueva es obligatorio codificarla por OBD-II.',
    mechanicChecklist: [
      'Mide el estado de salud (SOH %) y voltaje con probador de conductancia AGM (12.6V en reposo / 14.4V cargando).',
      'Si cambias la batería, exige que sean especificaciones AGM (nunca plomo-ácido convencional) y que registren el cambio en la ECU por OBD-II.'
    ]
  }
];

export async function diagnoseMechanicalSymptomAI({
  symptom,
  bikeBrand = 'PORSCHE',
  bikeModel = '911 GT3 RS (992)',
  odometer = 10000,
  lang = 'es'
}) {
  const isEn = lang === 'en';
  const prompt = isEn
    ? `You are "Doctor Auto AI", the master luxury automotive engineer of AutoDash AI specialized in ${bikeBrand} ${bikeModel} (${odometer} km).
Analyze the driver's mechanical or electronic symptom: "${symptom}".
Return STRICTLY pure JSON without markdown blocks using this schema:
{
  "diagnosisTitle": "Exact likely automotive cause",
  "urgencyLevel": "LOW RISK / MEDIUM CAUTION / CRITICAL — REQUEST FLATBED TOW",
  "canRideSafely": "Clear instruction on whether it is safe to drive to the service center",
  "estimatedCostCOP": "Fair repair price range in USD and COP so the owner doesn't get overcharged",
  "technicalExplanation": "Clear automotive engineering explanation for ${bikeBrand} ${bikeModel}",
  "mechanicChecklist": [
    "Step 1 to tell the service advisor or check via OBD-II first",
    "Step 2 to avoid unnecessary part replacements",
    "Step 3 preventive tip"
  ]
}`
    : `Eres "Doctor Auto IA", el director técnico e ingeniero automotriz experto de AutoDash AI especializado en el automóvil ${bikeBrand} ${bikeModel} (${odometer} km).
Analiza el síntoma, ruido o testigo que describe el conductor: "${symptom}".
Responde ESTRICTAMENTE en JSON puro sin bloques markdown con esta estructura:
{
  "diagnosisTitle": "Causa mecánica o electrónica automotriz más probable",
  "urgencyLevel": "RIESGO BAJO / PRECAUCIÓN MEDIA / CRÍTICO — SOLICITAR GRÚA CAMA BAJA",
  "canRideSafely": "Indica claramente si puede seguir conduciendo hasta el taller o si debe pedir grúa de plataforma",
  "estimatedCostCOP": "Rango de precio justo estimado en COP y USD para que no le cobren de más en el taller",
  "technicalExplanation": "Explicación técnica clara adaptada al automóvil ${bikeBrand} ${bikeModel}",
  "mechanicChecklist": [
    "Paso 1 exacto para pedir en el centro de servicio o verificar por OBD-II",
    "Paso 2 para evitar que cambien piezas costosas sin necesidad",
    "Paso 3 de cuidado preventivo automotriz"
  ]
}`;

  try {
    const gatewayRes = await fetch('/api/ai-gateway', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, temperature: 0.2 })
    });
    if (gatewayRes.ok) {
      const payload = await gatewayRes.json();
      if (payload?.data?.diagnosisTitle) {
        return {
          ...payload.data,
          source: `Doctor Auto IA • Diagnóstico Automotriz (${bikeBrand} ${bikeModel})`
        };
      }
    }
  } catch {}

  const sLower = String(symptom).toLowerCase();
  if (sLower.includes('frio') || sLower.includes('frío') || sLower.includes('vanos') || sLower.includes('vvt') || sLower.includes('tic')) {
    return { ...QUICK_MECHANICAL_SYMPTOMS[0], source: `Base Ingeniería Automotriz (${bikeBrand} ${bikeModel})` };
  }
  if (sLower.includes('caja') || sLower.includes('pdk') || sLower.includes('dsg') || sLower.includes('cambio') || sLower.includes('tiron')) {
    return { ...QUICK_MECHANICAL_SYMPTOMS[1], source: `Base Ingeniería Automotriz (${bikeBrand} ${bikeModel})` };
  }
  if (sLower.includes('turbo') || sLower.includes('check') || sLower.includes('fuerza') || sLower.includes('bobina') || sLower.includes('bujia')) {
    return { ...QUICK_MECHANICAL_SYMPTOMS[2], source: `Base Ingeniería Automotriz (${bikeBrand} ${bikeModel})` };
  }
  if (sLower.includes('freno') || sLower.includes('chilla') || sLower.includes('pastilla') || sLower.includes('disco')) {
    return { ...QUICK_MECHANICAL_SYMPTOMS[3], source: `Base Ingeniería Automotriz (${bikeBrand} ${bikeModel})` };
  }
  if (sLower.includes('volante') || sLower.includes('vibra') || sLower.includes('alinea') || sLower.includes('tpms') || sLower.includes('suspensi')) {
    return { ...QUICK_MECHANICAL_SYMPTOMS[4], source: `Base Ingeniería Automotriz (${bikeBrand} ${bikeModel})` };
  }
  if (sLower.includes('bateria') || sLower.includes('batería') || sLower.includes('start') || sLower.includes('agm')) {
    return { ...QUICK_MECHANICAL_SYMPTOMS[5], source: `Base Ingeniería Automotriz (${bikeBrand} ${bikeModel})` };
  }

  return {
    diagnosisTitle: `Inspección OBD-II y Tren Motriz Sugerida para ${bikeBrand} ${bikeModel}`,
    urgencyLevel: 'PRECAUCIÓN MEDIA — ESCANEAR MÓDULOS OBD-II',
    canRideSafely: 'SI NO HAY TESTIGO ROJO DE PRESIÓN DE ACEITE NI TEMPERATURA, CONDUCE EN MODO COMFORT AL TALLER',
    estimatedCostCOP: '$180.000 – $450.000 COP (Escaneo especializado y diagnóstico)',
    technicalExplanation: `Para el síntoma reportado ("${symptom}") en tu ${bikeBrand} ${bikeModel} con ${odometer.toLocaleString()} km, se recomienda realizar lectura de códigos DTC en el puerto OBD-II de 16 pines y verificar presión de fluidos antes de autorizar el reemplazo de componentes mayores.`,
    mechanicChecklist: [
      'Conecta el escáner OBD-II para leer códigos almacenados en motor (ECU), transmisión (TCU) y chasis (ABS/ESP).',
      'Verifica el nivel de aceite sintético y líquido refrigerante con el motor en reposo.',
      'Solicita presupuesto desglosado y conserva las piezas reemplazadas en tu bitácora de AutoDash AI.'
    ],
    source: `Motor Experto Doctor Auto IA (${bikeBrand})`
  };
}
