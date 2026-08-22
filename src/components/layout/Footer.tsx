'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
import { Icons } from '@/components/ui/Icons';
import { portfolioData } from '@/data/portfolio';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Icons.Github size={15} />;
      case 'Linkedin':
        return <Icons.Linkedin size={15} />;
      case 'Discord':
        return <Icons.Discord size={15} />;
      case 'Twitter':
        return <Icons.Twitter size={15} />;
      case 'Leetcode':
        return <Icons.Leetcode size={15} />;
      case 'Instagram':
        return <Icons.Instagram size={15} />;
      case 'FileText':
        return <Icons.FileText size={15} />;
      default:
        return <Icons.FileText size={15} />;
    }
  };

  return (
    <footer className="w-full pt-10 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8">
          {/* Avatar Profile Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121214] text-white shadow-pill border border-black/10 transition-transform duration-200 hover:scale-105 select-none">
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-zinc-800 border border-white/20 shadow-inner flex-shrink-0">
              <Image
                src={portfolioData.profile.avatarHeadshot || portfolioData.profile.avatar}
                alt={portfolioData.profile.handle}
                fill
                priority
                className="object-cover object-center"
              />
            </div>
            <span className="text-xs font-semibold tracking-wide">
              {portfolioData.profile.firstNameOutline} {portfolioData.profile.lastNameSolid}
            </span>
          </div>

          {/* Social Pills */}
          {portfolioData.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={social.href === '#contact' && onOpenContact ? (e) => { e.preventDefault(); onOpenContact(); } : undefined}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-800 text-xs font-medium border border-black/[0.08] shadow-sm hover:shadow-md hover:border-black/15 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              aria-label={social.ariaLabel}
            >
              <span className="text-zinc-500">{getSocialIcon(social.icon)}</span>
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        {/* Bottom meta bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 pt-6 border-t border-zinc-200/60 max-w-4xl mx-auto">
          <p>© {new Date().getFullYear()} devvx.in — All Rights Reserved</p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 transition-colors focus:outline-none cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
