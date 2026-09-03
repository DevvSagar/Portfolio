'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, AlertCircle, Loader2, Mail, User, MessageSquare, Tag } from 'lucide-react';
import { contactFormSchema } from '@/lib/validations';
import { Badge } from '@/components/ui/Badge';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultSubject = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: defaultSubject || '',
    message: '',
    _gotcha: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  // Update default subject when opened from a specific project or service
  useEffect(() => {
    if (defaultSubject) {
      setFormData((prev) => ({ ...prev, subject: defaultSubject }));
    }
  }, [defaultSubject]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific field error on edit
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus('idle');

    // 1. Client-side Zod validation
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setStatusMessage(
          data.message || 'Your message has been sent successfully. I will get back to you shortly!'
        );
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          _gotcha: '',
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(
          data.message || 'Failed to send your message. Please check the fields and try again.'
        );
        if (data.errors) {
          const apiErrors: Record<string, string> = {};
          Object.keys(data.errors).forEach((key) => {
            apiErrors[key] = data.errors[key][0];
          });
          setErrors(apiErrors);
        }
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage('Network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitStatus('idle');
    setErrors({});
    onClose();
  };

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

          {/* Modal Card */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative w-full max-w-lg bg-white dark:bg-[#121214] rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/[0.08] dark:border-white/10 z-10 my-8 overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white cursor-pointer shadow-sm z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {submitStatus === 'success' ? (
              <div className="py-8 text-center flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                  className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/40 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 border border-emerald-200 dark:border-emerald-800"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Message Received!</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm mb-6 leading-relaxed">
                  {statusMessage}
                </p>
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-zinc-950 text-sm font-medium rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm cursor-pointer"
                >
                  Back to Portfolio
                </button>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <Badge variant="availability" className="mb-3">
                    Let&apos;s Build Together
                  </Badge>
                  <h2 id="contact-modal-title" className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    Start a Conversation
                  </h2>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 leading-relaxed">
                    Have a backend architecture challenge or project in mind? Drop a message below or email directly to{' '}
                    <a
                      href="mailto:deevvxxx@gmail.com"
                      className="font-semibold text-zinc-900 dark:text-white underline underline-offset-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      deevvxxx@gmail.com
                    </a>.
                  </p>
                </div>

                {/* Error Banner */}
                {submitStatus === 'error' && (
                  <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-2.5 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field (hidden from humans) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="_gotcha">Do not fill this</label>
                    <input
                      type="text"
                      id="_gotcha"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData._gotcha}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-900/80 border ${
                          errors.name
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-zinc-200 dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-white focus:ring-zinc-900 dark:focus:ring-white'
                        } rounded-xl text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 transition-all`}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-900/80 border ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-zinc-200 dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-white focus:ring-zinc-900 dark:focus:ring-white'
                        } rounded-xl text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 transition-all`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
                      Topic / Project Type
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
                        <Tag className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="e.g. Distributed System Architecture / API Consulting"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-white focus:ring-zinc-900 dark:focus:ring-white rounded-xl text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell me about your technical requirements, goals, timelines..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full p-3.5 bg-zinc-50 dark:bg-zinc-900/80 border ${
                          errors.message
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-zinc-200 dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-white focus:ring-zinc-900 dark:focus:ring-white'
                        } rounded-xl text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 transition-all resize-none`}
                      />
                    </div>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.99] text-white dark:text-zinc-950 font-medium text-sm rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
