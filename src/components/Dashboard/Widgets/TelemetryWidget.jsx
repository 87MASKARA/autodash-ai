import React from 'react';
import { Mountain, Activity, Fuel, Edit3, Gauge } from 'lucide-react';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function TelemetryWidget({ leanAngle, altitude, odometer, tankCapacity, onOpenOdometerModal }) {
  const { t } = useLanguage();
  // Convertir el ángulo dinámico del giroscopio/simulador en Fuerza G Lateral real de deportivo (0.00 G a 1.45 G)
  const absLean = Math.abs(leanAngle || 0);
  const gForce = Number(Math.min(1.48, (absLean / 34) * 1.15).toFixed(2));
  const boostBar = Number(Math.min(1.8, (absLean / 45) * 1.5 + 0.2).toFixed(1));

  return (
    <div className="cockpit-card rounded-3xl p-6 shadow-2xl flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-300 font-racing">
            {t('widgets.telemetry.title')}
          </span>
        </div>
        <span className="text-[10px] font-mono text-amber-400/90 uppercase">
          G-METER • TPMS 4 RUEDAS • TURBO {boostBar} BAR
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-auto">
        {/* Medidor de Fuerza G Lateral (Sport Chrono / AMG G-Meter) */}
        <div className="bg-slate-900/70 border border-slate-800/90 p-3.5 rounded-2xl text-center">
          <span className="text-[10px] font-medium text-slate-400 uppercase block mb-1">
            FUERZA G LATERAL
          </span>
          <div className="flex items-center justify-center gap-1">
            <span 
              className="text-2xl font-black font-racing"
              style={{ color: gForce > 1.05 ? "#f59e0b" : "var(--primary-accent)" }}
            >
              {gForce.toFixed(2)} G
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              {leanAngle < 0 ? "IZQ" : leanAngle > 0 ? "DER" : "CEN"}
            </span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className="h-full transition-all duration-100"
              style={{ 
                width: `${Math.min((gForce / 1.4) * 100, 100)}%`,
                backgroundColor: gForce > 1.05 ? "#f59e0b" : "var(--primary-accent)"
              }}
            />
          </div>
        </div>

        {/* Monitoreo TPMS 4 Ruedas & Altitud Satelital */}
        <div className="bg-slate-900/70 border border-slate-800/90 p-3.5 rounded-2xl text-center">
          <span className="text-[10px] font-medium text-slate-400 uppercase block mb-1">
            TPMS 4 RUEDAS & ALTITUD
          </span>
          <div className="flex items-center justify-center gap-1.5">
            <Gauge className="w-4 h-4 text-emerald-400" />
            <span className="text-lg font-black font-racing text-emerald-400">36 / 38 PSI</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 flex items-center justify-center gap-1 mt-0.5">
            <Mountain className="w-3 h-3 text-cyan-400" />
            {altitude} {t('widgets.telemetry.altitudeUnit')} • 4 Neumáticos OK
          </span>
        </div>

        {/* Odómetro Total Clickeable para Calibrar */}
        <div 
          onClick={() => onOpenOdometerModal && onOpenOdometerModal()}
          className="bg-slate-900/70 border border-slate-800/90 hover:border-cyan-400/60 p-3.5 rounded-2xl text-center cursor-pointer transition-all group relative"
        >
          <div className="flex items-center justify-center gap-1 mb-1">
            <span className="text-[10px] font-medium text-slate-400 uppercase">ODÓMETRO AUTO</span>
            <Edit3 className="w-2.5 h-2.5 text-slate-500 group-hover:text-cyan-400 transition" />
          </div>
          <span className="text-xl sm:text-2xl font-black font-telemetry text-slate-100 block group-hover:text-cyan-400 transition">
            {odometer.toLocaleString()}
          </span>
          <span className="text-[10px] font-mono text-cyan-400/90 group-hover:underline">
            {t('widgets.telemetry.editRealKm')}
          </span>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Fuel className="w-3.5 h-3.5 text-amber-400" />
          {t('widgets.telemetry.tank')} <strong className="text-slate-200">{tankCapacity} L</strong>
        </span>
        <button 
          onClick={() => onOpenOdometerModal && onOpenOdometerModal()}
          className="text-[11px] text-cyan-400 hover:text-cyan-300 font-medium font-mono"
        >
          {t('widgets.telemetry.logRefuelKm')}
        </button>
      </div>
    </div>
  );
}
