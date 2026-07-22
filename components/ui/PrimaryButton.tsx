import { ButtonHTMLAttributes } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string; // If passed incidentally from parent components
  type?: 'button' | 'submit' | 'reset';
}

export const PrimaryButton = ({
  children,
  className,
  type = 'button',
  href, // Stripped out here so it isn't spread into <button>
  ...rest
}: PrimaryButtonProps) => {
  const commonClass = "your-styles-here";

  return (
    <button
      type={type}
      className={`${commonClass} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};