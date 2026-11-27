import React from 'react';

/**
 * Emblemas vectoriales SVG de alta precisión para las marcas oficiales de Automóviles de Lujo & Performance.
 * Todos usan viewBox cuadrado (0 0 100 100) para escalar con nitidez en cualquier tamaño.
 */

export function PorscheLogo({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M50 6 C75 6 88 15 88 42 C88 68 70 86 50 95 C30 86 12 68 12 42 C12 15 25 6 50 6 Z"
        fill="#0D1117"
        stroke="#F59E0B"
        strokeWidth="4"
      />
      <path d="M50 14 V86 M18 46 H82" stroke="#F59E0B" strokeWidth="2.5" />
      <rect x="24" y="23" width="22" height="18" rx="3" fill="#B91C1C" opacity="0.85" />
      <rect x="54" y="51" width="22" height="18" rx="3" fill="#B91C1C" opacity="0.85" />
      <circle cx="50" cy="46" r="11" fill="#F59E0B" stroke="#0D1117" strokeWidth="2.5" />
      <text x="50" y="50" fill="#0D1117" fontSize="11" fontWeight="900" fontFamily="Arial Black, sans-serif" textAnchor="middle">P</text>
    </svg>
  );
}

export function MercedesLogo({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="45" fill="#090D16" stroke="#E2E8F0" strokeWidth="4" />
      <circle cx="50" cy="50" r="38" stroke="#00D4FF" strokeWidth="1.5" strokeOpacity="0.6" />
      <polygon points="50,12 55,47 50,50 45,47" fill="#F8FAFC" />
      <polygon points="82,70 50,50 53,45" fill="#E2E8F0" />
      <polygon points="82,70 48,54 50,50" fill="#94A3B8" />
      <polygon points="18,70 50,50 47,45" fill="#F8FAFC" />
      <polygon points="18,70 52,54 50,50" fill="#94A3B8" />
      <circle cx="50" cy="50" r="3.5" fill="#00D4FF" />
    </svg>
  );
}

export function BmwLogo({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="46" fill="#0A0A0A" stroke="#00D4FF" strokeWidth="3.5" />
      <circle cx="50" cy="50" r="29" stroke="#E5E7EB" strokeWidth="2.5" />
      <path d="M50 21 A29 29 0 0 1 79 50 H50 V21 Z" fill="#0066B1" />
      <path d="M50 50 H21 A29 29 0 0 1 50 21 V50 Z" fill="#FFFFFF" />
      <path d="M50 50 V79 A29 29 0 0 1 21 50 H50 Z" fill="#0066B1" />
      <path d="M50 50 H79 A29 29 0 0 1 50 79 V50 Z" fill="#FFFFFF" />
      <text x="50" y="16" fill="#FFFFFF" fontSize="9.5" fontWeight="900" fontFamily="Arial, sans-serif" textAnchor="middle">BMW M</text>
    </svg>
  );
}

export function FerrariLogo({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M50 6 C74 6 89 14 88 38 C87 65 69 84 50 95 C31 84 13 65 12 38 C11 14 26 6 50 6 Z"
        fill="#FACC15"
        stroke="#DC2626"
        strokeWidth="4.5"
      />
      <rect x="24" y="11" width="52" height="5" fill="#16A34A" />
      <rect x="24" y="16" width="52" height="5" fill="#FFFFFF" />
      <rect x="24" y="21" width="52" height="5" fill="#DC2626" />
      <text x="50" y="64" fill="#090D16" fontSize="28" fontWeight="900" fontFamily="Arial Black, sans-serif" fontStyle="italic" textAnchor="middle">
        SF
      </text>
    </svg>
  );
}

export function AudiLogo({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="16" width="92" height="68" rx="18" fill="#0B0F19" stroke="#E2E8F0" strokeWidth="3" />
      <polygon points="18,32 28,32 22,68 12,68" fill="#EF4444" opacity="0.85" />
      <circle cx="26" cy="50" r="11" stroke="#F8FAFC" strokeWidth="3.5" fill="none" />
      <circle cx="42" cy="50" r="11" stroke="#F8FAFC" strokeWidth="3.5" fill="none" />
      <circle cx="58" cy="50" r="11" stroke="#F8FAFC" strokeWidth="3.5" fill="none" />
      <circle cx="74" cy="50" r="11" stroke="#F8FAFC" strokeWidth="3.5" fill="none" />
    </svg>
  );
}

