export type NavItemProps = {
  label: string;
  links: { label: string; href: string }[];
};

export type MainHeaderProps = {
  navItems: NavItemProps[];
  logoSrc: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerBtnLabel: string;
};
