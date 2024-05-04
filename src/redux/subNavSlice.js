import { createSlice } from "@reduxjs/toolkit";

const subNavSlice = createSlice({
    name : 'SubNav',
    initialState : {
        activeSection : "projects",
    },

    reducers : {
        changeSection : (state, action) => {
            state.activeSection = action.payload;
        }
    }
});

export const { changeSection } = subNavSlice.actions;
export default subNavSlice.reducer;
