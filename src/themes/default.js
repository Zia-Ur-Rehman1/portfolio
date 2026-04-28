const fonts = {
  title: 'Space Grotesk, sans-serif',
  main: 'Inter, sans-serif',
};

const breakpoints = {
  xs: 'screen and (max-width: 450px)',
  sm: 'screen and (max-width: 640px)',
  md: 'screen and (max-width: 768px)',
  lg: 'screen and (max-width: 1024px)',
  xl: 'screen and (max-width: 1280px)',
};

// Brand accents — same in both themes
const sharedAccents = {
  accentCyan: '#13ADC7',
  accentCyanBright: '#00DBD8',
  accentPurple: '#945DD6',
  accentPurpleBright: '#B133FF',
  accentOrange: '#F46737',
  accentOrangeBright: '#ff622e',
  accentGreen: '#22c55e',
  accentMint: '#6ee7b7',
  accentSky: '#38bdf8',
  accentLightBlue: '#9cc9e3',
  accentBlue: '#2575fc',
  accentDeepPurple: '#6a11cb',
  accentReadMore: '#93c5fd',
  accentCyanGlow: '#a5f3fc',
  accentSuccessLight: '#a5f3fc',
  accentErrorLight: '#fecdd3',
  statIconGradient: 'radial-gradient(circle, #3b82f6, #8b5cf6)',
  brandGradient: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
  brandGradientCool: 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)',
  brandGradientWarm: 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)',
  brandGradientDivider: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
  brandGradientDividerAlt: 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)',
  ctaGradient: 'linear-gradient(120deg, #13adc7 0%, #945dd6 100%)',
  buttonGradient: 'linear-gradient(270deg, #6a11cb 0%, #2575fc 100%)',
  buttonGradientHover: 'linear-gradient(270deg, #2575fc 0%, #6a11cb 100%)',
  pillBg: '#334155',
  tagYellow: '#d0bb57',
};

