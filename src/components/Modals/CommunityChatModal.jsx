import React, { useState, useEffect, useRef } from 'react';
import {
  Users,
  Send,
  Compass,
  Wrench,
  MessageSquare,
  ShieldCheck,
  Bike,
  Radio,
  Shield,
  Plus,
  Crown,
  Lock,
  Unlock,
  Upload,
  KeyRound,
  Sparkles,
  CheckCircle2,
  Trash2,
  X
} from 'lucide-react';
import { supabase, getAuthenticatedUserId } from '../../services/supabaseClient';
import { isFounderVipEmail } from '../Auth/LoginModal';
import { useLanguage } from '../../i18n/LanguageContext';

const OFFICIAL_FOUNDER_NAME = 'Anderson • Fundador VIP';
const OFFICIAL_FOUNDER_ROLE_LABEL = 'Fundador AutoDash AI (Miembro Permanente por Política)';

const COMMUNITY_CHANNELS = [
  { id: 'medellin', label: '🇨🇴 Medellín & Palmas Supercar Meet', type: 'city', city: 'Medellín' },
  { id: 'bogota', label: '🇨🇴 Bogotá & Autódromo Tocancipá', type: 'city', city: 'Bogotá' },
  { id: 'cdmx', label: '🇲🇽 CDMX & Santa Fe Exotic Club', type: 'city', city: 'CDMX' },
  { id: 'madrid', label: '🇪🇸 Madrid & Jarama Track Day', type: 'city', city: 'Madrid' },
  { id: 'apache_rtr', label: '🏎️ Porsche & European GT Club', type: 'bike', city: 'Global' },
  { id: 'sport_racing', label: '🏁 AMG, BMW M & Supercar Track Days', type: 'bike', city: 'Global' }
];

const DEFAULT_CLANS = [
  {
    id: 'clan_default_porsche',
    slug: 'porsche-supercar-antioquia',
    name: 'Porsche & Supercar Club Antioquia',
    tag: 'GT3-MDE',
    motto: 'Track Days, Caravanas Las Palmas y Telemetría Oficial',
    city: 'Medellín',
    country: 'Colombia',
    logo_url: null,
    accent_color: '#00D4FF',
    is_private: true,
    invite_code: 'GT3RS9',
    creator_name: 'Anderson • Fundador VIP',
    founder_name: OFFICIAL_FOUNDER_NAME,
    member_count: 18
  },
  {
    id: 'clan_default_amg',
    slug: 'amg-m-performance-colombia',
    name: 'AMG & BMW M Performance Club',
    tag: 'AMG-MCO',
    motto: 'Caravanas Ejecutivas, Biturbo Lounge y Detailing VIP',
    city: 'Medellín / Bogotá',
    country: 'Colombia',
    logo_url: null,
    accent_color: '#F59E0B',
    is_private: true,
    invite_code: 'AMGM25',
    creator_name: 'Director Grand Tourer',
    founder_name: OFFICIAL_FOUNDER_NAME,
    member_count: 24
  }
];

const CLAN_COLOR_PRESETS = [
  { hex: '#00D4FF', name: 'Sapphire Cyan' },
  { hex: '#F59E0B', name: 'Champagne Gold' },
  { hex: '#10B981', name: 'Emerald GT' },
  { hex: '#3B82F6', name: 'Marina Bay Blue' },
  { hex: '#EF4444', name: 'Rosso Corsa' },
  { hex: '#EC4899', name: 'Neon Track' }
];

