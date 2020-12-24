import { configureStore } from "@reduxjs/toolkit";

import quoteReducer from "../reducers/quoteSlice";

export const store = configureStore({ reducer: { quotesData: quoteReducer } });

export type RootState = ReturnType<typeof store.getState>;