export const darkTheme = {
  name: 'dark',
  fonts,
  breakpoints,
  colors: {
    // Backgrounds
    background1: '#0F1624',
    background2: 'hsl(232.7,27.3%,23.7%)',
    sectionBg: '#0f172a',
    cardBg: '#1e293b',
    cardBgAlt: '#212d45',
    cardBgHover: '#2b3952',
    modalBg: '#111827',
    inputBg: 'rgba(15, 23, 42, 0.65)',
    contactCardBg: 'rgba(9, 15, 28, 0.9)',
    overlayDim: 'rgba(0, 0, 0, 0.6)',

    // Text
    primary1: 'hsl(204,23.8%,95.9%)',
    textPrimary: '#f8fafc',
    textBright: '#fff',
    textBody: '#e2e8f0',
    textBodyAlt: '#e5e7eb',
    textBodyAlt2: '#e4e6e7',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    textTertiary: 'rgba(255, 255, 255, 0.75)',
    textMuted: 'rgba(255, 255, 255, 0.5)',
    textFaint: 'rgba(255, 255, 255, 0.4)',
    textVeryFaint: 'rgba(255, 255, 255, 0.1)',
    textSoft: '#cbd5e1',
    textMutedAlt: '#94a3b8',
    textModalRole: '#9ca3af',
    textOnGradient: '#0f172a',

    // Borders
    borderSoft: 'rgba(255, 255, 255, 0.1)',
    borderFaint: 'rgba(255, 255, 255, 0.05)',
    borderHero: 'rgba(248, 250, 252, 0.5)',
    borderPurple: 'rgba(148, 93, 214, 0.45)',
    borderPurpleSoft: 'rgba(148, 93, 214, 0.35)',
    borderInputFocus: '#38bdf8',
    borderInputFocusGlow: 'rgba(56, 189, 248, 0.25)',
    borderIndigo: 'rgba(110, 112, 255, 0.35)',

    // Shadows
    shadowSm: '0 4px 6px rgba(0, 0, 0, 0.1)',
    shadowMd: '0 4px 15px rgba(0, 0, 0, 0.2)',
    shadowMdHover: '0 6px 20px rgba(0, 0, 0, 0.3)',
    shadowCard: '3px 3px 20px rgba(80, 78, 78, 0.1)',
    shadowCardHover: '3px 3px 20px rgba(80, 78, 78, 0.25)',
    shadowDeep: '0 30px 70px rgba(0, 0, 0, 0.45)',
    shadowFocusCard: '0 15px 35px rgba(0, 0, 0, 0.35)',
    shadowFocusCardHover: '0 20px 45px rgba(0, 0, 0, 0.45)',
    shadowStat: '0 4px 8px rgba(0, 0, 0, 0.15)',
    shadowStatIcon: '0 4px 12px rgba(0, 0, 0, 0.3)',
    shadowProjectBtn: '0 4px 10px rgba(0, 0, 0, 0.2)',
    shadowProjectBtnHover: '0 6px 15px rgba(0, 0, 0, 0.3)',
    shadowProjectBtnActive: '0 3px 8px rgba(0, 0, 0, 0.2)',
    shadowContact: '0 45px 120px rgba(2, 6, 23, 0.75)',
    shadowSubmit: '0 18px 30px rgba(148, 93, 214, 0.35)',
    shadowSubmitFocus: '0 0 0 3px rgba(19, 173, 199, 0.45)',
    shadowModal: '0 10px 40px rgba(0, 0, 0, 0.4)',

    // Hook + section gradients
    hookGradient: 'radial-gradient(circle at top, rgba(13, 202, 240, 0.35), rgba(15, 23, 42, 0.6))',
    focusCardGradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(147, 51, 234, 0.15))',
    focusCardBorder: 'rgba(147, 51, 234, 0.35)',
    techRadial: 'radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%)',
    contactDecorative: 'linear-gradient(120deg, rgba(56, 189, 248, 0.55), rgba(148, 93, 214, 0.55))',

    // Hero text gradient (white-to-transparent on dark)
    heroTextGradient: 'linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)',

    // Section title gradient (white-to-transparent on dark)
    sectionTitleGradient: 'linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)',

    // Header social hover bg
    socialIconHoverBg: '#212d45',

    // Achievements bullet
    achievementBullet: '#2575fc',

    // SecondaryBtn hover invert
    secondaryBtnHoverText: '#0f1624',
    secondaryBtnBorder: 'rgba(255, 255, 255, 0.33)',

    // Header Tagline accent
    tagline: '#6ee7b7',

    // Contact form
    contactInputText: '#eef2ff',
    contactInputPlaceholder: 'rgba(226, 232, 240, 0.75)',

    // Status colors
    statusSuccessText: '#a5f3fc',
    statusErrorText: '#fecdd3',

    // Accents (shared brand)
    ...sharedAccents,
    accent1: 'hsl(34.9,98.6%,72.9%)',
    button: 'hsl(205.1,100%,36.1%)',
    link: '#18C5DD',
  },
};

