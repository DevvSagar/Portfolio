'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolio';

interface NavbarProps {
  onOpenContact: (subject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Service', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-md border-b border-black/[0.06] shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Availability Status Pill */}
          <div className="flex items-center">
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
              <Badge variant="availability" className="cursor-pointer">
                {portfolioData.profile.statusBadgeText}
              </Badge>
            </a>
          </div>

          {/* Center: Clean Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-zinc-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-medium text-zinc-700 hover:text-black transition-colors focus:outline-none focus-visible:text-black cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: "Let's Talk ↗" Pill Button (Desktop) & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenContact('Let\'s Talk - Project Collaboration')}
              className="hidden sm:inline-flex"
            >
              Let&apos;s Talk
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="md:hidden p-2 rounded-full bg-white border border-black/10 text-zinc-800 hover:bg-zinc-50 shadow-sm focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-black/10 px-6 py-5 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-zinc-800 hover:text-black py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('Let\'s Talk - Mobile Inquiry');
                }}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
