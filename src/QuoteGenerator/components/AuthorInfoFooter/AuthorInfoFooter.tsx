import React, { ReactElement } from "react";

import {
   AuthorInfoContainer,
   AuthorInfoText,
   ExtraLink,
   FooterContainer,
   Link,
} from "./styledComponents";

const AuthorInfoFooter = (): ReactElement => {
   return (
      <FooterContainer>
         <AuthorInfoContainer>
            <Link
               href="https://devchallenges.io/profile/dkgdYnckKaYN3fT89MSt"
               target="_blank"
            >
               <AuthorInfoText>Hafeezul Kareem Shaik</AuthorInfoText>
            </Link>
            <ExtraLink href="https://devchallenges.io/" target="_blank">
               <AuthorInfoText>@DevChallenges</AuthorInfoText>
            </ExtraLink>
            <ExtraLink
               href="https://github.com/hafeezulkareem/random-quote"
               target="_blank"
            >
               <AuthorInfoText>Github</AuthorInfoText>
            </ExtraLink>
         </AuthorInfoContainer>
      </FooterContainer>
   );
};

export default AuthorInfoFooter;
