import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { AUTHOR_QUOTES } from "../../constants/UIConstants";
import { getAuthorQuotes, updatePage } from "../../reducers/quoteSlice";

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

   const dispatch = useDispatch();

   const getAuthorQuotesList = () => {
      dispatch(updatePage(AUTHOR_QUOTES));
      dispatch(getAuthorQuotes(authorName));
   };

   return (
      <QuoteAuthorContainer onClick={getAuthorQuotesList}>
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
