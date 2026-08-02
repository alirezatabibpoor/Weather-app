import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

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
  

      return {weather:weather.data , forecast:forecast.data , air:air.data , uv:uv.data,visibility: uv.data.current.visibility,
      Maxtemp:uv.data.daily.temperature_2m_max , Mintemp:uv.data.daily.temperature_2m_min
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
    visibility:null,
    Maxtemp:null,
    Mintemp:null,
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
        state.visibility=action.payload.visibility
        state.Maxtemp=action.payload.Maxtemp
        state.Mintemp=action.payload.Mintemp
      })

      .addCase(get_city.rejected, (state, action) => {
        state.loading = false;
        state.weather = null;
        state.forecast=null;
        state.air=null;
        state.uv=null;
        state.visibility=null;
        state.Maxtemp=null;
        state.Mintemp=null;

        state.error = action.payload;
      })

      .addCase(getSuggestions.fulfilled,(state,action)=>
      {
        state.suggestions = action.payload

      })

      
  },
});

export default weatherslice.reducer;