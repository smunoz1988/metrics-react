import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import detailReducer from './details/detailSlice';

const store = configureStore({
  reducer: {
    category: categoriesReducer,
    detail: detailReducer,
  },
});

export default store;
