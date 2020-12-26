import tw, { styled } from "twin.macro";

import { Typo14RalewayGray3Medium } from "../../../Common/typos";

export const FooterContainer = styled.div`
   ${tw`
        flex flex-col items-center pb-8
    `}
`;

export const AuthorInfoContainer = styled.div`
   ${tw`
      flex flex-col items-center sm:flex-row sm:justify-center
   `}
`;

export const Link = styled.a`
   ${tw`
      mt-2 sm:mt-0 text-gray20 no-underline
   `}
`;

export const ExtraLink = styled(Link)`
   ${tw`
      ml-2
   `}
`;

export const AuthorInfoText = styled(Typo14RalewayGray3Medium)`
   ${Link}:hover & {
      ${tw`
         text-green-500
      `}
   }
`;
