import { FiInstagram, FiPhone } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import classes from './Contact.module.css';

const Contact = () => {
  return (
    <IconContext.Provider value={{ className: classes.icon }}>
      <section>
        <p>Thank you for your interest!</p>
        <ul className={classes.contact}>
          <li>
            <a href="tel:+371000000">
              <FiPhone />
              +374 093 00 00 00
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yummy_accessorize/">
              <FiInstagram />
              Instagram Profile
            </a>
          </li>
        </ul>
        <h1>About Us</h1>

        <p>
          Handmade Accessorize!
          <br />
          The Yummy brand is all about quality and you can be sure that this is
          exactly what you will find when you purchase from us.
          <br /> Our handmade jewelry is approved for impeccable quality before
          being shipped out to a customer.
          <br />
          We want to thank you for choosing and it is always a pleasure
          providing quality to you and those you love.
        </p>
      </section>
    </IconContext.Provider>
  );
};

export default Contact;