export function TeslaLogo({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="45" fill="#090D16" stroke="#00D4FF" strokeWidth="3.5" />
      <path d="M24 27 Q50 19 76 27" stroke="#00D4FF" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M26 35 Q50 28 74 35 L58 41 L50 82 L42 41 Z" fill="#F8FAFC" />
    </svg>
  );
}

export function ToyotaLogo({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="5" y="14" width="90" height="72" rx="18" fill="#0D1117" stroke="#EF4444" strokeWidth="3.5" />
      <ellipse cx="50" cy="50" rx="33" ry="21" stroke="#F8FAFC" strokeWidth="3.5" />
      <ellipse cx="50" cy="43" rx="22" ry="11" stroke="#F8FAFC" strokeWidth="3" />
      <ellipse cx="50" cy="50" rx="9" ry="20" stroke="#EF4444" strokeWidth="3" />
    </svg>
  );
}

export function MazdaLogo({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="44" fill="#0B0F19" stroke="#E2E8F0" strokeWidth="4" />
      <path
        d="M22 42 C34 42 42 58 50 64 C58 58 66 42 78 42 C68 34 58 46 50 52 C42 46 32 34 22 42 Z"
        fill="#00D4FF"
        stroke="#FFFFFF"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export function ChevroletLogo({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="45" fill="#090D16" stroke="#F59E0B" strokeWidth="3.5" />
      <polygon
        points="16,44 37,44 37,35 63,35 63,44 84,44 79,56 63,56 63,65 37,65 37,56 21,56"
        fill="#F59E0B"
        stroke="#FEF3C7"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export const BRAND_LOGOS = {
  Porsche: PorscheLogo,
  "Mercedes-AMG": MercedesLogo,
  BMW: BmwLogo,
  Ferrari: FerrariLogo,
  Audi: AudiLogo,
  Tesla: TeslaLogo,
  Toyota: ToyotaLogo,
  Mazda: MazdaLogo,
  Chevrolet: ChevroletLogo
};

const NORMALIZED_BRAND_LOGOS = Object.entries(BRAND_LOGOS).reduce((acc, [key, Comp]) => {
  acc[key.toLowerCase()] = Comp;
  return acc;
}, {
  mercedes: MercedesLogo,
  amg: MercedesLogo,
  "bmw m": BmwLogo,
  corvette: ChevroletLogo,
  yamaha: PorscheLogo,
  ktm: FerrariLogo,
  kawasaki: MercedesLogo,
  ducati: FerrariLogo,
  honda: ToyotaLogo,
  suzuki: MazdaLogo,
  bajaj: AudiLogo,
  tvs: PorscheLogo
});

export function getBrandLogoComponent(brandName = "") {
  if (!brandName || typeof brandName !== "string") return null;
  const clean = brandName.trim().toLowerCase();
  if (NORMALIZED_BRAND_LOGOS[clean]) return NORMALIZED_BRAND_LOGOS[clean];
  const foundKey = Object.keys(NORMALIZED_BRAND_LOGOS).find((k) => clean.includes(k));
  return foundKey ? NORMALIZED_BRAND_LOGOS[foundKey] : null;
}

export function BrandLogo({ brand = "", className = "w-8 h-8", accentColor = "#00D4FF" }) {
  const LogoComp = getBrandLogoComponent(brand);
  if (LogoComp) {
    return <LogoComp className={className} />;
  }

  const initials = (brand || "A")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="45" fill="#0B111E" stroke={accentColor} strokeWidth="5" />
      <text
        x="50"
        y="61"
        fill="#FFFFFF"
        fontSize="34"
        fontWeight="900"
        fontFamily="Arial Black, sans-serif"
        textAnchor="middle"
      >
        {initials}
      </text>
    </svg>
  );
}
