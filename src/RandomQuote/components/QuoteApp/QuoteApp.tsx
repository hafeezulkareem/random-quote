import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { idle } from "../../../Common/constants/APIState";

import { RANDOM_QUOTE } from "../../constants/UIConstants";
import { getRandomQuote } from "../../reducers/quoteSlice";
import { RootState } from "../../store";

import Quote from "../Quote";

import { QuoteAppContainer } from "./styledComponents";

const QuoteApp = () => {
   const dispatch = useDispatch();

   const getRandomQuoteStatus = useSelector(
      (state: RootState) => state.quotesData.getRandomQuoteStatus
   );

   useEffect(() => {
      if (getRandomQuoteStatus === idle) {
         dispatch(getRandomQuote());
      }
   }, [getRandomQuoteStatus, dispatch]);

   const page = useSelector((state: RootState) => state.quotesData.page);
   const activeQuote = useSelector(
      (state: RootState) => state.quotesData.activeQuote
   );

   return (
      <QuoteAppContainer>
         {page === RANDOM_QUOTE ? (
            <Quote quote={activeQuote} />
         ) : (
            <div>Quotes list</div>
         )}
      </QuoteAppContainer>
   );
};

export default QuoteApp;
