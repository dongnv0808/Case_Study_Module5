import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "http://localhost:3000/videos";

export const getAllVideo = createAsyncThunk(
    'video/getAll',
    async () => {
        const response = await axios.get(baseURL);
        return response.data;
    }
)