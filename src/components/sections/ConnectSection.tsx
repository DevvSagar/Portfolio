'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Footer } from '@/components/layout/Footer';
import { portfolioData } from '@/data/portfolio';

interface ConnectSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="contact"
      className="relative w-full pt-20 sm:pt-28 pb-12 bg-atmospheric border-t border-black/[0.05] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <Badge variant="availability">
            {portfolioData.contact.badgeText}
          </Badge>
        </motion.div>

        {/* Main Big Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight uppercase mb-6 leading-tight"
        >
          {portfolioData.contact.headline}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {portfolioData.contact.subheadline}
        </motion.p>

        {/* Contact Me CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => onOpenContact('New Project Inquiry')}
            className="shadow-2xl hover:shadow-black/20"
          >
            {portfolioData.contact.ctaButtonText}
          </Button>
        </motion.div>
      </div>

      {/* Embedded Footer */}
      <Footer onOpenContact={() => onOpenContact('Connect Inquiry')} />
    </section>
  );
};
