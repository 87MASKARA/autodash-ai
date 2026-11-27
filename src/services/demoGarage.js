// Catálogo Demo Oficial AutoDash AI con 6 Automóviles de Lujo & Gran Turismo (Datos 100% Demo)
export const DEMO_GARAGE = [
  {
    id: "bike_tvs_apache160",
    odometer: 8420,
    hojaDeVida: {
      documentos: {
        placa: "GT3-992",
        modelo: 2025,
        linea: "PORSCHE 911 GT3 RS (992) WEISSACH PACKAGE PDK",
        vinChasis: "WP0AF2A99RS274911",
        engineNumber: "MA275-GT3RS-9000",
        codigoFasecolda: "07214092",
        valorFasecolda: 1450000000,
        propietario: "Piloto Ejecutivo VIP",
        ciudadCirculacion: "MEDELLIN",
        soatVencimiento: "2027-04-15",
        tecnoVencimiento: "2027-05-20",
        seguroNombre: "SURA Autos Elit / Porsche Insure",
        seguroPoliza: "900091199200",
        seguroVencimiento: "2027-10-10",
        seguroCuotas: "Póliza Anual Todo Riesgo VIP",
        seguroCoberturas: "RCE $4.000M ($0 Deducible) | Reemplazo Vehículo 0 KM | Conductor Elegido & Grúa Cama Baja VIP",
        impuestoVencimiento: "2027-06-30"
      },
      garantia: {
        enabled: true,
        distribuidor: "AUTOELITE PORSCHE CENTER",
        distribuidorCorto: "Porsche Center",
        mesesGarantia: 48,
        kmGarantia: 50000,
        toleranciaKm: 500,
        ritmoKmDia: 45,
        completadas: [1]
      },
      servicios: [
        {
          id: "srv_porsche_demo_1",
          fecha: "2026-08-14",
          km: 5000,
          servicio: "1ª Revisión Oficial Porsche Approved (5.000 KM)",
          marcaRepuesto: "Mobil 1 ESP X3 0W-40 Porsche C40 (8.3L)",
          taller: "Porsche Center Autorizado",
          costo: 0,
          notas: "Mantenimiento incluido Porsche Care. Diagnóstico PIWIS 4, torque de tuerca central Center-Lock y telemetría PDK.",
          esRevisionGarantia: true,
          revisionNumero: 1
        }
      ]
    },
    config: {
      bikeIdentity: {
        brand: "PORSCHE",
        model: "911 GT3 RS WEISSACH (992)",
        shortModel: "911 GT3 RS",
        year: 2025,
        colorHex: "#00D4FF",
        accentGlow: "rgba(0, 212, 255, 0.45)",
        category: "supercar"
      },
      telemetrySpecs: {
        maxRpm: 9500,
        redlineRpm: 9000,
        speedUnit: "km/h",
        engineCc: 3996,
        tankCapacityLiters: 64
      },
      maintenanceSchedule: [
        { id: "oil", service: "Aceite Mobil 1 ESP X3 0W-40 (Porsche C40)", intervalKm: 10000 },
        { id: "chain", service: "Alineación 3D & Balanceo Michelin Cup 2", intervalKm: 10000 },
        { id: "brakes", service: "Pastillas Brembo PCCB Carbon-Ceramic", intervalKm: 25000 },
        { id: "spark", service: "Bujías Bosch Laser Platinum x6", intervalKm: 30000 },
        { id: "air_filter", service: "Filtro Admisión BMC High-Flow & Cabina HEPA", intervalKm: 15000 }
      ]
    }
  },
  {
    id: "bike_yamaha_mt09",
    odometer: 14250,
    hojaDeVida: {
      documentos: {
        placa: "AMG-63S",
        vinChasis: "W1K2903891A884210",
        engineNumber: "M177-AMG-V8BITURBO",
        soatVencimiento: "2027-03-15",
        tecnoVencimiento: "2027-04-20",
        seguroNombre: "Allianz Luxury Auto Shield",
        seguroPoliza: "900000000002",
        seguroVencimiento: "2027-09-10",
        impuestoVencimiento: "2027-06-30"
      },
      servicios: [
        {
          id: "srv_amg_1",
          fecha: "2026-10-15",
          km: 10000,
          servicio: "Service A Mercedes-AMG Performance",
          marcaRepuesto: "Mercedes-AMG 0W-40 MB 229.5 (9.0L)",
          taller: "Mercedes-Benz AMG Performance Center",
          costo: 1850000,
          notas: "Cambio de aceite V8 Biturbo, filtro HEPA climatizador Thermotronic y escaneo XENTRY OBD-II"
        }
      ]
    },
    config: {
      bikeIdentity: {
        brand: "MERCEDES-AMG",
        model: "GT 63 S E PERFORMANCE",
        shortModel: "AMG GT 63 S",
        year: 2025,
        colorHex: "#F59E0B",
        accentGlow: "rgba(245, 158, 11, 0.45)",
        category: "luxury gt"
      },
      telemetrySpecs: {
        maxRpm: 7500,
        redlineRpm: 7000,
        speedUnit: "km/h",
        engineCc: 3982,
        tankCapacityLiters: 73
      },
      maintenanceSchedule: [
        { id: "oil", service: "Aceite AMG High Performance 0W-40 & Filtro", intervalKm: 10000 },
        { id: "chain", service: "Alineación 4MATIC+ & Balanceo 21\"", intervalKm: 10000 },
        { id: "brakes", service: "Pastillas AMG Ceramic & Líquido DOT 4+", intervalKm: 25000 },
        { id: "spark", service: "Juego 8 Bujías AMG Laser Iridium", intervalKm: 40000 }
      ]
    }
  },
  {
    id: "bike_ktm_duke390",
    odometer: 11400,
    hojaDeVida: {
      documentos: {
        placa: "BMW-M4C",
        vinChasis: "WBS43AZ08R8M45109",
        engineNumber: "S58B30T0-MPOWER",
        soatVencimiento: "2027-05-10",
        tecnoVencimiento: "2027-06-15",
        seguroNombre: "Seguro Todo Riesgo Allianz M",
        seguroPoliza: "884210921",
        seguroVencimiento: "2027-08-20",
        impuestoVencimiento: "2027-06-30"
      },
      servicios: [
        {
          id: "srv_bmwm4_1",
          fecha: "2026-09-20",
          km: 10000,
          servicio: "BMW M Condition Based Service (CBS)",
          marcaRepuesto: "BMW TwinPower Turbo LL-01 FE 0W-30",
          taller: "Autogermana BMW M Certified",
          costo: 1420000,
          notas: "Servicio de aceite motor S58, diferencial activo M y revisión de frenos M Compound"
        }
      ]
    },
    config: {
      bikeIdentity: {
        brand: "BMW",
        model: "M4 COMPETITION xDRIVE (G82)",
        shortModel: "M4 COMP",
        year: 2025,
        colorHex: "#3B82F6",
        accentGlow: "rgba(59, 130, 246, 0.45)",
        category: "coupé m"
      },
      telemetrySpecs: {
        maxRpm: 7600,
        redlineRpm: 7200,
        speedUnit: "km/h",
        engineCc: 2993,
        tankCapacityLiters: 59
      },
      maintenanceSchedule: [
        { id: "oil", service: "BMW TwinPower Turbo 0W-30 & Filtro", intervalKm: 10000 },
        { id: "chain", service: "Alineación xDrive & Rotación Pilot Sport 4S", intervalKm: 10000 },
        { id: "valves", service: "Fluido Diferencial M & Caja M Steptronic", intervalKm: 45000 }
      ]
    }
  },
  {
    id: "bike_kawasaki_zx6r",
    odometer: 5200,
    hojaDeVida: {
      documentos: {
        placa: "FER-296",
        vinChasis: "ZFF95NLA0R0296830",
        engineNumber: "F163BC-V6HYBRID",
        soatVencimiento: "2027-04-12",
        tecnoVencimiento: "2027-05-18",
        seguroNombre: "Mapfre Exotic & Supercar VIP",
        seguroPoliza: "554433221",
        seguroVencimiento: "2027-07-15",
        impuestoVencimiento: "2027-06-30"
      },
      servicios: [
        {
          id: "srv_ferrari_1",
          fecha: "2026-09-01",
          km: 5000,
          servicio: "Programa Ferrari Genuine Maintenance 7 Años",
          marcaRepuesto: "Shell Helix Ultra Racing 0W-30 Ferrari",
          taller: "Ferrari Official Atelier",
          costo: 0,
          notas: "Inspección de telemetría híbrida MGU-K, batería de alto voltaje y frenos CCM Brembo"
        }
      ]
    },
    config: {
      bikeIdentity: {
        brand: "FERRARI",
        model: "296 GTB ASSETTO FIORANO",
        shortModel: "296 GTB",
        year: 2025,
        colorHex: "#EF4444",
        accentGlow: "rgba(239, 68, 68, 0.45)",
        category: "supercar"
      },
      telemetrySpecs: {
        maxRpm: 8800,
        redlineRpm: 8500,
        speedUnit: "km/h",
        engineCc: 2992,
        tankCapacityLiters: 65
      },
      maintenanceSchedule: [
        { id: "oil", service: "Shell Helix Ultra Scuderia 0W-30 & Filtro", intervalKm: 10000 },
        { id: "chain", service: "Alineación Track & Presión TPMS Pirelli P Zero", intervalKm: 8000 },
        { id: "brakes", service: "Pastillas Brembo Carbon-Ceramic CCM", intervalKm: 25000 }
      ]
    }
  },
  {
    id: "bike_ducati_panigale",
    odometer: 9800,
    hojaDeVida: {
      documentos: {
        placa: "RS3-TFSI",
        vinChasis: "WUABWGFF7R1900400",
        engineNumber: "DNWA-5CYL-TFSI",
        soatVencimiento: "2027-08-10",
        tecnoVencimiento: "2027-09-01",
        seguroNombre: "Seguro Todo Riesgo SURA Élite",
        seguroPoliza: "9900112233",
        seguroVencimiento: "2027-11-20",
        impuestoVencimiento: "2027-06-30"
      },
      servicios: [
        {
          id: "srv_audi_1",
          fecha: "2026-08-15",
          km: 8000,
          servicio: "Servicio Audi Sport 5-Cilindros TFSI",
          marcaRepuesto: "Castrol EDGE Professional LongLife 0W-30",
          taller: "Audi Sport Center Oficial",
          costo: 1180000,
          notas: "Revisión sistema RS Torque Splitter, cambio de aceite y filtro de polen climatizador"
        }
      ]
    },
    config: {
      bikeIdentity: {
        brand: "AUDI",
        model: "RS3 SPORTBACK PERFORMANCE (8Y)",
        shortModel: "AUDI RS3",
        year: 2025,
        colorHex: "#10B981",
        accentGlow: "rgba(16, 185, 129, 0.45)",
        category: "sportback"
      },
      telemetrySpecs: {
        maxRpm: 7200,
        redlineRpm: 7000,
        speedUnit: "km/h",
        engineCc: 2480,
        tankCapacityLiters: 55
      },
      maintenanceSchedule: [
        { id: "oil", service: "Castrol EDGE Audi Sport 0W-30 & Filtro", intervalKm: 10000 },
        { id: "chain", service: "Alineación Quattro & Balanceo 19\"", intervalKm: 10000 },
        { id: "brakes", service: "Pastillas RS Steel / Ceramic Delanteras", intervalKm: 22000 }
      ]
    }
  },
  {
    id: "bike_bmw_s1000rr",
    odometer: 15300,
    hojaDeVida: {
      documentos: {
        placa: "MZD-3TB",
        vinChasis: "JM1BPBMM0R1654321",
        engineNumber: "PY-VPTS-SKYACTIV-T",
        soatVencimiento: "2027-07-18",
        tecnoVencimiento: "2027-08-05",
        seguroNombre: "Seguro Todo Riesgo Bolívar Premium",
        seguroPoliza: "771122990",
        seguroVencimiento: "2027-10-12",
        impuestoVencimiento: "2027-06-30"
      },
      servicios: [
        {
          id: "srv_mazda_1",
          fecha: "2026-09-28",
          km: 15000,
          servicio: "Mantenimiento Mazda Skyactiv-G 2.5 Turbo AWD",
          marcaRepuesto: "Mazda Supra-X 5W-30 Full Synthetic",
          taller: "Concesionario Mazda Signature",
          costo: 740000,
          notas: "Cambio de aceite sintético Turbo, rotación i-Activ AWD y calibración de radar i-Activsense"
        }
      ]
    },
    config: {
      bikeIdentity: {
        brand: "MAZDA",
        model: "MAZDA 3 TURBO SIGNATURE AWD",
        shortModel: "MAZDA 3 TURBO",
        year: 2025,
        colorHex: "#06B6D4",
        accentGlow: "rgba(6, 182, 212, 0.45)",
        category: "sedan luxury"
      },
      telemetrySpecs: {
        maxRpm: 6500,
        redlineRpm: 6000,
        speedUnit: "km/h",
        engineCc: 2488,
        tankCapacityLiters: 51
      },
      maintenanceSchedule: [
        { id: "oil", service: "Aceite Mazda Supra-X 5W-30 Turbo & Filtro", intervalKm: 8000 },
        { id: "chain", service: "Alineación i-Activ AWD & Balanceo", intervalKm: 10000 },
        { id: "brakes", service: "Pastillas de Freno Cerámicas Delanteras", intervalKm: 25000 }
      ]
    }
  }
];

export const DEMO_DEFAULT_APACHE = DEMO_GARAGE[0];
export const ANDERSON_OFFICIAL_APACHE = DEMO_GARAGE[0];
export const DEMO_PREVIEW_IDS = [
  "bike_yamaha_mt09", 
  "bike_ktm_duke390", 
  "bike_kawasaki_zx6r", 
  "bike_ducati_panigale", 
  "bike_bmw_s1000rr"
];
