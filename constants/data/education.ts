export interface Program {
  title: string;
  duration: string;
  description: string;
  features: string[];
  color: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: any;
}

export const PROGRAMS: Program[] = [
  {
    title: 'Lisans',
    duration: '3-4 Yıl',
    description: 'Almanya\'da lisans eğitimi ile dünya standartlarında bir diplomasahibi olun.',
    features: ['Ücretsiz eğitim', 'İngilizce programlar', 'Staj imkanları'],
    color: '#4285F4',
  },
  {
    title: 'Yüksek Lisans',
    duration: '1-2 Yıl',
    description: 'Uzmanlaşmak istediğiniz alanda yüksek lisans yapın.',
    features: ['Research focus', 'DAAD bursları', 'Endüstri bağlantıları'],
    color: '#EA4335',
  },
  {
    title: 'Doktora',
    duration: '3-5 Yıl',
    description: 'Almanya\'da doktora ile akademik kariyerinizi güçlendirin.',
    features: ['Tam burs', 'Araştırma fonları', 'Uluslararası network'],
    color: '#34A853',
  },
];

export const EDUCATION_STATS: Stat[] = [
  { value: '400+', label: 'Üniversite', icon: null },
  { value: '20.000+', label: 'Program', icon: null },
  { value: '350.000+', label: 'Uluslararası Öğrenci', icon: null },
  { value: '18 ay', label: 'İş Arama Vizesi', icon: null },
];
