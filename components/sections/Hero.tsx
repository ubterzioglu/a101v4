'use client';

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

  const title = "ALMANYA101";
  const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#4285F4', '#EA4335', '#FBBC05', '#34A853', '#4285F4', '#EA4335'];

  // Animated circles with night-friendly opacity
  const circles = [
    { w: 250, h: 280, left: 10, top: 15, colorIdx: 0, dur: 15 },
    { w: 180, h: 200, left: 75, top: 25, colorIdx: 1, dur: 18 },
    { w: 320, h: 300, left: 85, top: 60, colorIdx: 2, dur: 12 },
    { w: 220, h: 240, left: 5, top: 70, colorIdx: 3, dur: 20 },
    { w: 200, h: 180, left: 50, top: 5, colorIdx: 0, dur: 16 },
    { w: 280, h: 260, left: 30, top: 80, colorIdx: 2, dur: 14 },
  ];

  // Stars with SSR-friendly positions
  const stars = [
    { x: 5, y: 8, size: 2, delay: 0 },
    { x: 15, y: 12, size: 3, delay: 0.5 },
    { x: 25, y: 5, size: 2, delay: 1 },
    { x: 35, y: 15, size: 2.5, delay: 1.5 },
    { x: 45, y: 10, size: 2, delay: 0.3 },
    { x: 55, y: 18, size: 3, delay: 0.8 },
    { x: 65, y: 7, size: 2, delay: 1.2 },
    { x: 75, y: 14, size: 2.5, delay: 0.6 },
    { x: 85, y: 6, size: 2, delay: 1.1 },
    { x: 95, y: 16, size: 3, delay: 0.4 },
    { x: 8, y: 25, size: 2, delay: 0.9 },
    { x: 20, y: 30, size: 2.5, delay: 0.2 },
    { x: 30, y: 22, size: 2, delay: 0.7 },
    { x: 40, y: 28, size: 3, delay: 1.3 },
    { x: 50, y: 24, size: 2, delay: 0.1 },
    { x: 60, y: 26, size: 2.5, delay: 0.5 },
    { x: 70, y: 23, size: 2, delay: 1.0 },
    { x: 80, y: 29, size: 3, delay: 0.8 },
    { x: 90, y: 20, size: 2, delay: 0.3 },
    { x: 92, y: 32, size: 2.5, delay: 1.4 },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Night Sky Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 30%, #2a2a5a 60%, #1e3a5f 100%)',
        }}
      />

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              background: 'white',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i % 3,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Moon with Glow */}
      <motion.div
        className="absolute"
        style={{
          right: '12%',
          top: '10%',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, #fffae8 0%, #f5e6c8 50%, #e8d4b0 100%)',
          borderRadius: '50%',
          boxShadow: '0 0 40px rgba(255, 250, 232, 0.5), 0 0 80px rgba(255, 250, 232, 0.3), 0 0 120px rgba(255, 250, 232, 0.1)',
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Circles - Enhanced for Night Theme */}
      <div className="absolute inset-0 overflow-hidden">
        {circles.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: circle.w,
              height: circle.h,
              background: `radial-gradient(circle, ${colors[circle.colorIdx]}40 0%, ${colors[circle.colorIdx]}00 70%)`,
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
      </div>

      {/* Brandenburg Gate Silhouette */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '40%',
          background: `linear-gradient(180deg, transparent 0%, #0a0a1a 100%)`,
          position: 'relative',
        }}
      >
        {/* SVG Brandenburg Gate Silhouette */}
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '60%',
            height: '100%',
            maxHeight: '350px',
          }}
          viewBox="0 0 800 350"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="skylineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0a0a1a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0a0a1a" stopOpacity="1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Brandenburg Gate */}
          <path
            d="M100 350 L100 300 L110 300 L110 280 L120 280 L120 300 L130 300 L130 250 L140 250 L140 300 L150 300 L150 200 L170 200 L170 300 L180 300 L180 250 L190 250 L190 300 L200 300 L200 280 L210 280 L210 300 L220 300 L220 200 L240 200 L240 300 L250 300 L250 250 L260 250 L260 300 L270 300 L270 200 L290 200 L290 300 L300 300 L300 280 L310 280 L310 300 L320 300 L320 250 L330 250 L330 300 L340 300 L340 200 L360 200 L360 300 L370 300 L370 250 L380 250 L380 300 L390 300 L390 280 L400 280 L400 300 L410 300 L410 200 L430 200 L430 300 L440 300 L440 250 L450 250 L450 300 L460 300 L460 200 L480 200 L480 300 L490 300 L490 250 L500 250 L500 300 L510 300 L510 280 L520 280 L520 300 L530 300 L530 200 L550 200 L550 300 L560 300 L560 250 L570 250 L570 300 L580 300 L580 200 L600 200 L600 300 L610 300 L610 280 L620 280 L620 300 L630 300 L630 250 L640 250 L640 300 L650 300 L650 200 L670 200 L670 300 L680 300 L680 250 L690 250 L690 300 L700 350 L100 350"
            fill="url(#skylineGradient)"
            filter="url(#glow)"
          />

          {/* Berlin TV Tower (Fernsehturm) - simplified silhouette */}
          <path
            d="M650 350 L650 150 L660 150 L660 350"
            fill="url(#skylineGradient)"
          />
          <circle cx="655" cy="155" r="8" fill="url(#skylineGradient)" />

          {/* Cathedral Dom - simplified silhouette */}
          <path
            d="M50 350 L50 200 L100 150 L150 200 L150 350"
            fill="url(#skylineGradient)"
          />
          <path
            d="M100 150 L100 120"
            fill="url(#skylineGradient)"
            style={{ filter: 'url(#glow)' }}
          />

          {/* Additional buildings */}
          <rect x="150" y="280" width="60" height="70" fill="url(#skylineGradient)" />
          <rect x="220" y="260" width="50" height="90" fill="url(#skylineGradient)" />
          <rect x="280" y="290" width="70" height="60" fill="url(#skylineGradient)" />
          <rect x="600" y="270" width="55" height="80" fill="url(#skylineGradient)" />
          <rect x="700" y="300" width="80" height="50" fill="url(#skylineGradient)" />
          <rect x="0" y="320" width="40" height="30" fill="url(#skylineGradient)" />
        </svg>
      </div>

      {/* Atmospheric Ground Glow */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '30%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(66, 133, 244, 0.1) 50%, rgba(66, 133, 244, 0.05) 100%)',
        }}
      />

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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md text-white">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="bg-gradient-to-r from-blue-400 via-red-400 to-green-400 bg-clip-text text-transparent">
                GenZ için Almanya Rehberi
              </span>
            </span>
          </motion.div>

          {/* Animated Title with Glow */}
          <motion.h1 className="mb-6 flex flex-wrap justify-center text-6xl tracking-tight sm:text-7xl md:text-8xl lg:text-9xl" style={{ fontFamily: '"ZuMe Rough", sans-serif', fontWeight: 900, filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))' }}>
            {title.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{
                  color: i >= 7 ? '#ffbb00' : '#ffffff',
                  textShadow: i >= 7 ? '0 0 30px #ffbb0060, 0 0 60px #ffbb0040' : '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)',
                }}
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
            className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl md:text-2xl"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
          >
            <span className="font-semibold text-white">yalnız değilsin!</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 bg-clip-text text-transparent font-bold">almanya101 seninle!</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-white text-gray-900 px-8 py-6 text-lg font-semibold transition-all hover:scale-105 hover:shadow-2xl border-2 border-white/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Keşfetmeye Başla
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/50 bg-white/10 px-8 py-6 text-lg font-semibold text-white transition-all hover:bg-white/20 backdrop-blur-sm"
            >
              Bize Katıl
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
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
                <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
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
            <div className="h-12 w-6 rounded-full border-2 border-white/20 p-1">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-3 w-3 rounded-full bg-white"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
