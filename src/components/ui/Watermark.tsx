import React from 'react';
import { cn } from '@/lib/utils';

interface WatermarkProps {
  text: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export const Watermark: React.FC<WatermarkProps> = ({
  text,
  theme = 'light',
  className,
}) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        theme === 'dark' ? 'watermark-text-dark' : 'watermark-text',
        className
      )}
    >
      {text}
    </div>
  );
};
