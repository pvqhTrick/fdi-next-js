import { SvgIcon } from '../../atoms';

type Props = {
  className?: string;
  subtitle?: string;
  title?: React.ReactNode;
  icon?: string;
};

export default function SectionHeader({ className, subtitle, icon, title }: Props) {
  return (
    <>
      <div className={`section-subtitle flex items-center gap-2 mb-4 ${className || ''}`}>
        {icon && <SvgIcon name={icon} className="section-title__icon" />}
        {subtitle}
      </div>
      <div className={`section-title`}>{title}</div>
    </>
  );
}
