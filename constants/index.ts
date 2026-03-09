export const GOOGLE_COLORS = {
  BLUE: '#4285F4',
  RED: '#EA4335',
  YELLOW: '#FBBC05',
  GREEN: '#34A853',
} as const;

export const GOOGLE_COLOR_ARRAY = [
  GOOGLE_COLORS.BLUE,
  GOOGLE_COLORS.RED,
  GOOGLE_COLORS.YELLOW,
  GOOGLE_COLORS.GREEN,
] as const;

export const NAVIGATION_ITEMS = [
  { name: 'Ana Sayfa', href: '#hero' },
  { name: 'Hakkında', href: '#about' },
  { name: 'İletişim', href: '#contact' },
] as const;
