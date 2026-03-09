import { motion } from 'framer-motion';
import { Instagram, Youtube, Twitter, Linkedin, Heart } from 'lucide-react';
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/constants/data/footer';
import { GOOGLE_COLOR_ARRAY } from '@/constants';

// Map icon names to actual components
const iconMap = {
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
};

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#hero"
              className="mb-4 inline-flex items-center gap-1 text-2xl font-black"
              whileHover={{ scale: 1.05 }}
            >
              {'Almanya'.split('').map((letter, i) => (
                <span key={i} style={{ color: GOOGLE_COLOR_ARRAY[i % GOOGLE_COLOR_ARRAY.length] }}>
                  {letter}
                </span>
              ))}
              <span className="text-black">101</span>
            </motion.a>
            <p className="mb-6 max-w-sm text-gray-600">
              Almanya'da eğitim, kariyer ve yaşam hakkında kapsamlı rehber.
              GenZ için tasarlandı.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, i) => {
                const Icon = iconMap[social.icon.name as keyof typeof iconMap];

                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-colors hover:bg-gray-200"
                  >
                    {Icon && <Icon className="h-5 w-5" style={{ color: social.color }} />}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links], i) => (
            <div key={i}>
              <h4 className="mb-4 font-bold text-black">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition-colors hover:text-black"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2024 almanya101. Tüm hakları saklıdır.
          </p>
          <p className="flex items-center gap-1 text-sm text-gray-500">
            Made with <Heart className="h-4 w-4 fill-google-red text-google-red" /> in Germany
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black">Gizlilik</a>
            <a href="#" className="hover:text-black">Kullanım</a>
            <a href="#" className="hover:text-black">Çerezler</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
