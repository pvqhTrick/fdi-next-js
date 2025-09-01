import type { ServiceItem } from '../../molecules/ServiceItem/type';

export interface ServiceContentProps {
  className?: string;
  services: ServiceItem[];
  reverse?: boolean;
}
