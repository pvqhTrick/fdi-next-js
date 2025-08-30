type Props = {
  subtitle?: string;
  icon?: string;
};

export default function SectionHeader({ subtitle, icon }: Props) {
  return (
    // <div className="section-subtitle">
    //   <SvgIcon name="business" className="section-title__icon" />
    //   {children}
    // </div>
    <div className="section-subtitle flex items-center gap-2 mb-4">
      {icon && (
        <svg width="45" height="45" viewBox="0 0 62 62">
          <circle cx="31" cy="31" r="31" fill="#895CF0" />
          <use
            xlinkHref={`/assets/icons/sprite.svg#${icon}`}
            fill="white"
            x="15"
            y="15"
            width="32"
            height="32"
          />
        </svg>
      )}
      {subtitle}
    </div>
  );
}
