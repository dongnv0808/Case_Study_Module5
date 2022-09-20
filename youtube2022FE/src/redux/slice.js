import { createSlice } from "@reduxjs/toolkit"
import { getAllVideo, getDetailVideo } from "./apis"

const initialState ={ 
    videos: [
    ],
    video: null
}

const videoSlice = createSlice({
    name: "case5",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllVideo.fulfilled, (state, action) => {
            state.videos = action.payload
        })
        .addCase(getDetailVideo.fulfilled, (state, action) => {
            state.video = action.payload
            console.log(state.video);
        })
    }
})

export default videoSlice.reducer;
