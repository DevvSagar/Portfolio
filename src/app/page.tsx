'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ConnectSection } from '@/components/sections/ConnectSection';
import { ContactModal } from '@/components/ui/ContactModal';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  const handleOpenContact = (subject?: string) => {
    setContactSubject(subject || '');
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8FA] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Single Page Content */}
      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section */}
        <HeroSection onOpenContact={handleOpenContact} />

        {/* /SELECTED WORK Section */}
        <SelectedWork onOpenContact={handleOpenContact} />

        {/* /SERVICE Section */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* /EXPERIENCE Section */}
        <ExperienceSection />

        {/* /CONNECT & Footer Section */}
        <ConnectSection onOpenContact={handleOpenContact} />
      </main>

      {/* Contact Form Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        defaultSubject={contactSubject}
      />
    </div>
  );
}
