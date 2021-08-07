import classes from './Cart.module.css';
import {useSelector} from 'react-redux';
import OrderCart from './orderCart';
import CartItem from './CartItem';
const Cart = (props) => {
     const selectorlist=useSelector((state)=> state.cart.itemlist);
     let money=0;
     selectorlist.map((item) => (
         money=money+(item.totalPrice)
     ));

     return (
         <OrderCart onclose={props.onclosecart}>
         {selectorlist.map((item) => (
             <CartItem
                 item={{
                     id:item.id,
                     name:item.name,
                     quantity: item.quantity,
                     total: item.totalPrice,
                     price: item.price,
                 }}
             />
         ))}
         <div className={classes.total}>
         <span>Total Amount</span>
         <span>{money}</span>
         </div>
         <div className={classes.actions}>
          <button onClick={props.onclosecart} className={classes['button--alt']}>close</button>
          <button className={classes.button}>order</button>
         </div>
 
         </OrderCart>
     )

}

export default Cart;