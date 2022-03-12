import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import communityService from "../services/communityService";

const initialState = {
    communities: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

// Create new community
export const createCommunity = createAsyncThunk(
    'communities/create',
    async (communityData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await communityService.createCommunity(communityData, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const communitySlice = createSlice({
    name: "community",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCommunity.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createCommunity.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.communities.push(action.payload)
            })
            .addCase(createCommunity.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = communitySlice.actions;

export default communitySlice.reducer;