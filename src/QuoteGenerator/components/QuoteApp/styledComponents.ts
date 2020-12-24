import tw, { styled } from "twin.macro";

import { Typo18RalewayEmperorMedium } from "../../../Common/typos";

export const QuoteAppContainer = styled.div`
   ${tw`
        w-screen h-screen
    `}
`;

export const QuotesPageContainer = styled.div`
   ${tw`
        h-full flex flex-col
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
        flex h-full items-center justify-center
    `}
`;
