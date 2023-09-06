import { createSlice } from '@reduxjs/toolkit';
import individuals from './individualsList';

const individualsSlice = createSlice({
  name: 'individuals',
  initialState: {
    individualsList: individuals,
    individualsFiltered: [],
    isLoading: true,
  },
});

export default individualsSlice.reducer;
