
import classes from './product1.module.css';
import BeverageItem from '../groceryItem/BerverageItem';
const product1 = () => {
    return (
      <div style={{'min-width':'350px'}} className={classes.product}>
           <h2 className={classes.h2}>Beverages</h2> 
           <BeverageItem />
      </div>
    )
};

export default product1;