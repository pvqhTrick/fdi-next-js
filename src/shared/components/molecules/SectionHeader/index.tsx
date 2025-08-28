import { SvgIcon } from '../../atoms';

type Props = {
  children: React.ReactNode;
  icon?: string;
};

export default function SectionHeader({ children, icon }: Props) {
  return (
    <div className="section-subtitle">
      <SvgIcon name="business" className="section-title__icon" />
      {children}
    </div>
  );
}
