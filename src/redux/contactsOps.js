import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6834b1eacd78db2058bf12f7.mockapi.io/'


export const fetchTasks = createAsyncThunk(
    "tasks/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response);
        }
    }
);