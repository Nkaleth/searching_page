import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchIndividuals from '../../API/postsAPI';

export const searchIndividuals = createAsyncThunk(
  'individuals/searchIndividuals',
  async (query) => {
    const response = await fetchIndividuals(query);
    const jsons = response.data.split('\n').filter(Boolean).map((line) => JSON.parse(line));
    return jsons;
  },
);

const individualsSlice = createSlice({
  name: 'individuals',
  initialState: {
    individualsList: [],
    individualsFavorites: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchIndividuals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchIndividuals.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.individualsList = action.payload;
      })
      .addCase(searchIndividuals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default individualsSlice.reducer;
