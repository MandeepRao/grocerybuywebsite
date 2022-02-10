import {useDispatch} from 'react-redux';
import { cartActions } from '../store/cart-slice';

import classes from './eachItem.module.css';
const EachItem = (prop) => {
    const dispatch= useDispatch();

  const submitHandler= () => {
      
      dispatch(cartActions.addItemToCart({
       id:prop.id,key:prop.key, name:prop.name, price:prop.cost, 
      }));
  };


return <div  id={prop.id} key={prop.id} className={classes.eachItem}>
   
   
    <h3>{prop.name}</h3>
    <h4>{prop.volume}</h4>
    <h3>{prop.cost}</h3>
    <button onClick={submitHandler} style={{'color':'green'}}> buy</button>
</div>


};
export default EachItem;