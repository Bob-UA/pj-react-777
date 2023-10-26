import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://power-pulse-rh13.onrender.com/api';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = ``;
    },
};

const register = createAsyncThunk('/users/register', async credentials => {
    try {
        const { data } = await axios.post('/users/register', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
      console.log(error.message);
    }
})

const logIn = createAsyncThunk('/users/logIn', async credentials => {
    try {
        const {data} = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
    console.log(error.message);
    }
});

const logOut = createAsyncThunk('/users/logOut', async credentials => {
  try {
      await axios.post('/users/logout', credentials);
      token.unset();
  } catch (error) {
    console.log(error.message);
  }
});


const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users');
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const updateUserMetricsData = createAsyncThunk(
  '/userMetric',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/dailyMetrics', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateUserMetricsData,
};

export default operations;