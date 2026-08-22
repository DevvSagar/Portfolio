'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/ui/Icons';
import { portfolioData } from '@/data/portfolio';

interface HeroSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const [mousePos, setMousePos] = useState({ x: 150, y: 150 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    setIsHovered(true);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Icons.Github size={17} />;
      case 'Linkedin':
        return <Icons.Linkedin size={17} />;
      case 'Discord':
        return <Icons.Discord size={17} />;
      case 'Twitter':
        return <Icons.Twitter size={17} />;
      case 'Leetcode':
        return <Icons.Leetcode size={17} />;
      case 'Instagram':
        return <Icons.Instagram size={17} />;
      case 'FileText':
        return <Icons.FileText size={17} />;
      default:
        return <Icons.FileText size={17} />;
    }
  };

  return (
    <section className="relative w-full min-h-[88vh] flex flex-col justify-between pt-24 sm:pt-28 pb-0 overflow-hidden">
      {/* Top Massive Dual-Tone Typography: Outline "DEV" + Solid "VX" */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 sm:pt-4 select-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10 tracking-tight"
        >
          <span className="text-stroke-outline text-[4.5rem] sm:text-[7rem] md:text-[9.5rem] lg:text-[12rem] font-black uppercase leading-none">
            {portfolioData.profile.firstNameOutline}
          </span>
          <span className="text-zinc-900 text-[4.5rem] sm:text-[7rem] md:text-[9.5rem] lg:text-[12rem] font-black uppercase leading-none">
            {portfolioData.profile.lastNameSolid}
          </span>
        </motion.div>
      </div>

      {/* Main Content Area: Left Bio & CTA, Center Interactive Portrait Cutout, Right Social Pill Stack */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-end relative">
          {/* Left Column: Role, Description, CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 z-20 pb-6 sm:pb-10 text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">
              {portfolioData.profile.role}
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
              {portfolioData.profile.tagline}
            </p>
            <div>
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenContact('Let\'s Collaborate - Project Inquiry')}
              >
                Let&apos;s collaborate
              </Button>
            </div>
          </motion.div>

          {/* Center Column: Medium-Sized Interactive Spotlight Portrait Photo Cutout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-5 flex flex-col justify-end items-center relative z-20 self-end order-first md:order-none -mb-1"
          >
            {/* Interactive Portrait Container with Smooth Bottom Fade */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative w-[210px] sm:w-[260px] md:w-[290px] lg:w-[320px] max-w-[340px] aspect-[416/683] group select-none [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
            >
              {/* Base Layer: Clean Grayscale / Black & White */}
              <div className="absolute inset-0 grayscale contrast-110 brightness-95 select-none pointer-events-none transition-all duration-300">
                <Image
                  src={portfolioData.profile.avatar}
                  alt={`${portfolioData.profile.firstNameOutline} ${portfolioData.profile.lastNameSolid}`}
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Dynamic Colorful Spotlight Layer: Follows Cursor */}
              <div
                className="absolute inset-0 select-none pointer-events-none transition-opacity duration-200"
                style={{
                  opacity: isHovered ? 1 : 0,
                  WebkitMaskImage: `radial-gradient(circle 140px at ${mousePos.x}px ${mousePos.y}px, black 35%, transparent 100%)`,
                  maskImage: `radial-gradient(circle 140px at ${mousePos.x}px ${mousePos.y}px, black 35%, transparent 100%)`,
                }}
              >
                <Image
                  src={portfolioData.profile.avatar}
                  alt={`${portfolioData.profile.firstNameOutline} ${portfolioData.profile.lastNameSolid}`}
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl brightness-105 saturate-110"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Uniform-Width Stack of Social Pill Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 z-20 pb-6 sm:pb-10 flex flex-row flex-wrap md:flex-col justify-center md:items-end gap-3"
          >
            {portfolioData.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={social.href === '#contact' ? (e) => { e.preventDefault(); onOpenContact(); } : undefined}
                className="group inline-flex items-center justify-start gap-3 w-36 sm:w-40 md:w-44 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white text-zinc-800 text-sm font-semibold border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-black/20 hover:text-black hover:-translate-x-1.5 transition-all duration-200 cursor-pointer select-none"
                aria-label={social.ariaLabel}
              >
                <span className="text-zinc-500 transition-colors group-hover:text-black flex-shrink-0">
                  {getSocialIcon(social.icon)}
                </span>
                <span className="truncate">{social.name}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
