import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  categories: [],
  error: '',
};

export const getCategories = createAsyncThunk('category/getCategories', async () => {
  try {
    const config = {
      headers: {
        'X-RapidAPI-Key': '595740a7f5mshc92914bbcf4727fp18322djsnaf6c8af4b471',
        'X-RapidAPI-Host': 'fia-formula-1-championship-statistics.p.rapidapi.com',
      },
    };

    const url = 'https://fia-formula-1-championship-statistics.p.rapidapi.com/api/drivers/';

    const resp = await axios.get(url, config);
    return resp.data;
  } catch (error) {
    return error;
  }
});

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = '';
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.categories = [];
      state.error = action.error.message;
    });
  },
});

export default categoriesSlice.reducer;
