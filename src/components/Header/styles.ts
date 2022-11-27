import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { RFValue } from 'react-native-responsive-fontsize';





export const BackButton = styled.TouchableOpacity`
  
  border: 1px solid ${({theme})=> theme.COLORS.PRIMARY_100};
  border-radius: 12px;

  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;

  margin-left: 24px;
  margin-top: 25px;
  
  

`;





export const Container = styled(LinearGradient).attrs(({theme})=>({
  colors: theme.COLORS.GRADIENT,
  start:{x:1,y:1},
  end:{x:0,y:0},
}))`
  height: 204px;


`;
export const BackIcon = styled(CaretLeft).attrs(({theme})=>({
  
  size: 20,
  color: theme.COLORS.TITLE
}))`
  
  
  
`;