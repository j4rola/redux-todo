import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import arrayReducer from '../features/array/arraySlice'; 

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    array: arrayReducer,
  },
});
