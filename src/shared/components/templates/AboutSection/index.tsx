import Image from 'next/image';
import React from 'react';
import SectionHeader from '../../molecules/SectionHeader';
import { AboutContent } from '../../organisms/AboutContent';
import './style.scss';
import type { AboutSectionProps } from './type';

export const AboutSection: React.FC<AboutSectionProps> = ({
  subtitle,
  icon,
  title,
  description,
  image,
  listItems,
  cta,
  signature,
  reverse = false,
  variant = 'default',
  backgroundColor = 'bg-base-0',
}) => (
  <section data-title="about-section" className="py-20">
    <div className={`container ${backgroundColor}`}>
      <div
        className={`flex flex-col md:flex-row items-center mx-8 gap-8 ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}>
        {/* Cột ảnh */}
        {image && (
          <div className="flex-1" data-animate-effect="fadeInUp">
            <div className="item">
              <Image
                src={image.src}
                alt={image.alt || 'About image'}
                width={600}
                height={400}
                className={`w-full h-auto rounded-lg object-cover ${image.className || ''}`}
              />
            </div>
          </div>
        )}

        {/* Cột nội dung */}
        <div className="flex-1" data-animate-effect="fadeInUp">
          <SectionHeader icon={icon} subtitle={subtitle} title={title} />
          <AboutContent
            title={title}
            description={description}
            listItems={listItems}
            variant={variant}
            signature={signature}
            cta={cta}
          />
        </div>
      </div>
    </div>
  </section>
);
