import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { colors } from "../../../Common/colors";

import { AUTHOR_QUOTES } from "../../constants/UIConstants";
import useHover from "../../hooks/useHover";
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
   const [ref, isHovered] = useHover();
   const { authorName, quoteGenre } = props;

   const dispatch = useDispatch();

   const getAuthorQuotesList = () => {
      dispatch(updatePage(AUTHOR_QUOTES));
      dispatch(getAuthorQuotes(authorName));
   };

   return (
      <QuoteAuthorContainer
         isHovered={isHovered}
         ref={ref}
         onClick={getAuthorQuotesList}
      >
         <AuthorDetailsContainer>
            <AuthorNameText isHovered={isHovered}>{authorName}</AuthorNameText>
            <QuoteGenreText>{quoteGenre}</QuoteGenreText>
         </AuthorDetailsContainer>
         <ArrowIconContainer>
            <BsArrowRight
               size={24}
               color={isHovered ? colors.white : colors.black}
            />
         </ArrowIconContainer>
      </QuoteAuthorContainer>
   );
};

export default QuoteAuthor;
