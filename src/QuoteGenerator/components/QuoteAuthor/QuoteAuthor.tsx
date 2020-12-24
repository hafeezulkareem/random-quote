import React from "react";
import { BsArrowRight } from "react-icons/bs";

import {
   ArrowIconContainer,
   AuthorDetailsContainer,
   AuthorNameText,
   QuoteAuthorContainer,
   QuoteGenreText,
} from "./styledComponents";

interface QuoteAuthorProps {
   authorName: string;
   quoteGenre: string;
}

const QuoteAuthor = (props: QuoteAuthorProps) => {
   const { authorName, quoteGenre } = props;

   return (
      <QuoteAuthorContainer>
         <AuthorDetailsContainer>
            <AuthorNameText>{authorName}</AuthorNameText>
            <QuoteGenreText>{quoteGenre}</QuoteGenreText>
         </AuthorDetailsContainer>
         <ArrowIconContainer>
            <BsArrowRight />
         </ArrowIconContainer>
      </QuoteAuthorContainer>
   );
};

export default QuoteAuthor;
