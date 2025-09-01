import type { ServiceItem } from '../../molecules/ServiceItem/type';
export interface ServiceSectionProps {
  services: ServiceItem[];
  className?: string;
  subtitle: string;
  title: React.ReactNode;
  icon: string;
  reverse?: boolean;
}
