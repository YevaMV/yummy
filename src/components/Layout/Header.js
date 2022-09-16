import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Logo from './Logo';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Logo />
        <HeaderCartButton />
      </header>
    </Fragment>
  );
};

export default Header;
