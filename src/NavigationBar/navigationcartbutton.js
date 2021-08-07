import CartIcon from './carticon';
import classes from './navigationcartbutton.module.css';
import { useSelector } from 'react-redux';
const Navigationcartbutton = (props) => {

    const total=useSelector((state) => state.cart.totalQuantity);
    return <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
        <span>your basket</span>
        <span className={classes.badge}>{total}</span>
    </button>
  };
  
  export default Navigationcartbutton;