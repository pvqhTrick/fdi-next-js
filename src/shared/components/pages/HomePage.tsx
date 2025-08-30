import { AboutSection } from '../templates/AboutSection';
import { FunfactSection } from '../templates/FunfactSection';
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
      subtitle="What we offer"
      icon="icon-business"
      title={
        <>
          Crafting unforgettable golf experiences <span>since 1995</span>
        </>
      }
      description="Lorem sit amet risus ac duin auctor posuere ranish the acinia cratusan risus facilis semper etiam fermen."
      image={{ src: '/assets/images/about-img.png', alt: 'Golf course' }}
      listItems={['Experienced instructors', 'Professional equipment', 'International tournaments']}
      variant="withList"
      reverse={true}
    />

    <FunfactSection />

    <AboutSection
      subtitle="What we offer"
      icon="icon-business"
      title={
        <>
          Crafting unforgettable golf experiences <span>since 1995</span>
        </>
      }
      description="Lorem ipsum dolor sit amet..."
      image={{ src: '/assets/images/about-img.png' }}
      signature={{
        image: '/assets/images/moi_moi-removebg-preview.png',
        role: 'Founder',
        name: 'Phan Van Quoc Hung',
      }}
      variant="withSignature"
    />
  </>
);
