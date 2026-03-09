export interface Feature {
  iconName: 'GraduationCap' | 'Briefcase' | 'Home' | 'Plane' | 'Heart' | 'Wallet' | 'Languages' | 'Users';
  title: string;
  description: string;
  color: string;
  gradient: string;
}

export const FEATURES: Feature[] = [
  {
    iconName: 'GraduationCap',
    title: 'Eğitim',
    description: 'Almanya\'da üniversite eğitimi, burslar ve dil kursları hakkında detaylı bilgi.',
    color: '#4285F4',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    iconName: 'Briefcase',
    title: 'Kariyer',
    description: 'İş bulma stratejileri, CV hazırlama ve mülakat teknikleri.',
    color: '#EA4335',
    gradient: 'from-red-400 to-red-600',
  },
  {
    iconName: 'Home',
    title: 'Konaklama',
    description: 'Ev kiralama, WG bulma ve uygun fiyatlı konaklama seçenekleri.',
    color: '#FBBC05',
    gradient: 'from-yellow-400 to-yellow-600',
  },
  {
    iconName: 'Plane',
    title: 'Vize & Göç',
    description: 'Vize başvurusu, oturum izni ve göçmenlik süreçleri.',
    color: '#34A853',
    gradient: 'from-green-400 to-green-600',
  },
  {
    iconName: 'Heart',
    title: 'Sağlık',
    description: 'Sağlık sigortası, doktor bulma ve acil durumlar.',
    color: '#4285F4',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    iconName: 'Wallet',
    title: 'Finans',
    description: 'Banka hesabı açma, vergiler ve bütçe yönetimi.',
    color: '#EA4335',
    gradient: 'from-red-400 to-red-600',
  },
  {
    iconName: 'Languages',
    title: 'Dil',
    description: 'Almanca öğrenme kaynakları ve dil pratiği ipuçları.',
    color: '#FBBC05',
    gradient: 'from-yellow-400 to-yellow-600',
  },
  {
    iconName: 'Users',
    title: 'Topluluk',
    description: 'Türk öğrenci toplulukları ve sosyal etkinlikler.',
    color: '#34A853',
    gradient: 'from-green-400 to-green-600',
  },
];
