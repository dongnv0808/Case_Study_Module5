import { getAllVideo } from "./apis"

const initialState ={ 
    videos: [
    ]
}

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllVideo.fulfilled, (state, action) => {
            state.videos = action.payload
        })
    }
})

export default videoSlice.reducer;