import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineRefresh } from "react-icons/hi";

import { idle, loading } from "../../../Common/constants/APIState";

import { RANDOM_QUOTE } from "../../constants/UIConstants";
import { getRandomQuote, updatePage } from "../../reducers/quoteSlice";
import { RootState } from "../../store";

import RandomQuote from "../RandomQuote";
import AuthorQuotes from "../AuthorQuotes";

import {
   QuoteAppContainer,
   QuoteGeneratorButtonContainer,
   QuotesContainer,
   QuotesPageContainer,
   RandomButton,
   RandomButtonText,
} from "./styledComponents";
import AuthorInfoFooter from "../AuthorInfoFooter";

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

   const getRandomAuthorQuote = () => {
      dispatch(updatePage(RANDOM_QUOTE));
      dispatch(getRandomQuote());
   };

   return (
      <QuoteAppContainer>
         <QuotesPageContainer>
            <QuoteGeneratorButtonContainer>
               <RandomButton
                  disabled={getRandomQuoteStatus === loading}
                  onClick={getRandomAuthorQuote}
               >
                  <RandomButtonText>random</RandomButtonText>
                  <HiOutlineRefresh />
               </RandomButton>
            </QuoteGeneratorButtonContainer>
            <QuotesContainer>
               {page === RANDOM_QUOTE ? (
                  <RandomQuote status={getRandomQuoteStatus} />
               ) : (
                  <AuthorQuotes />
               )}
            </QuotesContainer>
            <AuthorInfoFooter />
         </QuotesPageContainer>
      </QuoteAppContainer>
   );
};

export default QuoteApp;
