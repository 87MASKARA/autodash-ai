import React, { useState, useEffect } from 'react';
import { ArrowRight, Gauge, ShieldCheck, Activity, Zap } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const INTRO_DURATION_MS = 5500; // 5.5 segundos de animación ejecutiva de encendido Supercar

export default function VideoIntroSplash({ onFinish }) {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const diff = Date.now() - startTime;
      if (diff >= INTRO_DURATION_MS) {
        setElapsedMs(INTRO_DURATION_MS);
        clearInterval(interval);
        handleComplete();
      } else {
        setElapsedMs(diff);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const handleComplete = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 350);
  };

  const progressPct = Math.min(100, Math.round((elapsedMs / INTRO_DURATION_MS) * 100));
  const animatedRpm = Math.round(1200 + Math.sin((progressPct / 100) * Math.PI) * 7800);
  const animatedSpeed = Math.round((progressPct / 100) * 312);

  return (
    <div
      className={`fixed inset-0 z-[200] bg-[#060911] flex flex-col justify-between overflow-hidden select-none transition-opacity duration-500 ${
        isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Luces ambientales Cyan & Oro de Cabina Gran Turismo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[360px] bg-cyan-500/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[520px] h-[280px] bg-amber-500/15 blur-[140px] pointer-events-none" />

      {/* Barra Superior */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8 pt-5 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>LUXURY AUTOMOTIVE AI TELEMETRY • OBD-II • CARPLAY HUD</span>
        </div>

        <button
          type="button"
          onClick={handleComplete}
          className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-amber-400 hover:opacity-95 text-black font-racing font-black uppercase tracking-wider text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-500/30 transition active:scale-95"
        >
          <span>{isEn ? 'Enter Cockpit' : 'Entrar al Cockpit'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Centro: Logo Oficial AutoDash AI + Secuencia de Encendido Digital Supercar */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 my-auto">
        <div className="relative p-4 sm:p-6 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-cyan-500/30 shadow-[0_0_60px_rgba(0,212,255,0.22)]">
          <img
            src="/autodash-logo.png"
            alt="AutoDash AI Official Logo"
            className="w-72 sm:w-96 md:w-[440px] h-auto object-contain rounded-2xl mx-auto drop-shadow-[0_0_25px_rgba(0,212,255,0.4)]"
          />
        </div>

        {/* Telemetría de Barrido de Agujas (Self-Check Porsche / AMG) */}
        <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-5 max-w-lg w-full">
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-cyan-500/30 text-center">
            <span className="text-[9px] font-mono text-slate-400 uppercase block">SPEED CHECK</span>
            <span className="text-xl sm:text-2xl font-black font-racing text-cyan-400 tabular-nums">
              {animatedSpeed} <small className="text-[10px] text-amber-400">KM/H</small>
            </span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-amber-500/30 text-center">
            <span className="text-[9px] font-mono text-slate-400 uppercase block">TACHOMETER</span>
            <span className="text-xl sm:text-2xl font-black font-racing text-amber-400 tabular-nums">
              {animatedRpm.toLocaleString()} <small className="text-[10px] text-slate-400">RPM</small>
            </span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-emerald-500/30 text-center">
            <span className="text-[9px] font-mono text-slate-400 uppercase block">SYSTEMS</span>
            <span className="text-sm sm:text-base font-black font-racing text-emerald-400 flex items-center justify-center gap-1 mt-1">
              <ShieldCheck className="w-4 h-4" /> TPMS & ECU OK
            </span>
          </div>
        </div>
      </div>

      {/* Pie con Título y Barra de Progreso Cyan-Oro */}
      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 pb-8 text-center">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-[0.25em] mb-3">
          {isEn ? 'INITIALIZING GRAND TOURER AI COCKPIT...' : 'INICIANDO COCKPIT AUTOMOTRIZ DE LUJO...'}
        </p>
        <div className="max-w-xs sm:max-w-md mx-auto">
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden p-0.2">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400 transition-all duration-75 shadow-[0_0_12px_rgba(0,212,255,0.8)]"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
