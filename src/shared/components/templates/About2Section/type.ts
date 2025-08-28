export interface About2SectionProps {
  subtitle: string;
  icon?: string;
  title: React.ReactNode;
  description: string | React.ReactNode;
  image?: { src: string; alt?: string; className?: string };
  listItems?: string[];
  cta?: { label: string; href: string };
  signature?: { image: string; role: string; name: string };
  reverse?: boolean;
  variant?: 'default' | 'withSignature' | 'withList';
}
