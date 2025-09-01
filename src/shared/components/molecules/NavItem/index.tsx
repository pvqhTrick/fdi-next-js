import Link from 'next/link';
import { NavIcon } from '../../atoms/NavIcon';
import './style.scss';
import type { NavItemProps } from './type';

export const NavItem: React.FC<NavItemProps> = ({ label, links }) => (
  <li className="nav-item relative">
    <button data-dropdown className="nav-button flex items-center gap-2">
      {label}
      <NavIcon name="icon-arrow" className="nav-icon w-4 h-4 text-base-0 rotate-90" />
    </button>
    <div className="dropdown">
      {links.map(link => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  </li>
);
