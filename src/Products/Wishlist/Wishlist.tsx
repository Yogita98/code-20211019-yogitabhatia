import { Wrapper } from './Wishlist.styles';
import CartItem from '../WishlistItem/WishlistItem';
import { WishlistItemTypeCars } from '../Products';

type Props = {
  wishlistItems: WishlistItemTypeCars[];
  addToWishlist: (clickedItem: WishlistItemTypeCars) => void;
  removeFromCart: (id: number) => void;
};

const Wishlist: React.FC<Props> = ({ wishlistItems, addToWishlist, removeFromCart }) => (
  <Wrapper>
    <h2>Wishlisted Cars</h2>
    {wishlistItems.length === 0 ? <p>No items in Cart.</p> : null}
    {wishlistItems.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        addToWishlist={addToWishlist}
        removeFromCart={removeFromCart}
      />
    ))}
  </Wrapper>
);

export default Wishlist;
