// Base de conocimiento automotriz para calibración inmediata + conector IA Gemini seguro
const OEM_DATABASE = {
  porsche: {
    "911 gt3 rs": { maxRpm: 9500, redlineRpm: 9000, cc: 3996, fuelL: 64, category: "supercar" },
    "911 turbo s": { maxRpm: 7500, redlineRpm: 7200, cc: 3745, fuelL: 67, category: "supercar" },
    "cayenne": { maxRpm: 6800, redlineRpm: 6500, cc: 2995, fuelL: 75, category: "suv luxury" },
    "macan": { maxRpm: 6800, redlineRpm: 6500, cc: 1984, fuelL: 65, category: "suv luxury" },
    "718 cayman": { maxRpm: 7800, redlineRpm: 7500, cc: 1988, fuelL: 54, category: "coupé" },
  },
  "mercedes-amg": {
    "gt 63": { maxRpm: 7500, redlineRpm: 7000, cc: 3982, fuelL: 73, category: "luxury gt" },
    "a 45 s": { maxRpm: 7200, redlineRpm: 6750, cc: 1991, fuelL: 51, category: "sportback" },
    "c 63": { maxRpm: 7200, redlineRpm: 6750, cc: 1991, fuelL: 60, category: "sedan luxury" },
    "g 63": { maxRpm: 7000, redlineRpm: 6500, cc: 3982, fuelL: 100, category: "suv luxury" }
  },
  bmw: {
    "m4": { maxRpm: 7600, redlineRpm: 7200, cc: 2993, fuelL: 59, category: "coupé m" },
    "m3": { maxRpm: 7600, redlineRpm: 7200, cc: 2993, fuelL: 59, category: "sedan luxury" },
    "m2": { maxRpm: 7500, redlineRpm: 7200, cc: 2993, fuelL: 52, category: "coupé m" },
    "330i": { maxRpm: 7000, redlineRpm: 6500, cc: 1998, fuelL: 59, category: "sedan luxury" },
    "x5": { maxRpm: 7000, redlineRpm: 6500, cc: 2998, fuelL: 83, category: "suv luxury" }
  },
  ferrari: {
    "296 gtb": { maxRpm: 8800, redlineRpm: 8500, cc: 2992, fuelL: 65, category: "supercar" },
    "sf90": { maxRpm: 8500, redlineRpm: 8000, cc: 3990, fuelL: 68, category: "supercar" },
    "purosangue": { maxRpm: 8500, redlineRpm: 8250, cc: 6496, fuelL: 100, category: "suv luxury" }
  },
  audi: {
    "rs3": { maxRpm: 7200, redlineRpm: 7000, cc: 2480, fuelL: 55, category: "sportback" },
    "rs6": { maxRpm: 7200, redlineRpm: 6800, cc: 3996, fuelL: 73, category: "luxury gt" },
    "r8": { maxRpm: 9000, redlineRpm: 8700, cc: 5204, fuelL: 73, category: "supercar" }
  },
  mazda: {
    "mazda 3": { maxRpm: 6500, redlineRpm: 6000, cc: 2488, fuelL: 51, category: "sedan luxury" },
    "cx-30": { maxRpm: 6800, redlineRpm: 6300, cc: 1998, fuelL: 51, category: "suv luxury" },
    "cx-50": { maxRpm: 6500, redlineRpm: 6000, cc: 2488, fuelL: 60, category: "suv luxury" }
  },
  toyota: {
    "gr supra": { maxRpm: 7200, redlineRpm: 6800, cc: 2998, fuelL: 52, category: "coupé" },
    "gr corolla": { maxRpm: 7500, redlineRpm: 7000, cc: 1618, fuelL: 50, category: "sportback" },
    "prado": { maxRpm: 6500, redlineRpm: 5800, cc: 2393, fuelL: 80, category: "suv luxury" }
  }
};

export function sanitizeHexColor(hex, fallback = "#00D4FF") {
  if (typeof hex === "string" && /^#[0-9A-Fa-f]{6}$/.test(hex.trim())) {
    return hex.trim();
  }
  return fallback;
}

