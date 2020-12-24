import React from "react";

import { QuoteType } from "../../types";

import { QuoteContainer, QuoteText } from "./styledComponents";

interface QuoteProps {
   quote: QuoteType | null;
}

const Quote = (props: QuoteProps) => {
   const { quote } = props;
   return quote ? (
      <QuoteContainer>
         <QuoteText>“{quote.quoteText}”</QuoteText>
      </QuoteContainer>
   ) : null;
};

export default Quote;
