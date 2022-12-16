import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(SafeAreaView)`
    flex: 1; 
    
    `;
    export const PicturePizza = styled.Image`
    width: 240px;
    height: 240px;
    align-self: center;
    margin-top: -120px;
    
  `;

export const Main = styled.View`
  background-color: ${({theme})=> theme.COLORS.BACKGROUND};
  flex: 1;
  padding: 0 24px 18px;
  padding-bottom: 18px;
  

`;

export const Sizes = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;  
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: 32px;
  align-self: center;
  margin-top: 24px;

`
export const Label = styled.Text`
  font-family: ${({theme}) => theme.FONTS.TEXT};
  font-size: 14px;
  margin-top: 46px;

`
export const InfoBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 24px;
`
export const Total = styled.Text`
  font-family: ${({theme}) => theme.FONTS.TEXT};
  font-size: 14px;
  color: ${({theme}) => theme.COLORS.SECONDARY_900};
  align-self: flex-end;
  margin-bottom: 24px;
`

