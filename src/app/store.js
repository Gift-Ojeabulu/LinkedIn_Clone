import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/userSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
