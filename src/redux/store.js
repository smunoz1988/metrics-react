import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    category: categoriesReducer,
  },
});

export default store;
