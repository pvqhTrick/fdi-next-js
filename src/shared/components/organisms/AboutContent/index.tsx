import Link from 'next/link';
import { Image } from '../../atoms';

type Props = {
  className?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  listItems?: string[];
  variant?: 'default' | 'withSignature' | 'withList';
  signature?: { image: string; role: string; name: string };
  cta?: { label: string; href: string };
};

export function AboutContent({
  className,
  title,
  description,
  listItems,
  variant,
  signature,
  cta,
}: Props) {
  return (
    <div className={className || ''}>
      <h2 className="section-title text-3xl font-bold mb-4">{title}</h2>

      <p className="mb-4 text-base text-gray-600">{description}</p>

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
            className="about1-signature"
          />
          <div>
            <div className="about2-rol text-sm text-gray-500">{signature.role}</div>
            <div className="about2-name font-semibold text-lg">{signature.name}</div>
          </div>
        </div>
      )}

      {cta && (
        <Link
          href={cta.href}
          className="secondary-btn inline-block mt-6 px-6 py-3 bg-primary-600 text-white rounded-2xl shadow hover:bg-primary-700 transition">
          {cta.label}
        </Link>
      )}
    </div>
  );
}
