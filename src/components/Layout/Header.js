import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Logo from './Logo';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Logo />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
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
