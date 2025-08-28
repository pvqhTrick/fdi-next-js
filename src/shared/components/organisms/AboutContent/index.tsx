import SectionHeader from '@/shared/components/molecules/SectionHeader';
import { PageList } from '../../molecules/PageList';

type Props = {
  className?: string;
  subtitle: string;
  title: React.ReactNode;
  description: string;
  listItems?: string[];
  cta?: { label: string; href: string };
};

export function AboutContent({ className, subtitle, title, description, listItems, cta }: Props) {
  return (
    <div className={className ? `about ${className}` : 'about'}>
      <SectionHeader>{subtitle}</SectionHeader>
      <div className="section-title">{title}</div>
      <p>{description}</p>

      {listItems && (
        <PageList>
          {listItems.map((text, i) => (
            <PageList.Item key={i} text={text} />
          ))}
        </PageList>
      )}

      {cta && (
        <a href={cta.href} className="secondary-btn">
          {cta.label} <span></span>
        </a>
      )}
    </div>
  );
}
