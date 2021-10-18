import { useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { WishlistItemTypeCars } from '../App';
import { Wrapper } from './Car.styles';
import carImg from '../images/car-1.jpeg';
import ModalDialog from '../Modal/Modal';

type Props = {
  item: WishlistItemTypeCars;
  handleAddToWishlist: (clickedItem: WishlistItemTypeCars) => void;
};

const Car: React.FC<Props> = ({ item, handleAddToWishlist }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <img src={carImg} alt={item.car} />
      <div>
        <h4>Name: {item.car}</h4>
        <h4>Model: {item.car_model}</h4>
        <h4>On-road price: ${item.price}</h4>
      </div>

      <ButtonGroup
        orientation="vertical"
        disableElevation
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => handleAddToWishlist(item)}>Wishlist</Button>
        <Button onClick={handleClickOpen}>Test Drive</Button>
      </ButtonGroup>
      <ModalDialog open={open} handleClose={handleClose} />
    </Wrapper>
  );
};

export default Car;
