import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartArray: [],
  cartToggleStatus: {},
  count: 0,
  totalPrice: 0,
};
 export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const existingItem = state.cartArray.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.cartArray.push({ ...action.payload, quantity: 1 }); 
        state.cartToggleStatus[action.payload.id] = false;
        state.count += 1;
      }
      state.totalPrice = state.cartArray.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    },
    removeFromCart: (state, action) => {
      const filterData = state.cartArray.filter(item => item.id !== action.payload);
      state.cartArray = filterData;
      state.cartToggleStatus[action.payload] = true;
      state.count -= 1;
      state.totalPrice = filterData.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    },
    incrementQuantity: (state, action) => {
      state.cartArray.forEach(item => {
        if (item.id === action.payload) {
          item.quantity += 1; 
        }
      });
      state.totalPrice = state.cartArray.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    },
    decrementQuantity: (state, action) => {
      state.cartArray.forEach(item => {
        if (item.id === action.payload) {
          if (item.quantity > 1) { 
            item.quantity -= 1;
          }
        }
      });
      state.totalPrice = state.cartArray.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    }
  },
});

export const { addtoCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
