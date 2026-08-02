import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const get_city = createAsyncThunk(
  "/weather/city",
  async ({city,lang}, { rejectWithValue }) => {
    try {
      const weather = await axios.get(
        `/api/weather?city=${encodeURIComponent(city)}&lang=${lang}`
      );
       
      const forecast = await axios.get(`/api/forecast?city=${encodeURIComponent(city)}&lang=${lang}`)

      const air = await axios.get(`/api/air?lat=${weather.data.coord.lat}&lon=${weather.data.coord.lon}`)
      const uv = await axios.get(`/api/uv?lat=${weather.data.coord.lat}&lon=${weather.data.coord.lon}`)
  

      return {weather:weather.data , forecast:forecast.data , air:air.data , uv:uv.data,
      
      }
    
    
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

  


export const getSuggestions = createAsyncThunk(
  "weather/getSuggestions",
  async (city) => {
    const res = await fetch(`/api/search?city=${city}`);
    return await res.json();
  }
);

const weatherslice = createSlice({
  name: "weather",

  initialState: {
    weather: null,
    forecast:null,
    air:null,
    uv:null,
    error: null,
    suggestions:[],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(get_city.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(get_city.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload.weather
        state.forecast = action.payload.forecast
        state.air = action.payload.air
        state.uv = action.payload.uv
      })

      .addCase(get_city.rejected, (state, action) => {
        state.loading = false;
        state.weather = null;
        state.forecast=null;
        state.error = action.payload;
      })

      .addCase(getSuggestions.fulfilled,(state,action)=>
      {
        state.suggestions = action.payload

      })

      
  },
});

export default weatherslice.reducer;