import { useMemo } from 'react';
import cn from 'classnames';

import { useWindowScroll, useScrollDirection } from 'hooks';
import { Navbar } from 'modules/mainHeader/Navbar';
import { AppLink } from 'components/AppLink';

export const AppHeader: React.FC = () => {
  const { y: scrollPosY } = useWindowScroll();

  const scrollDirection = useScrollDirection();

  const headerThreshold = scrollPosY > 60;

  const className = useMemo(
    () =>
      cn('main-header', {
        'main-header__fixed': headerThreshold,
        'main-header__hidden': headerThreshold && scrollDirection === 'down',
      }),
    [headerThreshold, scrollDirection],
  );

  return (
    <header className={className}>
      <div className="main-header__inner">
        <h1 className="main-header__logo">
          <AppLink to="/">konsila Systemberatung</AppLink>
        </h1>

        <Navbar />
      </div>
    </header>
  );
};
