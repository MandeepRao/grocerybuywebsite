import EachItem from './eachItem';

const Items=[{
    id:7,
    key:7,
    name:"Biscuit",
    cost:20,
    quantity:1,
    volume:"1 packet",
},

{id:8,
    key:8,
    name:"Noodles",
cost:30,
quantity:1,
volume:"1 packet",},
{id:9,
    key:9,
    name:"Rice",
cost:80,
quantity:1,
volume:"1 Kg",},
{id:10,
    key:10,
    name:"Wheat",
cost:50,
quantity:1,
volume:"1 Kg",},
{id:11,
    key:11,name:"Namkeen",
cost:75,
quantity:1,
volume:"1 packet",},
{id:12,
    key:12,name:"Pulses",
cost:150,
quantity:1,
volume:"250 gm",}];

const ceralsandfood = () => {
    return ( Items.map(function(Items){
        return (<EachItem id={Items.id} key={Items.key} name={Items.name} cost={Items.cost} quantity={Items.quantity} volume={Items.volume} ></EachItem>)
    })

    
    )
};
export default ceralsandfood;