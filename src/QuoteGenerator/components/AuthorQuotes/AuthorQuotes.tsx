import React from "react";
import { useSelector } from "react-redux";
import { loading, succeeded } from "../../../Common/constants/APIState";

import { RootState } from "../../store";

import Quote from "../Quote";

import { QuotesAuthor, QuotesContainer, QuotesList } from "./styledComponents";

const AuthorQuotes = () => {
   const quotes = useSelector((state: RootState) => state.quotesData.quotes);
   let quotesAuthor: string;
   if (quotes.length) {
      quotesAuthor = quotes[0].quoteAuthor;
   }
   const status = useSelector(
      (state: RootState) => state.quotesData.getAuthorQuotesStatus
   );

   const renderQuotes = () => {
      switch (status) {
         case loading:
            return <div>loading...</div>;
         case succeeded:
            return (
               <>
                  <QuotesAuthor>{quotesAuthor}</QuotesAuthor>
                  <QuotesList>
                     {quotes.map((quote) => (
                        <Quote key={quote.id} quote={quote} />
                     ))}
                  </QuotesList>
               </>
            );
         default:
            return <></>;
      }
   };

   return <QuotesContainer>{renderQuotes()}</QuotesContainer>;
};

export default AuthorQuotes;
