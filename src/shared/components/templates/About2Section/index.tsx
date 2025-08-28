import React from 'react';
import { SectionContainer } from '../../organisms/SectionContent';
import './style.scss';
import type { About2SectionProps } from './type';
export const AboutSection: React.FC<About2SectionProps> = ({ navItems }) => (
  <section data-title="about">
    <SectionContainer
      left={<img src="/assets/images/about-img.png" alt="" className="img-fluid" />}
      right={
        // <AboutContent
        //   className="about"
        //   subtitle="What we offer"
        //   title={
        //     <>
        //       Crafting unforgettable golf experiences <span>since 1995</span>
        //     </>
        //   }
        //   description="Lorem sit amet risus ac duin auctor posuere ranish..."
        //   listItems={['Experienced instructors', 'Training and competition']}
        //   cta={{ label: 'Discover more', href: '#' }}
        // />
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
      }
    />
  </section>
);
