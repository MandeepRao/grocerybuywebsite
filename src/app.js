import {Fragment,useState} from 'react';
import Footer from './footer/footer';
import Cart from './orderCart/Cart';
 import Product1 from './product/product1';
 import Product2 from './product/product2';

import im from './image/img.jpg';
import Navigation from './NavigationBar/navigation';


const App=() => {

    const [cartopen ,setcartopen]=useState(false);

    const cartShowHandler = () => {
        setcartopen(true);
    }
    const cartclosehandler = () => {
        setcartopen(false);
    }

    return (<Fragment>
      {cartopen &&  <Cart onclosecart={cartclosehandler}/> }
    <div style={{'backgroundImage':'url("im")'}}>
        <Navigation onshowcart={cartShowHandler}/>
       <div style={{'marginTop':'60px','marginBottom':'0px','height':'70px','textAlign':'center'
       ,'color':'#ff6600','fontFamily':'Lucida Console','fontSize':'150%','backgroundColor':'white'}}>
       <marquee scrollamount="8" direction="left"><h4>Bring your grocery product at homedoor</h4></marquee>
       </div> 
        <img src={im} alt = {"imag"} style={{'width':'40%','minWidth':'350px','borderRadius':'70%','float':'left','marginTop':'3%'}}/>
       
       <Product1/>
       <Product2/>
      
       <Footer/>
    </div>
    </Fragment>
    )
};


export default App;