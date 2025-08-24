import type { PrimaryButtonProps } from './type';

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onClick,
  disabled = false,
  type = 'button',
}) => (
  <button
    type={type}
    className={`primary-btn ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    onClick={onClick}
    disabled={disabled}>
    {label}
  </button>
);
