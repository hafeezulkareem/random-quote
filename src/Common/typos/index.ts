import tw, { styled } from "twin.macro";

const BaseRalewayText = styled.span`
   ${tw`font-raleway`}
`;

const BaseMediumRalewayText = styled(BaseRalewayText)`
   ${tw`font-medium`}
`;

const BaseBoldRalewayText = styled(BaseRalewayText)`
   ${tw`font-bold`}
`;

export const Typo14RalewayGray3Medium = styled(BaseMediumRalewayText)`
   ${tw`
      text-14px text-gray3
   `}
`;

export const Typo18RalewayEmperorMedium = styled(BaseMediumRalewayText)`
   ${tw`
      text-18px text-emperor
   `}
`;

export const Typo24EmperorRalewayBold = styled(BaseBoldRalewayText)`
   ${tw`
      text-24px text-emperor
   `}
`;

export const Typo36BlackRalewayMedium = styled(BaseMediumRalewayText)`
   ${tw`
      text-36px text-black
   `}
`;

export const Typo36Grey20RalewayBold = styled(BaseBoldRalewayText)`
   ${tw`
      text-36px text-gray20
   `}
`;
