import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  showArrow?: boolean;
  arrowIcon?: React.ReactNode;
  icon?: React.ReactNode;
  children: React.ReactNode;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  showArrow = true,
  arrowIcon,
  icon,
  children,
  external = false,
  className,
  ...props
}) => {
  const baseStyles =
    'group inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#121214] dark:bg-white text-white dark:text-zinc-950 hover:bg-black dark:hover:bg-zinc-200 shadow-pill hover:shadow-pill-dark hover:-translate-y-0.5 border border-black/10 dark:border-white/20',
    secondary:
      'bg-white dark:bg-[#18181b] text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-black/[0.08] dark:border-white/10 shadow-sm hover:shadow-md hover:-translate-y-0.5',
    dark:
      'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700/60 shadow-sm hover:-translate-y-0.5',
    outline:
      'bg-transparent text-zinc-900 dark:text-zinc-100 border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:border-black/40 dark:hover:border-white/40',
    ghost:
      'bg-transparent text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5',
  };

  const combinedClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && <span className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <span className="flex-shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {arrowIcon || <ArrowUpRight className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
};
