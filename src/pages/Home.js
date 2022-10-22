import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/home.png';
import Summary from '../components/Layout/Summary';
import classes from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/all-accessorize');
  };
  return (
    <Fragment>
      <Summary />
      <section className={classes['home-section']}>
        <div>
          <h1>Yummy Accessorize</h1>
          <p>Happines is receving what you ordered online</p>
          <button onClick={navigateHandler} className={classes.button}>
            Shop Now
          </button>
        </div>
        <div className={classes.image}>
          <img src={image} alt="logo" />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
