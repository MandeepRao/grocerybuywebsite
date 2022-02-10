import {createSlice} from '@reduxjs/toolkit';


const cartSlice= createSlice({
    name:'CartList',
    initialState:{itemlist:[],totalQuantity:0},
    reducers: {
       addItemToCart(state,action) {
         const newItem=action.payload;
         const existingItem=state.itemlist.find((item) => item.id === newItem.id);
        
         if (!existingItem){
             state.itemlist.push({
                 key:newItem.key,
                 id:newItem.id,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price,
                name:newItem.name
            });
            state.totalQuantity++;
         }
         else{
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.totalPrice+newItem.price;
            state.totalQuantity++;
         }
       },
      removeItemFromCart(state,action) {
        
          const id = action.payload;
          const existingItem = state.itemlist.find((item) => item.id === id);
          if(state.totalQuantity>0){
          state.totalQuantity--;}
          if(existingItem.quantity === 1) {
              if(state.itemlist.length===1)
              {state.itemlist=[];}
              else{
                  
                  state.itemlist = state.itemlist.filter((item) => item.id !==id);
              }

          }
          else{
              existingItem.quantity--;
              existingItem.totalPrice= existingItem.totalPrice-existingItem.price;
          }

      },  
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;