'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Activity, Layers } from 'lucide-react';
import { Icons } from '@/components/ui/Icons';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: (subject: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
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

  if (!project) return null;

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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative w-full max-w-2xl bg-white dark:bg-[#121214] rounded-3xl shadow-2xl border border-black/[0.08] dark:border-white/10 z-10 my-8 overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Modal Top Header Bar with Badges & Close Button */}
            <div className="flex items-start justify-between gap-4 px-6 sm:px-8 pt-6 pb-3 border-b border-zinc-100 dark:border-zinc-800 bg-white dark:bg-[#121214] z-20 flex-shrink-0">
              <div className="flex flex-wrap items-center gap-2 min-w-0 flex-1">
                <Badge variant="category">{project.type}</Badge>
                {project.status && (
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase border ${
                      project.status.toLowerCase().includes('progress')
                        ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                        : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.status.toLowerCase().includes('progress')
                          ? 'bg-amber-500 animate-pulse'
                          : 'bg-emerald-500'
                      }`}
                    />
                    {project.status}
                  </span>
                )}
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="tag">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Dedicated Close Button */}
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
              {/* Title & Description */}
              <div>
                <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Metrics Grid */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                    <Activity className="w-4 h-4 text-emerald-500" />
                    <span>System Benchmark & Key Metrics</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white dark:bg-zinc-800/80 p-3 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 text-center flex flex-col justify-center min-w-0">
                        <div className="text-sm sm:text-base md:text-lg font-extrabold text-zinc-900 dark:text-white tracking-tight truncate">
                          {metric.value}
                        </div>
                        <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architectural Highlights */}
              {project.architectureHighlights && project.architectureHighlights.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                    <Layers className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                    <span>Core Architectural Highlights</span>
                  </div>
                  <ul className="space-y-2.5">
                    {project.architectureHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions Footer */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  {project.githubUrl && (
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.githubUrl}
                      external
                      icon={<Icons.Github size={15} />}
                    >
                      GitHub Repo
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.liveUrl}
                      external
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      System Live
                    </Button>
                  )}
                </div>

                {onOpenContact && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenContact(`Project Inquiry regarding ${project.title}`);
                    }}
                    className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                  >
                    Discuss this architecture →
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
