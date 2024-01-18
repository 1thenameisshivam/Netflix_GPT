import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        toggleGpt:false,
        movieName:null,
        movieSearch:null,
        toggleSearch:false,
    },
    reducers:{
        setToggleGpt:(state,action)=>{
            state.toggleGpt=(!state.toggleGpt)
        },
        setMovieName:(state,action)=>{
            state.movieName=action.payload;
        },
        setMovieSearch:(state,action)=>{
            state.movieSearch=action.payload;
        },
        clearMovies:(state,action)=>{
            state.movieName=action.payload;
            state.movieSearch=action.payload;
        },
        
    }
})

export const{setToggleGpt,setMovieName,setMovieSearch,clearMovies }=gptSlice.actions;
export default gptSlice.reducer;
