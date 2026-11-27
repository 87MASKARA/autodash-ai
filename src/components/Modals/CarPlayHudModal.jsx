import React, { useState, useEffect } from 'react';
import {
  Gauge,
  ShieldCheck,
  Scale,
  HeartPulse,
  Wrench,
  Users,
  Bluetooth,
  Sun,
  Moon,
  Maximize2,
  Minimize2,
  Compass,
  Battery,
  Fuel,
  Monitor,
  Navigation,
  Activity,
  Thermometer,
  Wind,
  Disc,
  X
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export const CARPLAY_SCREEN_PRESETS = [
  {
    id: '10.2',
    label: '10.2" Consola PCM',
    resolution: '1920×720 / Porsche PCM',
    desc: 'Consola central integrada de 10.2": Clúster Deportivo, Caja PDK/DCT, TPMS 4 Ruedas y Accesos Ejecutivos.',
    speedFontClass: 'text-6xl sm:text-7xl',
    compactMode: true
  },
  {
    id: '12.3',
    label: '12.3" Widescreen MBUX',
    resolution: '2400×900 / Mercedes MBUX',
    desc: 'Pantalla panorámica de 12.3" estilo Mercedes-AMG: Velocímetro, G-Force Meter, Turbo Boost y Navegación.',
    speedFontClass: 'text-7xl sm:text-8xl',
    compactMode: false
  },
  {
    id: '14.9',
    label: '14.9" Curva Hyperscreen',
    resolution: '3200×1080 / Curved Dual',
    desc: 'Cabina curva dividida de 14.9": Instrumentos Supercar + Mapa Satelital en Vivo + Control de Clima Bizona.',
    speedFontClass: 'text-7xl sm:text-8xl',
    compactMode: false
  },
  {
    id: 'auto',
    label: 'Auto-Adaptable',
    resolution: 'Apple CarPlay Ultra',
    desc: 'Se adapta automáticamente a cualquier pantalla horizontal o consola multimedia de tu automóvil.',
    speedFontClass: 'text-6xl sm:text-8xl',
    compactMode: false
  }
];

export default function CarPlayHudModal({
  isOpen,
  onClose,
  bike,
  telemetry = {},
  odometer = 0,
  hojaDeVida = {},
  displayUnit = 'KM/H',
  onOpenGlovebox,
  onOpenLawyer,
  onOpenSos,
  onOpenDoctor,
  onOpenCommunity,
  onOpenHardwareBridge
}) {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const [screenSizePreset, setScreenSizePreset] = useState(() => {
    try {
      const saved = localStorage.getItem('autodash_carplay_size_v2');
      return saved || '14.9';
    } catch {
      return '14.9';
    }
  });

  const [sunlightBoost, setSunlightBoost] = useState(false);
  const [driveMode, setDriveMode] = useState('SPORT+'); // 'COMFORT' | 'SPORT+' | 'TRACK'
  const [cabinTempC, setCabinTempC] = useState(21.0);
  const [hudViewMode, setHudViewMode] = useState('split'); // 'split' | 'map'
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [gpsCoords, setGpsCoords] = useState(() => {
    try {
      const saved = localStorage.getItem('autodash_last_verified_gps');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (!isOpen) return;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setGpsCoords({
            lat: pos.coords.latitude.toFixed(5),
            lng: pos.coords.longitude.toFixed(5)
          });
        },
        () => {},
        { enableHighAccuracy: true, timeout: 8000 }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const activePreset =
    CARPLAY_SCREEN_PRESETS.find((p) => p.id === screenSizePreset) ||
    CARPLAY_SCREEN_PRESETS[2];

  const handleSelectSize = (sizeId) => {
    setScreenSizePreset(sizeId);
    try {
      localStorage.setItem('autodash_carplay_size_v2', sizeId);
    } catch {}
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const identity = bike?.config?.bikeIdentity || {};
  const specs = bike?.config?.telemetrySpecs || {};
  const hw = hojaDeVida?.hardwareTelemetry || {};

  const currentSpeed = Math.round(telemetry.speed || Number(hw.speedKmh) || 0);
  const currentRpm = Math.round(telemetry.rpm || Number(hw.rpmIdle) || 1250);
  const maxRpm = specs.maxRpm || 9000;
  const rpmPct = Math.min(100, Math.max(8, Math.round((currentRpm / maxRpm) * 100)));

  const rawGear = String(telemetry.gear || hw.gear || 'P').toUpperCase();
  const activeAutoGear = currentSpeed > 2 ? 'D' : rawGear === 'R' ? 'R' : rawGear === 'N' ? 'N' : 'P';
  const subGearLabel = currentSpeed > 2 ? (driveMode === 'SPORT+' || driveMode === 'TRACK' ? `S${Math.min(7, Math.max(1, Math.ceil(currentSpeed / 38)))}` : `D${Math.min(8, Math.max(1, Math.ceil(currentSpeed / 32)))}`) : activeAutoGear;

  const absLean = Math.abs(telemetry.leanAngle || 12);
  const gForceLat = Number(Math.min(1.45, (absLean / 35) * 1.15).toFixed(2));
  const turboBoostBar = Number(Math.min(1.8, (currentRpm / maxRpm) * 1.6 + 0.1).toFixed(1));

  const batteryVolt = hw.batteryVoltage || '14.4';
  const batteryPct = hw.batteryLevel ?? 96;
  const fuelPct = hw.fuelLevelPercent ?? 78;
  const engineTempC = hw.engineTempC ?? 90;

  const osmMapUrl = gpsCoords
    ? `https://www.openstreetmap.org/export/embed.html?bbox=${(Number(gpsCoords.lng) - 0.006).toFixed(5)}%2C${(Number(gpsCoords.lat) - 0.004).toFixed(5)}%2C${(Number(gpsCoords.lng) + 0.006).toFixed(5)}%2C${(Number(gpsCoords.lat) + 0.004).toFixed(5)}&layer=mapnik&marker=${gpsCoords.lat}%2C${gpsCoords.lng}`
    : null;

  return (
    <div
      className={`fixed inset-0 z-[45] flex flex-col justify-between overflow-y-auto select-none transition-colors ${
        sunlightBoost
          ? 'bg-slate-950 text-white contrast-125'
          : 'bg-[#050811] text-slate-100'
      }`}
    >
      {/* Luces Ambientales LED de Cabina de Lujo (Estilo Mercedes-AMG / Porsche Taycan) */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-amber-400 to-cyan-400 shadow-[0_0_25px_rgba(0,212,255,0.9)] z-50" />

      {/* 1. BARRA SUPERIOR PANORÁMICA APPLE CARPLAY ULTRA / MBUX HYPERSCREEN */}
      <div className="px-4 sm:px-6 py-3 border-b border-cyan-500/25 bg-[#080d1a]/95 backdrop-blur-xl flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="px-3 py-1 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-black font-racing font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,212,255,0.4)]">
            <Monitor className="w-3.5 h-3.5" />
            <span>APPLE CARPLAY ULTRA • LUXURY CONSOLE</span>
          </span>

          {/* Selector de Pantalla de Consola Central (10.2", 12.3", 14.9", Auto) */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            {CARPLAY_SCREEN_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleSelectSize(preset.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-racing font-bold uppercase transition whitespace-nowrap ${
                  screenSizePreset === preset.id
                    ? 'bg-gradient-to-r from-cyan-400 to-amber-400 text-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
                title={preset.desc}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selector de Modo de Conducción (COMFORT / SPORT+ / TRACK) + Controles */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <div className="hidden md:flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 mr-1">
            {['COMFORT', 'SPORT+', 'TRACK'].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setDriveMode(m)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-racing font-black uppercase transition ${
                  driveMode === m
                    ? m === 'TRACK'
                      ? 'bg-rose-500 text-white'
                      : m === 'SPORT+'
                      ? 'bg-amber-400 text-black'
                      : 'bg-cyan-400 text-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setHudViewMode(hudViewMode === 'split' ? 'map' : 'split')}
            className={`px-3 py-1.5 rounded-xl text-xs font-racing font-bold uppercase border flex items-center gap-1.5 transition ${
              hudViewMode === 'map'
                ? 'bg-cyan-400 text-black border-cyan-300'
                : 'bg-slate-900 text-cyan-300 border-cyan-500/40'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{hudViewMode === 'map' ? 'Vista Cabina Dual' : 'Navegación GPS Full'}</span>
          </button>

          <button
            type="button"
            onClick={() => setSunlightBoost(!sunlightBoost)}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold border flex items-center gap-1 transition ${
              sunlightBoost
                ? 'bg-amber-400 text-black border-amber-300'
                : 'bg-slate-900 text-slate-300 border-slate-700'
            }`}
          >
            {sunlightBoost ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{sunlightBoost ? 'Día HDR' : 'Ambiente LED'}</span>
          </button>

          <button
            type="button"
            onClick={handleToggleFullscreen}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-rose-950 border border-slate-700 hover:border-rose-500/50 text-xs font-racing font-bold uppercase text-slate-300 hover:text-rose-300 flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            <span>{isEn ? 'Exit' : 'Salir'}</span>
          </button>
        </div>
      </div>

      {/* 2. BARRA SUPERIOR DE TACÓMETRO SUPERCAR & TELEMETRÍA TURBO / MOTOR */}
      <div className="px-4 sm:px-6 pt-2.5">
        <div className="flex flex-wrap items-center justify-between text-xs font-mono mb-1.5 gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold">
              🏎️ {identity.brand || 'PORSCHE'} {identity.model || '911 GT3 RS'}
            </span>
            <span className="text-slate-400">
              ODO: <strong className="text-amber-400">{Number(odometer).toLocaleString()} KM</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-cyan-300 font-bold">
              TURBO: <strong>{turboBoostBar} BAR</strong>
            </span>
            <span className="text-emerald-400 font-bold">
              OIL/COOLANT: <strong>{engineTempC}°C</strong>
            </span>
            <span className="text-amber-400 font-bold">
              {currentRpm.toLocaleString()} / {maxRpm.toLocaleString()} RPM • {driveMode}
            </span>
          </div>
        </div>
        <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-cyan-500/30 p-0.5">
          <div
            className={`h-full rounded-full transition-all duration-150 ${
              rpmPct > 85
                ? 'bg-gradient-to-r from-amber-400 via-rose-500 to-red-600 animate-pulse'
                : 'bg-gradient-to-r from-cyan-400 via-sky-400 to-amber-400'
            }`}
            style={{ width: `${rpmPct}%` }}
          />
        </div>
      </div>

      {/* 3. CONSOLA PANORÁMICA CENTRAL (3 COLUMNAS ESTILO PORSCHE TAYCAN / MERCEDES MBUX) */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch my-auto">
        
        {/* POD IZQUIERDO (4 cols): VELOCÍMETRO SUPERCAR + SELECTOR CAJA AUTOMÁTICA P-R-N-D-S + G-METER */}
        <div className="lg:col-span-4 rounded-3xl p-5 flex flex-col justify-between bg-gradient-to-b from-[#0c1426]/95 to-[#070b14]/95 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,212,255,0.12)] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
              <Gauge className="w-4 h-4" />
              <span>DIGITAL COCKPIT • {activePreset.label}</span>
            </span>
            <span className="px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-400/50 text-amber-300 text-[10px] font-mono font-bold">
              {driveMode}
            </span>
          </div>

          {/* Velocímetro Circular / Digital con Selector PDK / AMG Speedshift */}
          <div className="my-3 py-3 px-4 rounded-3xl bg-slate-950/80 border border-cyan-500/25 flex items-center justify-between">
            <div className="text-left">
              <div
                className={`${activePreset.speedFontClass} font-black font-racing leading-none tracking-tight text-cyan-400 drop-shadow-[0_0_25px_rgba(0,212,255,0.45)] tabular-nums`}
              >
                {currentSpeed}
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 tracking-widest uppercase block mt-1">
                {displayUnit} • CRUISE READY
              </span>
            </div>

            {/* Selector Vertical de Transmisión Automática (P R N D S+) */}
            <div className="flex flex-col items-center gap-1 bg-slate-900/90 px-3 py-2 rounded-2xl border border-slate-800">
              <span className="text-[9px] font-mono text-slate-400 uppercase">PDK / DCT</span>
              <div className="flex items-center gap-1.5 my-1">
                {['P', 'R', 'N', 'D'].map((g) => (
                  <span
                    key={g}
                    className={`w-6 h-6 rounded-lg text-xs font-racing font-black flex items-center justify-center ${
                      activeAutoGear === g
                        ? 'bg-amber-400 text-black shadow-[0_0_10px_rgba(245,158,11,0.7)]'
                        : 'text-slate-500 bg-slate-950'
                    }`}
                  >
                    {g}
                  </span>
                ))}
              </div>
              <span className="text-lg font-racing font-black text-cyan-300">
                {subGearLabel}
              </span>
            </div>
          </div>

          {/* Medidor de Fuerza G Lateral + Turbo Boost + Batería AGM & Tanque */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-2.5 rounded-2xl bg-slate-950/90 border border-cyan-500/30">
              <span className="text-[9px] font-mono text-slate-400 uppercase block">G-FORCE & BOOST</span>
              <div className="flex items-baseline justify-between mt-0.5">
                <span className="text-base font-black font-racing text-cyan-400">{gForceLat} G</span>
                <span className="text-xs font-mono font-bold text-amber-400">{turboBoostBar} BAR</span>
              </div>
            </div>

            <div className="p-2.5 rounded-2xl bg-slate-950/90 border border-emerald-500/30">
              <span className="text-[9px] font-mono text-slate-400 uppercase block">BATERÍA AGM 12V</span>
              <div className="flex items-baseline justify-between mt-0.5">
                <span className="text-base font-black font-mono text-emerald-400">{batteryVolt}V</span>
                <span className="text-xs font-mono text-emerald-300">{batteryPct}% OK</span>
              </div>
            </div>

            <div className="col-span-2 p-2.5 rounded-2xl bg-slate-950/90 border border-amber-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Fuel className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono text-slate-300">
                  COMBUSTIBLE PREMIUM: <strong className="text-amber-300">{fuelPct}%</strong>
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-cyan-300">
                AUTONOMÍA: {hw.estimatedRangeKm || 485} KM
              </span>
            </div>
          </div>
        </div>

        {/* POD CENTRAL (4 cols): MONITOR TPMS 4 NEUMÁTICOS EN VIVO + MAPA GPS INTEGRADO */}
        <div className="lg:col-span-4 rounded-3xl p-4 flex flex-col justify-between bg-gradient-to-b from-[#0c1426]/95 to-[#070b14]/95 border border-slate-800 shadow-2xl">
          {/* Monitor de Presión y Temperatura TPMS de las 4 Ruedas */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                <Disc className="w-3.5 h-3.5 text-cyan-400" />
                <span>TPMS 4 NEUMÁTICOS & CHASIS ACTIVO</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">● 4 SENSORES OK</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-2xl bg-slate-950/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">DEL. IZQ (FL)</span>
                  <span className="text-sm font-black font-racing text-cyan-300">36.0 PSI</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">28°C</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-slate-950/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">DEL. DER (FR)</span>
                  <span className="text-sm font-black font-racing text-cyan-300">36.0 PSI</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">28°C</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-slate-950/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">TRAS. IZQ (RL)</span>
                  <span className="text-sm font-black font-racing text-amber-300">38.0 PSI</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">31°C</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-slate-950/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">TRAS. DER (RR)</span>
                  <span className="text-sm font-black font-racing text-amber-300">38.0 PSI</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">31°C</span>
              </div>
            </div>
          </div>

          {/* Mapa GPS Satelital Integrado en la Consola Central */}
          <div className="flex-1 min-h-[165px] rounded-2xl overflow-hidden border border-cyan-500/40 bg-slate-950 relative">
            {osmMapUrl ? (
              <iframe
                title="Navegación Satelital AutoDash AI"
                src={osmMapUrl}
                className="w-full h-full min-h-[165px] border-0 filter invert-[90%] hue-rotate-180 contrast-125"
              />
            ) : (
              <div className="w-full h-full min-h-[165px] flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-slate-900 to-slate-950">
                <Navigation className="w-7 h-7 text-cyan-400 animate-pulse mb-1.5" />
                <p className="text-xs font-racing font-bold uppercase text-white">
                  NAVEGACIÓN WIDESCREEN ACTIVA
                </p>
                <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                  Radar vial GPS y ubicación de parqueo automático
                </p>
              </div>
            )}
            <div className="absolute top-2 left-2 px-2.5 py-1 rounded-lg bg-black/85 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 font-bold">
              📍 {gpsCoords ? `${gpsCoords.lat}, ${gpsCoords.lng}` : 'GNSS Luxury Nav'}
            </div>
          </div>
        </div>

        {/* POD DERECHO (4 cols): DOCK EJECUTIVO DE 6 MÓDULOS AUTOMOTRICES EN 1 TOQUE */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={onOpenGlovebox}
            className="p-3.5 rounded-3xl bg-emerald-950/75 hover:bg-emerald-900/90 border border-emerald-500/60 text-left flex flex-col justify-between transition active:scale-95 shadow-lg"
          >
            <ShieldCheck className="w-7 h-7 text-emerald-400" />
            <div>
              <span className="text-[9px] font-mono uppercase text-emerald-300 block">
                SOAT • TECNO • PIN
              </span>
              <span className="text-sm sm:text-base font-black font-racing uppercase text-white">
                {isEn ? 'DIGITAL GLOVEBOX' : 'GUANTERA RETÉN'}
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={onOpenHardwareBridge}
            className="p-3.5 rounded-3xl bg-cyan-950/75 hover:bg-cyan-900/90 border border-cyan-500/60 text-left flex flex-col justify-between transition active:scale-95 shadow-lg"
          >
            <Bluetooth className="w-7 h-7 text-cyan-400" />
            <div>
              <span className="text-[9px] font-mono uppercase text-cyan-300 block">
                16 PINES & FOTO IA
              </span>
              <span className="text-sm sm:text-base font-black font-racing uppercase text-white">
                ESCÁNER OBD-II
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={onOpenCommunity}
            className="p-3.5 rounded-3xl bg-amber-950/75 hover:bg-amber-900/90 border border-amber-500/60 text-left flex flex-col justify-between transition active:scale-95 shadow-lg"
          >
            <Users className="w-7 h-7 text-amber-400" />
            <div>
              <span className="text-[9px] font-mono uppercase text-amber-300 block">
                CARAVANAS & TRACK DAY
              </span>
              <span className="text-sm sm:text-base font-black font-racing uppercase text-white">
                {isEn ? 'LUXURY CAR CLUBS' : 'CLUBES VIP'}
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={onOpenDoctor}
            className="p-3.5 rounded-3xl bg-teal-950/75 hover:bg-teal-900/90 border border-teal-500/60 text-left flex flex-col justify-between transition active:scale-95 shadow-lg"
          >
            <Wrench className="w-7 h-7 text-cyan-400" />
            <div>
              <span className="text-[9px] font-mono uppercase text-teal-300 block">
                TURBO • CAJA PDK • ECU
              </span>
              <span className="text-sm sm:text-base font-black font-racing uppercase text-white">
                DOCTOR AUTO IA
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={onOpenLawyer}
            className="p-3.5 rounded-3xl bg-indigo-950/75 hover:bg-indigo-900/90 border border-indigo-500/60 text-left flex flex-col justify-between transition active:scale-95 shadow-lg"
          >
            <Scale className="w-7 h-7 text-amber-400" />
            <div>
              <span className="text-[9px] font-mono uppercase text-indigo-300 block">
                DEFENSA & GRÚA PLATAFORMA
              </span>
              <span className="text-sm sm:text-base font-black font-racing uppercase text-white">
                {isEn ? 'AI TRAFFIC LAWYER' : 'ABOGADO VIAL IA'}
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={onOpenSos}
            className="p-3.5 rounded-3xl bg-rose-950/85 hover:bg-rose-900 border border-rose-500/60 text-left flex flex-col justify-between transition active:scale-95 shadow-lg"
          >
            <HeartPulse className="w-7 h-7 text-rose-400 animate-pulse" />
            <div>
              <span className="text-[9px] font-mono uppercase text-rose-300 block">
                CAMA BAJA & PARAMÉDICOS
              </span>
              <span className="text-sm sm:text-base font-black font-racing uppercase text-white">
                SOS GRÚA 24/7
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* 4. BARRA INFERIOR DE CLIMATIZADOR BIZONA & ESTADO DE CONSOLA DE LUJO */}
      <div className="px-4 sm:px-6 py-2.5 border-t border-cyan-500/20 bg-[#070b14] text-xs font-mono text-slate-300 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
            <Wind className="w-4 h-4 text-cyan-400" />
            <span>CLIMA BIZONA THERMOTRONIC:</span>
          </span>
          <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-800">
            <button
              type="button"
              onClick={() => setCabinTempC((t) => Number(Math.max(16, t - 0.5).toFixed(1)))}
              className="text-cyan-400 font-bold px-1 hover:text-white"
            >
              −
            </button>
            <span className="text-white font-bold">{cabinTempC.toFixed(1)}°C</span>
            <button
              type="button"
              onClick={() => setCabinTempC((t) => Number(Math.min(28, t + 0.5).toFixed(1)))}
              className="text-amber-400 font-bold px-1 hover:text-white"
            >
              +
            </button>
          </div>
          <span className="hidden md:inline text-[10px] text-emerald-400">
            ● FILTRO HEPA CARBÓN ACTIVO OK
          </span>
        </div>

        <span className="text-[11px] text-slate-400">
          📟 <strong>{activePreset.label}</strong> ({activePreset.resolution})
        </span>
      </div>
    </div>
  );
}
