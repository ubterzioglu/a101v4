import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Home, Plane, Heart, Wallet, Languages, Users } from 'lucide-react';
import { FEATURES } from '@/constants/data/features';
import { CONTAINER_VARIANTS, ITEM_VARIANTS, SECTION_HEADER_VARIANTS } from '@/lib/animation';

// Map icon names to actual components
const iconMap = {
  GraduationCap,
  Briefcase,
  Home,
  Plane,
  Heart,
  Wallet,
  Languages,
  Users,
} as const;

const Features = () => {
  return (
    <section id="about" className="relative w-full bg-white py-24">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-google-blue/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-google-green/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={SECTION_HEADER_VARIANTS}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full bg-black px-4 py-1 text-sm font-medium text-white"
          >
            Neler Sunuyoruz?
          </motion.span>
          <h2 className="mb-4 text-4xl font-black text-black sm:text-5xl md:text-6xl">
            Almanya'da{' '}
            <span className="gradient-text">Hayat</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Eğitimden kariyere, konaklamadan sağlığa - Almanya'da yaşamın her alanında
            yanınızdayız.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.iconName];

            return (
              <motion.div
                key={i}
                variants={ITEM_VARIANTS}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 400 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl"
              >
                {/* Hover Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity group-hover:opacity-5`}
                />

                {/* Icon */}
                <motion.div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${feature.color}15` }}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {Icon && <Icon className="h-7 w-7" style={{ color: feature.color }} />}
                </motion.div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-bold text-black">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>

                {/* Animated Border */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 rounded-full"
                  style={{ backgroundColor: feature.color }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
