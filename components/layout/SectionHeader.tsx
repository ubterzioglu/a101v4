import { motion } from 'framer-motion';
import { SECTION_HEADER_VARIANTS } from '@/lib/animation';

export interface SectionHeaderProps {
  badge?: string;
  badgeColor?: string;
  title: React.ReactNode;
  description: string;
  className?: string;
}

/**
 * Reusable section header component with animated entrance
 */
export function SectionHeader({
  badge,
  badgeColor = 'bg-black px-4 py-1 text-sm font-medium text-white',
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={SECTION_HEADER_VARIANTS}
      transition={{ duration: 0.6 }}
      className={`mb-16 text-center ${className}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`mb-4 inline-block rounded-full ${badgeColor}`}
        >
          {badge}
        </motion.span>
      )}
      <h2 className="mb-4 text-4xl font-black text-black sm:text-5xl md:text-6xl">
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-lg text-gray-600">
        {description}
      </p>
    </motion.div>
  );
}