export function computeAccentGlow(hex) {
  const safeHex = sanitizeHexColor(hex);
  const cleanHex = safeHex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) || 0;
  const g = parseInt(cleanHex.substring(2, 4), 16) || 212;
  const b = parseInt(cleanHex.substring(4, 6), 16) || 255;
  return `rgba(${r}, ${g}, ${b}, 0.38)`;
}

export async function generateDashboardSpecs({ brand, model, year, colorHex, apiKey = null }) {
  const safeBrand = String(brand || "Porsche").slice(0, 40).trim();
  const safeModel = String(model || "911 GT3 RS").slice(0, 60).trim();
  const safeYear = Math.min(2030, Math.max(1950, Number(year) || 2025));
  const safeColor = sanitizeHexColor(colorHex);

  const normBrand = safeBrand.toLowerCase();
  const normModel = safeModel.toLowerCase();

  if (apiKey && typeof apiKey === "string" && apiKey.trim().length > 10) {
    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey.trim()
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Eres un ingeniero experto en telemetría automotriz de lujo. Devuelve estrictamente un JSON válido para el automóvil: Marca: ${safeBrand}, Modelo: ${safeModel}, Año: ${safeYear}.
              Formato:
              {
                "maxRpm": number,
                "redlineRpm": number,
                "engineDisplacementCc": number,
                "fuelCapacityLiters": number,
                "category": "supercar"|"luxury gt"|"sedan luxury"|"suv luxury"|"coupé",
                "recommendedOilIntervalKm": number,
                "recommendedAlignmentIntervalKm": number
              }`
            }]
          }]
        })
      });
      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (rawText) {
        const cleaned = rawText.replace(/```json|```/g, '').trim();
        const parsed = JSON.parse(cleaned);
        return formatConfig(safeBrand, safeModel, safeYear, safeColor, parsed);
      }
    } catch (e) {
      console.warn("Usando motor de calibración automotriz local de AutoDash AI.");
    }
  }

  const brandData = OEM_DATABASE[normBrand];
  const matchedModel = brandData ? Object.keys(brandData).find(k => normModel.includes(k) || k.includes(normModel)) : null;
  const specs = (brandData && matchedModel) ? brandData[matchedModel] : {
    maxRpm: 7500,
    redlineRpm: 6800,
    cc: 2500,
    fuelL: 60,
    category: "luxury gt"
  };

  return formatConfig(safeBrand, safeModel, safeYear, safeColor, {
    maxRpm: specs.maxRpm,
    redlineRpm: specs.redlineRpm,
    engineDisplacementCc: specs.cc,
    fuelCapacityLiters: specs.fuelL,
    category: specs.category,
    recommendedOilIntervalKm: 10000,
    recommendedAlignmentIntervalKm: 10000
  });
}

function formatConfig(brand, model, year, colorHex, data) {
  return {
    bikeIdentity: {
      brand: brand.toUpperCase(),
      model: model.toUpperCase(),
      year: Number(year),
      colorHex: colorHex,
      accentGlow: computeAccentGlow(colorHex),
      category: data.category || "luxury gt"
    },
    telemetrySpecs: {
      maxRpm: Math.min(12000, Math.max(4500, Number(data.maxRpm) || 7500)),
      redlineRpm: Math.min(11000, Math.max(4000, Number(data.redlineRpm) || 6800)),
      speedUnit: "km/h",
      engineCc: Math.min(8500, Math.max(800, Number(data.engineDisplacementCc) || 2500)),
      tankCapacityLiters: Math.min(130, Math.max(35, Number(data.fuelCapacityLiters) || 60))
    },
    maintenanceSchedule: [
      { id: "oil", service: "Cambio Aceite Full Sintético y Filtro", intervalKm: Number(data.recommendedOilIntervalKm) || 10000, critical: true },
      { id: "chain", service: "Alineación 3D, Balanceo y Rotación TPMS", intervalKm: Number(data.recommendedAlignmentIntervalKm) || 10000, critical: false },
      { id: "brakes", service: "Pastillas Cerámicas y Líquido DOT 4 LV", intervalKm: 25000, critical: true },
      { id: "spark", service: "Bujías Laser Iridium y Filtro Cabina HEPA", intervalKm: 30000, critical: false }
    ]
  };
}
