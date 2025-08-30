import React from 'react';
import './style.scss';
import type { PrimaryButtonProps } from './type';

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onClick,
  disabled = false,
  type = 'button',
  isPrimary = true,
}) => (
  <button
    type={type}
    className={`${isPrimary ? 'primary-btn' : 'secondary-btn'}${disabled ? ' opacity-50 cursor-not-allowed' : ''} `}
    onClick={onClick}
    disabled={disabled}>
    {label}
  </button>
);
