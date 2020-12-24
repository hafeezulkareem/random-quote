import React from "react";

import { QuoteContainer, QuoteText } from "./styledComponents";

const Quote = () => {
   const quote = `The first rule of any technology used in a business is that
            automation applied to an efficient operation will magnify the
            efficiency. The second is that automation applied to an inefficient
            operation will magnify the inefficiency.`;
   return (
      <QuoteContainer>
         <QuoteText>“{quote}”</QuoteText>
      </QuoteContainer>
   );
};

export default Quote;
