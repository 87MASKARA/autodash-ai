import React from 'react';

/**
 * Componente Central del Logo Oficial de AutoDash AI (Luxury Automotive Edition)
 * - variant="horizontal" (por defecto): Emblema Supercar + Tacómetro IA + tipografía Plata/Cyan/Oro
 * - variant="full": Logo oficial completo (/logo-full.png)
 */
export default function AppLogo({
  size = "md",
  showText = true,
  variant = "horizontal",
  customImgSrc = null,
  className = ""
}) {
  if (variant === "full") {
    const fullSizeClasses = {
      sm: "h-16",
      md: "h-24",
      lg: "h-28",
      xl: "h-36"
    };

    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src={customImgSrc || "/logo-full.png"}
          alt="AutoDash AI"
          className={`${fullSizeClasses[size] || fullSizeClasses.lg} w-auto object-contain drop-shadow-[0_0_22px_rgba(0,212,255,0.38)] select-none`}
        />
      </div>
    );
  }

  const emblemSizes = {
    sm: "h-8 sm:h-9",
    md: "h-9 sm:h-11",
    lg: "h-12 sm:h-15"
  };

  const titleSizes = {
    sm: "text-xs sm:text-sm",
    md: "text-sm sm:text-base",
    lg: "text-lg sm:text-xl"
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none flex-shrink-0 ${className}`}>
      <img
        src={customImgSrc || "/logo-emblem.png"}
        alt="AutoDash AI Logo"
        className={`${emblemSizes[size] || emblemSizes.md} w-auto object-contain flex-shrink-0 drop-shadow-[0_0_14px_rgba(0,212,255,0.45)]`}
      />

      {showText && (
        <div className="flex-shrink-0">
          <div className="flex items-center gap-1 leading-none whitespace-nowrap">
            <span className={`font-black font-racing italic tracking-wider whitespace-nowrap ${titleSizes[size] || titleSizes.md}`}>
              <span className="bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                AUTODASH
              </span>{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,212,255,0.45)]">
                AI
              </span>
            </span>
          </div>
          <span className="text-[8px] sm:text-[9px] font-mono text-cyan-300/80 hidden sm:block mt-0.5 tracking-[0.22em] uppercase whitespace-nowrap">
            LUXURY AUTOMOTIVE COCKPIT
          </span>
        </div>
      )}
    </div>
  );
}
