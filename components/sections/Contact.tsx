'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, Instagram, Youtube, Twitter, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { submitContactForm } from '@/services/contact.service';
import type { ContactFormData } from '@/services/contact.service';

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitContactForm(formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err instanceof Error ? err.message : 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', color: '#E4405F' },
    { icon: Youtube, name: 'YouTube', color: '#FF0000' },
    { icon: Twitter, name: 'Twitter', color: '#1DA1F2' },
  ];

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-white py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-google-blue/10 px-4 py-1 text-sm font-medium text-google-blue">
              İletişim
            </span>
            <h2 className="mb-4 text-4xl font-black text-black sm:text-5xl">
              Bizimle{' '}
              <span className="gradient-text">İletişime Geç</span>
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız.
              Formu doldurun veya sosyal medyadan bize ulaşın.
            </p>

            {/* Contact Info */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-google-blue/10">
                  <Mail className="h-5 w-5 text-google-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">E-posta</p>
                  <p className="font-medium text-black">info@almanya101.de</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-google-green/10">
                  <MessageSquare className="h-5 w-5 text-google-green" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Yanıt Süresi</p>
                  <p className="font-medium text-black">24 saat içinde</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="mb-4 text-sm font-medium text-gray-500">Bizi Takip Edin</p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 transition-colors hover:bg-gray-200"
                  >
                    <social.icon className="h-5 w-5" style={{ color: social.color }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-2xl border border-google-green/20 bg-google-green/5 p-8 text-center"
              >
                <CheckCircle2 className="mb-4 h-16 w-16 text-google-green" />
                <h3 className="mb-2 text-2xl font-bold text-black">Mesajınız Gönderildi!</h3>
                <p className="text-gray-600">En kısa sürede size dönüş yapacağız.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-black">İsim</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Adınız Soyadınız"
                      className="border-gray-200 bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-black">E-posta</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ornek@email.com"
                      className="border-gray-200 bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-black">Mesaj</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mesajınızı yazın..."
                      className="min-h-[120px] border-gray-200 bg-white"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black py-6 text-lg font-semibold text-white transition-all hover:bg-gray-800"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        Gönder
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  {error && (
                    <p className="mt-4 text-sm text-red-600">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
