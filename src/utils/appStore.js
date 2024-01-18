import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./moviesSlice"
import configReducer from "./configSlice"
import gptReducer  from "./gptSlice"
const appStore=configureStore({
    reducer:{
        user : userReducer,
        movies: movieReducer,
        config:configReducer,
        gpt:gptReducer
    }
})

export default appStore