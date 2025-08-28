import Image from 'next/image';
import React from 'react';
import SectionHeader from '../../molecules/SectionHeader';

type AboutSectionProps = {
  subtitle: string;
  icon?: string; // svg sprite icon
  title: React.ReactNode;
  description: string | React.ReactNode;
  image?: { src: string; alt?: string; className?: string };
  listItems?: string[];
  cta?: { label: string; href: string };
  signature?: { image: string; role: string; name: string };
  reverse?: boolean;
  variant?: 'default' | 'withSignature' | 'withList';
};

export default function AboutSection({
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
}: AboutSectionProps) {
  return (
    <section data-title="about-section" className="py-12">
      <div className="container mx-auto about">
        <div
          className={`flex flex-col md:flex-row items-center gap-8 ${
            reverse ? 'md:flex-row-reverse' : ''
          }`}>
          {image && (
            <div className="flex-1" data-animate-effect="fadeInUp">
              <div className="item">
                <Image
                  src={image.src}
                  alt={image.alt || 'About image'}
                  width={600}
                  height={400}
                  className={`img-fluid ${image.className || ''}`}
                />
              </div>
            </div>
          )}

          <div className="flex-1" data-animate-effect="fadeInUp">
            {/* <div className="section-subtitle flex items-center gap-2 mb-4">
              {icon && (
                <svg width="45" height="45" viewBox="0 0 62 62">
                  <circle cx="31" cy="31" r="31" fill="#895CF0" />
                  <use
                    xlinkHref={`/assets/icons/sprite.svg#${icon}`}
                    fill="white"
                    x="15"
                    y="15"
                    width="32"
                    height="32"
                  />
                </svg>
              )}
              {subtitle}
            </div> */}
            <SectionHeader icon={icon}>{subtitle}</SectionHeader>

            <div className="section-title text-3xl font-bold mb-4">{title}</div>

            <div className="mb-4 text-base text-gray-600">{description}</div>

            {variant === 'withList' && listItems && (
              <ul className="space-y-2 mb-4">
                {listItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600">
                      <use href="/assets/icons/sprite.svg#icon-tick2" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {variant === 'withSignature' && signature && (
              <div className="flex items-center gap-4 mt-6">
                <Image
                  src={signature.image}
                  alt={signature.name}
                  width={120}
                  height={80}
                  className="image about1-signature"
                />
                <div>
                  <div className="about2-rol text-sm text-gray-500">{signature.role}</div>
                  <div className="about2-name font-semibold text-lg">{signature.name}</div>
                </div>
              </div>
            )}

            {cta && (
              <a
                href={cta.href}
                className="secondary-btn inline-block mt-6 px-6 py-3 bg-primary-600 text-white rounded-2xl shadow hover:bg-primary-700 transition">
                {cta.label}
                <span></span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
