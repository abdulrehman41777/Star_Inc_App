import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {service} from '../../utils/service';
import {HTTPVERBS} from '../../utils';

export type innerChat =
  | {
      content: string;
      createdAt: string;
      deletedAt: string | null;
      guestId: string;
      id: number;
      user: {
        createdAt: string;
        email: null | string;
        firstName: null | string;
        guestId: string;
        id: number;
        isActive: boolean;
        lastName: null | string;
        password: null | string;
        role: string;
        updatedAt: string;
      };
    }
  | any;

type ChatState = {
  chat: innerChat[];
  errorChat: string;
};

const initialState: ChatState = {
  chat: [],
  errorChat: '',
};

export const chatRecieveThunk = createAsyncThunk(
  'get/chat',
  async (id: string) => {
    try {
      const response = await service(
        HTTPVERBS.get,
        null,
        null,
        `/chat/messages/${id}`,
      );
      console.log('response', response.data);
      return response.data;
    } catch (error: any) {
      console.log('chat_error', error.response.data);
      throw error.response.data.error;
    }
  },
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    removeChat: state => {
      state.chat = [];
    },
    addMessage: (state, action)=>{
      state.chat = [action.payload,...state.chat];
    }
  },
  extraReducers: builder => {
    builder.addCase(chatRecieveThunk.fulfilled, (state, action) => {
      state.errorChat = '';
      state.chat = action.payload;
    });
  },
});

export const {removeChat, addMessage} = chatSlice.actions;
export default chatSlice.reducer;
