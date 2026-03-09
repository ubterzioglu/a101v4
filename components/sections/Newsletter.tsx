'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-google-blue/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-google-red/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-google-blue via-google-red to-google-yellow"
          >
            <Bell className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Güncel Kalın!
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-gray-400">
            Almanya'da eğitim, kariyer ve yaşam hakkında en son haberleri,
            ipuçlarını ve fırsatları kaçırmayın.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 rounded-2xl border border-google-green/20 bg-google-green/10 p-8"
            >
              <CheckCircle2 className="h-12 w-12 text-google-green" />
              <h3 className="text-xl font-bold text-white">Abone Oldunuz!</h3>
              <p className="text-gray-400">Bültenimize başarıyla abone oldunuz.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  className="flex-1 border-white/20 bg-white/10 py-6 text-white placeholder:text-gray-500"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white py-6 text-black transition-all hover:bg-gray-100"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="h-5 w-5 border-2 border-black border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Abone Ol
                    </>
                  )}
                </Button>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Gizliliğinize önem veriyoruz. Spam yapmıyoruz.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
