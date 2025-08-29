import React from 'react';
import { cn } from '../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({ children, className, hover = false, gradient = false }: CardProps) {
  return (
    <div 
      className={cn(
        'rounded-xl p-6 transition-all duration-300',
        gradient 
          ? 'bg-gradient-to-br from-white via-cyan-50 to-blue-50 shadow-md' 
          : 'bg-white shadow-md',
        hover && 'hover:shadow-xl hover:-translate-y-1 cursor-pointer transform',
        className
      )}
    >
      {children}
    </div>
  );
}