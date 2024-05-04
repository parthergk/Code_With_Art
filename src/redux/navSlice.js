import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name : 'Nav',
    initialState: {
        menu : false,
    },

    reducers : {
        isVisible : (state)=>{
            state.menu = !state.menu;
        },
    }
})

export const {isVisible,notVisible} = navSlice.actions;
export default navSlice.reducer;