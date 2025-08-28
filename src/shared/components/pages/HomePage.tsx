import { AboutSection } from '../templates/AboutSection';
import { MainHeader } from '../templates/MainHeader';

export const Homepage: React.FC = () => (
  <>
    <MainHeader
      logoSrc="/assets/images/img-logo.png"
      bannerTitle="Lorem ipsum dolor sit amet"
      bannerSubtitle="Welcome to Lorem ipsum."
      bannerBtnLabel="Lorem ipsum"
      navItems={[
        { label: 'Home', links: [{ label: 'Lorem ipsum', href: '#' }] },
        { label: 'About', links: [{ label: 'Lorem ipsum', href: '#' }] },
        { label: 'Services', links: [{ label: 'Lorem ipsum', href: '#' }] },
        { label: 'Projects', links: [{ label: 'Lorem ipsum', href: '#' }] },
        { label: 'Blog', links: [{ label: 'Lorem ipsum', href: '#' }] },
        { label: 'Contact', links: [{ label: 'Lorem ipsum', href: '#' }] },
      ]}
    />

    <AboutSection
      title="About Us"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      imageSrc="/assets/images/img-about.png"
      imageAlt="About Us"
      btnLabel="Learn More"
      btnLink="#"
    />
  </>
);
