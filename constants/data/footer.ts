export interface SocialLink {
  icon: any;
  href: string;
  color: string;
}

export const FOOTER_LINKS: Record<string, string[]> = {
  Eğitim: ['Üniversiteler', 'Burslar', 'Dil Kursları', 'Başvuru Rehberi'],
  Kariyer: ['İş İlanları', 'CV Hazırlama', 'Mülakat', 'Vize'],
  Yaşam: ['Konaklama', 'Ulaşım', 'Sağlık', 'Bankacılık'],
  Topluluk: ['Blog', 'Podcast', 'Etkinlikler', 'Forum'],
};

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: null, href: '#', color: '#E4405F' },
  { icon: null, href: '#', color: '#FF0000' },
  { icon: null, href: '#', color: '#1DA1F2' },
  { icon: null, href: '#', color: '#0A66C2' },
];