export const lightTheme = {
  name: 'light',
  fonts,
  breakpoints,
  colors: {
    // Backgrounds
    background1: '#f6f7fb',
    background2: '#e2e8f0',
    sectionBg: '#eef2f7',
    cardBg: '#ffffff',
    cardBgAlt: '#ffffff',
    cardBgHover: '#f1f5f9',
    modalBg: '#ffffff',
    inputBg: 'rgba(255, 255, 255, 0.95)',
    contactCardBg: 'rgba(255, 255, 255, 0.95)',
    overlayDim: 'rgba(15, 23, 42, 0.45)',

    // Text
    primary1: '#0f172a',
    textPrimary: '#0f172a',
    textBright: '#0f172a',
    textBody: '#1e293b',
    textBodyAlt: '#1e293b',
    textBodyAlt2: '#334155',
    textSecondary: 'rgba(15, 23, 42, 0.78)',
    textTertiary: 'rgba(15, 23, 42, 0.7)',
    textMuted: 'rgba(15, 23, 42, 0.55)',
    textFaint: 'rgba(15, 23, 42, 0.45)',
    textVeryFaint: 'rgba(15, 23, 42, 0.1)',
    textSoft: '#475569',
    textMutedAlt: '#64748b',
    textModalRole: '#64748b',
    textOnGradient: '#ffffff',

    // Borders
    borderSoft: 'rgba(15, 23, 42, 0.1)',
    borderFaint: 'rgba(15, 23, 42, 0.06)',
    borderHero: 'rgba(15, 23, 42, 0.2)',
    borderPurple: 'rgba(148, 93, 214, 0.45)',
    borderPurpleSoft: 'rgba(148, 93, 214, 0.35)',
    borderInputFocus: '#0891b2',
    borderInputFocusGlow: 'rgba(8, 145, 178, 0.2)',
    borderIndigo: 'rgba(110, 112, 255, 0.25)',

    // Shadows (softer in light)
    shadowSm: '0 4px 6px rgba(15, 23, 42, 0.05)',
    shadowMd: '0 4px 15px rgba(15, 23, 42, 0.08)',
    shadowMdHover: '0 6px 20px rgba(15, 23, 42, 0.12)',
    shadowCard: '3px 3px 20px rgba(15, 23, 42, 0.06)',
    shadowCardHover: '3px 3px 20px rgba(15, 23, 42, 0.12)',
    shadowDeep: '0 30px 70px rgba(15, 23, 42, 0.12)',
    shadowFocusCard: '0 15px 35px rgba(15, 23, 42, 0.1)',
    shadowFocusCardHover: '0 20px 45px rgba(15, 23, 42, 0.18)',
    shadowStat: '0 4px 8px rgba(15, 23, 42, 0.06)',
    shadowStatIcon: '0 4px 12px rgba(59, 130, 246, 0.25)',
    shadowProjectBtn: '0 4px 10px rgba(15, 23, 42, 0.08)',
    shadowProjectBtnHover: '0 6px 15px rgba(15, 23, 42, 0.15)',
    shadowProjectBtnActive: '0 3px 8px rgba(15, 23, 42, 0.1)',
    shadowContact: '0 45px 120px rgba(15, 23, 42, 0.1)',
    shadowSubmit: '0 18px 30px rgba(148, 93, 214, 0.25)',
    shadowSubmitFocus: '0 0 0 3px rgba(19, 173, 199, 0.35)',
    shadowModal: '0 10px 40px rgba(15, 23, 42, 0.18)',

    // Hook + section gradients
    hookGradient: 'linear-gradient(135deg, rgba(19, 173, 199, 0.12), rgba(148, 93, 214, 0.12))',
    focusCardGradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(147, 51, 234, 0.1))',
    focusCardBorder: 'rgba(147, 51, 234, 0.3)',
    techRadial: 'radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.12) 53.8%, rgba(79, 108, 176, 0) 100%)',
    contactDecorative: 'linear-gradient(120deg, rgba(56, 189, 248, 0.45), rgba(148, 93, 214, 0.45))',

    // Hero text gradient — white-on-light is invisible, use brand gradient instead
    heroTextGradient: 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)',

    // Section title gradient — use a dark gradient on light bg
    sectionTitleGradient: 'linear-gradient(121.57deg, #0f172a 18.77%, rgba(15, 23, 42, 0.66) 60.15%)',

    // Header social hover bg
    socialIconHoverBg: '#e2e8f0',

    // Achievements bullet
    achievementBullet: '#2575fc',

    // SecondaryBtn hover invert
    secondaryBtnHoverText: '#ffffff',
    secondaryBtnBorder: 'rgba(15, 23, 42, 0.3)',

    // Header Tagline accent
    tagline: '#0891b2',

    // Contact form
    contactInputText: '#0f172a',
    contactInputPlaceholder: 'rgba(15, 23, 42, 0.5)',

    // Status colors
    statusSuccessText: '#0891b2',
    statusErrorText: '#dc2626',

    // Accents (shared brand)
    ...sharedAccents,
    accent1: '#f59e0b',
    button: '#2563eb',
    link: '#0891b2',
  },
};

export default darkTheme;
