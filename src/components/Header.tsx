import { NavLink } from 'react-router-dom';

import logo from '@assets/logo.svg';
import { cn } from '@lib/utils';

const Header = () => {
  return (
    <header className="bg-inputs border-b border-badges">
      <div className="mx-auto max-w-[1440px] px-16 py-6">
        <div className="flex items-center">
          <div>
            <img src={logo} alt="TravelTrucks" />
          </div>
          <nav className="ml-[460px]">
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    cn('font-medium text-main', {
                      'text-button-hover': isActive,
                    })
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/catalog"
                  className={({ isActive }) =>
                    cn('font-medium text-main', {
                      'text-button-hover': isActive,
                    })
                  }
                >
                  Catalog
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
