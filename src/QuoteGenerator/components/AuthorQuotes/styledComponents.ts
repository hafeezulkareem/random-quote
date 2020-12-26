import tw, { styled } from "twin.macro";

import { Typo24EmperorRalewayBold } from "../../../Common/typos";

export const QuotesContainer = styled.div`
   ${tw`
        flex flex-col
    `}
`;

export const QuotesAuthor = styled(Typo24EmperorRalewayBold)``;

export const QuotesList = styled.div`
   ${tw`
        flex flex-col mt-2
    `}
`;
