import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiMethods } from "../../Common/constants/APIMethods";
import {
   failed,
   idle,
   loading,
   succeeded,
} from "../../Common/constants/APIState";
import { makeAPIRequest } from "../../Common/utils/APIUtils";

import { RANDOM_QUOTE } from "../constants/UIConstants";

import { GetQuotesType, QuoteType } from "../types";

interface QuotesState {
   page: string;
   activeQuote: QuoteType | null;
   quotes: Array<QuoteType>;
   getRandomQuoteStatus: string;
   getRandomQuoteError: string;
   getAuthorQuotesStatus: string;
   getAuthorQuotesError: string;
}

const initialState: QuotesState = {
   page: RANDOM_QUOTE,
   activeQuote: null,
   quotes: [],
   getRandomQuoteStatus: idle,
   getRandomQuoteError: "",
   getAuthorQuotesStatus: idle,
   getAuthorQuotesError: "",
};

export const getRandomQuote = createAsyncThunk(
   "quotes/getRandomQuote",
   async () => {
      const response = await makeAPIRequest("/quotes/random/", apiMethods.get);
      return response;
   }
);

const quoteSlice = createSlice({
   name: "quotesData",
   initialState,
   reducers: {},
   extraReducers: {
      [getRandomQuote.pending.toString()]: (state, action) => {
         state.getRandomQuoteStatus = loading;
      },
      [getRandomQuote.fulfilled.toString()]: (
         state,
         action: PayloadAction<GetQuotesType>
      ) => {
         state.getRandomQuoteStatus = succeeded;
         const { data } = action.payload;
         const { _id: id, quoteText, quoteAuthor, quoteGenre } = data[0];
         state.activeQuote = { id, quoteText, quoteAuthor, quoteGenre };
      },
      [getRandomQuote.rejected.toString()]: (state, action) => {
         state.getAuthorQuotesStatus = failed;
      },
   },
});

export default quoteSlice.reducer;
