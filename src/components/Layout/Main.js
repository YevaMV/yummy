import image from '../../assets/home.png';
import classes from './Main.module.css';

const Main = () => {
  return (
    <section>
      <div>
        <h1>Yummy Accessorize</h1>
        <p>Happines is receving what you ordered online</p>
        <button className={classes.button}>Shop Now</button>
      </div>
      <div className={classes.image}>
        <img src={image} alt="logo" />
      </div>
    </section>
  );
};
export default Main;
