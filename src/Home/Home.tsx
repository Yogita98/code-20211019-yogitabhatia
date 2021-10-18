import HeroBackground from './HeroBg/HeroBg';
import Banner from './Banner/Banner';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Services from './Services/Service';

const useStyles = makeStyles({
  btnHero: {
    color: '#af9a7d',
    padding: '.4rem .9rem',
    borderBottom: '2px solid #e9bc7d',
    textDecoration: 'none',

  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <HeroBackground>
        <Banner title="mdrn dealership" subtitle="find your dream car here">
          <Link to="/cars" className={classes.btnHero}>
            Our Cars
          </Link>
        </Banner>
      </HeroBackground>
      <Services />
    </>
  );
};

export default Home;
