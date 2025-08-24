import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import Script from 'next/script';

import '../style.scss';
import '../tailwind.css';
import rootMetadata from './metadata';

// Import MainHeader
import { AboutSection } from '@/shared/components/templates/AboutSection';
import { MainHeader } from '@/shared/components/templates/MainHeader';

export const metadata: Metadata = rootMetadata;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="light">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link href="/assets/styles/theme.css" rel="stylesheet" />
        <meta
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1"
          name="viewport"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=100" />
        <meta name="mobile-web-app-capable" content="yes" />

        <base href="/" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="assets/icons/logo192.png" />
        <link rel="apple-touch-icon" href="assets/icons/logo512.png" />
        <link rel="manifest" href="manifest.webmanifest" />
        <link rel="stylesheet" href="/assets/library/glightbox/glightbox.min.css" />
      </head>
      <body>
        <NextIntlClientProvider>
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

          <AboutSection></AboutSection>
          {/* <ProviderRoot>{children}</ProviderRoot> Boc auth de login*/}
        </NextIntlClientProvider>
        <Script src="/assets/library/imask/imask.min.js" strategy="afterInteractive" />
        <Script src="/assets/library/glightbox/glightbox.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
