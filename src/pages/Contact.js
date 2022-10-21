import { FiInstagram } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import classes from './Contact.module.css';

const Contact = () => {
  return (
    <div className={classes['icon-block']}>
      <a href="https://www.instagram.com/yummy_accessorize/">
        <IconContext.Provider value={{ className: classes.icon }}>
          <FiInstagram />
        </IconContext.Provider>
      </a>
    </div>
  );
};

export default Contact;
