import { Logo } from '@/shared/components/atoms/Logo';
import { NavButton } from '@/shared/components/atoms/NavButton';
import { NavItem } from '@/shared/components/molecules/NavItem';
import './style.scss';
import type { NavbarProps } from './type';

export const Navbar: React.FC<NavbarProps> = ({ navItems, logoSrc }) => (
  <nav className="navbar">
    <div className="navbar-inner">
      <div className="logo-wrapper">
        <Logo src={logoSrc} />
      </div>
      <div className="menu" id="navbar">
        <ul className="nav-links">
          {navItems.map(item => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
        <div className="nav-right flex items-center relative">
          {/* Desktop CTA */}
          <NavButton className="hidden lg:flex relative items-center z-10 bg-transparent rounded-full px-5 py-1 text-2xl font-normal text-base-0 border border-primary">
            Join membership
          </NavButton>
        </div>
      </div>
      <NavButton className="menu-toggle lg:hidden text-base-0 text-3xl" id="menu-toggle">
        ☰
      </NavButton>
    </div>
  </nav>
);
