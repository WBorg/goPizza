import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import {logo} from '@assets/brand.png'


export const Container = styled(LinearGradient).attrs(({theme})=>({
  colors: theme.COLORS.GRADIENT,
  start:{x:0,y:0},
  end:{x:1,y:1},
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.COLORS.PRIMARY_50};

`;

export const Imagem = styled(Image).attrs({
  source : {logo}

})`
  

`;




