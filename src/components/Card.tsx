import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div 
      className={`rounded-xl border border-white/10 bg-neutral-950/40 backdrop-blur-sm p-6 ${
        onClick
          ? 'cursor-pointer hover:border-orange-500/60 hover:bg-neutral-950/55 hover:shadow-lg transition-all'
          : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
