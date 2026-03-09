import { motion } from 'framer-motion';
import { TrendingUp, Building2, Euro, Clock, MapPin } from 'lucide-react';
import { INDUSTRIES, BENEFITS, COMPANIES } from '@/constants/data/career';
import { SECTION_HEADER_VARIANTS } from '@/lib/animation';

// Map icon names to actual components
const iconMap = {
  Euro,
  Clock,
  Building2,
  MapPin,
};

const Career = () => {
  return (
    <section id="career" className="relative w-full overflow-hidden bg-white py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-google-green/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-google-blue/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={SECTION_HEADER_VARIANTS}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-google-green/10 px-4 py-1 text-sm font-medium text-google-green">
            Kariyer Fırsatları
          </span>
          <h2 className="mb-4 text-4xl font-black text-black sm:text-5xl md:text-6xl">
            Almanya'da{' '}
            <span className="gradient-text">Kariyer</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Avrupa'nın en büyük ekonomisinde kariyer yapın. Yüksek maaş,
            harika sosyal haklar ve sürekli gelişim imkanları.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={SECTION_HEADER_VARIANTS}
          transition={{ delay: 0.2 }}
          className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg"
            >
              <div
                className="absolute left-0 top-0 h-1 w-full transition-all group-hover:h-full group-hover:opacity-10"
                style={{ backgroundColor: industry.color }}
              />

              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-black">{industry.name}</h3>
                  <TrendingUp className="h-5 w-5" style={{ color: industry.color }} />
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-black" style={{ color: industry.color }}>
                      {industry.jobs}
                    </div>
                    <div className="text-sm text-gray-500">Açık Pozisyon</div>
                  </div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    {industry.growth}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={SECTION_HEADER_VARIANTS}
          transition={{ delay: 0.3 }}
          className="rounded-3xl bg-black p-8 text-white md:p-12"
        >
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-bold md:text-3xl">
              Neden Almanya'da Çalışmalısınız?
            </h3>
            <p className="text-gray-400">Dünya standartlarında çalışma koşulları</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit, i) => {
              const Icon = iconMap[benefit.icon.name as keyof typeof iconMap];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                    {Icon && <Icon className="h-7 w-7 text-google-yellow" />}
                  </div>
                  <h4 className="mb-1 font-bold">{benefit.title}</h4>
                  <p className="text-sm text-gray-400">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Featured Companies */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="mb-6 text-center text-sm text-gray-400">Popüler İşverenler</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {COMPANIES.map((company, i) => (
                <motion.span
                  key={i}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  className="text-lg font-bold"
                >
                  {company}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;
