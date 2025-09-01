import type { SwiperSectionProps } from './type';

export const SwiperSection: React.FC<SwiperSectionProps> = () => {
  return (
    <section data-title="swiper">
      <div className="services1">
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="section-subtitle">
                <svg width="45" height="45" viewBox="0 0 62 62">
                  <circle cx="31" cy="31" r="31" fill="#895CF0" />
                  <use
                    href="/assets/icons/sprite.svg#icon-business"
                    fill="white"
                    x="15"
                    y="15"
                    width="32"
                    height="32"
                  />
                </svg>
                What we offer
              </div>
              <div className="section-title">Lorem sit amet risus ac duin</div>
              <ul className="page-list">
                <li>
                  <div className="page-list-icon">
                    <svg className="nav-icon" width="18" height="18">
                      <use href="/assets/icons/sprite.svg#icon-tick2"></use>
                    </svg>
                  </div>
                  <div className="page-list-text">
                    <p>Experienced instructors</p>
                  </div>
                </li>
                <li>
                  <div className="page-list-icon">
                    <svg className="nav-icon" width="18" height="18">
                      <use href="/assets/icons/sprite.svg#icon-tick2"></use>
                    </svg>
                  </div>
                  <div className="page-list-text">
                    <p>Training and competition</p>
                  </div>
                </li>
              </ul>
              <a href="#" className="secondary-btn">
                Discover more<span></span>
              </a>
            </div>

            <div className="image">
              <div className="swaper">
                <div id="handlebars-swiper"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
