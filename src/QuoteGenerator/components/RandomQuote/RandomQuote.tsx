import React from "react";
import { useSelector } from "react-redux";

import { loading, succeeded } from "../../../Common/constants/APIState";

import { RootState } from "../../store";

import Quote from "../Quote";
import QuoteAuthor from "../QuoteAuthor";

import { QuoteWithAuthor } from "./styledComponents";

interface RandomQuoteProps {
   status: string;
}

const RandomQuote = (props: RandomQuoteProps) => {
   const { status } = props;

   const activeQuote = useSelector(
      (state: RootState) => state.quotesData.activeQuote
   );

   switch (status) {
      case loading:
         return <div>loading...</div>;
      case succeeded:
         return (
            <QuoteWithAuthor>
               <Quote quote={activeQuote} />
               <QuoteAuthor
                  authorName={activeQuote ? activeQuote?.quoteAuthor : ""}
                  quoteGenre={activeQuote ? activeQuote?.quoteGenre : ""}
               />
            </QuoteWithAuthor>
         );
      default:
         return <></>;
   }
};

export default RandomQuote;
