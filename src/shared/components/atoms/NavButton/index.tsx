import type { NavButtonProps } from './type';

export const NavButton: React.FC<NavButtonProps> = ({ children, ...props }) => (
  <button
    type="button"
    className="text-base font-normal text-primary-500 mx-px transition-all duration-400 px-2 flex items-center"
    {...props}>
    {children}
  </button>
);
