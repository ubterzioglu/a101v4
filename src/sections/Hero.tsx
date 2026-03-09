import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotate: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const title = "Almanya101";
  const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#4285F4', '#EA4335', '#FBBC05', '#34A853', '#4285F4', '#EA4335'];

  // Sabit değerlerle circles (SSR uyumlu)
  const circles = [
    { w: 250, h: 280, left: 10, top: 15, colorIdx: 0, dur: 15 },
    { w: 180, h: 200, left: 75, top: 25, colorIdx: 1, dur: 18 },
    { w: 320, h: 300, left: 85, top: 60, colorIdx: 2, dur: 12 },
    { w: 220, h: 240, left: 5, top: 70, colorIdx: 3, dur: 20 },
    { w: 200, h: 180, left: 50, top: 5, colorIdx: 0, dur: 16 },
    { w: 280, h: 260, left: 30, top: 80, colorIdx: 2, dur: 14 },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles - Sabit değerler */}
        {circles.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: circle.w,
              height: circle.h,
              background: colors[circle.colorIdx],
              left: `${circle.left}%`,
              top: `${circle.top}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: circle.dur,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#000 1px, transparent 1px),
              linear-gradient(90deg, #000 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-google-yellow" />
              <span className="bg-gradient-to-r from-google-blue via-google-red to-google-green bg-clip-text text-transparent">
                GenZ için Almanya Rehberi
              </span>
            </span>
          </motion.div>

          {/* Animated Title */}
          <motion.h1 className="mb-6 flex flex-wrap justify-center text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            {title.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ color: colors[i % colors.length] }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl md:text-2xl"
          >
            Almanya'da eğitim, kariyer ve yaşam hakkında{' '}
            <span className="font-semibold text-black">her şey</span>.
            <br />
            <span className="gradient-text font-bold">Yeni nesil</span> rehberiniz.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-black px-8 py-6 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Keşfetmeye Başla
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-google-blue via-google-red to-google-yellow"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-black px-8 py-6 text-lg font-semibold transition-all hover:bg-black hover:text-white"
            >
              Bize Katıl
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-black/10 pt-8"
          >
            {[
              { icon: GraduationCap, value: '500+', label: 'Üniversite' },
              { icon: Briefcase, value: '50K+', label: 'İş İlanı' },
              { icon: MapPin, value: '16', label: 'Eyalet' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <stat.icon className="mx-auto mb-2 h-6 w-6" style={{ color: colors[i * 2] }} />
                <div className="text-2xl font-bold text-black sm:text-3xl">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-400">Aşağı kaydır</span>
            <div className="h-12 w-6 rounded-full border-2 border-black/20 p-1">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-3 w-3 rounded-full bg-black"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
