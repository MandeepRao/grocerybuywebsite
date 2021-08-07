import {Fragment} from 'react';
import ReactDom from 'react-dom';
import classes from './orderCart.module.css';
  
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onCl}></div>
};

const Modaloverlay= props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement=document.getElementById('overlays');
const OrderCart = (props) => {

return <Fragment> 
{ReactDom.createPortal(<Backdrop onCl={props.onclose} />,portalElement)}
{ReactDom.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,portalElement)}
</Fragment>
};

export default OrderCart;