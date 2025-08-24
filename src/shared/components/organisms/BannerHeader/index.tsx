import React from 'react';
import { PrimaryButton } from '../../atoms/PrimaryButton';
import './style.scss';
import type { BannerHeaderProps } from './type';

export const BannerHeader: React.FC<BannerHeaderProps> = ({
  bannerTitle,
  bannerSubtitle,
  bannerBtnLabel,
}) => (
  <>
    <div className="banner-header__bg"></div>
    <div className="container">
      <div className="banner-header__content">
        <h6>
          <svg className="banner-header__icon" width="45" height="45" viewBox="0 0 62 62">
            <circle cx="31" cy="31" r="31" fill="#895CF0" />
            <use
              xlinkHref="/assets/icons/sprite.svg#icon-business"
              fill="white"
              x="15"
              y="15"
              width="32"
              height="32"
            />
          </svg>
          {bannerSubtitle}
        </h6>
        <h1>{bannerTitle}</h1>
        <PrimaryButton label={bannerBtnLabel} />
      </div>
    </div>
  </>
);
