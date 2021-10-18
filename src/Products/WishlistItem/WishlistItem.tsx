import { Button } from '@mui/material';
import { WishlistItemTypeCars } from '../Products';
import { Wrapper } from './WishlistItem.styles';

type Props = {
  item: WishlistItemTypeCars;
  addToWishlist: (clickedItem: WishlistItemTypeCars) => void;
  removeFromCart: (id: number) => void;
};

const WishlistItem: React.FC<Props> = ({ item, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.car}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          Remove from Wishlist
        </Button>
      </div>
    </div>
    <img src="" alt={item.car} />
  </Wrapper>
);

export default WishlistItem;
