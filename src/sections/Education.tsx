import { motion } from 'framer-motion';
import { BookOpen, Award, Clock, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Education = () => {
  const programs = [
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

  const stats = [
    { value: '400+', label: 'Üniversite', icon: BookOpen },
    { value: '20.000+', label: 'Program', icon: Globe },
    { value: '350.000+', label: 'Uluslararası Öğrenci', icon: Award },
    { value: '18 ay', label: 'İş Arama Vizesi', icon: Clock },
  ];

  return (
    <section id="education" className="relative w-full overflow-hidden bg-black py-24 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-google-blue/20 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-google-red/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
            Eğitim Fırsatları
          </span>
          <h2 className="mb-4 text-4xl font-black sm:text-5xl md:text-6xl">
            Almanya'da{' '}
            <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
              Eğitim
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Dünya sıralamasında ilk 100'de 10 Alman üniversitesi. Ücretsiz eğitim, 
            uluslararası tanınan diplomalar.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-google-yellow" />
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Programs */}
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
            >
              {/* Accent Line */}
              <div 
                className="absolute left-0 top-0 h-1 w-full"
                style={{ backgroundColor: program.color }}
              />

              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold">{program.title}</h3>
                <span 
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: `${program.color}20`, color: program.color }}
                >
                  {program.duration}
                </span>
              </div>

              <p className="mb-6 text-gray-400">{program.description}</p>

              <ul className="mb-6 space-y-3">
                {program.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: program.color }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="w-full border-white/20 bg-transparent text-white transition-all hover:bg-white hover:text-black"
              >
                Detayları Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
