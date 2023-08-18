import { configureStore } from '@reduxjs/toolkit';
import stocksReducers from './stocks/stockSlice';

export default configureStore({
  reducer: {
    stocks: stocksReducers,
  },
});
