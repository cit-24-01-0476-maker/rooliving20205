import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-neutral-800 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full rounded-md px-4 py-2.5 border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500 ${className}`}
          {...props}
        />
        {error && (
          <p className="text-red-600 mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
