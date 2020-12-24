import tw, { styled } from "twin.macro";

import {
   Typo14RalewayGray3Medium,
   Typo24EmperorRalewayBold,
} from "../../../Common/typos";

export const QuoteAuthorContainer = styled.div`
   ${tw`
        flex items-center justify-between py-16 px-8 cursor-pointer
    `}
`;

export const AuthorDetailsContainer = styled.div`
   ${tw`
        flex flex-col
    `}
`;

export const AuthorNameText = styled(Typo24EmperorRalewayBold)`
   ${tw`

    `}
`;

export const QuoteGenreText = styled(Typo14RalewayGray3Medium)`
   ${tw`
        mt-2
    `}
`;

export const ArrowIconContainer = styled.div``;
