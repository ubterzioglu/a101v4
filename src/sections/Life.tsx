import { motion } from 'framer-motion';
import { Train, ShoppingBag, Utensils, Music } from 'lucide-react';

const Life = () => {
  const categories = [
    {
      icon: Train,
      title: 'Ulaşım',
      items: ['Deutsche Bahn', 'ÖPNV', '49€ Ticket', 'Bisiklet'],
      color: '#4285F4',
    },
    {
      icon: ShoppingBag,
      title: 'Alışveriş',
      items: ['Supermarketler', 'Online Alışveriş', 'Outlet', 'Pazarlar'],
      color: '#EA4335',
    },
    {
      icon: Utensils,
      title: 'Yemek',
      items: ['Döner & Kebap', 'Bakery', 'International', 'Vegan'],
      color: '#FBBC05',
    },
    {
      icon: Music,
      title: 'Eğlence',
      items: ['Festivaller', 'Müzeler', 'Tiyatro', 'Gece Hayatı'],
      color: '#34A853',
    },
  ];

  const cities = [
    { name: 'Berlin', desc: 'Sanat & Kültür', tag: 'Trendy' },
    { name: 'Münih', desc: 'Gelenek & Teknoloji', tag: 'Premium' },
    { name: 'Hamburg', desc: 'Liman & Müzik', tag: 'Cool' },
    { name: 'Köln', desc: 'Karnaval & Medya', tag: 'Fun' },
  ];

  return (
    <section id="life" className="relative w-full overflow-hidden bg-gray-50 py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-google-yellow/20 px-4 py-1 text-sm font-medium text-google-yellow">
            Yaşam Rehberi
          </span>
          <h2 className="mb-4 text-4xl font-black text-black sm:text-5xl md:text-6xl">
            Almanya'da{' '}
            <span className="gradient-text">Yaşam</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Kaliteli yaşam standartları, zengin kültür ve modern altyapı ile 
            Almanya'da hayat keşfedilmeyi bekliyor.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-xl"
            >
              <div 
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${cat.color}15` }}
              >
                <cat.icon className="h-6 w-6" style={{ color: cat.color }} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-black">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <div 
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Cities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-black">
            Popüler Şehirler
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 p-6">
                  <div className="flex h-full flex-col justify-between">
                    <span 
                      className="w-fit rounded-full px-3 py-1 text-xs font-medium"
                      style={{ 
                        backgroundColor: ['#4285F4', '#EA4335', '#FBBC05', '#34A853'][i],
                        color: 'white'
                      }}
                    >
                      {city.tag}
                    </span>
                    <div>
                      <h4 className="mb-1 text-2xl font-bold text-white">{city.name}</h4>
                      <p className="text-sm text-gray-400">{city.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 rounded-2xl bg-black p-8 text-white"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-xl font-bold">Almanya'da Yaşam İpuçları</h3>
              <p className="text-gray-400">Pfand, Pflicht ve diğer önemli bilgiler</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-100"
            >
              Rehberi İndir
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Life;
