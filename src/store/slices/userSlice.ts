import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { service } from "../../utils/service"
import { HTTPVERBS } from "../../utils"

type UserState = {
    loading: boolean,
    token: string,
    error: any | null
}

const initialState:UserState = {
    token: '',
    loading: false,
    error: null
}

export const registerGuestUser = createAsyncThunk(
    'guestUser/login',
    async () => {
        try {
            const response = await service(HTTPVERBS.post, null,{},'/auth/guest-login');
            console.log('user_response', response.data.guestId)
            return response.data
        } catch (error:any) {
            console.log('user_error', error.response.data.error);
            throw error.response.data.error
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(registerGuestUser.fulfilled,(state, action)=>{
            state.token = action.payload.guestId;
            state.error= null;
            state.loading = false
        })
        builder.addCase(registerGuestUser.pending,(state, action)=>{
            state.token = '';
            state.error= null;
            state.loading = true
        })
        builder.addCase(registerGuestUser.rejected,(state, action)=>{
            state.token = '';
            state.error= action.payload;
            state.loading = false
        })
    }
});

export default userSlice.reducer;