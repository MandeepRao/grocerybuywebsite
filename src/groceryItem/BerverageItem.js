
import EachItem from './eachItem';


const Items=[{
    id:1,
    key:1,
    name:"Applejuice",
    cost:40,
    quantity:1,
    volume:"1 liter",
},

{id:2,
    key:2,
    name:"Mangojuice",
cost:30,
quantity:1,
volume:"750 ml",},
{id:3,
    key:3,
    name:"Mixjuice",
cost:40,
quantity:1,
volume:"1 liter",},
{id:4,
    key:4,
    name:"Colddrink",
cost:50,
quantity:1,
volume:"1.5 liter",},
{id:5,
    key:5,name:"Coffee",
cost:25,
quantity:1,
volume:"250 ml",},
{id:6,
    key:6,name:"liquor",
cost:400,
quantity:1,
volume:"750 ml",}];

const BeverageItem = () => {
  



    return ( Items.map(function(Items){
        return (
            <EachItem id={Items.id} key={Items.key} name={Items.name} cost={Items.cost} quantity={Items.quantity} volume={Items.volume}/>

        
        /*
        <button onClick={submitHandler} style={{'padding':'0px','width':'70%','marginLeft':'50px'
  }}>
        <EachItem id={Items.id} name={Items.name} cost={Items.cost} quantity={Items.quantity} volume={Items.volume}/>

        
        </button>*/
        )
    })

    
    )
};
export default BeverageItem;