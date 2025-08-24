import Link from 'next/link';
import type { LogoProps } from './type.ts';

export const Logo: React.FC<LogoProps> = ({ src, alt = 'Logo', href = '/' }) => (
  <Link href={href} className="logo inline-block">
    <img src={src} alt={alt} className="img-logo w-[190px] h-auto mb-0 max-w-fit" />
  </Link>
);
