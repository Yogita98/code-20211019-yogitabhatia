import { Route, BrowserRouter } from 'react-router-dom';

// Components
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Products from './Products/Products';

const Contact = () => (
  <div>
    <h2>Contact Us</h2>
  </div>
);

const App = () => {
  return (
    <div style={{ background: '#f1f1ec' }}>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
};

export default App;
