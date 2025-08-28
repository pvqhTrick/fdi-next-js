import { Image } from '../../atoms';

export const AboutImage = () => (
  <div className="right" data-animate-effect="fadeInUp">
    <div className="Image">
      <Image
        src="/assets/images/about-img.png"
        alt="About us"
        className="rounded-xl shadow-lg img-fluid"
        width={500}
        height={400}
      />
    </div>
  </div>
);
