import { AppBar, Toolbar, CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Wrapper} from './NavBar.styles';
import CarRentalIcon from '@mui/icons-material/CarRental';

const useStyles = makeStyles({
  centerMargin: {
    margin: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: '20px',
    '&:hover': {
      color: '#af9a7d',
      borderBottom: '1px solid white',
    },
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <Wrapper>
    <AppBar position="static" color="inherit">
      <CssBaseline />
      <Toolbar>
        <CarRentalIcon fontSize="large" color="inherit"/>
        <div className={classes.centerMargin}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/products" className={classes.link}>
            Products
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
          <Link to="/faq" className={classes.link}>
            FAQ
          </Link>
        </div>
      </Toolbar>
    </AppBar>
    </Wrapper>
  );
};
export default Navbar;
