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
  const baseStyles =
    'rounded-md border-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange-500/50';
  
  const variants = {
    primary: 'bg-orange-600 text-black border-orange-600 hover:bg-orange-500',
    secondary: 'bg-neutral-900 text-white border-neutral-800 hover:bg-neutral-800',
    outline: 'border-orange-600 text-orange-100 bg-transparent hover:bg-orange-600/15',
    ghost: 'text-neutral-200 border-transparent hover:bg-white/5 hover:border-white/10'
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
