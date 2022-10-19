import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Logo from './Logo';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <Logo />
              </Link>
            </li>

            <li>
              <Link to="all-accessorize">All Accessorize</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <HeaderCartButton />
      </header>
    </Fragment>
  );
};

export default Header;
