import {createSlice} from '@reduxjs/toolkit';

const initialState = { title: "loading movies" };

export const movieSlice = createSlice({
    name: "movie1",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const {movie1} = action.payload;
            state.movie1 = movie1;
        }
    }
});

export const {addMovie} = movieSlice.actions;