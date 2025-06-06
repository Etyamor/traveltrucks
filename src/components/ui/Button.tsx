import type { ComponentPropsWithoutRef, ElementType } from 'react';

import { cn } from '@lib/utils.ts';

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  variant?: 'primary' | 'outline';
  className?: string;
} & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  className,
  ...props
}: ButtonProps<T>) => {
  const Component = as || 'button';

  const baseStyles = 'p-4 rounded-[200px] font-medium border text-center';

  return (
    <Component
      className={cn(
        baseStyles,
        variant === 'primary'
          ? 'w-[166px] bg-button hover:bg-button-hover border-button hover:border-button-hover text-white'
          : 'w-[147px] bg-transparent border-gray-light hover:border-button-hover text-main',
        className,
      )}
      {...props}
    />
  );
};

export default Button;
