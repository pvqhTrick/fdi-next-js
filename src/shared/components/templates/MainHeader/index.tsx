import { BannerHeader } from '@/shared/components/organisms/BannerHeader';
import { Navbar } from '@/shared/components/organisms/Navbar';
import './style.scss';
import type { MainHeaderProps } from './type';

export const MainHeader: React.FC<MainHeaderProps> = ({
  navItems,
  logoSrc,
  bannerTitle,
  bannerSubtitle,
  bannerBtnLabel,
}) => (
  <header>
    <Navbar logoSrc={logoSrc} navItems={navItems} />
    <BannerHeader
      bannerTitle={bannerTitle}
      bannerSubtitle={bannerSubtitle}
      bannerBtnLabel={bannerBtnLabel}
    />
  </header>
);
