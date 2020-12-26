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

export const getAuthorQuotes = createAsyncThunk(
   "quotes/getAuthorQuotes",
   async (author: string) => {
      const response = await makeAPIRequest("/quotes/", apiMethods.get, {
         author,
         limit: 10,
      });
      return response;
   }
);

const quoteSlice = createSlice({
   name: "quotesData",
   initialState,
   reducers: {
      updatePage: (state, action) => {
         state.page = action.payload;
      },
   },
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
         state.getRandomQuoteStatus = failed;
      },
      [getAuthorQuotes.pending.toString()]: (state, action) => {
         state.getAuthorQuotesStatus = loading;
      },
      [getAuthorQuotes.fulfilled.toString()]: (
         state,
         action: PayloadAction<GetQuotesType>
      ) => {
         state.getAuthorQuotesStatus = succeeded;
         const { data } = action.payload;
         state.quotes = [];
         data.forEach((quote) => {
            const { _id: id, quoteText, quoteAuthor, quoteGenre } = quote;
            state.quotes.push({
               id,
               quoteText,
               quoteAuthor,
               quoteGenre,
            });
         });
      },
      [getAuthorQuotes.rejected.toString()]: (state, action) => {
         state.getAuthorQuotesStatus = failed;
      },
   },
});

export const { updatePage } = quoteSlice.actions;

export default quoteSlice.reducer;
