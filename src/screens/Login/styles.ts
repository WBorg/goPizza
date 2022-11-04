import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'
import {RFValue} from 'react-native-responsive-fontsize'


export const Container = styled(LinearGradient).attrs(({theme})=>({
  colors: theme.COLORS.GRADIENT,
  start:{x:0,y:0},
  end:{x:1,y:1},
}))`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 54px;
  
`;



export const Imagem = styled.Image`

  width: 100%;
  height: ${RFValue(364)}px;

`;

export const Form = styled.View`

  margin-top: 10px;
  

`;

export const Label = styled.Text`
  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: ${RFValue(32)}px;
  color: ${({theme}) => theme.COLORS.TITLE};
  margin-bottom: 23px;

`;

export const ForgotPassword = styled.Text`
  margin-top: 4px;
  color: ${({theme}) => theme.COLORS.TITLE};
  font-family: ${({theme}) => theme.FONTS.TEXT};
  font-size: ${({theme}) => theme.FONTS.TEXT};

`;



  






