import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <span>logo</span>
      <span className={classes['logo-text']}>Yummy Accessorize</span>
    </div>
  );
};

export default Logo;
