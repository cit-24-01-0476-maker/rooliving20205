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
          <label className="block text-gray-700 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-2.5 border-2 border-gray-400 bg-white focus:outline-none focus:border-gray-800 ${className}`}
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