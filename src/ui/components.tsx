import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Badge = ({ children, color }: { children: React.ReactNode; color?: string }) => (
  <span
    className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide"
    style={color ? { backgroundColor: `${color}22`, color } : undefined}
  >
    {children}
  </span>
);

export const Spinner = ({ size = 16 }: { size?: number }) => (
  <span
    className="inline-block rounded-full border-2 border-accent/20 border-t-accent animate-spin"
    style={{ width: size, height: size }}
  />
);
