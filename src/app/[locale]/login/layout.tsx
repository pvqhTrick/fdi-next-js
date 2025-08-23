import { getTranslations } from 'next-intl/server';

import { SvgIcon } from '@/shared/components/atoms';
import { APP_NAME } from '@/shared/constants';
import { EIcon } from '@/shared/enums';
import './style.scss';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getTranslations('Modules/Auth');

  return (
    <div className="login">
      <div className="wrapper">
        <header className="-intro-x">
          <div className="block-grap-1">
            <SvgIcon name={EIcon.Logo} className="size-6" />
            <h4>{APP_NAME}</h4>
          </div>
          <h5 className="uppercase">{t('EnterpriseManagementSystem')}</h5>
        </header>
        <main className="intro-x">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
