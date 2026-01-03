import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'border-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gray-800 text-white border-gray-800 hover:bg-gray-700',
    secondary: 'bg-gray-200 text-gray-900 border-gray-400 hover:bg-gray-300',
    outline: 'border-gray-400 text-gray-700 bg-white hover:bg-gray-50',
    ghost: 'text-gray-600 border-transparent hover:bg-gray-100 hover:border-gray-300'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5',
    md: 'px-6 py-2.5',
    lg: 'px-8 py-3'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}