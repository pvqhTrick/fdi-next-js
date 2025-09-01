import SectionHeader from '../../molecules/SectionHeader';
import { ServiceContent } from '../../organisms/ServiceContent';

import type { ServiceSectionProps } from './type';

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  className = '',
  subtitle,
  title,
  icon,
  services,
  reverse = false,
}) => (
  <section className={`service container py-20 ${className ? ` ${className}` : ''}`}>
    <SectionHeader className={className} title={title} subtitle={subtitle} icon={icon} />
    <ServiceContent services={services} reverse={reverse} />
  </section>
);
