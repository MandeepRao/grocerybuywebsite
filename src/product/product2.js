

import classes from './product2.module.css';
import CeralsAndFood from '../groceryItem/CeralsAndFood';
const product1 = () => {
    return (
      <div className={classes.product}>
           <h2 className={classes.h2}>CeralsAndFood</h2> 
           <CeralsAndFood/>
      </div>
    )
};

export default product1;