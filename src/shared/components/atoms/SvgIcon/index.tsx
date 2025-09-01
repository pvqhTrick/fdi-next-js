import type { PropsSVGIcon } from './type';

export const SvgIcon: React.FC<PropsSVGIcon> = ({ name, className }) => (
  <svg width="45" height="45" viewBox="0 0 62 62" className={className}>
    <circle cx="31" cy="31" r="31" fill="#895CF0" />
    <use
      xlinkHref={`/assets/icons/sprite.svg#${name}`}
      fill="white"
      x="15"
      y="15"
      width="32"
      height="32"
    />
  </svg>
);
