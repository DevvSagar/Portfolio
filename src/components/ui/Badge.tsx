import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'availability' | 'category' | 'tag' | 'dark';
  className?: string;
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children = 'Available for New Project',
  variant = 'availability',
  className,
  pulse = true,
}) => {
  if (variant === 'availability') {
    return (
      <div
        className={cn(
          'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#121214] border border-black/[0.08] dark:border-white/10 shadow-sm text-xs md:text-sm font-medium text-zinc-900 dark:text-zinc-100 select-none transition-all duration-200 hover:shadow-md hover:border-black/15 dark:hover:border-white/20',
          className
        )}
      >
        <span className="relative flex h-2 w-2">
          {pulse && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          )}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>{children}</span>
      </div>
    );
  }

  if (variant === 'category') {
    return (
      <span
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/90 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 backdrop-blur-sm shadow-sm border border-black/[0.06] dark:border-white/10',
          className
        )}
      >
        {children}
      </span>
    );
  }

  if (variant === 'dark') {
    return (
      <span
        className={cn(
          'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 backdrop-blur-sm',
          className
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700/60 transition-colors hover:bg-zinc-200/70 dark:hover:bg-zinc-700/70',
        className
      )}
    >
      {children}
    </span>
  );
};
