import type { PropsSVGIcon } from './type';

export const NavIcon: React.FC<PropsSVGIcon> = ({ className, name }) => {
  return (
    <svg className={`text-base-0 ${className}`}>
      <use xlinkHref={'/assets/icons/sprite.svg#' + name} fill="white" />
    </svg>
  );
};
