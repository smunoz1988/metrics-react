import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  details: [],
  error: '',
};

export const getDetails = createAsyncThunk('detail/getDetails', async () => {
  try {
    const config = {
      headers: {
        'X-RapidAPI-Key': '4743a0dcfcmsh6774803b4a66ca6p1f5f3ejsn67ea319599fd',
        'X-RapidAPI-Host': 'fia-formula-1-championship-statistics.p.rapidapi.com',
      },
    };

    const url = 'https://fia-formula-1-championship-statistics.p.rapidapi.com/api/drivers/details/maxverstappen';

    const resp = await axios.get(url, config);
    return resp.data;
  } catch (error) {
    return error;
  }
});

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.details = action.payload;
      state.error = '';
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.loading = false;
      state.details = [];
      state.error = action.error.message;
    });
  },
});

export default detailSlice.reducer;
