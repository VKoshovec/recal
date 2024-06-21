import { configureStore, createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pokemonArr } from '../Api/api';

const initialState = { 
    loading: false,
    pokemons: [],
    error: null
};

export const beginSync = createAction("baginSync");
export const finishSync = createAction("finishSync");

export const fetchPokemons = createAsyncThunk("pokemons/fetchAll", async (_, thunkAPI) => {
   
  try {

    const responce = await pokemonArr(30);
   
    return responce;
    
  } catch (error) {
     
     return thunkAPI.rejectWithValue(error.message);

  }

});

const reducer = createReducer(initialState,  
    builder => {
        builder
        
        .addCase(fetchPokemons.pending, (state) => { return{
          loading: true,
          pokemons: [],
          error: null }})
        .addCase(fetchPokemons.fulfilled, (state, action) => { return{
          loading: false, 
          pokemons: action.payload,
          error: null}})
        .addCase(fetchPokemons.rejected, (state,action)=>{ return {
          loading: false,
          pokemons: [],
          error: action.payload}})
    }

)

export const store = configureStore({reducer});