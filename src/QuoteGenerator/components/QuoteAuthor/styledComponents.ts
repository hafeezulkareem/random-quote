import tw, { styled } from "twin.macro";

import {
   Typo14RalewayGray3Medium,
   Typo24EmperorRalewayBold,
} from "../../../Common/typos";

export const QuoteAuthorContainer = styled.div`
   ${tw`
        flex items-center justify-between mt-8 py-16 px-8 cursor-pointer
    `}
   ${(props: { isHovered: boolean }) =>
      props.isHovered ? tw`bg-gray20` : tw``}
`;

export const AuthorDetailsContainer = styled.div`
   ${tw`
        flex flex-col
    `}
`;

export const AuthorNameText = styled(Typo24EmperorRalewayBold)`
   ${(props: { isHovered: boolean }) =>
      props.isHovered ? tw`text-white` : tw``}
`;

export const QuoteGenreText = styled(Typo14RalewayGray3Medium)`
   ${tw`
        mt-2
    `}
`;

export const ArrowIconContainer = styled.div``;
