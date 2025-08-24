import React from 'react';
import './style.scss';
import type { AboutSectionProps } from './type';
export const AboutSection: React.FC<AboutSectionProps> = ({ navItems }) => (
  <section data-title="about">
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="left" data-animate-effect="fadeInUp">
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
            <div className="section-title">
              Crafting unforgettable golf experiences <span>since 1995</span>
            </div>
            <p>
              Lorem sit amet risus ac duin auctor posuere ranish the acinia cratusan risus facilis
              semper etiam fermen. Lorem aliquam sit amet auctor the done vitae risus duise in the
              miss drana ranish fermen.
            </p>
            <ul className="page-list">
              <li>
                <div className="page-list-icon">
                  <svg className="nav-icon">
                    <use href="/assets/icons/sprite.svg#icon-tick2"></use>
                  </svg>
                </div>
                <div className="page-list-text">
                  <p>Experienced instructors</p>
                </div>
              </li>
              <li>
                <div className="page-list-icon">
                  <svg className="nav-icon">
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
          <div className="right" data-animate-effect="fadeInUp">
            <div className="item">
              <img src="/assets/images/about-img.png" className="img-fluid" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
