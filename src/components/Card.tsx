import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div 
      className={`bg-white border-2 border-gray-400 p-6 ${onClick ? 'cursor-pointer hover:border-gray-800 hover:shadow-md transition-all' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}