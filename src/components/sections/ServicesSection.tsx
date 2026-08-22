'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Watermark } from '@/components/ui/Watermark';
import { ServiceDrawer } from '@/components/ui/ServiceDrawer';
import { portfolioData } from '@/data/portfolio';
import { ServiceItem } from '@/types';

interface ServicesSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenService = (service: ServiceItem) => {
    setSelectedService(service);
    setIsDrawerOpen(true);
  };

  return (
    <section id="services" className="relative w-full py-20 sm:py-28 bg-[#F9F9FB] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Background Ghost Watermark */}
        <div className="relative mb-12 sm:mb-16">
          <Watermark text="SERVICE" />
          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">
            /SERVICE
          </h2>
        </div>

        {/* Services List with Horizontal Dividers */}
        <div className="border-t border-zinc-200/80">
          {portfolioData.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <button
                onClick={() => handleOpenService(service)}
                className="group w-full py-7 sm:py-9 px-3 sm:px-4 border-b border-zinc-200/80 flex items-center justify-between text-left transition-all duration-300 hover:bg-white/90 hover:px-6 rounded-2xl cursor-pointer"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-xs sm:text-sm font-mono text-zinc-400 font-bold">
                    {service.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-800 group-hover:text-black tracking-tight transition-colors">
                    {service.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden md:inline-block text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    View deliverables
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-300 group-hover:border-black flex items-center justify-center text-zinc-500 group-hover:text-black group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Drawer */}
      <ServiceDrawer
        service={selectedService}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
