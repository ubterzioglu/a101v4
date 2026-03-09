export interface Industry {
  name: string;
  growth: string;
  jobs: string;
  color: string;
}

export interface Benefit {
  icon: any;
  title: string;
  desc: string;
}

export const INDUSTRIES: Industry[] = [
  { name: 'Mühendislik', growth: '+15%', jobs: '45K+', color: '#4285F4' },
  { name: 'IT & Yazılım', growth: '+22%', jobs: '62K+', color: '#EA4335' },
  { name: 'Sağlık', growth: '+12%', jobs: '38K+', color: '#34A853' },
  { name: 'Finans', growth: '+8%', jobs: '28K+', color: '#FBBC05' },
];

export const BENEFITS: Benefit[] = [
  { icon: null, title: 'Yüksek Maaş', desc: 'Ortalama €50.000+ başlangıç' },
  { icon: null, title: 'Work-Life Balance', desc: '30 gün yıllık izin' },
  { icon: null, title: 'Sosyal Güvenlik', desc: 'Kapsamlı sağlık sigortası' },
  { icon: null, title: 'Remote Work', desc: 'Esnek çalışma imkanları' },
];

export const COMPANIES = ['Siemens', 'BMW', 'SAP', 'Bosch', 'Volkswagen', 'Deutsche Bank'];
