import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/Cart/CartSlice';
import productsReducer from '../features/Products/ProductsSlice'
import userReducer from '../features/User/UserSlice';


export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
   
  },
});

export default store;