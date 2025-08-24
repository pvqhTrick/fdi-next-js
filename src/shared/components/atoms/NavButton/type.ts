import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
