import type { SvgIconProps } from './type';

export const SvgIcon: React.FC<SvgIconProps> = ({ name, className }) => (
  <svg className={className} fill="currentColor" aria-hidden="true">
    <use xlinkHref={`/assets/icons/sprite.svg#${name}`} />
  </svg>
);
