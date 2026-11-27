/**
 * Catálogo Mundial de Automóviles de Lujo, Deportivos & Gran Turismo (2024 - 2026)
 * Agrupados por Marca y Segmento de Motorización:
 * - Baja: Executive & Compact Turbo (1.4L - 2.0L)
 * - Media: Grand Tourer & Sport Performance (2.5L - 3.0L Turbo)
 * - Alta: Supercar, V8 Biturbo & Hybrid Flagships (3.8L - 6.2L+)
 */

export const MOTO_CATALOG = {
  Porsche: {
    origin: "Alemania",
    colors: [
      { name: "Ice Cyan Weissach", hex: "#00D4FF" },
      { name: "Champagne Gold Metallic", hex: "#F59E0B" },
      { name: "Guards Red (Stuttgart)", hex: "#EF4444" },
      { name: "GT Silver Metallic", hex: "#94A3B8" }
    ],
    cilindradas: {
      baja: [
        { model: "718 Cayman Style Edition (2.0T)", cc: 1988, maxRpm: 7500, redlineRpm: 7200, category: "coupé", tankL: 54 },
        { model: "Macan T AWD", cc: 1984, maxRpm: 6800, redlineRpm: 6500, category: "suv luxury", tankL: 65 }
      ],
      media: [
        { model: "911 Carrera GTS T-Hybrid (992.2)", cc: 3591, maxRpm: 7800, redlineRpm: 7500, category: "supercar", tankL: 64 },
        { model: "Cayenne Coupé E-Hybrid", cc: 2995, maxRpm: 6800, redlineRpm: 6500, category: "suv luxury", tankL: 75 },
        { model: "Panamera 4 E-Hybrid Executive", cc: 2894, maxRpm: 6800, redlineRpm: 6500, category: "luxury gt", tankL: 80 }
      ],
      alta: [
        { model: "911 GT3 RS Weissach (992)", cc: 3996, maxRpm: 9500, redlineRpm: 9000, category: "supercar", tankL: 64 },
        { model: "911 Turbo S Cabriolet", cc: 3745, maxRpm: 7500, redlineRpm: 7200, category: "supercar", tankL: 67 },
        { model: "718 Cayman GT4 RS", cc: 3996, maxRpm: 9500, redlineRpm: 9000, category: "supercar", tankL: 64 }
      ]
    }
  },

  "Mercedes-AMG": {
    origin: "Alemania",
    colors: [
      { name: "MANUFAKTUR Sun Yellow / Gold", hex: "#F59E0B" },
      { name: "Hyper Blue Magno", hex: "#00D4FF" },
      { name: "Obsidian Black Metallic", hex: "#1E293B" },
      { name: "Patagonia Red Bright", hex: "#EF4444" }
    ],
    cilindradas: {
      baja: [
        { model: "AMG A 35 4MATIC Sedan", cc: 1991, maxRpm: 7000, redlineRpm: 6500, category: "sedan luxury", tankL: 51 },
        { model: "AMG A 45 S 4MATIC+ (421 HP)", cc: 1991, maxRpm: 7200, redlineRpm: 6750, category: "sportback", tankL: 51 }
      ],
      media: [
        { model: "AMG C 63 S E Performance", cc: 1991, maxRpm: 7200, redlineRpm: 6750, category: "sedan luxury", tankL: 60 },
        { model: "AMG CLE 53 4MATIC+ Coupé", cc: 2999, maxRpm: 7000, redlineRpm: 6500, category: "coupé", tankL: 66 },
        { model: "AMG GLC 43 4MATIC Coupé", cc: 1991, maxRpm: 7000, redlineRpm: 6500, category: "suv luxury", tankL: 62 }
      ],
      alta: [
        { model: "AMG GT 63 S E Performance", cc: 3982, maxRpm: 7500, redlineRpm: 7000, category: "luxury gt", tankL: 73 },
        { model: "AMG G 63 Grand Edition (V8 Biturbo)", cc: 3982, maxRpm: 7000, redlineRpm: 6500, category: "suv luxury", tankL: 100 },
        { model: "Mercedes-Maybach S 680 V12", cc: 5980, maxRpm: 6500, redlineRpm: 6000, category: "luxury gt", tankL: 76 }
      ]
    }
  },

  BMW: {
    origin: "Alemania",
    colors: [
      { name: "Marina Bay Blue Metallic", hex: "#3B82F6" },
      { name: "Isle of Man Green", hex: "#10B981" },
      { name: "Sao Paulo Yellow", hex: "#EAB308" },
      { name: "Toronto Red Metallic", hex: "#EF4444" }
    ],
    cilindradas: {
      baja: [
        { model: "330i M Sport (G20 LCI)", cc: 1998, maxRpm: 7000, redlineRpm: 6500, category: "sedan luxury", tankL: 59 },
        { model: "M135 xDrive (F70 2025)", cc: 1998, maxRpm: 7000, redlineRpm: 6500, category: "sportback", tankL: 50 }
      ],
      media: [
        { model: "M2 Coupé (G87 480 HP)", cc: 2993, maxRpm: 7500, redlineRpm: 7200, category: "coupé m", tankL: 52 },
        { model: "M340i xDrive (B58 Inline-6)", cc: 2998, maxRpm: 7200, redlineRpm: 6800, category: "sedan luxury", tankL: 59 },
        { model: "X5 M60i xDrive V8", cc: 4395, maxRpm: 7000, redlineRpm: 6500, category: "suv luxury", tankL: 83 }
      ],
      alta: [
        { model: "M4 Competition xDrive (G82)", cc: 2993, maxRpm: 7600, redlineRpm: 7200, category: "coupé m", tankL: 59 },
        { model: "M3 CS Touring", cc: 2993, maxRpm: 7600, redlineRpm: 7200, category: "sedan luxury", tankL: 59 },
        { model: "M5 Sedan Plug-in Hybrid (G90 727 HP)", cc: 4395, maxRpm: 7500, redlineRpm: 7000, category: "luxury gt", tankL: 60 }
      ]
    }
  },

  Ferrari: {
    origin: "Italia",
    colors: [
      { name: "Rosso Corsa Scuderia", hex: "#EF4444" },
      { name: "Giallo Modena", hex: "#FACC15" },
      { name: "Blu Corsa Metallic", hex: "#00D4FF" },
      { name: "Grigio Titanio", hex: "#94A3B8" }
    ],
    cilindradas: {
      baja: [],
      media: [
        { model: "Roma Spider V8 Twin-Turbo", cc: 3855, maxRpm: 8000, redlineRpm: 7500, category: "luxury gt", tankL: 80 }
      ],
      alta: [
        { model: "296 GTB Assetto Fiorano", cc: 2992, maxRpm: 8800, redlineRpm: 8500, category: "supercar", tankL: 65 },
        { model: "SF90 XX Stradale (1030 HP)", cc: 3990, maxRpm: 8500, redlineRpm: 8000, category: "supercar", tankL: 68 },
        { model: "Purosangue V12 Atmosférico", cc: 6496, maxRpm: 8500, redlineRpm: 8250, category: "suv luxury", tankL: 100 },
        { model: "12Cilindri (V12 9500 RPM)", cc: 6496, maxRpm: 9800, redlineRpm: 9500, category: "supercar", tankL: 92 }
      ]
    }
  },

  Audi: {
    origin: "Alemania",
    colors: [
      { name: "Kyalami Green", hex: "#10B981" },
      { name: "Ascari Blue Metallic", hex: "#00D4FF" },
      { name: "Daytona Grey Pearl", hex: "#64748B" },
      { name: "Misano Red Pearl", hex: "#EF4444" }
    ],
    cilindradas: {
      baja: [
        { model: "A3 Sedan 40 TFSI S line", cc: 1984, maxRpm: 6800, redlineRpm: 6200, category: "sedan luxury", tankL: 50 },
        { model: "Q5 Sportback 45 TFSI Quattro", cc: 1984, maxRpm: 6800, redlineRpm: 6300, category: "suv luxury", tankL: 70 }
      ],
      media: [
        { model: "RS3 Sportback Performance (8Y)", cc: 2480, maxRpm: 7200, redlineRpm: 7000, category: "sportback", tankL: 55 },
        { model: "S5 Coupé 3.0 TFSI Quattro", cc: 2995, maxRpm: 7000, redlineRpm: 6500, category: "coupé", tankL: 58 }
      ],
      alta: [
        { model: "RS6 Avant GT Performance (V8)", cc: 3996, maxRpm: 7200, redlineRpm: 6800, category: "luxury gt", tankL: 73 },
        { model: "RS Q8 Performance (640 HP)", cc: 3996, maxRpm: 7200, redlineRpm: 6800, category: "suv luxury", tankL: 85 },
        { model: "R8 Coupé V10 Performance", cc: 5204, maxRpm: 9000, redlineRpm: 8700, category: "supercar", tankL: 73 }
      ]
    }
  },

  Tesla: {
    origin: "EE. UU.",
    colors: [
      { name: "Ultra Cyan Electric", hex: "#00D4FF" },
      { name: "Ultra Red Multi-Coat", hex: "#EF4444" },
      { name: "Quicksilver Metallic", hex: "#94A3B8" },
      { name: "Stealth Grey", hex: "#334155" }
    ],
    cilindradas: {
      baja: [
        { model: "Model 3 Performance Highland", cc: 1000, maxRpm: 9000, redlineRpm: 8500, category: "ev luxury", tankL: 82 },
        { model: "Model Y Performance AWD", cc: 1000, maxRpm: 9000, redlineRpm: 8500, category: "suv luxury", tankL: 82 }
      ],
      media: [],
      alta: [
        { model: "Model S Plaid (1020 HP Tri-Motor)", cc: 1020, maxRpm: 10000, redlineRpm: 9500, category: "ev luxury", tankL: 100 },
        { model: "Cybertruck Cyberbeast Tri-Motor", cc: 1200, maxRpm: 9500, redlineRpm: 9000, category: "suv luxury", tankL: 123 }
      ]
    }
  },

  Toyota: {
    origin: "Japón",
    colors: [
      { name: "Supra Renaissance Red", hex: "#EF4444" },
      { name: "GR Circuit Blue", hex: "#00D4FF" },
      { name: "Precious Metal Grey", hex: "#94A3B8" },
      { name: "Platinum White Pearl", hex: "#F8FAFC" }
    ],
    cilindradas: {
      baja: [
        { model: "Corolla Cross Hybrid SEG", cc: 1798, maxRpm: 6500, redlineRpm: 5800, category: "suv luxury", tankL: 43 },
        { model: "GR Yaris Circuit Pack (Gen 2)", cc: 1618, maxRpm: 7500, redlineRpm: 7000, category: "sportback", tankL: 50 }
      ],
      media: [
        { model: "GR Corolla Morizo Edition", cc: 1618, maxRpm: 7500, redlineRpm: 7000, category: "sportback", tankL: 50 },
        { model: "Land Cruiser Prado 250 First Edition", cc: 2393, maxRpm: 6500, redlineRpm: 5800, category: "suv luxury", tankL: 80 }
      ],
      alta: [
        { model: "GR Supra 3.0 Legend (B58 Turbo)", cc: 2998, maxRpm: 7200, redlineRpm: 6800, category: "coupé", tankL: 52 },
        { model: "Land Cruiser 300 GR-Sport V6 Twin-Turbo", cc: 3445, maxRpm: 6800, redlineRpm: 6200, category: "suv luxury", tankL: 110 }
      ]
    }
  },

  Mazda: {
    origin: "Japón",
    colors: [
      { name: "Soul Red Crystal", hex: "#E11D48" },
      { name: "Polymetal Grey Metallic", hex: "#06B6D4" },
      { name: "Artisan Red Premium", hex: "#991B1B" },
      { name: "Rhodium White Metallic", hex: "#F8FAFC" }
    ],
    cilindradas: {
      baja: [
        { model: "Mazda 3 Grand Touring LX 2.0", cc: 1998, maxRpm: 6800, redlineRpm: 6300, category: "sedan luxury", tankL: 51 },
        { model: "CX-30 Grand Touring MHEV", cc: 1998, maxRpm: 6800, redlineRpm: 6300, category: "suv luxury", tankL: 51 }
      ],
      media: [
        { model: "Mazda 3 Turbo Signature AWD", cc: 2488, maxRpm: 6500, redlineRpm: 6000, category: "sedan luxury", tankL: 51 },
        { model: "CX-50 Turbo Meridian AWD", cc: 2488, maxRpm: 6500, redlineRpm: 6000, category: "suv luxury", tankL: 60 },
        { model: "MX-5 Miata RF Club (ND3)", cc: 1998, maxRpm: 7800, redlineRpm: 7500, category: "coupé", tankL: 45 }
      ],
      alta: [
        { model: "CX-90 Signature 3.3L Inline-6 Turbo", cc: 3283, maxRpm: 6800, redlineRpm: 6300, category: "suv luxury", tankL: 74 }
      ]
    }
  },

  Chevrolet: {
    origin: "EE. UU.",
    colors: [
      { name: "Accelerate Yellow / Gold", hex: "#F59E0B" },
      { name: "Riptide Blue Metallic", hex: "#00D4FF" },
      { name: "Torch Red Z06", hex: "#EF4444" },
      { name: "Carbon Flash Metallic", hex: "#1E293B" }
    ],
    cilindradas: {
      baja: [
        { model: "Onix RS Turbo", cc: 999, maxRpm: 6500, redlineRpm: 6000, category: "sportback", tankL: 44 },
        { model: "Tracker RS Turbo", cc: 1199, maxRpm: 6500, redlineRpm: 6000, category: "suv luxury", tankL: 44 }
      ],
      media: [
        { model: "Blazer RS AWD V6", cc: 3649, maxRpm: 7000, redlineRpm: 6600, category: "suv luxury", tankL: 73 }
      ],
      alta: [
        { model: "Corvette C8 Z06 (5.5L Flat-Plane V8)", cc: 5463, maxRpm: 9000, redlineRpm: 8600, category: "supercar", tankL: 70 },
        { model: "Camaro ZL1 1LE Supercharged", cc: 6162, maxRpm: 7000, redlineRpm: 6500, category: "supercar", tankL: 72 },
        { model: "Tahoe Z71 5.3L V8", cc: 5328, maxRpm: 6500, redlineRpm: 5800, category: "suv luxury", tankL: 91 }
      ]
    }
  }
};
