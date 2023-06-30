import css from './Home.module.css'
import imgHello from '../images/pngwing.com.png'
import bubble from '../images/pngwing.com (4).png'


export default function Home() {
  return (
    <div className={css.homeWrap}>
      <img src={imgHello} alt='Hello' width='380' className={css.homeHelloImg} />
      <h1 className={css.homeWelcomeTitle}>
        Welcome to Phonebook!
      </h1>
      <img src={bubble} alt='Hello' width='520' className={css.homeHelloImg} />
    </div>
  );
}