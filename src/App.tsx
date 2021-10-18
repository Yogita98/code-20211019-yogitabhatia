import { useState } from 'react';
import { useQuery } from 'react-query';

//Components
import { Drawer } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Item from './Car/Car';
import { FavoriteBorder } from '@material-ui/icons';

//Styles
import { Wrapper, StyledButton } from './App.styles';
import Wishlist from './Wishlist/Wishlist';

//Types
export type WishlistItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export type WishlistItemTypeCars = {
  id: number;
  car: string;
  car_model: string;
  car_color: string;
  car_model_year: number;
  car_vin: string;
  price: string;
  availability: Boolean;
  amount: number;
};

type CarsType = {
  cars: Array<WishlistItemTypeCars>;
}

const getCars = async (): Promise<WishlistItemType[]> =>
  await await (await fetch('https://fakestoreapi.com/products')).json();

const getCars2 = async (): Promise<Array<WishlistItemTypeCars>> =>{
  const items = await (await fetch('https://myfakeapi.com/api/cars')).json();
  const { cars } = items;
  return cars
  }

const App = () => {
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([] as WishlistItemTypeCars[]);
  // const { data, isLoading, error } = useQuery<WishlistItemType[]>(
  //   'cars',
  //   getCars
  // );
/* @ts-ignore */
  const { data, isLoading, error } = useQuery<Array<WishlistItemTypeCars>>(
    'cars2',
    getCars2
  );
  console.log(data);

  const getTotalCars = (items: WishlistItemTypeCars[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToWishlist = (clickedItem: WishlistItemTypeCars) => {
    setWishlistItems((prev: WishlistItemTypeCars[]) => {
      // is the item already present in wishlist?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      // do nothing if already present
      return isItemInCart ? prev : [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setWishlistItems((prev: WishlistItemTypeCars[]) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong....</div>;
  return (
    <Wrapper>
      <Drawer
        anchor="right"
        open={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
      >
        <Wishlist
          wishlistItems={wishlistItems}
          addToWishlist={handleAddToWishlist}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setWishlistOpen(true)}>
        <Badge badgeContent={getTotalCars(wishlistItems)} color="error">
          <FavoriteBorder />
        </Badge>
      </StyledButton>
      <Grid container spacing={5}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToWishlist={handleAddToWishlist}></Item>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
