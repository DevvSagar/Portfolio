'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Watermark } from '@/components/ui/Watermark';
import { Badge } from '@/components/ui/Badge';
import { portfolioData } from '@/data/portfolio';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(portfolioData.experience[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="relative w-full py-16 sm:py-24 bg-white dark:bg-[#09090b] transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Container Card */}
        <div className="relative w-full bg-[#18181b] rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-2xl border border-zinc-800/80 dark:border-white/[0.08] overflow-hidden">
          {/* Ghost Watermark */}
          <Watermark text="EXPERIENCE" theme="dark" />

          {/* Header Row */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-10 sm:mb-14 border-b border-zinc-800 pb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              /EXPERIENCE
            </h2>
            <div className="text-sm font-semibold text-zinc-400">
              {portfolioData.profile.yearsOfExperience} of experience
            </div>
          </div>

          {/* Experience List Items */}
          <div className="relative z-10 space-y-1">
            {portfolioData.experience.map((item, index) => {
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className="border-b border-zinc-800/80 last:border-b-0"
                >
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full py-5 sm:py-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 group hover:bg-zinc-800/30 px-3 sm:px-4 rounded-xl transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg sm:text-xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                          {item.company}
                        </span>
                        {item.isCurrent && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Present
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-400 mt-0.5">
                        {item.role}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 text-xs sm:text-sm text-zinc-400">
                      <span className="font-mono">{item.period}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-white' : 'group-hover:text-zinc-300'
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden px-3 sm:px-4 pb-6 pt-1 text-sm text-zinc-300"
                      >
                        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                          {item.summary}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2 mb-4 bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800/60">
                          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                            Key Impact & Scalability Metrics:
                          </span>
                          {item.achievements.map((ach, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                              <Sparkles className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-1" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.techStack.map((tech) => (
                            <Badge key={tech} variant="dark">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
