import classes from './navigation.module.css';
import NavigationCartButton from './navigationcartbutton';

const navigation= (props) => {
return <header
className={classes.header}>
<h1>Your Basket</h1>
<a  href="#Login">Login</a>
<NavigationCartButton onClick={props.onshowcart}/>



</header> 
};

export default navigation;