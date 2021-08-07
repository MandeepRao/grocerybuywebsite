import {useDispatch} from 'react-redux';
import { cartActions } from '../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { id,name, quantity, total, price } = props.item;
 
  const dispatch= useDispatch();

  const addsubmithandler= () => {
      
      dispatch(cartActions.addItemToCart({
       id:id, name:name, price:price, 
      }));
  };

  const removesubmithandler= () => {
      
    dispatch(cartActions.removeItemFromCart(
      id
    ));
};

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
         Rs {total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(Rs{price.toFixed(2)}/item)</span>
        </div> 
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removesubmithandler}>-</button>
          <button onClick={addsubmithandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
