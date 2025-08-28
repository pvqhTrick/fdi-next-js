type Props = {
  left?: React.ReactNode; // Phần bên trái (ảnh, video…)
  right?: React.ReactNode; // Phần bên phải (nội dung text…)
  reverse?: boolean; // Có đảo chiều left/right hay không
};

export function SectionContainer({ left, right, reverse }: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className={`row ${reverse ? 'flex-row-reverse' : ''}`}>
          <div className="left" data-animate-effect="fadeInUp">
            {left}
          </div>
          <div className="right" data-animate-effect="fadeInUp">
            {right}
          </div>
        </div>
      </div>
    </section>
  );
}
