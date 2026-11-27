import React from 'react';
import { Gauge } from 'lucide-react';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function SpeedometerWidget({ speed, maxSpeed, gear = 'N', unit = "km/h", isGpsActive, isSimulating }) {
  const { t } = useLanguage();
  // Formatear marcha estilo Transmisión Deportiva PDK / AMG Speedshift (P / N / D1-D8 / S1-S7)
  const rawGear = String(gear || 'N').toUpperCase();
  const displayGear = rawGear === 'N' || rawGear === '0'
    ? (speed > 1 ? 'D1' : 'P')
    : (/^[1-8]$/.test(rawGear) ? `S${rawGear}` : rawGear);

  return (
    <div className="cockpit-card rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300">
      {/* Luz ambiental LED de cabina de lujo */}
      <div 
        className="absolute -right-16 -top-16 w-52 h-52 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: "var(--primary-accent)" }}
      />
      <div 
        className="absolute -left-16 -bottom-16 w-44 h-44 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: "var(--secondary-accent)" }}
      />

      {/* Header del Widget */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <Gauge className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-300 font-racing">
            {t('widgets.speedometer.title')}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-0.5 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-[11px] font-racing font-black flex items-center gap-1.5 shadow-inner">
            <span className="text-slate-400 text-[9px]">PDK / DCT</span>
            <span style={{ color: displayGear === 'P' ? '#34d399' : '#f59e0b' }}>{displayGear}</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px]">
            <span className={`w-2 h-2 rounded-full ${isGpsActive || isSimulating ? "bg-cyan-400 animate-pulse" : "bg-slate-600"}`} />
            <span className="text-slate-300 font-mono text-[10px]">
              {isSimulating
                ? t('widgets.speedometer.demoTelemetry')
                : isGpsActive
                ? t('widgets.speedometer.gpsLive')
                : t('widgets.speedometer.searchingGps')}
            </span>
          </div>
        </div>
      </div>

      {/* Número Central Gigante Estilo Supercar Digital Cluster */}
      <div className="my-6 text-center z-10">
        <div className="flex items-baseline justify-center">
          <span 
            className="text-8xl sm:text-9xl font-black font-racing tracking-tight transition-all duration-100 tabular-nums"
            style={{ 
              color: "var(--primary-accent)",
              textShadow: "0 0 38px var(--accent-glow)"
            }}
          >
            {speed}
          </span>
          <span className="text-xl sm:text-2xl font-bold text-amber-400 font-racing uppercase ml-2">
            {unit}
          </span>
        </div>
      </div>

      {/* Footer con Top Speed del viaje */}
      <div className="flex justify-between items-center z-10 pt-4 border-t border-slate-800/80 text-xs">
        <span className="text-slate-400 font-medium">{t('widgets.speedometer.maxSessionSpeed')}</span>
        <span className="font-mono font-bold text-amber-300">
          {maxSpeed} <span className="text-slate-500 font-normal">{unit}</span>
        </span>
      </div>
    </div>
  );
}
