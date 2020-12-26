import tw, { styled } from "twin.macro";

import { Typo18RalewayEmperorMedium } from "../../../Common/typos";

export const QuoteAppContainer = styled.div``;

export const QuotesPageContainer = styled.div`
   ${tw`
        min-h-screen flex flex-col
    `}
`;

export const QuoteGeneratorButtonContainer = styled.div`
   ${tw`
        flex justify-end mt-8 mr-16
    `}
`;

export const RandomButton = styled.button`
   ${tw`
        flex items-center outline-none border-0 bg-transparent cursor-pointer
    `}
   &:disabled {
      ${tw`
            cursor-not-allowed
        `}
   }
`;

export const RandomButtonText = styled(Typo18RalewayEmperorMedium)`
   ${tw`
        mr-1
    `}
`;

export const QuotesContainer = styled.div`
   ${tw`
        flex flex-col items-center justify-center py-8 my-auto
    `}
`;
