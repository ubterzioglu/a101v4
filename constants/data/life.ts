export interface Category {
  icon: any;
  title: string;
  items: string[];
  color: string;
}

export interface City {
  name: string;
  desc: string;
  tag: string;
}

export const CATEGORIES: Category[] = [
  {
    icon: null, // Train will be imported in component
    title: 'Ulaşım',
    items: ['Deutsche Bahn', 'ÖPNV', '49€ Ticket', 'Bisiklet'],
    color: '#4285F4',
  },
  {
    icon: null, // ShoppingBag will be imported in component
    title: 'Alışveriş',
    items: ['Supermarketler', 'Online Alışveriş', 'Outlet', 'Pazarlar'],
    color: '#EA4335',
  },
  {
    icon: null, // Utensils will be imported in component
    title: 'Yemek',
    items: ['Döner & Kebap', 'Bakery', 'International', 'Vegan'],
    color: '#FBBC05',
  },
  {
    icon: null, // Music will be imported in component
    title: 'Eğlence',
    items: ['Festivaller', 'Müzeler', 'Tiyatro', 'Gece Hayatı'],
    color: '#34A853',
  },
];

export const CITIES: City[] = [
  { name: 'Berlin', desc: 'Sanat & Kültür', tag: 'Trendy' },
  { name: 'Münih', desc: 'Gelenek & Teknoloji', tag: 'Premium' },
  { name: 'Hamburg', desc: 'Liman & Müzik', tag: 'Cool' },
  { name: 'Köln', desc: 'Karnaval & Medya', tag: 'Fun' },
];
