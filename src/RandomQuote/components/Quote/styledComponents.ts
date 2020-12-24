import tw, { styled } from "twin.macro";

import { Typo36BlackRalewayMedium } from "../../../Common/typos";

export const QuoteContainer = styled.div`
   ${tw`
        flex pl-12 md:pl-16 lg:pl-24 border-0 border-l-8 border-solid border-marzipan
    `}
   max-width: 720px;
`;

export const QuoteText = styled(Typo36BlackRalewayMedium)`
   ${tw`
        text-18px md:text-24px lg:text-36px leading-snug
   `}
`;
