'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Code2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ServiceDrawerProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: (subject: string) => void;
}

export const ServiceDrawer: React.FC<ServiceDrawerProps> = ({
  service,
  isOpen,
  onClose,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="relative w-full max-w-xl bg-white dark:bg-[#121214] rounded-3xl shadow-2xl border border-black/[0.08] dark:border-white/10 z-10 my-8 overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Top Header Row with Number & Dedicated Close Button */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-3 border-b border-zinc-100 dark:border-zinc-800 bg-white dark:bg-[#121214] z-20 flex-shrink-0">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                Service {service.number}
              </span>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white flex-shrink-0 cursor-pointer shadow-sm -mr-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-6 flex-1">
              {/* Header */}
              <div>
                <h2 id="service-modal-title" className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                  {service.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Deliverables */}
              {service.deliverables && (
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Included Deliverables</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {service.technologies && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                    <span>Technologies & Tooling</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="tag">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Action */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onClose();
                    onOpenContact(`Inquiry for ${service.title}`);
                  }}
                  arrowIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Request this Service
                </Button>
                <button
                  onClick={onClose}
                  className="text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
