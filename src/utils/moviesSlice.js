import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popular:null,
        trending:null,
        upcomming:null,
        trailer:null,
        movieData:null,
        movieVedioData:null,
        searchMovie:null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies=action.payload;
        }, 
        addPopularMovies: (state,action)=>{
            state.popular=action.payload;
        },
        addTrendingMovies: (state,action)=>{
            state.trending=action.payload;
        },
        addUpcommingMovies: (state,action)=>{
            state.upcomming=action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        },
        addMovieData:(state,action)=>{
            state.movieData=action.payload
        },
        addMovieVedioData:(state,action)=>{
            state.movieVedioData=action.payload
        },
        addSearchMovie:(state,action)=>{
            state.searchMovie=action.payload;
        }
       
   }
})

export const  {addSearchMovie,addMovieVedioData,addMovieData,addNowPlayingMovies,addTrailer,addPopularMovies,addTrendingMovies,addUpcommingMovies} = movieSlice.actions;

export default movieSlice.reducer;