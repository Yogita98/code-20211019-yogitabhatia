import { useState } from 'react';
import { useQuery } from 'react-query';

import {
  Wrapper,
  StyledButton,
  StyledCircularProgressDiv,
} from './Products.styles';
import { Drawer, CircularProgress, Grid, Badge } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import Wishlist from './Wishlist/Wishlist';
import Car from './Car/Car';

// Types
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

const getCars = async (): Promise<Array<WishlistItemTypeCars>> => {
  const items = await (await fetch('https://myfakeapi.com/api/cars')).json();
  const { cars } = items;
  return cars;
};

const Products = () => {
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState(
    [] as WishlistItemTypeCars[]
  );
  const { data, isLoading, error } = useQuery<Array<WishlistItemTypeCars>>(
    'cars2',
    getCars
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
    setWishlistItems((prev: WishlistItemTypeCars[]) =>
      prev.filter((item) => item.id !== id)
    );
  };

  if (isLoading)
    return (
      <StyledCircularProgressDiv>
        <CircularProgress color="inherit" />
      </StyledCircularProgressDiv>
    );
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
            <Car item={item} handleAddToWishlist={handleAddToWishlist} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Products;
