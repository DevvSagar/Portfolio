'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Watermark } from '@/components/ui/Watermark';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { portfolioData } from '@/data/portfolio';
import { Project } from '@/types';

interface SelectedWorkProps {
  onOpenContact: (subject?: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Real Project' | 'Exploration'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterTabs: Array<'All' | 'Real Project' | 'Exploration'> = ['All', 'Real Project', 'Exploration'];

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.type === activeFilter;
  });

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="work" className="relative w-full py-20 sm:py-28 bg-white dark:bg-[#09090b] transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Background Watermark */}
        <div className="relative mb-12 sm:mb-16">
          <Watermark text="PORTFOLIO" />
          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            /SELECTED WORK
          </h2>
        </div>

        {/* Filter Tabs & "View All Work" Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-zinc-100 dark:border-zinc-800">
          {/* Tabs */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === tab
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-sm'
                    : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/80 dark:hover:bg-zinc-700/80 hover:text-black dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* View All Work Pill */}
          <Button
            variant="secondary"
            size="sm"
            href="https://github.com/DevvSagar"
            external
            className="self-end sm:self-auto"
          >
            View All Work
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleOpenProject(project)}
              className="group cursor-pointer flex flex-col bg-zinc-50/70 dark:bg-[#121214] border border-zinc-200/80 dark:border-white/[0.08] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300"
            >
              {/* Card Image / Graphic Canvas */}
              <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 overflow-hidden flex items-center justify-center p-6">
                {/* Visual Architecture Preview Graphic */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40 border border-white/10 p-4 sm:p-6 flex flex-col justify-between backdrop-blur-sm">
                  {/* Category Pill & Status Pill Top Left */}
                  <div className="flex items-center gap-2">
                    <Badge variant="category">{project.type}</Badge>
                    {project.status && (
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm shadow-sm border ${
                          project.status.toLowerCase().includes('progress')
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                            : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.status.toLowerCase().includes('progress')
                              ? 'bg-amber-400 animate-pulse'
                              : 'bg-emerald-400'
                          }`}
                        />
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Architecture Diagram Code Graphic */}
                  <div className="my-auto py-2">
                    <div className="text-white text-lg sm:text-xl font-bold tracking-tight mb-1">
                      {project.title.split(' - ')[0]}
                    </div>
                    <div className="text-zinc-400 text-xs sm:text-sm font-mono line-clamp-2">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Metrics preview row */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="text-left">
                          <span className="text-xs font-bold text-emerald-400">{m.value}</span>
                          <span className="text-[10px] text-zinc-400 block">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Floating Hover Arrow Circle Button */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white dark:bg-[#121214]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="tag">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