const MESSAGE_CATEGORIES = [
  { id: 'caravana', label: '🏎️ Convocar Caravana / Track Day', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40', icon: Compass },
  { id: 'taller', label: '🔧 Centro Servicio, Detailing & ECU', color: 'bg-amber-500/20 text-amber-300 border-amber-500/40', icon: Wrench },
  { id: 'general', label: '💬 Lounge Automotriz VIP', color: 'bg-neutral-800 text-neutral-300 border-neutral-700', icon: MessageSquare }
];

const FALLBACK_MESSAGES = {
  medellin: [
    {
      id: 'seed_1',
      channel_id: 'medellin',
      category: 'caravana',
      author_name: 'Porsche & Exotic GT Club',
      author_bike: 'Porsche 911 GT3 RS (992)',
      author_verified: true,
      content: '¡Bienvenidos al canal de Clubes y Caravanas de Medellín! Este domingo salimos a las 7:00 AM en caravana por Las Palmas hacia Llanogrande.',
      created_at: new Date(Date.now() - 1800000).toISOString()
    }
  ],
  apache_rtr: [
    {
      id: 'seed_3',
      channel_id: 'apache_rtr',
      category: 'taller',
      author_name: 'European GT Performance Lounge',
      author_bike: 'Mercedes-AMG GT 63 S',
      author_verified: true,
      content: 'Tip para motores Biturbo y cajas PDK/DCT: usar aceite sintético 0W-40 certificado (Porsche C40 / MB 229.5) y calibrar presión TPMS en frío (36/38 PSI).',
      created_at: new Date(Date.now() - 900000).toISOString()
    }
  ],
  'clan_apache-rtr-medellin': [
    {
      id: 'seed_clan_1',
      channel_id: 'clan_apache-rtr-medellin',
      category: 'caravana',
      author_name: OFFICIAL_FOUNDER_NAME,
      author_bike: 'Porsche 911 GT3 RS (992)',
      author_verified: true,
      content: '👑 ¡Bienvenidos al salón privado del Porsche & Supercar Club Antioquia! Por política oficial de AutoDash AI, cada Club Automotriz cuenta con sala exclusiva, emblema propio y respaldo directo del Fundador.',
      created_at: new Date(Date.now() - 1200000).toISOString()
    }
  ],
  'clan_night-riders-colombia': [
    {
      id: 'seed_clan_2',
      channel_id: 'clan_night-riders-colombia',
      category: 'caravana',
      author_name: OFFICIAL_FOUNDER_NAME,
      author_bike: 'Mercedes-AMG GT 63 S',
      author_verified: true,
      content: '👑 Sala privada verificada para AMG & BMW M Performance Club. Punto de encuentro de esta noche: Mall Indiana Vía Las Palmas 8:30 PM.',
      created_at: new Date(Date.now() - 950000).toISOString()
    }
  ]
};

/**
 * Comprime el logo del club VIP en el navegador (<canvas> 220x220 WebP/JPEG)
 * para que cargue al instante sin saturar la base de datos.
 */
async function compressClanLogo(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const size = 220;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, size, size);

        const ratio = Math.min(size / img.width, size / img.height);
        const w = Math.round(img.width * ratio);
        const h = Math.round(img.height * ratio);
        const x = Math.round((size - w) / 2);
        const y = Math.round((size - h) / 2);
        ctx.drawImage(img, x, y, w, h);

        resolve(canvas.toDataURL('image/webp', 0.84));
      };
      img.onerror = reject;
      img.src = ev.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function CommunityChatModal({
  isOpen,
  onClose,
  bike,
  userProfile
}) {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const isFounderUser = Boolean(
    userProfile?.plan === 'founder_vip' ||
    userProfile?.isLifetimeVip ||
    isFounderVipEmail(userProfile?.email)
  );

  // Modo de vista: 'clans' (Clubes VIP con logo propio y sala privada) | 'channels' (Canales abiertos por ciudad/moto)
  const [viewMode, setViewMode] = useState('clans');
  const [confirmDeleteSlug, setConfirmDeleteSlug] = useState(null);
  const [deletingClan, setDeletingClan] = useState(false);

  const getDeletedClanSlugs = () => {
    try {
      const raw = localStorage.getItem('autodash_deleted_clan_slugs');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const isMotorcycleLegacyClan = (c) => {
    if (!c) return true;
    const text = `${c.slug || ''} ${c.name || ''} ${c.tag || ''} ${c.motto || ''}`.toLowerCase();
    // Si tiene palabras de motos (apache, rtr, night-riders, moto, tvs, pulsar, akt, yamaha, ktm) y no es uno de nuestros clubes de autos
    if (c.slug === 'apache-rtr-medellin' || c.slug === 'night-riders-colombia') return true;
    return /\b(apache|rtr|moto|motos|motero|moteros|tvs|pulsar|bajaj|auteco|akt|yamaha|ktm|dos ruedas)\b/i.test(text);
  };

  const [clans, setClans] = useState(() => {
    const deletedSlugs = getDeletedClanSlugs();
    try {
      const saved = localStorage.getItem('autodash_luxury_clubs_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const valid = parsed.filter((c) => !deletedSlugs.includes(c.slug) && !isMotorcycleLegacyClan(c));
          if (valid.length > 0) return valid;
        }
      }
    } catch {}
    return DEFAULT_CLANS.filter((c) => !deletedSlugs.includes(c.slug));
  });

  const [activeClanSlug, setActiveClanSlug] = useState('porsche-supercar-antioquia');
  const [activeChannel, setActiveChannel] = useState('medellin');
  const [unlockedClans, setUnlockedClans] = useState(() => {
    try {
      const saved = localStorage.getItem('autodash_unlocked_clubs_v2');
      return saved ? JSON.parse(saved) : ['porsche-supercar-antioquia', 'amg-m-performance-colombia'];
    } catch {
      return ['porsche-supercar-antioquia', 'amg-m-performance-colombia'];
    }
  });
  const [inviteCodeInput, setInviteCodeInput] = useState('');
  const [inviteError, setInviteError] = useState('');
  const [rsvpClans, setRsvpClans] = useState({});

  // Modal interno para crear un nuevo Club Automotriz VIP con logo propio
  const [isCreateClanOpen, setIsCreateClanOpen] = useState(false);
  const [clanName, setClanName] = useState('');
  const [clanTag, setClanTag] = useState('');
  const [clanMotto, setClanMotto] = useState('');
  const [clanCity, setClanCity] = useState(userProfile?.city || 'Medellín');
  const [clanColor, setClanColor] = useState('#EF4444');
  const [clanIsPrivate, setClanIsPrivate] = useState(true);
  const [clanInviteCode, setClanInviteCode] = useState('MOTO4V');
  const [clanLogoDataUrl, setClanLogoDataUrl] = useState(null);
  const [creatingClan, setCreatingClan] = useState(false);
  const logoInputRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState('caravana');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [realtimeConnected, setRealtimeConnected] = useState(false);
  const messagesEndRef = useRef(null);

  const effectiveChannelId =
    viewMode === 'clans' ? `clan_${activeClanSlug}` : activeChannel;

  // Cargar clubes VIP desde Supabase al abrir
  useEffect(() => {
    if (!isOpen) return;
    let isMounted = true;

    async function fetchClans() {
      const { data, error } = await supabase
        .from('moto_clans')
        .select('*')
        .order('created_at', { ascending: false });

      if (isMounted && !error && Array.isArray(data) && data.length > 0) {
        const deletedSlugs = getDeletedClanSlugs();
        // Filtrar estrictamente cualquier clan de motos (Apache, RTR, MotoDash) de la tabla compartida
        const remoteCarClubs = data
          .filter((c) => !deletedSlugs.includes(c.slug) && !isMotorcycleLegacyClan(c))
          .map((c) => ({
            ...c,
            founder_name: OFFICIAL_FOUNDER_NAME
          }));
        const seedClubs = DEFAULT_CLANS.filter(
          (d) => !deletedSlugs.includes(d.slug) && !remoteCarClubs.some((r) => r.slug === d.slug)
        );
        const mergedClubs = [...remoteCarClubs, ...seedClubs];
        setClans(mergedClubs);
        try {
          localStorage.setItem('autodash_luxury_clubs_v2', JSON.stringify(mergedClubs));
        } catch {}
      }
    }

    fetchClans();
    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  const getLocalChannelHistory = (channelKey) => {
    try {
      const raw = localStorage.getItem(`autodash_chat_${channelKey}`);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {}
    return [];
  };

  const saveLocalChannelHistory = (channelKey, msgList) => {
    try {
      localStorage.setItem(`autodash_chat_${channelKey}`, JSON.stringify(msgList.slice(-80)));
    } catch {}
  };

  // Cargar mensajes del canal o clan activo + suscripción Realtime
  useEffect(() => {
    if (!isOpen) return;
    let isMounted = true;

    async function loadChannelMessages() {
      const defaultMsgs = FALLBACK_MESSAGES[effectiveChannelId] || [
        {
          id: `welcome_${effectiveChannelId}`,
          channel_id: effectiveChannelId,
          category: 'caravana',
          author_name: OFFICIAL_FOUNDER_NAME,
          author_bike: 'Porsche 911 GT3 RS (992)',
          author_verified: true,
          is_founder: true,
          content: `👑 Sala privada del club VIP activada. Por política oficial de AutoDash AI, ${OFFICIAL_FOUNDER_NAME} hace parte de este grupo como miembro fundador garante.`,
          created_at: new Date(Date.now() - 600000).toISOString()
        }
      ];

      const cachedLocal = getLocalChannelHistory(effectiveChannelId);
      const initialMerged = [...defaultMsgs];
      cachedLocal.forEach((m) => {
        if (!initialMerged.some((x) => x.id === m.id || (x.content === m.content && x.author_name === m.author_name))) {
          initialMerged.push(m);
        }
      });

      if (isMounted) {
        setMessages(initialMerged);
      }

      const authUid = await getAuthenticatedUserId();
      if (!authUid) return;

      const { data, error } = await supabase
        .from('community_messages')
        .select('*')
        .eq('channel_id', effectiveChannelId)
        .order('created_at', { ascending: true })
        .limit(60);

      if (isMounted && !error && Array.isArray(data) && data.length > 0) {
        const merged = [...data];
        cachedLocal.forEach((m) => {
          if (!merged.some((x) => x.id === m.id || (x.content === m.content && x.author_name === m.author_name))) {
            merged.push(m);
          }
        });
        setMessages(merged);
        saveLocalChannelHistory(effectiveChannelId, merged);
      }
    }

    loadChannelMessages();

    const channelSub = supabase
      .channel(`community_room_${effectiveChannelId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'community_messages',
          filter: `channel_id=eq.${effectiveChannelId}`
        },
        (payload) => {
          if (payload?.new && isMounted) {
            setMessages((prev) => {
              if (prev.some((m) => m.id === payload.new.id)) return prev;
              return [...prev, payload.new];
            });
          }
        }
      )
      .subscribe((status) => {
        if (isMounted) setRealtimeConnected(status === 'SUBSCRIBED');
      });

    return () => {
      isMounted = false;
      supabase.removeChannel(channelSub);
    };
  }, [isOpen, effectiveChannelId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const identity = bike?.config?.bikeIdentity || {};
  const bikeLabel = `${identity.brand || 'Porsche'} ${identity.model || ''}`.trim();
  const currentClan = clans.find((c) => c.slug === activeClanSlug) || clans[0] || null;

  // Verificar si el usuario actual es el fundador del club o el Fundador VIP (ambos pueden eliminar el club)
  const isCurrentClanCreator = Boolean(
    currentClan &&
    (
      (userProfile?.id && currentClan.creator_id && String(currentClan.creator_id) === String(userProfile.id)) ||
      (userProfile?.email && currentClan.creator_email && String(currentClan.creator_email).toLowerCase() === String(userProfile.email).toLowerCase()) ||
      (userProfile?.fullName && currentClan.creator_name && String(currentClan.creator_name).trim().toLowerCase() === String(userProfile.fullName).trim().toLowerCase())
    )
  );
  const canDeleteCurrentClan = Boolean(currentClan && (isFounderUser || isCurrentClanCreator));

  // El Fundador VIP o el creador o quien haya desbloqueado el club tiene acceso directo al espacio privado
  const hasClanAccess =
    isFounderUser ||
    isCurrentClanCreator ||
    !currentClan?.is_private ||
    unlockedClans.includes(currentClan?.slug);

  const handleDeleteClan = async (clanToDelete) => {
    if (!clanToDelete) return;
    setDeletingClan(true);
    try {
      // 1. Registrar slug eliminado localmente para que no reaparezca si era un club VIP semilla
      const prevDeleted = getDeletedClanSlugs();
      const nextDeleted = Array.from(new Set([...prevDeleted, clanToDelete.slug]));
      localStorage.setItem('autodash_deleted_clan_slugs', JSON.stringify(nextDeleted));
      localStorage.removeItem(`autodash_chat_clan_${clanToDelete.slug}`);

      // 2. Eliminar de Supabase si hay sesión autenticada (permitido por RLS al creador o al Fundador VIP)
      try {
        const authUid = await getAuthenticatedUserId();
        if (authUid) {
          await supabase.from('moto_clans').delete().eq('slug', clanToDelete.slug);
          if (clanToDelete.id && !String(clanToDelete.id).startsWith('clan_')) {
            await supabase.from('moto_clans').delete().eq('id', clanToDelete.id);
          }
          await supabase.from('community_messages').delete().eq('channel_id', `clan_${clanToDelete.slug}`);
        }
      } catch {}

      // 3. Actualizar lista local de clubes VIP y seleccionar el siguiente disponible
      const remaining = clans.filter((c) => c.slug !== clanToDelete.slug);
      setClans(remaining);
      localStorage.setItem('autodash_custom_clans', JSON.stringify(remaining));
      setConfirmDeleteSlug(null);

      if (remaining.length > 0) {
        setActiveClanSlug(remaining[0].slug);
      } else {
        setActiveClanSlug('');
      }
    } finally {
      setDeletingClan(false);
    }
  };

  const handleLogoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await compressClanLogo(file);
      setClanLogoDataUrl(dataUrl);
    } catch (err) {
      console.warn('Error procesando logo del club VIP:', err);
    }
  };

  const handleCreateClan = async (e) => {
    e.preventDefault();
    const cleanName = clanName.trim();
    if (!cleanName) return;

    setCreatingClan(true);
    const cleanTag = (clanTag.trim() || cleanName.slice(0, 6)).toUpperCase().replace(/[^A-Z0-9-]/g, '');
    const slug = `${cleanName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now().toString().slice(-4)}`;
    const cleanInvite = (clanInviteCode.trim() || 'CLAN4V').toUpperCase();
    const creatorLabel = userProfile?.fullName || 'Líder de Clan';

    const newClanObject = {
      id: `clan_${Date.now()}`,
      slug,
      name: cleanName,
      tag: cleanTag || 'CLAN',
      motto: clanMotto.trim() || 'Hermandad en dos ruedas, nadie se queda atrás',
      city: clanCity.trim() || 'Medellín',
      country: userProfile?.country || 'Colombia',
      logo_url: clanLogoDataUrl,
      accent_color: clanColor,
      is_private: clanIsPrivate,
      invite_code: cleanInvite,
      creator_id: userProfile?.id || null,
      creator_email: userProfile?.email || '',
      creator_name: creatorLabel,
      // POLÍTICA OBLIGATORIA: En todo clan creado se incluye siempre al usuario Fundador
      founder_name: OFFICIAL_FOUNDER_NAME,
      founder_policy_enforced: true,
      member_count: 2
    };

    try {
      const authUid = await getAuthenticatedUserId();
      if (authUid) {
        const { data, error } = await supabase
          .from('moto_clans')
          .insert({
            slug: newClanObject.slug,
            name: newClanObject.name,
            tag: newClanObject.tag,
            motto: newClanObject.motto,
            city: newClanObject.city,
            country: newClanObject.country,
            logo_url: newClanObject.logo_url,
            accent_color: newClanObject.accent_color,
            is_private: newClanObject.is_private,
            invite_code: newClanObject.invite_code,
            creator_id: authUid,
            creator_name: creatorLabel,
            founder_name: OFFICIAL_FOUNDER_NAME
          })
          .select()
          .single();

        if (!error && data) {
          newClanObject.id = data.id;
        }
      }

      const nextClans = [newClanObject, ...clans];
      setClans(nextClans);
      const nextUnlocked = Array.from(new Set([...unlockedClans, slug]));
      setUnlockedClans(nextUnlocked);
      try {
        localStorage.setItem('autodash_custom_clans', JSON.stringify(nextClans));
        localStorage.setItem('autodash_unlocked_clans', JSON.stringify(nextUnlocked));
      } catch {}

      setActiveClanSlug(slug);
      setViewMode('clans');
      setIsCreateClanOpen(false);
      setClanName('');
      setClanTag('');
      setClanMotto('');
      setClanLogoDataUrl(null);
    } finally {
      setCreatingClan(false);
    }
  };

  const handleUnlockClan = async (e) => {
    e.preventDefault();
    if (!currentClan) return;
    const cleanCode = inviteCodeInput.trim().toUpperCase();

    try {
      const authUid = await getAuthenticatedUserId();
      if (authUid) {
        const { data } = await supabase.rpc('join_moto_clan_with_code', {
          p_clan_slug: currentClan.slug,
          p_invite_code: cleanCode,
          p_member_name: userProfile?.fullName || 'Piloto Clan',
          p_member_bike: bikeLabel
        });
        if (data?.success) {
          const nextUnlocked = Array.from(new Set([...unlockedClans, currentClan.slug]));
          setUnlockedClans(nextUnlocked);
          setInviteCodeInput('');
          setInviteError('');
          localStorage.setItem('autodash_unlocked_clans', JSON.stringify(nextUnlocked));
          return;
        }
      }
    } catch {}

    if (cleanCode === String(currentClan.invite_code || '').toUpperCase()) {
      const nextUnlocked = Array.from(new Set([...unlockedClans, currentClan.slug]));
      setUnlockedClans(nextUnlocked);
      setInviteCodeInput('');
      setInviteError('');
      try {
        localStorage.setItem('autodash_unlocked_clans', JSON.stringify(nextUnlocked));
      } catch {}
    } else {
      setInviteError(
        isEn
          ? 'Invalid clan invite code. Ask the clan leader or Founder VIP.'
          : 'Código de invitación incorrecto. Solicítalo al líder del club VIP.'
      );
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const cleanText = newMessage.trim();
    if (!cleanText) return;

    setSending(true);
    const authorName = isFounderUser
      ? OFFICIAL_FOUNDER_NAME
      : userProfile?.fullName || 'Piloto MotoDash';
    const currentChannelObj = COMMUNITY_CHANNELS.find((c) => c.id === activeChannel);

    // 1. Mostrar inmediatamente el mensaje en la sala del club VIP y guardarlo en caché local
    const optimisticMsg = {
      id: `local_${Date.now()}`,
      channel_id: effectiveChannelId,
      category: selectedCategory,
      author_name: authorName,
      author_bike: bikeLabel,
      author_verified: Boolean(userProfile || isFounderUser),
      is_founder: isFounderUser,
      content: cleanText,
      city: viewMode === 'clans' ? currentClan?.city || 'Medellín' : currentChannelObj?.city || 'Medellín',
      created_at: new Date().toISOString()
    };

    setMessages((prev) => {
      const updated = [...prev, optimisticMsg];
      saveLocalChannelHistory(effectiveChannelId, updated);
      return updated;
    });
    setNewMessage('');

    // 2. Sincronizar también en Supabase Realtime si hay sesión activa
    try {
      const authUid = await getAuthenticatedUserId();
      if (authUid) {
        const { data, error } = await supabase
          .from('community_messages')
          .insert({
            user_id: authUid,
            channel_id: effectiveChannelId,
            category: selectedCategory,
            author_name: authorName,
            author_bike: bikeLabel,
            author_verified: true,
            content: cleanText,
            city: optimisticMsg.city
          })
          .select()
          .single();

        if (!error && data) {
          setMessages((prev) => {
            const replaced = prev.map((m) => (m.id === optimisticMsg.id ? data : m));
            saveLocalChannelHistory(effectiveChannelId, replaced);
            return replaced;
          });
        }
      }
    } catch {
      // Queda persistido localmente en la sala del club VIP
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-5 overflow-y-auto animate-fadeIn">
      <div className="bg-neutral-950 border-2 border-amber-500/40 rounded-3xl max-w-5xl w-full p-4 sm:p-6 shadow-[0_0_50px_rgba(245,158,11,0.16)] text-white flex flex-col max-h-[94vh] overflow-y-auto my-auto">
        {/* ENCABEZADO DE COMUNIDAD Y CLANES MOTEROS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center gap-1">
                  <Radio className="w-3 h-3 animate-pulse" />
                  <span>{realtimeConnected ? 'SUPABASE REALTIME ACTIVO' : 'CLANES & COMUNIDAD EN VIVO'}</span>
                </span>
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                  <Crown className="w-3 h-3 text-amber-400" />
                  <span>Fundador en todos los Clubes VIP: {OFFICIAL_FOUNDER_NAME}</span>
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-black font-racing uppercase tracking-wider text-white mt-0.5">
                {isEn
                  ? 'Luxury Car Clubs, Custom Club Logos & Live Community'
                  : 'Clubes Automotrices VIP con Logo Propio & Comunidad en Vivo'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              type="button"
              onClick={() => setIsCreateClanOpen(!isCreateClanOpen)}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-racing font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
            >
              <Plus className="w-4 h-4" />
              <span>{isEn ? 'Create Luxury Car Club' : 'Crear Club Automotriz VIP'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CONMUTADOR ENTRE CLANES PRIVADOS Y CANALES PÚBLICOS */}
        <div className="flex items-center justify-between gap-2 py-2.5 border-b border-neutral-800/80 flex-wrap">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setViewMode('clans')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-racing font-bold uppercase tracking-wider flex items-center gap-1.5 border transition ${
                viewMode === 'clans'
                  ? 'bg-amber-500 text-black border-amber-400 shadow-md'
                  : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:text-white'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>🛡️ {isEn ? `Luxury Car Clubs (${clans.length})` : `Clubes VIP & Grupos Conductors (${clans.length})`}</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('channels')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-racing font-bold uppercase tracking-wider flex items-center gap-1.5 border transition ${
                viewMode === 'channels'
                  ? 'bg-emerald-500 text-black border-emerald-400 shadow-md'
                  : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>🌐 {isEn ? 'City & Bike Channels' : 'Canales Abiertos por Ciudad'}</span>
            </button>
          </div>

          <span className="text-[11px] font-mono text-neutral-400 hidden md:inline">
            {isEn
              ? 'Each clan keeps its own logo, identity & private room'
              : 'Cada grupo conductor conserva su propio logo, identidad y espacio privado'}
          </span>
        </div>

        {/* FORMULARIO DESPLEGABLE PARA CREAR UN NUEVO CLAN CON SU PROPIO LOGO */}
        {isCreateClanOpen && (
          <form
            onSubmit={handleCreateClan}
            className="my-3 p-4 rounded-2xl bg-neutral-900/95 border-2 border-amber-500/50 space-y-3 overflow-y-auto max-h-[65vh] animate-fadeIn"
          >
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-black font-racing uppercase tracking-wider text-amber-300">
                  {isEn ? 'Create Official Luxury Car Club & Upload Club Logo' : 'Crear Nuevo Club / Club Conductor con Logo Propio'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCreateClanOpen(false)}
                className="text-xs font-mono text-neutral-400 hover:text-white"
              >
                {isEn ? 'Cancel' : 'Cerrar'}
              </button>
            </div>

            {/* AVISO DE POLÍTICA OBLIGATORIA: FUNDADOR INCLUIDO AUTOMÁTICAMENTE */}
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-start gap-2.5">
              <Crown className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] font-mono text-amber-200 leading-relaxed">
                <strong>Política Oficial de Gobernanza AutoDash AI:</strong> Al crear cualquier clan o espacio privado, tu grupo tendrá su propio logo, colores y código de acceso privado, y por políticas de la plataforma el usuario Fundador (<strong>👑 {OFFICIAL_FOUNDER_NAME}</strong>) queda incluido automáticamente como miembro fundador permanente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* SUBIDA DEL LOGO DEL CLAN */}
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center text-center">
                <input
                  ref={logoInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoUpload}
                />
                <div
                  onClick={() => logoInputRef.current?.click()}
                  style={{ borderColor: clanColor }}
                  className="w-16 h-16 rounded-2xl border-2 bg-neutral-900 flex items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition mb-2"
                >
                  {clanLogoDataUrl ? (
                    <img src={clanLogoDataUrl} alt="Logo Clan" className="w-full h-full object-cover" />
                  ) : (
                    <Shield className="w-8 h-8" style={{ color: clanColor }} />
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => logoInputRef.current?.click()}
                  className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold flex items-center gap-1"
                >
                  <Upload className="w-3 h-3" />
                  <span>{clanLogoDataUrl ? 'Cambiar Emblema del Club VIP' : 'Subir Emblema del Club VIP'}</span>
                </button>
              </div>

              {/* DATOS DE IDENTIDAD DEL CLAN */}
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                    Nombre del Club Automotriz / Grupo Conductor *
                  </label>
                  <input
                    type="text"
                    required
                    value={clanName}
                    onChange={(e) => setClanName(e.target.value)}
                    placeholder="Ej: Lobos del Asfalto Medellín"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                    Sigla / Tag Oficial (Ej: LOBOS, RTR4V)
                  </label>
                  <input
                    type="text"
                    maxLength={10}
                    value={clanTag}
                    onChange={(e) => setClanTag(e.target.value)}
                    placeholder="LOBOS-MDE"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs font-mono uppercase text-amber-300"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                    Ciudad Sede
                  </label>
                  <input
                    type="text"
                    value={clanCity}
                    onChange={(e) => setClanCity(e.target.value)}
                    placeholder="Medellín"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                    Código de Acceso Privado
                  </label>
                  <input
                    type="text"
                    maxLength={10}
                    value={clanInviteCode}
                    onChange={(e) => setClanInviteCode(e.target.value.toUpperCase())}
                    placeholder="MOTO4V"
                    className="w-full bg-neutral-950 border border-emerald-500/50 rounded-xl px-3 py-2 text-xs font-mono uppercase text-emerald-300"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                    Lema / Identidad del Grupo
                  </label>
                  <input
                    type="text"
                    value={clanMotto}
                    onChange={(e) => setClanMotto(e.target.value)}
                    placeholder="Ej: Caravanas & Track Days todos los jueves 8:00 PM • Respeto y hermandad"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>
            </div>

            {/* COLOR DE IDENTIDAD Y PRIVACIDAD */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase text-neutral-400">Color del Club VIP:</span>
                {CLAN_COLOR_PRESETS.map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => setClanColor(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    className={`w-5 h-5 rounded-full transition ${
                      clanColor === c.hex ? 'ring-2 ring-white scale-110' : 'opacity-70'
                    }`}
                    title={c.name}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setClanIsPrivate(!clanIsPrivate)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono border flex items-center gap-1.5 ${
                    clanIsPrivate
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  }`}
                >
                  {clanIsPrivate ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                  <span>{clanIsPrivate ? 'Espacio Privado (Con Código)' : 'Club Abierto'}</span>
                </button>

                <button
                  type="submit"
                  disabled={creatingClub || !clanName.trim()}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-racing font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{creatingClub ? 'Creando Clan...' : 'Fundar Club Automotriz VIP'}</span>
                </button>
              </div>
            </div>
          </form>
        )}

        {/* CARRUSEL DE CLANES MOTEROS (CON LOGOS PROPIOS) O CANALES PÚBLICOS */}
        {viewMode === 'clans' ? (
          <div className="space-y-2.5 pt-2.5">
            <div className="flex gap-2 overflow-x-auto pb-2 border-b border-neutral-800/80 no-scrollbar">
              {clans.map((clan) => {
                const isSelected = clan.slug === activeClanSlug;
                return (
                  <button
                    key={clan.slug}
                    type="button"
                    onClick={() => {
                      setActiveClanSlug(clan.slug);
                      setInviteError('');
                    }}
                    style={
                      isSelected
                        ? { borderColor: clan.accent_color || '#F59E0B' }
                        : undefined
                    }
                    className={`px-3 py-2 rounded-2xl text-left flex items-center gap-2.5 border-2 whitespace-nowrap transition flex-shrink-0 ${
                      isSelected
                        ? 'bg-neutral-900 text-white shadow-lg'
                        : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div
                      style={{ borderColor: clan.accent_color || '#F59E0B' }}
                      className="w-9 h-9 rounded-xl border bg-neutral-950 flex items-center justify-center overflow-hidden flex-shrink-0"
                    >
                      {clan.logo_url ? (
                        <img src={clan.logo_url} alt={clan.name} className="w-full h-full object-cover" />
                      ) : (
                        <Shield className="w-5 h-5" style={{ color: clan.accent_color || '#F59E0B' }} />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-neutral-800 text-amber-300">
                          [{clan.tag}]
                        </span>
                        <span className="text-xs font-bold text-white">{clan.name}</span>
                        {clan.is_private && <Lock className="w-3 h-3 text-amber-400" />}
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 block">
                        📍 {clan.city} • 👑 {OFFICIAL_FOUNDER_NAME}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* BANNER DE IDENTIDAD DEL CLAN SELECCIONADO + GOBERNANZA FUNDADOR */}
            {currentClub && (
              <div
                style={{ borderColor: `${currentClan.accent_color || '#F59E0B'}66` }}
                className="p-3 rounded-2xl bg-neutral-900/95 border flex flex-col md:flex-row md:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    style={{ borderColor: currentClan.accent_color || '#F59E0B' }}
                    className="w-12 h-12 rounded-2xl border-2 bg-neutral-950 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-md"
                  >
                    {currentClan.logo_url ? (
                      <img src={currentClan.logo_url} alt={currentClan.name} className="w-full h-full object-cover" />
                    ) : (
                      <Shield className="w-6 h-6" style={{ color: currentClan.accent_color || '#F59E0B' }} />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        style={{
                          backgroundColor: `${currentClan.accent_color || '#F59E0B'}25`,
                          color: currentClan.accent_color || '#F59E0B',
                          borderColor: `${currentClan.accent_color || '#F59E0B'}60`
                        }}
                        className="text-[10px] font-mono font-black px-2 py-0.5 rounded-md border"
                      >
                        [{currentClan.tag}]
                      </span>
                      <h3 className="text-sm sm:text-base font-black font-racing uppercase text-white">
                        {currentClan.name}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
                        {currentClan.is_private ? '🔒 Sala Privada del Club VIP' : '🔓 Sala Abierta'}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 font-mono mt-0.5">
                      "{currentClan.motto}" • Sede: {currentClan.city}
                    </p>
                  </div>
                </div>

                {/* INSIGNIAS DE POLÍTICA OFICIAL: EL FUNDADOR SIEMPRE ESTÁ EN EL GRUPO */}
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                  <div
                    className="px-2.5 py-1 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/15 border border-amber-400/50 text-amber-200 flex items-center gap-1.5"
                    title={OFFICIAL_FOUNDER_ROLE_LABEL}
                  >
                    <Crown className="w-3.5 h-3.5 text-amber-400" />
                    <span>
                      <strong>Fundador Oficial:</strong> {OFFICIAL_FOUNDER_NAME}
                    </span>
                  </div>

                  <div className="px-2.5 py-1 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300">
                    🛡️ <strong>Líder:</strong> {currentClan.creator_name || 'Capitán de Clan'}
                  </div>

                  {hasClanAccess && currentClan.invite_code && (
                    <div className="px-2.5 py-1 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                      🔑 Código Clan: <strong>{currentClan.invite_code}</strong>
                    </div>
                  )}

                  {hasClanAccess && (
                    <button
                      type="button"
                      onClick={() =>
                        setRsvpClans((prev) => ({
                          ...prev,
                          [currentClan.slug]: !prev[currentClan.slug]
                        }))
                      }
                      className={`px-2.5 py-1 rounded-xl border font-bold transition flex items-center gap-1 ${
                        rsvpClans[currentClan.slug]
                          ? 'bg-emerald-500 text-black border-emerald-400'
                          : 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>
                        {rsvpClans[currentClan.slug]
                          ? `✅ Confirmado en Caravana (${(currentClan.member_count || 12) + 1} autos)`
                          : `🏍️ Confirmar Caravana (${currentClan.member_count || 12} autos)`}
                      </span>
                    </button>
                  )}

                  {/* BOTÓN PARA ELIMINAR CLAN: VISIBLE SOLO PARA EL FUNDADOR VIP O EL CREADOR DEL CLAN */}
                  {canDeleteCurrentClub && (
                    confirmDeleteSlug === currentClan.slug ? (
                      <div className="flex items-center gap-1 bg-red-950/90 border border-red-500 rounded-xl px-2 py-1">
                        <span className="text-red-200 font-bold">¿Eliminar clan?</span>
                        <button
                          type="button"
                          disabled={deletingClan}
                          onClick={() => handleDeleteClan(currentClan)}
                          className="px-2 py-0.5 rounded bg-red-600 hover:bg-red-500 text-white font-bold"
                        >
                          {deletingClub ? 'Borrando...' : 'Sí, Eliminar'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteSlug(null)}
                          className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300"
                        >
                          No
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteSlug(currentClan.slug)}
                        className="px-2.5 py-1 rounded-xl bg-red-950/70 hover:bg-red-900 border border-red-500/50 text-red-300 font-bold flex items-center gap-1 transition"
                        title={
                          isFounderUser
                            ? 'Eliminar este clan (Permiso Fundador VIP)'
                            : 'Eliminar tu club VIP creado'
                        }
                      >
                        <Trash2 className="w-3.5 h-3.5 text-red-400" />
                        <span>Eliminar Club VIP</span>
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-1.5 overflow-x-auto py-3 border-b border-neutral-800/80 no-scrollbar">
            {COMMUNITY_CHANNELS.map((ch) => {
              const active = ch.id === activeChannel;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setActiveChannel(ch.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap border transition ${
                    active
                      ? 'bg-emerald-500 text-black font-bold border-emerald-400 shadow-md'
                      : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                  }`}
                >
                  {ch.label}
                </button>
              );
            })}
          </div>
        )}

        {/* SI EL CLAN ES PRIVADO Y EL USUARIO NO HA INGRESADO EL CÓDIGO (EXCEPTO EL FUNDADOR QUE TIENE LLAVE MAESTRA) */}
        {viewMode === 'clans' && !hasClanAccess ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center my-auto">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-3">
              <KeyRound className="w-8 h-8" />
            </div>
            <h3 className="text-base sm:text-lg font-black font-racing uppercase text-white">
              Espacio Privado de {currentClan?.name} [{currentClan?.tag}]
            </h3>
            <p className="text-xs font-mono text-neutral-400 max-w-md mt-1">
              Este grupo conductor protege su identidad y rutas privadas con código de invitación.
              (Nota: El Fundador <strong>👑 {OFFICIAL_FOUNDER_NAME}</strong> cuenta con acceso directo por política oficial).
            </p>

            <form onSubmit={handleUnlockClan} className="mt-4 flex gap-2 w-full max-w-xs">
              <input
                type="text"
                value={inviteCodeInput}
                onChange={(e) => setInviteCodeInput(e.target.value.toUpperCase())}
                placeholder={`Código (Ej: ${currentClan?.invite_code || 'RTR4V1'})`}
                className="flex-1 bg-neutral-900 border border-amber-500/50 rounded-xl px-3 py-2 text-xs font-mono uppercase text-white text-center"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-amber-500 text-black font-racing font-bold text-xs uppercase"
              >
                Entrar
              </button>
            </form>
            {inviteError && (
              <p className="text-xs font-mono text-red-400 mt-2">{inviteError}</p>
            )}
          </div>
        ) : (
          <>
            {/* FEED DE MENSAJES EN TIEMPO REAL DEL CLAN O CANAL */}
            <div className="flex-1 min-h-[240px] sm:min-h-[300px] max-h-[380px] overflow-y-auto py-3 px-3 space-y-2.5 bg-neutral-900/50 rounded-2xl border border-neutral-800/90 my-2.5">
              {messages.map((msg) => {
                const isSosAlert =
                  msg.is_sos ||
                  msg.category === 'alerta_vial' ||
                  String(msg.content || '').includes('[SOS') ||
                  String(msg.content || '').includes('[ALERTA SOS');
                const cat = isSosAlert
                  ? { id: 'alerta_vial', label: '🚨 ALERTA SOS / COORDENADAS GPS', color: 'bg-red-600 text-white border-red-400 font-bold' }
                  : MESSAGE_CATEGORIES.find((c) => c.id === msg.category) || MESSAGE_CATEGORIES[2];
                const isMsgFromFounder =
                  msg.is_founder ||
                  String(msg.author_name || '').toLowerCase().includes('anderson') ||
                  String(msg.author_name || '').toLowerCase().includes('fundador');
                const timeStr = msg.created_at
                  ? new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  : 'Ahora';

                // Extraer URL de Google Maps si el mensaje contiene coordenadas de emergencia
                const mapsMatch = String(msg.content || '').match(/https:\/\/www\.google\.com\/maps\?q=[-0-9.,]+/);
                const extractedMapsUrl = msg.maps_url || (mapsMatch ? mapsMatch[0] : null);
                const coordsTextMatch = extractedMapsUrl
                  ? extractedMapsUrl.split('q=')[1]
                  : null;

                return (
                  <div
                    key={msg.id}
                    className={`p-3.5 rounded-2xl border transition ${
                      isSosAlert
                        ? 'bg-gradient-to-r from-red-950/80 via-red-900/40 to-neutral-950 border-2 border-red-500 shadow-lg shadow-red-600/20'
                        : isMsgFromFounder
                        ? 'bg-gradient-to-r from-amber-950/45 via-neutral-900 to-neutral-900 border-amber-500/60 shadow-md'
                        : 'bg-neutral-950/95 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-white flex items-center gap-1">
                          {isMsgFromFounder && <Crown className="w-3.5 h-3.5 text-amber-400" />}
                          {msg.author_name}
                          {msg.author_verified && (
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" title="Piloto Verificado" />
                          )}
                        </span>
                        {isMsgFromFounder && (
                          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500 text-black uppercase">
                            FUNDADOR OFICIAL
                          </span>
                        )}
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-neutral-900 text-amber-400 border border-neutral-800 flex items-center gap-1">
                          <Bike className="w-3 h-3" />
                          {msg.author_bike}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${cat.color}`}>
                          {cat.label}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400">{timeStr}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white font-medium leading-relaxed break-words">{msg.content}</p>

                    {extractedMapsUrl && (
                      <div className="mt-2.5 pt-2 border-t border-red-500/30 flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-mono text-amber-300 font-bold">
                          📍 Coordenadas GPS: {coordsTextMatch || 'Ubicación Exacta'}
                        </span>
                        <a
                          href={extractedMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-racing font-black uppercase text-xs flex items-center gap-1.5 shadow-md transition"
                        >
                          <Compass className="w-3.5 h-3.5" />
                          <span>Abrir Ubicación del Accidente en Google Maps →</span>
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* COMPOSITOR DE MENSAJES EN SALA PRIVADA DE CLAN O CANAL PÚBLICO */}
            <form onSubmit={handleSendMessage} className="pt-2 border-t border-neutral-800 space-y-2.5 flex-shrink-0">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                <span className="text-[10px] font-mono text-neutral-400 uppercase mr-1">Etiqueta:</span>
                {MESSAGE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono border whitespace-nowrap transition ${
                      selectedCategory === cat.id
                        ? cat.color
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder={
                    viewMode === 'clans'
                      ? `Escribe en la sala privada de ${currentClan?.name} [${currentClan?.tag}]...`
                      : 'Escribe al canal de tu ciudad o convoca una caravana...'
                  }
                  maxLength={500}
                  className="flex-1 bg-neutral-900 border-2 border-amber-500/40 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  disabled={sending || !newMessage.trim()}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-racing font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-amber-500/20 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
