import { configureStore } from '@reduxjs/toolkit';
import individualsReducer from './Individuals/individualsSlice';
export const store = configureStore({
  reducer: {
    individuals: individualsReducer,
  },
});

export default store;
