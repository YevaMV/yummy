import classes from './Logo.module.css';
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <div className={classes['logo-block']}>
      <div className={classes['logo-image']}>
        <img src={logo} alt="logo" />
      </div>
      <span className={classes['logo-text']}>Yummy Accessorize</span>
    </div>
  );
};

export default Logo;
